[TOC]

# BOM



## window 对象

BOM 的核心是 window 对象，表示浏览器的实例。window 对象在浏览器中有两重身份，一个是 ECMAScript 中的 Global 对象，另一个就是浏览器窗口的 JavaScript 接口。这意味着网页中定义的所有对象、变量和函数都以 window 作为其 Global 对象，都可以访问其上定义的 parseInt()等全局方法。

### **Global**作用域

通过 var 声明的所有全局变量和函数都会变成 window 对象的属性和方法。

使用 let 或 const 替代 var，则不会把变量添加给全局对象。

访问未声明的变量会抛出错误，但是可以在 window 对象上查询是否存在可能未声明的变量。

### 窗口关系

top 对象始终指向最上层(最外层)窗口，即浏览器窗口本身。而 parent 对象则始终指向当前窗口的父窗口。如果当前窗口是最上层窗口，则 parent 等于 top(都等于 window)。最上层的 window如果不是通过 window.open()打开的，那么其 name 属性就不会包含值。

self 对象始终会指向 window。实际上，self 和 window 就是同一个对象。之所以还要暴露 self，就是为了和 top、parent 保持一致。

### 窗口位置与像素比

screenLeft 和 screenTop 属性，用于表示窗口相对于屏幕左侧和顶部的位置 ，返回值的单位是 CSS 像素。

可以使用 moveTo()和 moveBy()方法移动窗口。这两个方法都接收两个参数，其中 moveTo()接收要移动到的新位置的绝对坐标 x 和 y;而 moveBy()则接收相对当前位置在两个方向上移动的像素数。

```
// 把窗口移动到左上角 
window.moveTo(0,0);

// 把窗口向下移动 100 像素 
window.moveBy(0, 100);

// 把窗口移动到坐标位置(200, 300) 
window.moveTo(200, 300);

// 把窗口向左移动 50 像素 
window.moveBy(-50, 0);

// 依浏览器而定，以上方法可能会被部分或全部禁用。
```

不同像素密度的屏幕下就会有不同的缩放系数，以便把物理像素(屏幕实际的分辨率)转换为 CSS 像素(浏览器报告的虚拟分辨率)。举个例子，手机屏幕的物理分辨率可能是 1920×1080，但因为其像素可能非常小，所以浏览器就需 要将其分辨率降为较低的逻辑分辨率，比如 640×320。这个物理像素与 CSS 像素之间的转换比率由window.devicePixelRatio 属性提供。对于分辨率从 1920×1080 转换为 640×320 的设备，window.devicePixelRatio 的值就是 3。这样一来，12 像素(CSS 像素)的文字实际上就会用 36 像素的物理像素来显示。 

window.devicePixelRatio 实际上与每英寸像素数(DPI，dots per inch)是对应的。DPI 表示单位像素密度，而 window.devicePixelRatio 表示物理像素与逻辑像素之间的缩放系数。 

### 窗口大小

outerWidth 和 outerHeight 返回浏览器窗口自身的大小(不管是在最外层 window 上使用，还是在窗格**<frame>**中使用)。innerWidth 和 innerHeight 返回浏览器窗口中页面视口的大小(不包含浏览器边框和工具栏)。

document.documentElement.clientWidth 和 document.documentElement.clientHeight 返回页面视口的宽度和高度。

```
// 页面视口的大小
let pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if (typeof pageWidth != "number") { 
  if (document.compatMode == "CSS1Compat"){
    pageWidth = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight;
  } else {
    pageWidth = document.body.clientWidth;
    pageHeight = document.body.clientHeight;
  }
}
```

可以使用 resizeTo()和 resizeBy()方法调整窗口大小。这两个方法都接收两个参数，resizeTo() 接收新的宽度和高度值，而 resizeBy()接收宽度和高度各要缩放多少。

```
// 缩放到100×100 
window.resizeTo(100, 100);

// 缩放到200×150 
window.resizeBy(100, 50);

// 缩放到300×300 
window.resizeTo(300, 300);

// 缩放窗口的方法可能会被浏览器禁用,缩放窗口的方法只能应用到最上层的 window 对象。
```

### 视口位置

度量文档相对于视口滚动距离的属性有两对，返回相等的值:window.pageXoffset/window.scrollX 和 window.pageYoffset/window.scrollY。

可以使用 scroll()、scrollTo()和 scrollBy()方法滚动页面。这 3 个方法都接收表示相对视口距离的 x 和 y 坐标，这两个参数在前两个方法中表示要滚动到的坐标，在最后一个方法中表示滚动的距离。

```
// 滚动到页面左上角 
window.scrollTo(0, 0);

// 滚动到距离屏幕左边及顶边各 100 像素的位置
window.scrollTo(100, 100);

// 相对于当前视口向下滚动 100 像素 
window.scrollBy(0, 100);

// 相对于当前视口向右滚动 40 像素 
window.scrollBy(40, 0);
```

这几个方法也都接收一个 ScrollToOptions 字典，除了提供偏移值，还可以通过 behavior 属性 告诉浏览器是否平滑滚动。

