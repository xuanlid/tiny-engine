# TinyVue input 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## input 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style"
  },
  "children": [],
  "id": "12731335"
}
```

### 一键清空

可通过 clearable 属性设置输入框显示清空图标按钮

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "clearable": true
  },
  "children": [],
  "id": "12731335"
}
```

### 禁用

可通过 disabled 属性设置输入框是否禁用。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "disabled": true
  },
  "children": [],
  "id": "12731335"
}
```

### 类型

通过对应的 type 属性，可以设置为对应的类型。默认为 text，可选值为 text、 textarea 和 password。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "type": "password"
  },
  "children": [],
  "id": "12731335"
}
```

### 行数

通过对应的 rows 属性，可以设置需要的行数。注意： 只在type=="textarea"时有效

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "rows": 0
  },
  "children": [],
  "id": "12731335"
}
```

### 尺寸

可通过 size 属性设置尺寸大小，可选值：medium / small / mini。注意： 只在type!="textarea"时有效。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "size": "medium"
  },
  "children": [],
  "id": "12731335"
}
```

### 最大输入长度

通过对应的 maxlength 属性，可以设置最大输入长度。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "maxlength": 10
  },
  "children": [],
  "id": "65b53a66"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "id": "123"
  },
  "children": [],
  "id": "12731335"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "ref": "input"
  },
  "children": [],
  "id": "12731335"
}
```

### 设置样式

通过对应的 style 属性，可以设置需要的样式。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "style": "width: 100px;"
  },
  "children": [],
  "id": "12731335"
}
```

### 设置文本的绑定值

通过配置对应的 modelValue 属性，modelValue中的value是设置文本的绑定值，取this.state下对应的参数值。

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": {
      "type": "JSExpression",
      "value": "this.state.inputData",
      "model": true
    },
    "style": "width: 100px;"
  },
  "children": [],
  "id": "12731335"
}
```

### 事件

输入框的事件，包括 onChange（值被改变时触发）、onInput（输入值改变时触发）、onUpdate:modelValue（双向绑定的值改变时触发）、onBlur（失去焦点时触发）、onFocus（获得焦点时触发）、onClear（点击清空按钮时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "onUpdate:modelValue": {
      "type": "JSExpression",
      "value": "this.onUpdate_modelValueNew"
    }
  },
  "children": [],
  "id": "52259292"
}
```