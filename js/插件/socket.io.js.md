## Socket.io是什么

> Socket.io是一个用于在浏览器和服务器之间进行实时，双向和基于事件的通信库。
> Socket.io包装了websocket，在浏览器支持的情况下优先使用websocket进行连接，否则回退到HTTP长轮询的方式，解决了部分浏览器暂不支持websocket的问题。

## 安装方法

> 在node.js服务端使用时，通过npm安装

```javascript
npm install socket.io
```

> 在浏览器中使用时可通过两种方式

第一种

```javascript
// socket.io在服务端的程序会自动将客户端的文件在该路径下暴露出来，
// 因此直接通过src标签引入即可
<script src="/socket.io/socket.io.js"></script>
```

第二种

```javascript
// 在服务端...
// 如果不想通过服务端暴露的文件引用，则可以禁用该功能
const io = require('socket.io')({
  // 不启用
  serveClient: false
});
// 在客户端
// 然后通过cdn等方式引入（减轻自己服务器的压力）
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
```