[TOC]

## 1、什么是重排重绘，如何避免

- 重排(Reflow)：元素的位置发生变动时发生重排，也叫回流。此时在关键渲染路径中的 Layout 阶段，计算每一个元素在设备视口内的确切位置和大小。当一个元素位置发生变化时，其父元素及其后边的元素位置都可能发生变化，代价极高
- 重绘(Repaint): 元素的样式发生变动，但是位置没有改变。此时在关键渲染路径中的 Paint 阶段，将渲染树中的每个节点转换成屏幕上的实际像素，这一步通常称为绘制或栅格化

另外，重排必定会造成重绘。以下是避免过多重拍重绘的方法

1. 使用 `DocumentFragment` 进行 DOM 操作，不过现在原生操作很少也基本上用不到
2. CSS 样式尽量批量修改
3. 避免使用 table 布局
4. 为元素提前设置好高宽，不因多次渲染改变位置

## 2、元素水平垂直居中方案

- 定位(3种)
- flex布局
- grid布局
- display: table-cell
- js方案 同定位思想

```
// html
<div class="box">
  <div class="item"></div>
</div>
/*   定位 */
.box{
  background: #000;
  height: 300px;
  position:relative;
}
.item{
  width:100px;
  height:100px;
  background: red;
  position: absolute;
  left: 50%;
  top: 50%;
  /*   定位1：margin-left、margin-top元素宽高一半  */
  margin-left: -50px;
  margin-top: -50px;
  
  /* css3 translate移动解决   */
  transform: translate(-50%, -50%);
  
  
  /*  margin:auto */
  position:absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;
  margin: auto;
}
/* flex 布局 */
.box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  }
/*  grid布局  */
.box{
  display: grid;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  }
.box{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.item {
    display: inline-block;
}
```

## 3、css3 盒模型

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。 box-sizing 属性允许您以特定的方式定义匹配某个区域的特定元素。

```
box-sizing: content-box; //宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。

box-sizing: border-box; // 为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

box-sizing: inherit; // 规定应从父元素继承 box-sizing 属性的值。
```

content-box指定盒子模型为W3C（标准盒模型）， border-box为IE盒子模型（怪异盒模型）。

flex盒模型

多列布局 grid