```
// 正常滚动 
window.scrollTo({
  left: 100,
  top: 100,
  behavior: 'auto'
});
 // 平滑滚动
window.scrollTo({ 
  left: 100,
  top: 100,
	behavior: 'smooth'
});
```

### 导航与打开新窗口

window.open()方法可以用于导航到指定 URL，也可以用于打开新浏览器窗口。这个方法接收 4个参数:要加载的 URL、目标窗口、特性字符串和表示新窗口在浏览器历史记录中是否替代当前加载页面的布尔值。通常，调用这个方法时只传前 3 个参数，最后一个参数只有在不打开新窗口时才会使用。

如果 window.open()的第二个参数是一个已经存在的窗口或窗格(frame)的名字，则会在对应的窗口或窗格中打开 URL。否则就会打开一个新窗口或标签页并将其命名为第二个参数。第二个参数也可以是一个特殊的窗口名，比如**_self**、
**_parent**、**_top** 或**_blank**。

第三个参数，即特性字符串，用于指定新窗口的配置。如果没有传第三个参数，则新窗口(或标签页)会带有所有默
认的浏览器特性(工具栏、地址栏、状态栏等都是默认配置)。如果打开的不是新窗口，则忽略第三个参数。特性字符串是一个逗号分隔的设置字符串，用于指定新窗口包含的特性。

```
window.open("http://www.wrox.com/",
                "wroxWindow",
"height=400,width=400,top=10,left=10,resizable=yes");
// 这行代码会打开一个可缩放的新窗口，大小为 400 像素×400 像素，位于离屏幕左边及顶边各 10 像 素的位置。
```

window.open()方法返回一个对新建窗口的引用。某些浏览器默认不允许缩放或移动主窗口，但可能允许缩放或移动通过 window.open()创建的窗口。跟使用任何 window 对象一样，可以使用这个对象操纵新打开的窗口。可以使用 close()方法关闭新打开的窗口。关闭窗口以后，窗口的引用虽然还在，但只能用于检查其 closed 属性了。

新创建窗口的 window 对象有一个属性 opener，指向打开它的窗口。这个属性只在弹出窗口的最上层 window 对象(top)有定义，是指向调用 window.open()打开它的窗口或窗格的指针。

在某些浏览器中，每个标签页会运行在独立的进程中。如果一个标签页打开了另一个，而 window对象需要跟另一个标签页通信，那么标签便不能运行在独立的进程中。在这些浏览器中，可以将新打开的标签页的 opener 属性设置为 null，表示新打开的标签页可以运行在独立的进程中。这个连接一旦切断，就无法恢复了。

在网页加载过程中调用window.open()没有效果， 而且还可能导致向用户显示错误。

如果浏览器内置的弹窗屏蔽程 阻止了弹窗，那么 window.open() 很可能会返回 null。此时，只要检查这个方法的返回值就可以知道弹窗是否被屏蔽了：

```
let wroxWin = window.open("http://www.wrox.com", "_blank");
if (wroxWin == null){
  alert("The popup was blocked!");
}
```

在浏览器扩展或其他程 屏蔽弹窗时，window.open()通常会抛出错误。因此要准确检测弹窗是否被屏蔽，除了检测 window.open()的返回值，还要把它用 try/catch 包装起来,检测到错误或者null都提示弹窗被屏蔽了。

### 定时器

setTimeout()用于指定在一定时间后执行某些代码，而 setInterval()用于指定每隔一段时间执行某些代码。

setTimeout()方法通常接收两个参数:要执行的代码和在执行回调函数前等待的时间(毫秒)。

为了调度不同代码的执行，JavaScript 维护了一个任务队列。其中的任务会按照添加到队列的先后顺 执行。setTimeout()的第二个参数只是告诉 JavaScript 引擎在指定的毫秒数过后把任务添加到这个队列。如果队列是空的，则会立即执行该代码。如果队列不是空的，则代码必须等待前面的任务执行完才能执行。

调用 setTimeout()时，会返回一个表示该超时排期的数值 ID。这个超时 ID 是被排期执行代码的唯一标识符，可用于取消该任务。要取消等待中的排期任务，可以调用 clearTimeout()方法并传入超时 ID。

setInterval()与 setTimeout()的使用方法类似，只不过指定的任务会每隔指定时间就执行一次，直到取消循环定时或者页面卸载。setInterval()同样可以接收两个参数:要执行的代码(字符串或函数)，以及把下一次执行定时代码的任务添加到队列要等待的时间(毫秒)。

setInterval()方法也会返回一个循环定时 ID，可以用于在未来某个时间点上取消循环定时。要取消循环定时，可以调用 clearInterval()并传入定时 ID。

**setIntervale()在实践中很少会在 生产环境下使用，因为一个任务结束和下一个任务开始之间的时间间隔是无法保证的，有些循环定时任务可能会因此而被跳过。一般来说，最好不要使用 setInterval()。可以用setTimeout()代替。 **



### 系统对话框

alert()、confirm()和 prompt()方法，可以让浏览器调用系统对话框向用户显示消息。它们都是同步的模态对话框，即在它们显示的时候，代码会停止执行，在它们消失以后，代码才会恢复执行。

