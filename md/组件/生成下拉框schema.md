## 标题
生成下拉框 schema

## 描述

名称： 下拉框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“下拉框组件生成schema”，你将识别到需要调用增加下拉框的API，参数componentName为TinySelect，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.select.create",
    "description": "下拉框组件生成schema",
    "params": {
      "componentName": "TinySelect",
      "props": {
        "modelValue": "",
        "placeholder": "请选择",
        "options": [
          {
            "value": "1",
            "label": "黄金糕"
          },
          {
            "value": "2",
            "label": "双皮奶"
          }
        ],
        "className": "component-base-style"
      },
      "children": [],
      "id": "2a246631"
    }
  }
]
```
