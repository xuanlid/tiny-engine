<template>
  <tiny-dialog-box
    :visible="visible"
    title="新建应用"
    width="400px"
    append-to-body
    destroy-on-close
    @update:visible="setVisible"
  >
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
      <tiny-form-item label="场景" prop="scenarios">
        <tiny-select
          v-model="formState.scenarios"
          placeholder="请选择"
          :options="scenariosOptions"
          :disabled="isDisabled"
        ></tiny-select>
      </tiny-form-item>
      <tiny-form-item label="行业" prop="industry">
        <tiny-select
          v-model="formState.industry"
          placeholder="请选择"
          :options="industryOptions"
          :disabled="isDisabled"
        ></tiny-select>
      </tiny-form-item>
      <tiny-form-item label="缩略图">
        <div class="form-item-icon-wrapper">
          <svg-icon :name="formState.icon" class="form-item-icon" @click="handleOpen"></svg-icon>
          <transition name="dropdown">
            <div v-if="isOpen" class="dropdown-menu">
              <!-- 菜单项 -->
              <div class="icon-list">
                <template v-for="icon in iconList" :key="icon">
                  <svg-icon :name="icon" class="icon" @click="handleSelectIcon(icon)"></svg-icon>
                </template>
              </div>
            </div>
          </transition>
        </div>
      </tiny-form-item>
    </tiny-form>
    <template #footer>
      <tiny-button type="primary" @click="confirm"> 确定 </tiny-button>
      <tiny-button @click="setVisible(false)">取消</tiny-button>
    </template>
  </tiny-dialog-box>
</template>

<script lang="ts">
import { ref, reactive, computed } from 'vue'
import {
  Input as TinyInput,
  Button as TinyButton,
  DialogBox as TinyDialogBox,
  Form as TinyForm,
  FormItem as TinyFormItem,
  Select as TinySelect
} from '@opentiny/vue'

export default {
  components: {
    TinyInput,
    TinyButton,
    TinyDialogBox,
    TinyForm,
    TinyFormItem,
    TinySelect
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
      desc: '',
      scenarios: props.template.scenarios || '',
      industry: props.template.industry || '',
      icon: 'delete'
    })

    const isOpen = ref(false)

    const iconList = ['edit', 'delete', 'delete', 'delete', 'delete', 'delete', 'delete']
    const scenariosOptions = [
      {
        value: '人事行政',
        label: '人事行政'
      },
      {
        value: '项目管理',
        label: '项目管理'
      },
      {
        value: '采购管理',
        label: '采购管理'
      },
      {
        value: '财务报销',
        label: '财务报销'
      },
      {
        value: '设备巡检',
        label: '设备巡检'
      },
      {
        value: '工单售后',
        label: '工单售后'
      }
    ]
    const industryOptions = [
      {
        value: '互联网',
        label: '互联网'
      },
      {
        value: '制造业',
        label: '制造业'
      },
      {
        value: '教育行业',
        label: '教育行业'
      },
      {
        value: '贸易零售',
        label: '贸易零售'
      },
      {
        value: '建筑行业',
        label: '建筑行业'
      },
      {
        value: '政府机构',
        label: '政府机构'
      },
      {
        value: '服务培训',
        label: '服务培训'
      }
    ]

    const isDisabled = computed(() => Object.keys(props.template).length)

    const setVisible = (visible: boolean) => emit('update:visible', visible)

    const handleOpen = () => {
      isOpen.value = true
    }

    const handleSelectIcon = (icon: string) => {
      formState.icon = icon
      isOpen.value = false
    }

    const confirm = () => {
      emit('confirm', formState)
      setVisible(false)
    }

    return {
      isOpen,
      formState,
      iconList,
      scenariosOptions,
      industryOptions,
      isDisabled,
      setVisible,
      handleOpen,
      handleSelectIcon,
      confirm
    }
  }
}
</script>

<style lang="less" scoped>
.app-dialog {
}
.form-item-icon-wrapper {
  position: relative;
  .form-item-icon {
    font-size: 40px;
    cursor: pointer;
  }
  .dropdown-menu {
    position: absolute;
    bottom: 100%;
    left: 0;
    padding: 16px;
    margin-bottom: 5px;
    width: 216px;
    border-radius: 4px;
    z-index: 1000;
    overflow: hidden;
    background: var(--te-template-common-bg-color);
    box-shadow: 0 4px 16px 0 var(--te-base-box-shadow-rgba-3);

    .icon-list {
      width: 184px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 4px 0;
      .icon {
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
