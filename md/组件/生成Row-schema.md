## 标题
生成Row schema

## 描述

名称： Row组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“Row组件生成schema”，你将识别到需要调用增加Row的API，参数componentName为TinyRow，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.Row.create",
    "description": "Row组件生成schema",
    "params": {
      "componentName": "TinyRow",
      "props": {
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "TinyCol",
          "props": {
            "span": 3,
            "style": "height: 100%;"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "height: 100%;"
              },
              "id": "13355131"
            }
          ],
          "id": "54258612"
        },
        {
          "componentName": "TinyCol",
          "props": {
            "span": 3,
            "style": "height: 100%;"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "height: 100%;"
              },
              "id": "82323634"
            }
          ],
          "id": "3356436d"
        },
        {
          "componentName": "TinyCol",
          "props": {
            "span": 3,
            "style": "height: 100%;"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "height: 100%;"
              },
              "id": "13685152"
            }
          ],
          "id": "43466294"
        },
        {
          "componentName": "TinyCol",
          "props": {
            "span": 3,
            "style": "height: 100%;"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "height: 100%;"
              },
              "id": "b24f5563"
            }
          ],
          "id": "46215533"
        }
      ],
      "id": "35489455"
    }
  }
]
```
