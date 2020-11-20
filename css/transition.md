CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。

要实现这一点，必须规定两项内容：

- 规定您希望把效果添加到哪个 CSS 属性上
- 规定效果的时长

### 实例

应用于宽度属性的过渡效果，时长为 2 秒：

```
div
{
transition: width 2s;
-moz-transition: width 2s;	/* Firefox 4 */
-webkit-transition: width 2s;	/* Safari 和 Chrome */
-o-transition: width 2s;	/* Opera */
}
```

**注释：**如果时长未规定，则不会有过渡效果，因为默认值是 0。

效果开始于指定的 CSS 属性改变值时。CSS 属性改变的典型时间是鼠标指针位于元素上时：

### 实例

规定当鼠标指针悬浮于 <div> 元素上时：

```
div:hover
{
width:300px;
}
```

## 多项改变

如需向多个样式添加过渡效果，请添加多个属性，由逗号隔开：

### 实例

向宽度、高度和转换添加过渡效果：

```
div
{
transition: width 2s, height 2s, transform 2s;
-moz-transition: width 2s, height 2s, -moz-transform 2s;
-webkit-transition: width 2s, height 2s, -webkit-transform 2s;
-o-transition: width 2s, height 2s,-o-transform 2s;
}
```

## 过渡属性

下面的表格列出了所有的转换属性：

| 属性                       | 描述                                                         | CSS  |
| :------------------------- | :----------------------------------------------------------- | :--- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。                 | 3    |
| transition-property        | 规定应用过渡的 CSS 属性的名称。none:没有属性会获得过渡效果;all:所有属性都将获得过渡效果。*property*:定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。 | 3    |
| transition-duration        | 定义过渡效果花费的时间。默认是 0。                           | 3    |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。                      | 3    |
| transition-delay           | 规定过渡效果何时开始。默认是 0。                             | 3    |