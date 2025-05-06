## 标题
生成日期选择器 schema

## 描述

名称： 日期选择器组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“日期选择器组件生成schema”，你将识别到需要调用增加日期选择器的API，参数componentName为TinyDatePicker，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.input.create",
    "description": "日期选择器组件生成schema",
    "params": {
      "componentName": "TinyDatePicker",
      "props": {
        "placeholder": "请输入",
        "modelValue": "",
        "className": "component-base-style"
      },
      "children": [],
      "id": "4541f225"
    }
  }
]
```
