## 标题
生成弹出编辑 schema

## 描述

名称： 弹出编辑组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“弹出编辑组件生成schema”，你将识别到需要调用增加弹出编辑的API，参数componentName为TinyPopeditor，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.popeditor.create",
    "description": "弹出编辑组件生成schema",
    "params": {
      "componentName": "TinyPopeditor",
      "props": {
        "modelValue": "",
        "placeholder": "请选择",
        "gridOp": {
          "columns": [
            {
              "field": "id",
              "title": "ID",
              "width": 40
            },
            {
              "field": "name",
              "title": "名称",
              "showOverflow": "tooltip"
            },
            {
              "field": "province",
              "title": "省份",
              "width": 80
            },
            {
              "field": "city",
              "title": "城市",
              "width": 80
            }
          ],
          "data": [
            {
              "id": "1",
              "name": "GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司",
              "city": "福州",
              "province": "福建"
            },
            {
              "id": "2",
              "name": "WWW科技有限公司",
              "city": "深圳",
              "province": "广东"
            },
            {
              "id": "3",
              "name": "RFV有限责任公司",
              "city": "中山",
              "province": "广东"
            },
            {
              "id": "4",
              "name": "TGB科技有限公司",
              "city": "龙岩",
              "province": "福建"
            },
            {
              "id": "5",
              "name": "YHN科技有限公司",
              "city": "韶关",
              "province": "广东"
            },
            {
              "id": "6",
              "name": "WSX科技有限公司",
              "city": "黄冈",
              "province": "武汉"
            }
          ]
        },
        "className": "component-base-style"
      },
      "children": [],
      "id": "42646282"
    }
  }
]
```
