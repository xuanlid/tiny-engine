## 标题
生成树 schema

## 描述

名称： 树组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“树组件生成schema”，你将识别到需要调用增加树的API，参数componentName为TinyTree，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.tree.create",
    "description": "树组件生成schema",
    "params": {
      "componentName": "TinyTree",
      "props": {
        "data": [
          {
            "label": "一级 1",
            "children": [
              {
                "label": "二级 1-1",
                "children": [
                  {
                    "label": "三级 1-1-1"
                  }
                ]
              }
            ]
          },
          {
            "label": "一级 2",
            "children": [
              {
                "label": "二级 2-1",
                "children": [
                  {
                    "label": "三级 2-1-1"
                  }
                ]
              },
              {
                "label": "二级 2-2",
                "children": [
                  {
                    "label": "三级 2-2-1"
                  }
                ]
              }
            ]
          }
        ],
        "className": "component-base-style"
      },
      "children": [],
      "id": "63266c66"
    }
  }
]
```
