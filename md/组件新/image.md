# image 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## image 组件生成schema代码示例

### 基本用法

可通过 src 属性设置要图片地址

```json
{
  "componentName": "Img",
  "props": {
    "src": "https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg",
    "className": "component-base-style"
  },
  "children": [],
  "id": "66415d32"
}
```


### 设置样式

通过对应的 style 属性，可以设置需要的样式。

```json
{
  "componentName": "Img",
  "props": {
    "style": "height: 100px; width: 100px;",
    "src": "https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg",
    "className": "component-base-style"
  },
  "children": [],
  "id": "66415d32"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "Img",
  "props": {
    "src": "https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg",
    "className": "component-base-style",
    "id": "image"
  },
  "children": [],
  "id": "66415d32"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "Img",
  "props": {
    "src": "https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg",
    "className": "component-base-style",
    "ref": "image"
  },
  "children": [],
  "id": "66415d32"
}
```

### 设置图片地址

通过配置对应的 src 属性，src 中的 value 是设置图片地址，取 this.state 下对应的参数值。

```json
{
  "componentName": "Img",
  "props": {
    "src": {
      "type": "JSExpression",
      "value": "this.state.imageurl"
    },
    "className": "component-base-style"
  },
  "children": [],
  "id": "43242326"
}
```

### 事件

图片的事件，包括 onChange（值被改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "Img",
  "props": {
    "src": "https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg",
    "className": "component-base-style",
    "onClick": {
      "type": "JSExpression",
      "value": "this.onClickNew"
    }
  },
  "children": [],
  "id": "19651367"
}
```
 