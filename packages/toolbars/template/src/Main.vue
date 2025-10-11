<template>
  <div class="toolbar-template">
    <toolbar-base content="模板中心" :icon="options.icon.default || options.icon" :options="options" trigger="click">
      <template #button>
        <div class="toolbar-template-item">
          <span @click="goTo('app')">应用中心</span>
          <span @click="goTo('template')">模板中心</span>
        </div>
      </template>
    </toolbar-base>
  </div>
</template>

<script lang="ts">
/* metaService: engine.toolbars.template.Main */
import { reactive } from 'vue'
import { ToolbarBase } from '@opentiny/tiny-engine-common'
import { goTemplate } from './js/index'

export default {
  components: {
    ToolbarBase
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const state = reactive({
      code: '',
      originalCode: '',
      checked: false,
      timeValue: 5,
      preservationTime: null
    })
    const goTo = (type) => {
      goTemplate(type)
    }

    return {
      state,
      goTo
    }
  }
}
</script>

<style lang="less" scoped>
.toolbar-template {
  padding-left: 12px;
}

.toolbar-template-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  span {
    cursor: pointer;
  }
}
</style>
