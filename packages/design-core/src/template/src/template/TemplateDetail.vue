<template>
  <tiny-drawer :visible="visible" title="模板详情" :placement="placement" :height="height" @update:visible="setVisible">
    <div class="template-detail">
      <div class="template-detail-info">
        <div class="template-detail-name">
          <img class="template-detail-img" :src="template.img" />
          <span class="template-detail-name-text">{{ template.name }}</span>
        </div>
        <div class="template-detail-desc">{{ template.desc }}</div>
        <div class="template-detail-tag">
          <template v-for="tag in template.tags" :key="tag">
            <div class="tag">{{ tag }}</div>
          </template>
        </div>
        <div class="template-detail-from">
          {{ template.from }}
        </div>
        <tiny-button type="primary" class="create-app-btn" @click="createApp">用此模板创建应用</tiny-button>
      </div>
      <div class="template-detail-preview">
        <div class="template-detail-preview-title">预览体验</div>
        <div class="template-detail-preview-content">预览页面</div>
      </div>
    </div>
    <app-dialog v-model:visible="state.appVisible" :template="template"></app-dialog>
  </tiny-drawer>
</template>
<script lang="ts">
import { reactive, onMounted } from 'vue'
import { Button, Drawer } from '@opentiny/vue'
import AppDialog from './AppDialog.vue'

export default {
  components: {
    TinyButton: Button,
    TinyDrawer: Drawer,
    AppDialog
  },
  props: {
    template: {
      type: String,
      default: ''
    }
  },

  setup(props, { emit }) {
    const state = reactive({
      appVisible: false
    })

    onMounted(() => {})

    const setVisible = (visible: boolean) => emit('update:visible', visible)

    const createApp = () => {
      state.appVisible = true
    }

    return {
      state,
      setVisible,
      createApp
    }
  }
}
</script>

<style lang="less" scoped>
.template-detail {
  display: flex;
  gap: 60px;
  .template-detail-info {
    width: 200px;
    .template-detail-name {
      display: flex;
      gap: 8px;
      align-items: center;
      .template-detail-img {
        width: 40px;
        height: 40px;
      }
      .template-detail-name-text {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .template-detail-tag {
      display: flex;
      gap: 4px;
      margin-top: 12px;
      .tag {
        padding: 2px 4px;
        border-radius: 2px;
        background: var(--te-template-center-common-item-tag-bg-color);
      }
    }
    .template-detail-desc {
      margin-top: 12px;
      color: var(--te-template-center-common-item-desc-text-color);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .template-detail-from {
      margin-top: 16px;
      color: var(--te-template-center-common-item-from-text-color);
    }
    .create-app-btn {
      margin-top: 50px;
      padding: 5px 24px;
    }
  }
  .template-detail-preview {
    &-title {
      font-size: 16px;
    }
    &-content {
      margin-top: 20px;
      padding: 18px 30px;
    }
  }
}
</style>
