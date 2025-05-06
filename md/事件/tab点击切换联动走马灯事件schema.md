## 标题
生成tab点击切换联动走马灯事件 schema

## 描述

名称： tab点击切换联动走马灯事件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“tab点击切换联动走马灯事件生成schema”，你将识别到需要调用tab点击切换联动走马灯事件的API，props中添加onClick，onClick的中的参数为{  "type": "JSExpression",  "value": "this.onClickTab" }，props中的modelValue为{ "type": "JSExpression", "value": "this.state.changeTabName" }， 给当前tabs添加ref值，props中的ref为“tabsRef”，methods中添加 "onClickTab": {  "type": "JSFunction", "value": "function onClickTab(event) {\n  this.$('carouselRef').setActiveItem(event.name)\n}\n" } ， 返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.onClickTab.event",
    "description": "tab点击切换联动走马灯事件schema",
    "params": {
        "componentName": "TinyTabs",
        "props": {
            "modelValue": {
                "type": "JSExpression",
                "value": "this.state.changeTabName"
            },
            "onClick": {
                "type": "JSExpression",
                "value": "this.onClickTab"
            },
            "style": "display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%;",
            "ref": "tabsRef"
        }
    },
    "methods": {
        "onClickTab": {
            "type": "JSFunction",
            "value": "function onClickTab(event) {\n  this.$('carouselRef').setActiveItem(event.name)\n}\n"
        }
    },
  }
]
```
