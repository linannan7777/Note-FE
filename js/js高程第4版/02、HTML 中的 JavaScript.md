# HTML 中的 JavaScript

\<script>元素有下列 8 个属性


- async:可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
- charset:可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不 在乎它的值。
- crossorigin:可选。配置相关请求的 CORS(跨源资源共享)设置。默认不使用 CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据 标志，意味着出站请求会包含凭据。
- defer:可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。 在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。
     供恶意内容。
- language:废弃。最初用于表示代码块中的脚本语言(如"JavaScript"、"JavaScript 1.2"
或"VBScript")。大多数浏览器都会忽略这个属性，不应该再使用它。
- src:可选。表示包含要执行的代码的外部文件。
- type:可选。代替 language，表示代码块中脚本语言的内容类型(也称 MIME 类型)。按照惯
  例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"
  都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给
  type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有
  "application/javascript"和"application/ecmascript"。如果这个值是 module，则代
  码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。

使用\<script>的方式有两种:通过它直接在网页中嵌入 JavaScript 代码，以及通过它在网页中包含
外部 JavaScript 文件。

*在使用行内 JavaScript 代码时，要注意代码中不能出现字符串</script>浏览器解析行内脚本的方式决定了它在看到字符串</script>时，会将其当成结束的</script>标签。想避免这个问题，只需要转义字符   **“\”**  即可*

使用了 src 属性的<script>元素不应该再在<script>和</script>标签中再包含其他
JavaScript 代码。如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。

它可以包含来自外部域的 JavaScript
文件。跟<img>元素很像，<script>元素的 src 属性可以是一个完整的 URL，而且这个 URL 指向的 4
资源可以跟包含它的 HTML 页面不在同一个域中，比如这个例子:

<script src="http://www.somewhere.com/afile.js"></script>
浏览器在解析这个资源时，会向 src 属性指定的路径发送一个 GET 请求，以取得相应资源，假定 是一个 JavaScript 文件。这个初始的请求不受浏览器同源策略限制，但返回并被执行的 JavaScript 则受限 制。当然，这个请求仍然受父页面 HTTP/HTTPS 协议的限制。 

### 推迟执行脚本

在<script>元素上设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行。
HTML5 规范要求脚本应该按照它们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，而且两者都会在 DOMContentLoaded 事件之前执行。不过在实际当中，推迟执行的脚本不一定总会按顺序执行或者在 DOMContentLoaded 事件之前执行，因此最好只包含一个这样的脚本。

*defer 属性只对外部脚本文件才有效。*

### 异步执行脚本

从改变脚本处理方式上看，async 属性与 defer 类似。当然，它们两者也都只适用于外部脚本，都会告诉浏览器立即开始下载。不过，与 defer 不同的是，标记为 async 的脚本并不保证能按照它们出现的次序执行。

给脚本添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。

### 动态加载脚本

除了<script>标签，还有其他方式可以加载脚本。因为 JavaScript 可以使用 DOM API，所以通过
向 DOM 中动态添加 script 元素同样可以加载指定的脚本。只要创建一个 script 元素并将其添加到
DOM 即可。

```
let script = document.createElement('script');
script.src = 'out.js';
document.head.appendChild(script);
```



\<noscript>元素可以包含任何可以出现在<body>中的 HTML 元素，<script>除外。在下列两种
情况下，浏览器将显示包含在<noscript>中的内容:

- 浏览器不支持脚本;
- 浏览器对脚本的支持被关闭

任何一个条件被满足，包含在<noscript>中的内容就会被渲染。否则，浏览器不会渲染<noscript> 中的内容。 

