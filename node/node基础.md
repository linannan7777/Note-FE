[TOC]

## 事件循环

Node.js JavaScript 代码运行在单个线程上。 每次只处理一件事。

这个限制实际上非常有用，因为它大大简化了编程方式，而不必担心并发问题。

只需要注意如何编写代码，并避免任何可能阻塞线程的事情，例如同步的网络调用或无限的循环。

任何花费太长时间才能将控制权返回给事件循环的 JavaScript 代码，都会阻塞页面中任何 JavaScript 代码的执行，甚至阻塞 UI 线程，并且用户无法单击浏览、滚动页面等。

JavaScript 中几乎所有的 I/O 基元都是非阻塞的。 网络请求、文件系统操作等。 被阻塞是个异常，这就是 JavaScript 如此之多基于回调（最近越来越多基于 promise 和 async/await）的原因。

### 调用堆栈

调用堆栈是一个 LIFO 队列（后进先出）。

事件循环不断地检查调用堆栈，以查看是否需要运行任何函数。

当执行时，它会将找到的所有函数调用添加到调用堆栈中，并按顺序执行每个函数。

### 消息队列

当调用 setTimeout() 时，浏览器或 Node.js 会启动定时器。 当定时器到期时（在此示例中会立即到期，因为将超时值设为 0），则回调函数会被放入“消息队列”中。

在消息队列中，用户触发的事件（如单击或键盘事件、或获取响应）也会在此排队，然后代码才有机会对其作出反应。 类似 `onLoad` 这样的 DOM 事件也如此。

事件循环会赋予调用堆栈优先级，它首先处理在调用堆栈中找到的所有东西，一旦其中没有任何东西，便开始处理消息队列中的东西。

我们不必等待诸如 `setTimeout`、fetch、或其他的函数来完成它们自身的工作，因为它们是由浏览器提供的，并且位于它们自身的线程中。 例如，如果将 `setTimeout` 的超时设置为 2 秒，但不必等待 2 秒，等待发生在其他地方。

### ES6 作业队列

ECMAScript 2015 引入了作业队列的概念，Promise 使用了该队列（也在 ES6/ES2015 中引入）。 这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾。

在当前函数结束之前 resolve 的 Promise 会在当前函数之后被立即执行。

## process.nextTick()

每当事件循环进行一次完整的行程时，我们都将其称为一个滴答。

当将一个函数传给 `process.nextTick()` 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：

```javascript
process.nextTick(() => {
  //做些事情
})
```

事件循环正在忙于处理当前的函数代码。

当该操作结束时，JS 引擎会运行在该操作期间传给 `nextTick` 调用的所有函数。

这是可以告诉 JS 引擎异步地（在当前函数之后）处理函数的方式，但是尽快执行而不是将其排入队列。

调用 `setTimeout(() => {}, 0)` 会在下一个滴答结束时执行该函数，比使用 `nextTick()`（其会优先执行该调用并在下一个滴答开始之前执行该函数）晚得多。

当要确保在下一个事件循环迭代中代码已被执行，则使用 `nextTick()`。

## setImmediate()

当要异步地（但要尽可能快）执行某些代码时，其中一个选择是使用 Node.js 提供的 `setImmediate()` 函数：

```javascript
setImmediate(() => {
  //运行一些东西
})
```

作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调。

`setImmediate()` 与 `setTimeout(() => {}, 0)`（传入 0 毫秒的超时）、`process.nextTick()` 有何不同？

传给 `process.nextTick()` 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 `setTimeout` 和 `setImmediate` 之前执行。

延迟 0 毫秒的 `setTimeout()` 回调与 `setImmediate()` 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。

## JavaScript 定时器

### `setTimeout()`

该语法定义了一个新的函数。 可以在其中调用所需的任何其他函数，也可以传入现有的函数名称和一组参数：

```javascript
const myFunction = (firstParam, secondParam) => {
  // 做些事情
}

// 2 秒之后运行
setTimeout(myFunction, 2000, firstParam, secondParam)
```

如果将超时延迟指定为 `0`，则回调函数会被尽快执行（但是是在当前函数执行之后）

递归的 setTimeout 可以代替 `setInterval`，可以防止函数的执行时间取决于网络时造成一个较长时间的执行会与下一次执行重叠。

Node.js 还提供 `setImmediate()`（相当于使用 `setTimeout(() => {}, 0)`），通常用于与 Node.js 事件循环配合使用。

## `setInterval()`

它会在指定的特定时间间隔（以毫秒为单位）一直地运行回调函数。除非使用 `clearInterval` 告诉它停止（传入 `setInterval` 返回的间隔定时器 id）。

## JavaScript 异步编程与回调

### 编程语言中的异步性

计算机在设计上是异步的。

异步意味着事情可以独立于主程序流而发生。

在当前的用户计算机中，每个程序都运行于特定的时间段，然后停止执行，以让另一个程序继续执行。 这件事运行得如此之快，以至于无法察觉。 我们以为计算机可以同时运行许多程序，但这是一种错觉（在多处理器计算机上除外）。

### 回调

回调是一个简单的函数，会作为值被传给另一个函数，并且仅在事件发生时才被执行。 之所以这样做，是因为 JavaScript 具有顶级的函数，这些函数可以被分配给变量并传给其他函数（称为高阶函数）。

### 处理回调中的错误

如何处理回调的错误？ 一种非常常见的策略是使用 Node.js 所采用的方式：任何回调函数中的第一个参数为错误对象（即错误优先的回调）。

如果没有错误，则该对象为 `null`。 如果有错误，则它会包含对该错误的描述以及其他信息。

## Node.js 事件触发器

如果你在浏览器中使用 JavaScript，则你会知道通过事件处理了许多用户的交互：鼠标的单击、键盘按钮的按下、对鼠标移动的反应等等。

在后端，Node.js 也提供了使用 [`events` 模块](http://nodejs.cn/api/events.html)构建类似系统的选项。

具体上，此模块提供了 `EventEmitter` 类，用于处理事件。

使用以下代码进行初始化：

```javascript
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
```

该对象公开了 `on` 和 `emit` 方法。

- `emit` 用于触发事件。
- `on` 用于添加回调函数（会在事件被触发时执行）。

例如，创建 `start` 事件，并提供一个示例，通过记录到控制台进行交互：

```javascript
eventEmitter.on('start', () => {
  console.log('开始')
})
```

当运行以下代码时：

```javascript
eventEmitter.emit('start')
```

事件处理函数会被触发，且获得控制台日志。

可以通过将参数作为额外参数传给 `emit()` 来将参数传给事件处理程序：

```javascript
eventEmitter.on('start', number => {
  console.log(`开始 ${number}`)
})

eventEmitter.emit('start', 23)
```

多个参数：

```javascript
eventEmitter.on('start', (start, end) => {
  console.log(`从 ${start} 到 ${end}`)
})

eventEmitter.emit('start', 1, 100)
```

EventEmitter 对象还公开了其他几个与事件进行交互的方法，例如：

- `once()`: 添加单次监听器。
- `removeListener()` / `off()`: 从事件中移除事件监听器。
- `removeAllListeners()`: 移除事件的所有监听器。

可以在事件模块的页面 http://nodejs.cn/api/events.html 上阅读其所有详细信息。