<template>
  <div class="app-center">
    <div class="app-center-title">应用中心</div>
    <div class="app-center-operation">
      <tiny-button class="add-app" @click="creatApp()"> <svg-icon name="add"></svg-icon>创建应用 </tiny-button>
      <div class="app-center-filter">
        <tiny-select v-model="state.appFilter" :options="appFilterList" @change="changeAppFilter"></tiny-select>
        <tiny-select v-model="state.appDateFilter" :options="appDateFilterList" @change="changeAppFilter"></tiny-select>
        <tiny-search
          class="app-center-search"
          v-model="state.appSearchKey"
          clearable
          placeholder="输入关键字搜索、过滤"
        >
          <template #prefix> <tiny-icon-search /> </template>
        </tiny-search>
        <div class="type-toolbar">
          <span
            v-for="item in arrangeList"
            :key="item.id"
            :class="['icon-wrap', { active: state.type === item.id }]"
            @click="typeClick(item.id)"
          >
            <svg-icon :name="item.svgName"></svg-icon>
          </span>
        </div>
      </div>
    </div>
    <div class="app-center-list">
      <div class="list-wrap">
        <div class="list" v-if="state.type === 'default'">
          <template v-for="item in appList" :key="item.id">
            <div class="item">
              <div class="app-name">
                <img class="app-img" :src="item.img" />
                <span class="app-name-text">{{ item.name }}</span>
              </div>
              <div class="app-tag">
                <template v-for="tag in item.tags" :key="tag">
                  <div class="tag">{{ tag }}</div>
                </template>
              </div>
              <div class="app-desc">{{ item.desc }}</div>
              <tiny-popover
                :visible-arrow="false"
                trigger="click"
                placement="bottom-start"
                popper-class="operation-popover"
                ref="popoverRef"
              >
                <template #reference>
                  <div class="app-operation">
                    <svg-icon name="ellipsis"></svg-icon>
                  </div>
                </template>
                <div class="options">
                  <div class="option" @click="handleEdit(item)">编辑应用</div>
                  <div class="option" @click="handleDelete(item)">删除应用</div>
                </div>
              </tiny-popover>
            </div>
          </template>
        </div>
        <tiny-grid ref="gridRef" class="table" v-if="state.type === 'table'" :data="appList">
          <tiny-grid-column field="name" title="应用名称" show-overflow>
            <template #default="data">
              <div class="app-name">
                <img class="app-img" :src="data.row.img" />
                <span>{{ data.row.name }}</span>
              </div>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="createTime" title="创建时间" show-overflow></tiny-grid-column>
          <tiny-grid-column field="author" title="创建人" show-overflow></tiny-grid-column>
          <tiny-grid-column field="desc" title="应用描述" show-overflow></tiny-grid-column>
          <tiny-grid-column width="150" field="operation" title="操作">
            <template #default="data">
              <tiny-button type="text" @click="handleEdit(data.row)"> 编辑 </tiny-button>
              <tiny-button type="text" @click="handleDelete(data.row)"> 删除 </tiny-button>
            </template>
          </tiny-grid-column>
        </tiny-grid>
      </div>
      <tiny-pager
        mode="number"
        :page-size="state.pageSize"
        :page-sizes="state.pageSizes"
        :total="state.total"
      ></tiny-pager>
    </div>
    <app-dialog v-model:visible="state.appVisible" @confirm="confirmApp"></app-dialog>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { Button, Select, Pager, Grid, GridColumn, Popover, Search } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'
