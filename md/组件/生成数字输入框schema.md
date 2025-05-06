## 标题
生成数字输入框 schema

## 描述

名称： 数字输入框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“数字输入框组件生成schema”，你将识别到需要调用增加数字输入框的API，参数componentName为TinyNumeric，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.numeric.create",
    "description": "数字输入框组件生成schema",
    "params": {
      "componentName": "TinyNumeric",
      "props": {
        "allow-empty": true,
        "placeholder": "请输入",
        "controlsPosition": "right",
        "step": 1,
        "className": "component-base-style"
      },
      "children": [],
      "id": "16513472"
    }
  }
]
```
