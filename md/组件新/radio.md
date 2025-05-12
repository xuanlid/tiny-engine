# TinyVue radio 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## radio 组件生成schema代码示例

### 基本用法

可通过 text 属性设置文本内容， label 属性设置选中值

```json
{
  "componentName": "TinyRadio",
  "props": {
    "label": "1",
    "text": "单选文本",
    "className": "component-base-style"
  },
  "children": [],
  "id": "26723552"
}
```

### 禁用

可通过 disabled 属性设置单选框是否禁用。

```json
{
  "componentName": "TinyRadio",
  "props": {
    "text": "单选文本",
    "className": "component-base-style",
    "label": "1",
    "disabled": true
  },
  "children": [],
  "id": "26723552"
}
```

### 显示边框

可通过 border 属性设置是否显示边框。

```json
{
  "componentName": "TinyRadio",
  "props": {
    "text": "单选文本",
    "className": "component-base-style",
    "label": "1",
    "border": true
  },
  "children": [],
  "id": "26723552"
}
```

### 尺寸

可通过 size 属性设置尺寸大小，可选值：medium / small / mini。

```json
{
  "componentName": "TinyRadio",
  "props": {
    "text": "单选文本",
    "className": "component-base-style",
    "label": "1",
    "size": "medium"
  },
  "children": [],
  "id": "26723552"
}
```

### 原生name属性

可通过 name 属性设置 原生name属性

```json
{
  "componentName": "TinyRadio",
  "props": {
    "text": "单选文本",
    "className": "component-base-style",
    "label": "1",
    "name": "radio"
  },
  "children": [],
  "id": "26723552"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinyRadio",
  "props": {
    "text": "单选文本",
    "className": "component-base-style",
    "label": "1",
    "id": "radio"
  },
  "children": [],
  "id": "26723552"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinyRadio",
  "props": {
    "text": "单选文本",
    "className": "component-base-style",
    "label": "1",
    "ref": "radio"
  },
  "children": [],
  "id": "26723552"
}
```

### 事件

单选框的事件，包括 onChange（值被改变时触发）、onUpdate:modelValue（双向绑定的值改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyRadio",
  "props": {
    "text": "单选文本",
    "className": "component-base-style",
    "label": "1",
    "onUpdate:modelValue": {
      "type": "JSExpression",
      "value": "this.onUpdate_modelValueNew"
    }
  },
  "children": [],
  "id": "26723552"
}
```