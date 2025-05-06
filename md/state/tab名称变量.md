## 标题
生成tab名称变量 schema

## 描述

名称： tab名称变量生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“tab名称变量生成 schema”，你将识别到需要调用增加tab名称变量的API，参数params中state下的changeTabName为“first”，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.changeTabName.state",
    "description": "tab名称变量schema",
    "params": {
        "state": {
            "changeTabName": "first"
        }
    }
  }
]
```
