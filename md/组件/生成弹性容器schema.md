## 标题
生成弹性容器 schema

## 描述

名称： 弹性容器生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“弹性容器生成schema”，你将识别到需要调用增加弹性容器的API，参数componentName为CanvasFlexBox，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.flexBox.create",
    "description": "弹性容器生成schema",
    "params": {
      "componentName": "CanvasFlexBox",
      "props": {
        "flexDirection": "row",
        "gap": "8px",
        "padding": "8px",
        "className": "component-base-style"
      },
      "children": [],
      "id": "93b62956"
    }
  }
]
```