import AppDialog from './AppDialog.vue'
export default {
  components: {
    TinyButton: Button,
    TinySelect: Select,
    TinyPager: Pager,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyPopover: Popover,
    TinySearch: Search,
    TinyIconSearch: iconSearch(),
    AppDialog
  },

  setup() {
    const appList = ref([])

    const appFilterList = [
      {
        label: '全部应用',
        value: 'all'
      },
      {
        label: '我的应用',
        value: 'my'
      }
    ]

    const appDateFilterList = [
      {
        label: '按最近更新时间排序',
        value: 'update'
      },
      {
        label: '按创建时间排序',
        value: 'create'
      }
    ]

    const arrangeList = [
      {
        id: 'default',
        name: '栅格',
        svgName: 'grid-list'
      },
      {
        id: 'table',
        name: '列表',
        svgName: 'small-list'
      }
    ]

    const state = reactive({
      appFilter: 'all',
      appDateFilter: 'update',
      appSearchKey: '',
      type: 'default',
      total: 50,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40],
      appVisible: false
    })

    const getList = () => {
      appList.value = [
        {
          id: '1',
          name: 'portal-app',
          img: 'https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg',
          scenarios: '项目管理',
          industry: '互联网',
          frameWork: 'Vue',
          createTime: '2025-10-10',
          author: '张三',
          desc: 'portal网站专用，此处时说明文档说明文档说明文档说明文档说明文档说明文档说明文档说明文档说明文档'
        }
      ].map((item) => ({ ...item, tags: [item.scenarios, item.industry, item.frameWork] }))
    }

    const creatApp = () => {
      state.appVisible = true
    }

    const changeAppFilter = () => {}

    const handleEdit = () => {}

    const handleDelete = () => {}

    const typeClick = (type) => {
      state.type = type
    }

    const confirmApp = () => {
      getList()
    }

    onMounted(() => {
      getList()
    })

    return {
      state,
      appList,
      appFilterList,
      appDateFilterList,
      arrangeList,
      creatApp,
      changeAppFilter,
      typeClick,
      handleEdit,
      handleDelete,
      confirmApp
    }
  }
}
</script>

<style lang="less" scoped>
.app-center {
  padding: 24px;
  background: var(--te-template-common-bg-color);
  height: -webkit-fill-available;
  .app-center-title {
    font-size: 20px;
    font-weight: 600;
  }
  .app-center-operation {
    margin: 24px 0 20px;
    display: flex;
    justify-content: space-between;
  }
  .app-center-filter {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .app-center-search {
    min-width: 300px;
  }
  .type-toolbar {
    display: flex;
    border-radius: 4px;
    background-color: var(--te-template-app-center-btn-bg-color);
    .icon-wrap {
      width: 24px;
      height: 24px;
      color: var(--te-template-app-center-btn-icon-color);
      font-size: 16px;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      &.active {
        border: 1px solid var(--te-template-app-center-btn-border-color-active);
        color: var(--te-template-app-center-btn-color-active);
        border-radius: 4px;
        background-color: var(--te-template-app-center-btn-bg-color-active);
      }
    }
  }
  .app-center-list {
    height: calc(100vh - 200px);
  }
}
.list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  .item {
    width: 252px;
    padding: 24px;
    border-radius: 8px;
    background: var(--te-template-center-common-item-bg-color);
    position: relative;
    .app-name {
      display: flex;
      gap: 8px;
      align-items: center;
      .app-img {
        width: 40px;
        height: 40px;
      }
      .app-name-text {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .app-tag {
      display: flex;
      gap: 4px;
      margin-top: 12px;
      .tag {
        padding: 2px 4px;
        border-radius: 2px;
        background: var(--te-template-center-common-item-tag-bg-color);
      }
    }
    .app-desc {
      margin-top: 12px;
      color: var(--te-template-center-common-item-desc-text-color);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .app-operation {
      display: none;
    }
    &:hover {
      .app-operation {
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background: var(--te-template-center-common-item-operation-bg-color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        top: 16px;
        right: 16px;
      }
    }
  }
}
.table {
  .app-name {
    display: flex;
    gap: 8px;
    align-items: center;
    .app-img {
      width: 24px;
      height: 24px;
    }
  }
}

.list-wrap {
  margin-bottom: 12px;
  max-height: calc(100% - 80px);
  overflow: auto;
}
.options {
  .option {
    padding: 4px 16px;
    cursor: pointer;
    &:hover {
      background: var(--te-template-common-bg-color-hover);
    }
  }
}
</style>
<style lang="less">
.tiny-pager__selector.tiny-popover.tiny-popper[x-placement],
.operation-popover.tiny-popover.tiny-popper[x-placement] {
  padding: 8px 0;
}
</style>
