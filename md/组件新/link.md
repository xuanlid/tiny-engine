# 链接 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## 链接 组件生成schema代码示例

### 基本用法

可配置 children 来展示对应的链接文本

```json
{
  "componentName": "a",
  "children": "链接",
  "props": {
    "className": "component-base-style"
  },
  "id": "4542555a"
}
```

### 链接地址

通过配置对应的 href 属性，设置跳转地址。

```json
{
  "componentName": "a",
  "children": "链接",
  "props": {
    "className": "component-base-style",
    "href": "https://www.huaweicloud.com/"
  },
  "id": "4542555a"
}
```

### 打开方式

可通过 target 属性设置打开方式。默认值为_self（当前页面），可选值：_self（当前页面）和 _blank（打开新页面）。

```json
{
  "componentName": "a",
  "children": "链接",
  "props": {
    "className": "component-base-style",
    "href": "https://www.huaweicloud.com/",
    "target": "_self"
  },
  "id": "4542555a"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "a",
  "children": "链接",
  "props": {
    "className": "component-base-style",
    "href": "https://www.huaweicloud.com/",
    "id": "link"
  },
  "id": "4542555a"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "a",
  "children": "链接",
  "props": {
    "className": "component-base-style",
    "href": "https://www.huaweicloud.com/",
    "ref": "link"
  },
  "id": "4542555a"
}
```