alert()只接收一个参数。如果传给 alert()的参数不是一个原始字符串，则会调用这个值的 toString()方法将其转换为字符串。

confirm() 确认框。确认框有两个按钮:“Cancel”(取消)和“OK”(确定)。用户通过单击不同的按钮表明希望接下来执行什么操作。true 表示单击了 OK 按钮，false 表示单击了 Cancel 按钮或者通过单击某一角上的 X 图标关闭了确认框。

```
 if (confirm("Are you sure?")) {
      alert("I'm so glad you're sure!");
    } else {
      alert("I'm sorry to hear you're not sure.");
}
```



 prompt() 提示框。提示框的用途是提示用户输入消息。除了 OK 和 Cancel 按钮，提示框还会显示一个文本框，让用户输入内容。prompt()方法接收两个参数:要显示给用户的文本，以及文本框的默认值(可以是空字符串)。如果用户单击了 OK 按钮，则 prompt()会返回文本框中的值。如果用户单击了 Cancel 按钮，或者对话框被关闭，则 prompt()会返回 null。

```
let result = prompt("What is your name? ", "");
if (result !== null) { 7
  alert("Welcome, " + result);
}
```



## history 对象

### 导航

history 对象表示当前窗口首次使用以来用户的导航历史记录。因为 history 是 window 的属性，所以每个 window 都有自己的 history 对象。出于安全考虑，这个对象不会暴露用户访问过的 URL，但可以通过它在不知道实际 URL 的情况下前进和后退。

`go()`方法可以在用户历史记录中沿任何方向导航，可以前进也可以后退。这个方法只接收一个参数，
这个参数可以是一个整数，表示前进或后退多少步。负值表示在历史记录中后退(，而正值表示在历史记录中前进

```
// 后退一页 
history.go(-1);

// 前进一页
history.go(1);

// 前进两页 
history.go(2);
```

在旧版本的一些浏览器中，go()方法的参数也可以是一个字符串，这种情况下浏览器会导航到历史中包含该字符串的第一个位置。可能是后退，也可能是前进。如果历史记录中没有匹配的项，则这个方法什么也不做

```
// 后退一页 
history.back();   // === history.go(-1);

// 前进一页 
history.forward(); // === history.go(1);
```

history 对象还有一个 length 属性，表示历史记录中有多个条目。

**如果页面URL发生变化，则会在历史记录中生成一个新条目。对于2009年以来发布的主流浏览器，这包括改变 URL 的散列值(因此，把 location.hash 设置为一个新值会在这些浏览器的历史记录中增加一条记录)。这个行为常被单页应用程序框架用来模拟前进和后退，这样做是为了不会因导航而触发页面刷新。**

### 历史状态

hashchange 会在页面 URL 的散列变化时被触发，开发者可以在此时执行某些操作。而状态管理 API 则可以让开发者改变浏览器 URL 而不会加载新页面。为此，可以使用 history.pushState()方法。这个方法接收 3 个参数:一个 state 对象、一个新状态的标题和一个(可选的)相对 URL。

```
 let stateObject = {foo:"bar"};
 history.pushState(stateObject, "My title", "baz.html");
```

pushState()方法执行后，状态信息就会被推到历史记录中，浏览器地址栏也会改变以反映新的相对 URL。除了这些变化之外，即使 location.href 返回的是地址栏中的内容，浏览器页不会向服务器发送请求。第二个参数并未被当前实现所使用，因此既可以传一个空字符串也可以传一个短标题。第一个参数应该包含正确初始化页面状态所必需的信息。为防止滥用，这个状态的对象大小是有限制的，通常在 500KB~1MB 以内。

因为 pushState()会创建新的历史记录，所以也会相应地启用“后退”按钮。此时单击“后退”
按钮，就会触发 window 对象上的 popstate 事件。popstate 事件的事件对象有一个 state 属性，其
中包含通过 pushState()第一个参数传入的 state 对象:

```
window.addEventListener("popstate", (event) => { let state = event.state;
if (state) { // 第一个页面加载时状态是null
    processState(state);
  }
});
```

基于这个状态，应该把页面重置为状态对象所表示的状态(因为浏览器不会自动为你做这些)。记 住，页面初次加载时没有状态。因此点击“后退”按钮直到返回最初页面时，event.state会为null。  可以通过 history.state 获取当前的状态对象，也可以使用 replaceState()并传入与 

pushState()同样的前两个参数来更新状态。更新状态不会创建新历史记录，只会覆盖当前状态: history.replaceState({newFoo: "newBar"}, "New title"); 

传给 pushState()和 replaceState()的 state 对象应该只包含可以被 列化的信息。因此， DOM 元素之类并不适合放到状态对象里保存。 

**使用HTML5状态管理时，要确保通过pushState()创建的每个“假”URL背后都对应着服务器上一个真实的物理 URL。否则，单击“刷新”按钮会导致 404 错误。所有单页应用程序(SPA，Single Page Application)框架都必须通过服务器或客户端的某些配置解决这个问题。**

