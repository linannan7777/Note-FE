**Canvas API**  提供了一个通过JavaScript和HTML的`canvas`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API主要聚焦于2D图形。而同样使用`<canvas>`元素的 `WebGL API` 则用于绘制硬件加速的2D和3D图形。

```html
<canvas id="canvas"></canvas>
```



[`Document.getElementById()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById) 方法获取HTML `<canvas>` 元素的引用。接着，[`HTMLCanvasElement.getContext()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 方法获取这个元素的context——图像稍后将在此被渲染。

由 [`CanvasRenderingContext2D`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D) 接口完成实际的绘制。[`fillStyle`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle) 属性让长方形变成绿色。[`fillRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect) 方法将它的左上角放在(10, 10)，把它的大小设置成宽150高100。.

```
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

[`Document.getElementById()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById) 方法获取HTML `<canvas>` 元素的引用。接着，[`HTMLCanvasElement.getContext()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 方法获取这个元素的context——图像稍后将在此被渲染。

由 [`CanvasRenderingContext2D`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D) 接口完成实际的绘制。[`fillStyle`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle) 属性让长方形变成绿色。[`fillRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect) 方法将它的左上角放在(10, 10)，把它的大小设置成宽150高100。.



[`canvas`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素创造了一个固定大小的画布，它公开了一个或多个**渲染上下文**，其可以用来绘制和处理要展示的内容。我们将会将注意力放在2D渲染上下文中。其他种类的上下文也许提供了不同种类的渲染方式；比如， [WebGL](https://developer.mozilla.org/en-US/docs/Web/WebGL) 使用了基于[OpenGL ES](http://www.khronos.org/opengles/)的3D上下文 ("experimental-webgl") 。

canvas起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。[`canvas`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素有一个叫做 [`getContext()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 的方法，这个方法是用来获得渲染上下文和它的绘画功能。`getContext()`只有一个参数，上下文的格式。对于2D图像而言，如本教程，你可以使用 [`CanvasRenderingContext2D`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)。



不同于 [SVG](https://developer.mozilla.org/zh-CN/docs/Glossary/SVG)，[`canvas`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

首先，我们回到矩形的绘制中。canvas提供了三种方法绘制矩形：

- [`fillRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect)

  绘制一个填充的矩形

- [`strokeRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeRect)

  绘制一个矩形的边框

- [`clearRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)

  清除指定矩形区域，让清除部分完全透明。

## 绘制路径

1. 首先，你需要创建路径起始点。
2. 然后你使用[画图命令](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#Paths)去画出路径。
3. 之后你把路径封闭。
4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

```
beginPath()
```

新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

```
closePath()
```

闭合路径之后图形绘制命令又重新指向到上下文中。

```
stroke()
```

通过线条来绘制图形轮廓。

```
fill()
```

通过填充路径的内容区域生成实心的图形。

```
moveTo(x, y)
```

将笔触移动到指定的坐标x以及y上。

**注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。**

```js
// 绘制三角形
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

```js
// 绘制笑脸
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
    ctx.stroke();
  }
}
```

```
lineTo(x, y)
```

绘制一条从当前位置到指定x以及y位置的直线

```
arc(x, y, radius, startAngle, endAngle, anticlockwise)
```

画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。参数`anticlockwise`为一个布尔值。为true时，是逆时针方向，否则顺时针方向。

**注意：arc()函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式:**

**弧度=(Math.PI/180)\*角度。**

```
arcTo(x1, y1, x2, y2, radius)  // 实现并不是那么的可靠,建议使用arc
```

根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。





```
quadraticCurveTo(cp1x, cp1y, x, y)
```

绘制二次贝塞尔曲线，`cp1x,cp1y`为一个控制点，`x,y为`结束点。

```
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

绘制三次贝塞尔曲线，`cp1x,cp1y`为控制点一，`cp2x,cp2y`为控制点二，`x,y`为结束点。



```
rect(x, y, width, height)
```

绘制一个左上角坐标为（x,y），宽高为width以及height的矩形。当该方法执行的时候，moveTo()方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。



为了简化代码和提高性能，`Path2D`对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。`Path2D()`会返回一个新初始化的Path2D对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含SVG path数据的字符串作为变量）。

```js
new Path2D();     // 空的Path对象
new Path2D(path); // 克隆Path对象
new Path2D(d);    // 从SVG建立Path对象
```

**Path2D.addPath(path [, transform])**

添加了一条路径到当前路径（可能添加了一个变换矩阵）。



`fillStyle = color`设置图形的填充颜色。

`strokeStyle = color`设置图形轮廓的颜色。

`globalAlpha = transparencyValue`这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。

- [`lineCap = type`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)

  设置线条末端样式。

- [`lineJoin = type`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)

  设定线条与线条间接合处的样式。

- [`miterLimit = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)

  限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。

- [`getLineDash()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getLineDash)

  返回一个包含当前虚线样式，长度为非负偶数的数组。

- [`setLineDash(segments)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)

  设置当前虚线样式。

- [`lineDashOffset = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)

  设置虚线样式的起始偏移量。

- [`createLinearGradient(x1, y1, x2, y2)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)

  createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。

- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)

  createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

```js
var lineargradient = ctx.createLinearGradient(0,0,150,150);
var radialgradient = ctx.createRadialGradient(75,75,0,75,75,100);
```

创建出 `canvasGradient` 对象后，我们就可以用 `addColorStop` 方法给它上色了。

- [`gradient.addColorStop(position, color)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasGradient/addColorStop)

  addColorStop 方法接受 2 个参数，`position` 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。`color` 参数必须是一个有效的 CSS 颜色值（如 #FFF， rgba(0,0,0,1)，等等）。