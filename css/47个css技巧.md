# [半透明边框](https://lhammer.cn/You-need-to-know-css/#/zh-cn/translucent-borders?id=半透明边框)

背景知识： [background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

默认情况下，背景的颜色会延伸至边框下层，这意味着我们设置的透明边框效果会被覆盖掉，在css3中，我们可以通过设置`background-clip:padding-box`来改变背景的默认行为，达到我们想要的效果。

```html
<style>
  main{
    width: 100%;
    padding: 60px 80px 80px;
    background: #b4a078;
  }
  div{
    padding: 12px;
    margin: 20px auto;
    background: white;
    border: 10px solid hsla(0, 0%, 100%, .5);
  }
  label{
    color: #f4f0ea;
  }
  input[id="pb"]:checked ~ div{
    background-clip: padding-box;
  }
</style>
<template>
  <main>
    <input id="pb" type="checkbox" checked/>
    <label for="pb">padding-box(默认)</label>
    <div>A paragraph of filler text. La la la de dah de dah de dah de la.</div>
  </main>
</template>
<script>
</script>
```

# [多重边框](https://lhammer.cn/You-need-to-know-css/#/zh-cn/multiple-borders?id=多重边框)

背景知识： [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline),[outline-offset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-offset)

`box-shadow`相信很多人都已经用透了，可用来给元素添加各种阴影效果，反过来，也只有我们需要实现阴影时才会想起它，其实，`box-shadow`还接受第四个参数作为阴影扩张半径，当我们只设置扩张半径时，零偏移，零模糊，产生的效果其实相当于一条实线“**边框**”。

`box-shadow`只能模拟实线边框效果，某些情况下，我们可能需要生成虚线的边框效果，我们可以通过类似于`border`的描边`outline`和对应的描边偏移`outline-offset`来实现。

```html
<style>
  main{
    width: 100%;
    padding: 0 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  div:nth-of-type(1) {
    width: 60px; height: 60px;
    border-radius: 50%;
    background: #fafafa;
    margin: 105px 29px;
    box-shadow: 0 0 0 10px #E8E2D6, 0 0 0 20px #E1D9C9,  
                0 0 0 30px #D9CFBB, 0 0 0 40px #D2C6AE,  
                0 0 0 50px #CABCA0, 0 0 0 60px #C3B393,
                0 0 0 70px #BBA985, 0 0 0 80px #B4A078;
  }
  div:nth-of-type(2){
    width: 200px; height: 120px;
    background: #efebe9;
    border: 5px solid #B4A078;
    outline: #B4A078 dashed 1px;
    outline-offset: -10px;
    margin-bottom: 20px;
  }
</style>
<template>
  <main>
    <div></div>
    <div></div>
  </main>
</template>
<script>
</script>
```

# [边框内圆角](https://lhammer.cn/You-need-to-know-css/#/zh-cn/inner-rounding?id=边框内圆角)

背景知识： [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)

我们知道`box-shadow`是会紧贴`border-radius`圆角边的，但是，描边`outline`并不会与圆角边`border-radius`贴合，我们可以将两者组合，通过`box-shadow`去填补描边`outline`所产生的间隙来达到我们想要的效果。

关于扩张半径的取值？假设圆角`border-radius`的半径为`r`,根据勾股定理，扩张半径的最小值应等于`(√2−1)r ~= 3.314`，最大值不能超过描边宽度，即`6px`。

```html
<style>
  main{
    width: 100%;
    padding: 60px 80px 80px;
  }
  div{
    width: 209px;
    margin: 29px auto;
    padding: 8px 16px;
    border-radius: 8px;
    background: #f4f0ea;
    outline: 6px solid #b4a078;
  }
  input{
    margin-left: calc(50% - 45px);
  }
  input:checked ~ div{
    box-shadow: 0 0 0 5px #b4a078;
  }
</style>
<template>
  <main>
    <input id="ck" type="checkbox" checked/>
    <label for="ck">box-shadow</label>
    <div>A paragraph of filler text. La la la de dah de dah de dah de la.</div>
  </main>
</template>
<script>
</script>
```



# [背景定位](https://lhammer.cn/You-need-to-know-css/#/zh-cn/extended-bg-position?id=背景定位)

背景知识： [background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position), [background-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin), [calc](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)

```html
<style>
  main{
    width: 100%;
    padding: 80px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  div{
    width: 229px; height: 139px;
    margin: auto;
    color: #f4f0ea;
    padding: 16px 29px 28px 20px;
    background: #b4a078 url('static/player_logo@2x.png') no-repeat bottom right / 78px 21px;
  }
  div:nth-of-type(1){
    background-position: right 29px bottom 28px;
  }
  div:nth-of-type(2){
    background-origin: content-box;
    margin: 29px 0; /* 移动端纵向排列上下间距 */
  }
  div:nth-of-type(3){
    background-position: calc(100% - 29px) calc(100% - 28px);
  }
</style>
<template>
  <main>
    <div class="block1">background-position方案</div>
    <div class="block2">background-origin方案</div>
    <div class="block3">calc方案</div>
  </main>
</template>
<script>
</script>
```

