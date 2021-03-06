## 1、什么是栈和堆？

堆和栈的概念存在于数据结构中和操作系统内存中。

在数据结构中，栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级

来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。

在操作系统中，内存被分为栈区和堆区。

栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式

类似于数据结构中的栈。

堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制

回收。

# 2、介绍 js 有哪些内置对象？

数据封装类对象：String，Boolean，Number，Array，和Object;

其他对象：Function，Arguments，Math，Date，RegExp，Error

## 3、什么是原型、原型链，有什么特点？

在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个prototype 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现了\_\_proto\_\_ 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。

ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对象的原型。

当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它

的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也

就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 

所以这就是我们新建的对象为什么能够使用 toString() 等方法的原因。

特点：

JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。

## 4、 Javascript 的作用域链？

作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和函数。

作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。 

## 5、谈谈 This 对象的理解。

首先，我们需要知道的是：

this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断:

1.第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。

2.第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。

3.第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。

4.第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。

其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。

call 方法接收的参数，第一个是 this 绑定的对象，后面的其 余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。

bind方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

## 6、什么是闭包，为什么要用它

闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。闭包有两个常用的用途。

闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭

包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。

函数的另一个用  途是使 已经运行结束的函数上下文中的变量对象继续留 在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

其实,闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。

[JS 闭包经典使用场景](https://juejin.cn/post/6937469222251560990)

## 7、Ajax 是什么? 如何创建一个 Ajax？

ajax指的是通过 JavaScript 的异步 通信，从服务  器获取 XML 文档从 中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。具体来说，AJAX 包括以下几个步骤。

1.创建 XMLHttpRequest 对象，也就是创建一个异步调用对象

 2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的方法、URL 及验证信息

3.设置响应 HTTP 请求状态变化的函数

4.发送HTTP 请求

5.获取异步调用返回的数据

6.使用 JavaScript 和 DOM 实现局部刷新

## 8、什么是防抖和节流，他们的应用场景有哪些

### 防抖 (debounce)

防抖，顾名思义，防止抖动，以免把一次事件误认为多次，敲键盘就是一个每天都会接触到的防抖操作。

想要了解一个概念，必先了解概念所应用的场景。在 JS 这个世界中，有哪些防抖的场景呢

1. 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
2. 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
3. 文本编辑器实时保存，当无任何更改操作一秒后进行保存

代码如下，可以看出来**防抖重在清零 clearTimeout(timer)**

```
function debounce (f, wait) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, wait)
  }
}
```

### 节流 (throttle)

节流，顾名思义，控制水的流量。控制事件发生的频率，如控制为1s发生一次，甚至1分钟发生一次。与服务端(server)及网关(gateway)控制的限流 (Rate Limit) 类似。

1. `scroll` 事件，每隔一秒计算一次位置信息等
2. 浏览器播放事件，每个一秒计算一次进度信息等
3. input 框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)

代码如下，可以看出来**节流重在加锁 timer=timeout**

```
function throttle (f, wait) {
  let timer
  return (...args) => {
    if (timer) { return }
    timer = setTimeout(() => {
      f(...args)
      timer = null
    }, wait)
  }
}
```

### 总结 (简要答案)

- 防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。**代码实现重在清零 clearTimeout**。防抖可以比作等电梯，只要有一个人进来，就需要再等一会儿。业务场景有避免登录按钮多次点击的重复提交。
- 节流：控制流量，单位时间内事件只能触发一次，与服务器端的限流 (Rate Limit) 类似。**代码实现重在开锁关锁 timer=timeout; timer=null**。节流可以比作过红绿灯，每等一个红灯时间就可以过一批。