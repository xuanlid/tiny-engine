<template>
  <div class="template-center">
    <div class="template-center-title">模板中心</div>
    <div class="template-center-operation">
      <tiny-search v-model="state.searchValue" clearable placeholder="输入关键字搜索、过滤">
        <template #prefix> <tiny-icon-search /> </template>
      </tiny-search>
      <div class="template-center-operation-tags">
        <div class="tags-item" v-for="(item, index) in tagList" :key="index">
          <div class="label">{{ item.label }}</div>
          <div class="tags">
            <template v-for="tag in item.tags" :key="tag">
              <div class="tag" :class="{ active: state.tags.includes(tag) }" @click="handleChangeTags(tag)">
                {{ tag }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="template-center-list">
      <div class="list">
        <template v-for="item in templateList" :key="item.id">
          <div class="item" @click="handleClickTemplate(item)">
            <div class="template-img">
              <img :src="item.img" />
            </div>
            <div class="item-content">
              <div class="template-name">
                <span class="template-name-text">{{ item.name }}</span>
              </div>
              <div class="template-desc">{{ item.desc }}</div>
              <div class="template-tag">
                <template v-for="tag in item.tags" :key="tag">
                  <div class="tag">{{ tag }}</div>
                </template>
              </div>
              <div class="template-from">
                {{ item.from }}
              </div>
            </div>
          </div>
        </template>
      </div>
      <tiny-pager
        mode="number"
        :page-size="state.pageSize"
        :page-sizes="state.pageSizes"
        :total="state.total"
      ></tiny-pager>
    </div>
    <template-detail
      v-if="state.templateVisible"
      v-model:visible="state.templateVisible"
      :template="state.currentTemplate"
      :placement="'bottom'"
      height="85vh"
      :mask-closable="false"
    ></template-detail>
  </div>
</template>

<script></script>

<style lang="less" scoped>
.template-center {
  padding: 24px;
  background: var(--te-template-common-bg-color);
  height: -webkit-fill-available;
  .template-center-title {
    font-size: 20px;
    font-weight: 600;
  }
  .template-center-operation {
    margin-top: 24px;
    &-tags {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      .tags-item {
        display: flex;
        align-items: center;
        .label {
          width: 36px;
          margin-right: 30px;
          color: var(--te-template-common-text-color-secondary);
        }
        .tags {
          display: flex;
          gap: 20px;
          .tag {
            padding: 2px 4px;
            border-radius: 2px;
          }
          .active {
            background: var(--te-template-center-common-item-tag-bg-color);
          }
        }
      }
    }
  }
  .template-center-list {
    margin-top: 20px;
    height: calc(100vh - 300px);
    .list {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      margin-bottom: 12px;
      overflow: auto;
      max-height: calc(100% - 80px);
      .item {
        width: 300px;
        border-radius: 8px;
        background: var(--te-template-center-common-item-bg-color);
        position: relative;
        .item-content {
          padding: 16px 20px 20px;
        }
        .template-img {
          width: 100%;
          height: 132px;
          overflow: hidden;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          img {
            width: 100%;
          }
        }
        .template-name {
          display: flex;
          gap: 8px;
          align-items: center;
          .template-name-text {
            font-size: 18px;
            font-weight: 600;
          }
        }
        .template-tag {
          display: flex;
          gap: 4px;
          margin-top: 8px;
          .tag {
            padding: 2px 4px;
            border-radius: 2px;
            background: var(--te-template-center-common-item-tag-bg-color);
          }
        }
        .template-desc {
          margin-top: 8px;
          color: var(--te-template-center-common-item-desc-text-color);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .template-from {
          margin-top: 16px;
          color: var(--te-template-center-common-item-from-text-color);
        }
      }
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
