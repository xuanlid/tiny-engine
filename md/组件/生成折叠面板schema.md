## 标题
生成折叠面板 schema

## 描述

名称： 折叠面板组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“折叠面板组件生成schema”，你将识别到需要调用增加折叠面板的API，参数componentName为TinyCollapse，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.collapse.create",
    "description": "折叠面板组件生成schema",
    "params": {
      "componentName": "TinyCollapse",
      "props": {
        "modelValue": "collapse1",
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "TinyCollapseItem",
          "props": {
            "name": "collapse1",
            "title": "折叠项1"
          },
          "children": [
            {
              "componentName": "div",
              "id": "13666166"
            }
          ],
          "id": "65353254"
        },
        {
          "componentName": "TinyCollapseItem",
          "props": {
            "name": "collapse2",
            "title": "折叠项2"
          },
          "children": [
            {
              "componentName": "div",
              "id": "674b5462"
            }
          ],
          "id": "4525e531"
        },
        {
          "componentName": "TinyCollapseItem",
          "props": {
            "name": "collapse3",
            "title": "折叠项3"
          },
          "children": [
            {
              "componentName": "div",
              "id": "12563322"
            }
          ],
          "id": "b45247c4"
        }
      ],
      "id": "3c312242"
    }
  }
]
```
