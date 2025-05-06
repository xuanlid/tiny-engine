## 标题
生成表格 schema

## 描述

名称： 表格组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“表格组件生成schema”，你将识别到需要调用增加表格的API，参数componentName为TinyGrid，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.grid.create",
    "description": "表格组件生成schema",
    "params": {
      "componentName": "TinyGrid",
      "props": {
        "editConfig": {
          "trigger": "click",
          "mode": "cell",
          "showStatus": true
        },
        "columns": [
          {
            "type": "index",
            "width": 60
          },
          {
            "type": "selection",
            "width": 60
          },
          {
            "field": "employees",
            "title": "员工数"
          },
          {
            "field": "created_date",
            "title": "创建日期"
          },
          {
            "field": "city",
            "title": "城市"
          }
        ],
        "data": [
          {
            "id": "1",
            "name": "GFD科技有限公司",
            "city": "福州",
            "employees": 800,
            "created_date": "2014-04-30 00:56:00",
            "boole": false
          },
          {
            "id": "2",
            "name": "WWW科技有限公司",
            "city": "深圳",
            "employees": 300,
            "created_date": "2016-07-08 12:36:22",
            "boole": true
          }
        ],
        "className": "component-base-style"
      },
      "children": [],
      "id": "33552433"
    }
  }
]
```
