## 基本模板

```
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

##  禁止响应式布局有如下几步：

1. 移除设置浏览器视口（viewport）的标签：`<meta>`。
2. 通过为 `.container` 类设置一个 `width` 值从而覆盖框架的默认 width 设置，例如 `width: 970px !important;` 。请确保这些设置全部放在默认的 Bootstrap CSS 文件的后面。注意，如果你把它放到媒体查询中，也可以略去 `!important` 。
3. 如果使用了导航条，需要移除所有导航条的折叠和展开行为。
4. 对于栅格布局，额外增加 `.col-xs-*` 类或替换掉 `.col-md-*` 和 `.col-lg-*`。 不要担心，针对超小屏幕设备的栅格系统能够在所有分辨率的环境下展开。

5. 针对 IE8 仍然需要额外引入 Respond.js 文件（由于仍然利用了浏览器对媒体查询（media query）的支持，因此还需要做处理）。这样就禁用了 Bootstrap 对移动设备的响应式支持。