## 标题
生成时间线 schema

## 描述

名称： 时间线组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“时间线组件生成schema”，你将识别到需要调用增加时间线的API，参数componentName为TinyTimeLine，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.timeLine.create",
    "description": "时间线组件生成schema",
    "params": {
      "componentName": "TinyTimeLine",
      "props": {
        "active": "2",
        "data": [
          {
            "name": "已下单"
          },
          {
            "name": "运输中"
          },
          {
            "name": "已签收"
          }
        ],
        "className": "component-base-style"
      },
      "children": [],
      "id": "54733821"
    }
  }
]
```
