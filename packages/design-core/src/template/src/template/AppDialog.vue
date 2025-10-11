<template>
  <tiny-dialog-box :visible="visible" title="新建应用" width="400px" append-to-body @update:visible="setVisible">
    <tiny-form
      ref="deployBlockRef"
      label-position="left"
      label-width="84px"
      label-align
      :model="formState"
      :rules="formRules"
      validate-type="text"
    >
      <tiny-form-item label="应用名称" prop="name">
        <tiny-input v-model="formState.name" placeholder="请输入"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="应用描述" prop="desc">
        <tiny-input v-model="formState.desc" type="textarea" placeholder="请输入此次发布的修改点"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="缩略图" prop="needToSave" class="form-item-save">
        <tiny-input v-model="formState.name" placeholder="请输入X.Y.Z格式版本号，如1.0.0"></tiny-input>
      </tiny-form-item>
    </tiny-form>
    <template #footer>
      <tiny-button type="primary" @click="deployBlock"> 确定 </tiny-button>
      <tiny-button @click="setVisible(false)">取消</tiny-button>
    </template>
  </tiny-dialog-box>
</template>

<script lang="ts">
import { reactive } from 'vue'
import {
  Input as TinyInput,
  Button as TinyButton,
  DialogBox as TinyDialogBox,
  Form as TinyForm,
  FormItem as TinyFormItem
} from '@opentiny/vue'

export default {
  components: {
    TinyInput,
    TinyButton,
    TinyDialogBox,
    TinyForm,
    TinyFormItem
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    template: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, { emit }) {
    const formState = reactive({
      name: '',
      desc: ''
    })

    const setVisible = (visible: boolean) => emit('update:visible', visible)

    return {
      formState,
      setVisible
    }
  }
}
</script>

<style lang="less" scoped>
.app-dialog {
}
</style>
