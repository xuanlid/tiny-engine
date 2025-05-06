## 标题
生成搜索框 schema

## 描述

名称： 搜索框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“搜索框组件生成schema”，你将识别到需要调用增加搜索框的API，参数componentName为TinySearch，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.search.create",
    "description": "搜索框组件生成schema",
    "params": {
      "componentName": "TinySearch",
      "props": {
        "modelValue": "",
        "placeholder": "输入关键词",
        "className": "component-base-style"
      },
      "children": [],
      "id": "36852522"
    }
  }
]
```
