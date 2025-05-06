## 标题
生成标签页绑定循环数据 schema

## 描述

名称： 标签页绑定循环数据生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“生成标签页绑定循环数据schema”，你将识别到需要调用增加标签页绑定循环数据的API，参数componentName为TinyTabItem，loop中参数为 { "type": "JSExpression", "value": "this.state.list1" }, loopArgs中参数为 [ "item", "index" ]，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.input.create",
    "description": "输入框组件生成schema",
    "params": {
      "componentName": "TinyTabItem",
      "props": {
        "title": "精选推荐",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin: 10px 0 0 30px;"
          },
          "id": "66125424",
          "children": [
            {
              "componentName": "CanvasFlexBox",
              "props": {
                "flexDirection": "row",
                "gap": "16px",
                "padding": "8px",
                "style": "flex-wrap: wrap;"
              },
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "className": " card",
                    "onClick": {
                      "type": "JSExpression",
                      "value": "this.onClickNew",
                      "params": [
                        "item"
                      ]
                    }
                  },
                  "children": [
                    {
                      "componentName": "div",
                      "props": {
                        "className": "component-base-style"
                      },
                      "children": [
                        {
                          "componentName": "Img",
                          "props": {
                            "src": {
                              "type": "JSExpression",
                              "value": "item.img"
                            },
                            "className": " card-img"
                          },
                          "children": [],
                          "id": "23644452"
                        }
                      ],
                      "id": "64316523"
                    },
                    {
                      "componentName": "div",
                      "props": {
                        "className": "component-base-style"
                      },
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": {
                              "type": "JSExpression",
                              "value": "item.title"
                            },
                            "className": " card-title"
                          },
                          "children": [],
                          "id": "3143f962"
                        }
                      ],
                      "id": "65634635"
                    },
                    {
                      "componentName": "div",
                      "props": {
                        "className": "component-base-style"
                      },
                      "children": [
                        {
                          "componentName": "Text",
                          "props": {
                            "text": {
                              "type": "JSExpression",
                              "value": "item.desc"
                            },
                            "className": " card-desc"
                          },
                          "children": [],
                          "id": "24661e55"
                        }
                      ],
                      "id": "a4256246"
                    }
                  ],
                  "id": "5535222d",
                  "loop": {
                    "type": "JSExpression",
                    "value": "this.state.list1"
                  },
                  "loopArgs": [
                    "item",
                    "index"
                  ]
                }
              ],
              "id": "43311145"
            }
          ]
        }
      ],
      "id": "e2453f24"
    }
  }
]
```
