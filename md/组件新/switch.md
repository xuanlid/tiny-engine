# TinyVue switch 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## switch 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "TinySwitch",
  "props": {
    "modelValue": "",
    "className": "component-base-style"
  },
  "children": [],
  "id": "e2642249"
}
```


### 禁用

可通过 disabled 属性设置开关是否禁用。

```json
{
  "componentName": "TinySwitch",
  "props": {
    "modelValue": "",
    "className": "component-base-style",
    "disabled": true
  },
  "children": [],
  "id": "e2642249"
}
```


### 自定义开关取值

通过 true-value 属性设置打开值。

```json
{
  "componentName": "TinySwitch",
  "props": {
    "modelValue": "",
    "className": "component-base-style",
    "true-value": "yes"
  },
  "children": [],
  "id": "e2642249"
  }
```

通过 false-value 属性设置关闭值。

```json
{
  "componentName": "TinySwitch",
  "props": {
    "modelValue": "",
    "className": "component-base-style",
    "false-value": "no"
  },
  "children": [],
  "id": "e2642249"
}
```

### 迷你尺寸

可通过 mini 属性设置小尺寸开关。

```json
{
  "componentName": "TinySwitch",
  "props": {
    "modelValue": "",
    "className": "component-base-style",
    "mini": true
  },
  "children": [],
  "id": "4475a714"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinySwitch",
  "props": {
    "modelValue": "",
    "className": "component-base-style",
    "id": "switch"
  },
  "children": [],
  "id": "4475a714"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinySwitch",
  "props": {
    "modelValue": "",
    "className": "component-base-style",
    "id": "switch"
  },
  "children": [],
  "ref": "4475a714"
}
```

### 事件

开关的事件，包括 onChange（值被改变时触发）、onUpdate:modelValue（双向绑定的值改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "onUpdate:modelValue": {
      "type": "JSExpression",
      "value": "this.onUpdate_modelValueNew"
    }
  },
  "children": [],
  "id": "e4636442"
}
```