## 标题
生成走马灯切换联动tab事件 schema

## 描述

名称： 走马灯切换联动tab事件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“走马灯切换联动tab事件生成schema”，你将识别到需要调用走马灯切换联动tab事件的API，props中添加onChange，onChange的中的参数为{  "type": "JSExpression",  "value": "this.onChangeCarousel" }， 给当前tabs添加ref值，props中的ref为“carouselRef”，methods中添加 "onChangeCarousel": { "type": "JSFunction", "value": "function onChangeCarousel(event) {\n  this.state.changeTabName = this.$('carouselRef')?.state.items[event].name\n}\n" } ， 返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.onChangeCarousel.event",
    "description": "走马灯切换联动tab事件schema",
    "params": {
        "componentName": "TinyCarousel",
        "props": {
            "height": "560px",
            "className": "component-base-style",
            "autoplay": false,
            "ref": "carouselRef",
            "show-title": false,
            "onChange": {
                "type": "JSExpression",
                "value": "this.onChangeCarousel"
            }
        }
    },
    "methods": {
        "onChangeCarousel": {
            "type": "JSFunction",
            "value": "function onChangeCarousel(event) {\n  this.state.changeTabName = this.$('carouselRef')?.state.items[event].name\n}\n"
        }
    },
  }
]
```
