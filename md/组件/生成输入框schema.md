## 标题
生成输入框 schema

## 描述

名称： 输入框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“输入框组件生成schema”，你将识别到需要调用增加输入框的API，参数componentName为TinyInput，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.input.create",
    "description": "输入框组件生成schema",
    "params": {
      "componentName": "TinyInput",
      "props": {
        "placeholder": "请输入",
        "modelValue": "",
        "className": "component-base-style"
      },
      "children": [],
      "id": "38523347"
    }
  }
]
```
