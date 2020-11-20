Internet Explorer 10、Firefox 以及 Opera 支持 @keyframes 规则和 animation 属性。

Chrome 和 Safari 需要前缀 -webkit-。

**注释：**Internet Explorer 9，以及更早的版本，不支持 @keyframe 规则或 animation 属性。

通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：

- 规定动画的名称
- 规定动画的时长

### 实例

把 "myfirst" 动画捆绑到 div 元素，时长：5 秒：

```css
div
{
animation: myfirst 5s;
-moz-animation: myfirst 5s;	/* Firefox */
-webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
-o-animation: myfirst 5s;	/* Opera */
}
@keyframes myfirst
{
from {background: red;}
to {background: yellow;}
}

@-moz-keyframes myfirst /* Firefox */
{
from {background: red;}
to {background: yellow;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
from {background: red;}
to {background: yellow;}
}

@-o-keyframes myfirst /* Opera */
{
from {background: red;}
to {background: yellow;}
}
```

**注释：**您必须定义动画的名称和时长。如果忽略时长，则动画不会允许，因为默认值是 0。

## 什么是 CSS3 中的动画？

动画是使元素从一种样式逐渐变化为另一种样式的效果。

您可以改变任意多的样式任意多的次数。

请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

0% 是动画的开始，100% 是动画的完成。

为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。



表格列出了 @keyframes 规则和所有动画属性：

| 属性                      | 描述                                                         | CSS  |
| :------------------------ | :----------------------------------------------------------- | :--- |
| @keyframes                | 规定动画。                                                   | 3    |
| animation                 | 所有动画属性的简写属性。简写顺序是animation-name、animation-duration、animation-timing-function、animation-delay、animation-iteration-count、animation-direction、animation-fill-mode、animation-play-state | 3    |
| animation-name            | 规定 @keyframes 动画的名称。默认是"none"                     | 3    |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。             | 3    |
| animation-timing-function | 规定动画的速度曲线。默认是 "ease"。                          | 3    |
| animation-delay           | 规定动画何时开始。默认是 0。                                 | 3    |
| animation-iteration-count | 规定动画被播放的次数。默认是 1。值为n或infinite              | 3    |
| animation-direction       | 规定动画是否在下一周期逆向地播放。默认是 "normal"。          | 3    |
| animation-play-state      | 规定动画是否正在运行或暂停。默认是 "running"。               | 3    |
| animation-fill-mode       | 规定对象动画时间之外的状态。                                 | 3    |

### @keyframes 规则

```
@keyframes animationname {keyframes-selector {css-styles;}}
```

| 值                   | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| *animationname*      | 必需。定义动画的名称。                                       |
| *keyframes-selector* | 必需。动画时长的百分比。合法的值：0-100%from（与 0% 相同）to（与 100% 相同） |
| *css-styles*         | 必需。一个或多个合法的 CSS 样式属性。                        |



animation-timing-function 使用名为三次贝塞尔（Cubic Bezier）函数的数学函数，来生成速度曲线。您能够在该函数中使用自己的值，也可以预定义的值：

| 值                            | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| linear                        | 动画从头到尾的速度是相同的。                                 |
| ease                          | 默认。动画以低速开始，然后加快，在结束前变慢。               |
| ease-in                       | 动画以低速开始。                                             |
| ease-out                      | 动画以低速结束。                                             |
| ease-in-out                   | 动画以低速开始和结束。                                       |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。 |



animation-direction 属性定义是否应该轮流反向播放动画。

默认值是"normal",如果 animation-direction 值是 "alternate"，则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）向后播放。

**注释：**如果把动画设置为只播放一次，则该属性没有效果。





animation-play-state 属性规定动画正在运行还是暂停。

**注释：**您可以在 JavaScript 中使用该属性，这样就能在播放过程中暂停动画。

```javascript
object.style.animationPlayState="paused" // js语法
```

```css
animation-play-state: paused|running;  
/* css语法 paused:规定动画已暂停。running:规定动画正在播放。 */
```





## CSS 语法

```css
animation-fill-mode: none|forwards|backwards|both|initial|inherit;
```

## 属性值

| 值        | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| none      | 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。 |
| forwards  | 在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。 |
| backwards | 动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 "normal" 或 "alternate" 时）或 to 关键帧中的值（当 animation-direction 为 "reverse" 或 "alternate-reverse" 时）。 |
| both      | 动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。 |