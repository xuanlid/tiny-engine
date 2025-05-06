## 标题
生成点击跳转事件 schema

## 描述

名称： 点击跳转事件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“点击跳转事件生成schema”，你将识别到需要调用点击跳转事件的API，props中添加onClick，onClick的中的参数为{  "type": "JSExpression",  "value": "this.onClickNew", "params": [ "item" ] }，methods中添加 "onClickNew": {  "type": "JSFunction",  "value": "function onClickNew(eventArgs, item) {\n  console.log(item)\n  window.open(item.link)\n}\n"  }， 返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.onClick.event",
    "description": "点击跳转事件schema",
    "params": {
        "componentName": "div",
        "props": {
            "onClick": {
                "type": "JSExpression",
                "value": "this.onClickNew",
                "params": [
                    "item"
                ]
            }
        }
    },
    "methods": {
        "onClickNew": {
            "type": "JSFunction",
            "value": "function onClickNew(eventArgs, item) {\n  console.log(item)\n  window.open(item.link)\n}\n"
        }
    },
  }
]
```
