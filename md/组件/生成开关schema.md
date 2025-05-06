## 标题
生成开关 schema

## 描述

名称： 开关组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“开关组件生成schema”，你将识别到需要调用增加开关的API，参数componentName为TinySwitch，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.switch.create",
    "description": "开关组件生成schema",
    "params": {
      "componentName": "TinySwitch",
      "props": {
        "modelValue": "",
        "className": "component-base-style"
      },
      "children": [],
      "id": "46211623"
    }
  }
]
```
