## 标题
生成分割线 schema

## 描述

名称： 分割线生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“分割线生成schema”，你将识别到需要调用增加分割线的API，参数componentName为hr，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.hr.create",
    "description": "分割线生成schema",
    "params": {
      "componentName": "hr",
      "props": {
        "className": "component-base-style"
      },
      "children": [],
      "id": "61262442"
    }
  }
]
```
