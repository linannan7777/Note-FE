# 什么是 JavaScript

JavaScript 实现包含：

- 核心(ECMAScript)
- 文档对象模型(DOM)
- 浏览器对象模型(BOM)

如果不涉及浏览器的话，ECMA-262 到底定义了:

- 语法
- 类型
- 语句 
- 关键字
- 保留字
- 操作符
- 全局对象

### DOM

DOM Level 1:DOM Core 和 DOM HTML。前者提供了一种映射 XML 文档，从而方便访问和操作文档任意部分的方式;后者扩展了前者，并增加了特定于 HTML 的对象和方法。 

DOM Level 2 ：
- DOM 视图:描述追踪文档不同视图(如应用 CSS 样式前后的文档)的接口。
- DOM 事件:描述事件及事件处理的接口。
- DOM 样式:描述处理元素 CSS 样式的接口。
- DOM 遍历和范围:描述遍历和操作 DOM 树的接口。

DOM Level 3 进一步扩展了 DOM，增加了以统一的方式加载和保存文档的方法(包含在一个叫 DOMLoad and Save 的新模块中)，还有验证文档的方法(DOM Validation)。在 Level 3 中，DOM Core 经过扩展支持了所有 XML 1.0 的特性，包括 XML Infoset、XPath 和 XML Base。

DOM4 新增的内容包括替代 Mutation Events 的 Mutation Observers

### BOM

BOM 主要针对浏览器窗口和子窗口(frame)，不过人们通常会把任何特定于浏览器的扩展都归在 BOM 的范畴内:

- 弹出新浏览器窗口的能力;
- 移动、缩放和关闭浏览器窗口的能力;
- navigator 对象，提供关于浏览器的详尽信息;
- ocation 对象，提供浏览器加载页面的详尽信息;
- screen 对象，提供关于用户屏幕分辨率的详尽信息;
- performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息;
- 对 cookie 的支持;
- 其他自定义对象，如 XMLHttpRequest 和 IE 的 ActiveXObject。

 