# TinyVue carousel 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## carousel 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 箭头显示时机

通过对应的 arrow 属性，可以设置切换箭头的显示效果。默认值为 hover， 可选值为 always 、 hover 和 never。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "arrow": "always"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 自动切换

通过对应的 autoplay 属性，可以设置是否自动切换。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "autoplay": true
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 高度

通过对应的 height 属性，可以设置走马灯的高度。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 指示器位置

通过对应的 indicator-position 属性，可以设置指示器位置。可选值为 outside 和 none。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "indicator-position": "outside"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 初始索引

通过对应的 initial-index 属性，可以设置初始状态激活的幻灯片的索引。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "initial-index": 0
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 自动切换间隔

通过对应的 interval 属性，可以设置自动切换的时间间隔，单位为毫秒。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "interval": 5000
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 循环显示

通过对应的 loop 属性，可以设置是否循环显示。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "loop": true
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 显示标题

通过对应的 show-title 属性，可以设置是否显示标题。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "show-title": true
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 指示器的触发方式

通过对应的 trigger 属性，可以设置指示器的触发方式。默认值为 hover，可选值为 hover 和 click。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "trigger": "hover"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 走马灯类型

通过对应的 type 属性，可以设置走马灯的类型。默认值为 horizontal，可选值为 horizontal 、 vertical 和 card。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "type": "card"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 新增标签页

通过对应的 children 属性，在 children 下新增一个子组件 TinyCarouselItem

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "f3516e65"
        }
      ],
      "id": "3298e385"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "24b46334"
        }
      ],
      "id": "62357434"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "选项卡",
        "name": "365453a5"
      },
      "children": [
        {
          "componentName": "div",
          "id": "2a654633"
        }
      ],
      "id": "62545365"
    }
  ],
  "id": "9136dc51"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "id": "carousel"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "ref": "carousel"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 事件

走马灯的事件，包括 onChange（值被改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style",
    "onClick": {
      "type": "JSExpression",
      "value": "this.onClickNew"
    }
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```

### 设置TinyTabItem对应的属性

componentName 为 TinyCarouselItem 的组件， 通过对应的 title 属性，可以设置标题。 通过对应的 name 属性，可以设置唯一标识， 通过对应的 indicator-position 属性，可以设置指示器位置。可选值为 outside 和 none。

```json
{
  "componentName": "TinyCarousel",
  "props": {
    "height": "180px",
    "className": "component-base-style"
  },
  "children": [
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-a",
        "name": "first",
        "indicator-position": "outside"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "614d4146"
        }
      ],
      "id": "2366c336"
    },
    {
      "componentName": "TinyCarouselItem",
      "props": {
        "title": "carousel-item-b"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "1732256d"
        }
      ],
      "id": "442457ef"
    }
  ],
  "id": "231c8a63"
}
```
