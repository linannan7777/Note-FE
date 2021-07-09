```javascript
 // 1.原生JS的固定写法
 window.onload = function (ev) {  }

// 2.jQuery的固定写法
$(document).ready(function () {
	alert("hello lnj");
});

window.onload = function (ev) {
    // 1.通过原生的JS入口函数可以拿到DOM元素
    var images = document.getElementsByTagName("images")[0];
    console.log(images);
    // 2.通过原生的JS入口函数可以拿到DOM元素的宽高
    var width = window.getComputedStyle(images).width;
    console.log("onload", width);
}


/*
* 1.原生JS和jQuery入口函数的加载模式不同
* 原生JS会等到DOM元素加载完毕,并且图片也加载完毕才会执行
* jQuery会等到DOM元素加载完毕,但不会等到图片也加载完毕就会执行
* */

$(document).ready(function () {
    // 1.通过jQuery入口函数可以拿到DOM元素
    var $images = $("images");
    console.log($images);
    // 2.通过jQuery入口函数不可以拿到DOM元素的宽高
    var $width = $images.width();
    console.log("ready", $width);
});
/*
1.原生的JS如果编写了多个入口函数,后面编写的会覆盖前面编写的
2.jQuery中编写多个入口函数,后面的不会覆盖前面的
*/
```

##### jQuery入口函数的其它写法

```javascript
 // 1.第一种写法
$(document).ready(function () {
    // alert("hello lnj");
});

// 2.第二种写法
jQuery(document).ready(function () {
    // alert("hello lnj");
});

// 3.第三种写法(推荐)
$(function () {
    // alert("hello lnj");
});

// 4.第四种写法
jQuery(function () {
    alert("hello lnj");
});
```

##### jQuery冲突问题

```javascript
// 1.释放$的使用权
// 注意点: 释放操作必须在编写其它jQuery代码之前编写
//         释放之后就不能再使用$,改为使用jQuery
// jQuery原理.noConflict();
// 2.自定义一个访问符号
var nj = jQuery.noConflict();
nj(function () {
    alert("hello lnj");
});
```
##### jQuery核心函数

```javascript
// 1.接收一个函数
  $(function () {
    alert("hello lnj");
    // 2.接收一个字符串
    // 2.1接收一个字符串选择器
    // 返回一个jQuery对象, 对象中保存了找到的DOM元素
    var $box1 = $(".box1");
    var $box2 = $("#box2");
    console.log($box1);
    console.log($box2);
    // 2.2接收一个字符串代码片段
    // 返回一个jQuery对象, 对象中保存了创建的DOM元素
    var $p = $("<p>我是段落</p>");
    console.log($p);
    $box1.append($p);
    // 3.接收一个DOM元素
    // 会被包装成一个jQuery对象返回给我们
    var span = document.getElementsByTagName("span")[0];
    console.log(span);
    var $span = $(span);
    console.log($span);
  });

```

##### jQuery对象

```javascript
$(function () {
  /*
  * 1.什么是jQuery对象
  * jQuery对象是一个伪数组
  *
  * 2.什么是伪数组?
  * 有0到length-1的属性, 并且有length属性
  */
  var $div = $("div");
  console.log($div);

  var arr = [1, 3, 5];
  console.log(arr);
});
```

##### 静态方法和实例方法

```javascript
 // 1.定义一个类
function AClass() {
}
// 2.给这个类添加一个静态方法
// 直接添加给类的就是静态方法
AClass.staticMethod = function () {
    alert("staticMethod");
}
// 静态方法通过类名调用
AClass.staticMethod();

// 3.给这个类添加一个实例方法
AClass.prototype.instanceMethod = function () {
    alert("instanceMethod");
}
// 实例方法通过类的实例调用
// 创建一个实例(创建一个对象)
var a = new AClass();
// 通过实例调用实例方法
a.instanceMethod();
```

#### 静态方法each方法

```javascript
  var arr = [1, 3, 5, 7, 9];
  var obj = {0:1, 1:3, 2:5, 3:7, 4:9, length:5};
  /*
  第一个参数: 遍历到的元素
  第二个参数: 当前遍历到的索引
  注意点:
  原生的forEach方法只能遍历数组, 不能遍历伪数组
  */
  arr.forEach(function (value, index) {
      console.log(index, value);
  });
    // 1.利用jQuery的each静态方法遍历数组
  /*
  第一个参数: 当前遍历到的索引
  第二个参数: 遍历到的元素
  注意点:
  jQuery的each方法是可以遍历伪数组的
  */
  $.each(arr, function (index, value) {
      console.log(index, value);
  });
  $.each(obj, function (index, value) {
      console.log(index, value);
  });
```

##### 静态方法map方法

```javascript

// 1.利用原生JS的map方法遍历
/*
第一个参数: 当前遍历到的元素
第二个参数: 当前遍历到的索引
第三个参数: 当前被遍历的数组
注意点:
和原生的forEach一样,不能遍历的伪数组

  第一个参数: 要遍历的数组
第二个参数: 每遍历一个元素之后执行的回调函数
回调函数的参数:
第一个参数: 遍历到的元素
第二个参数: 遍历到的索引
注意点:
和jQuery中的each静态方法一样, map静态方法也可以遍历伪数组
*/
// $.map(arr, function (value, index) {
//     console.log(index, value);
// });

 var res = $.map(obj, function (value, index) {
    console.log(index, value);
    return value + index;
});

var res2 = $.each(obj, function (index, value) {
    console.log(index, value);
    return value + index;
});
 /*
  jQuery中的each静态方法和map静态方法的区别:
  each静态方法默认的返回值就是, 遍历谁就返回谁
  map静态方法默认的返回值是一个空数组

  each静态方法不支持在回调函数中对遍历的数组进行处理
  map静态方法可以在回调函数中通过return对遍历的数组进行处理, 然后生成一个新的数组返回
*/
```

##### jQuery中的其它静态方法

######  $.trim();

​        作用: 去除字符串两端的空格

​        参数: 需要去除空格的字符串

​        返回值: 去除空格之后的字符串

######  $.isWindow();

​        作用: 判断传入的对象是否是window对象

​        返回值: true/false

###### $.isArray();

​        作用: 判断传入的对象是否是真数组

​        返回值: true/false

 $.isFunction();

​        作用: 判断传入的对象是否是一个函数

​        返回值: true/false

######   注意点:

​        jQuery框架本质上是一个函数

```javascript
(function( window, undefined ) {

})( window );
```

##### 静态方法holdReady方法

 ```javascript
// $.holdReady(true); 作用: 暂停ready执行
$.holdReady(true);
$(document).ready(function () {
  alert("ready");
});
var btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  $.holdReady(false);
}
 ```

##### jQuery内容选择器

```javascript
// :empty 作用:找到既没有文本内容也没有子元素的指定元素
  var $div = $("div:empty");
  console.log($div);

  // :parent 作用: 找到有文本内容或有子元素的指定元素
  var $div = $("div:parent");
  console.log($div);

 // :contains(text) 作用: 找到包含指定文本内容的指定元素
  var $div = $("div:contains('我是div')");
  console.log($div);

// :has(selector) 作用: 找到包含指定子元素的指定元素
  var $div = $("div:has('span')");
  console.log($div);
```

##### 属性和属性节点

######   1.什么是属性?

​            对象身上保存的变量就是属性

######   2.如何操作属性?

​            对象.属性名称 = 值;

​            对象.属性名称;

​            对象["属性名称"] = 值;

​            对象["属性名称"];



###### 3.什么是属性节点?

  ```javascript
    <span name = "it666"></span>           
  ```

  在编写HTML代码时,在HTML标签中添加的属性就是属性节点
  在浏览器中找到span这个DOM元素之后, 展开看到的都是属性
  在attributes属性中保存


###### 4.如何操作属性节点?

​     DOM元素.setAttribute("属性名称", "值");

​      DOM元素.getAttribute("属性名称");



###### 5.属性和属性节点有什么区别?

​            任何对象都有属性, 但是只有DOM对象才有属性节点

##### jQuery的attr方法

###### 1.attr(name|pro|key,val|fn)

  作用: 获取或者设置属性节点的值

  可以传递一个参数, 也可以传递两个参数

  如果传递一个参数, 代表获取属性节点的值

  如果传递两个参数, 代表设置属性节点的值



######   注意点:

  如果是获取:无论找到多少个元素, 都只会返回第一个元素指定的属性节点的值

  如果是设置:找到多少个元素就会设置多少个元素

  如果是设置: 如果设置的属性节点不存在, 那么系统会自动新增



###### 2.removeAttr(name)

  删除属性节点

###### 注意点:

  会删除所有找到元素指定的属性节点

##### jQuery的prop方法

######  1.prop方法

​	特点和attr方法一致

######  2.removeProp方法

​	特点和removeAttr方法一致

######  注意点:

   prop方法不仅能够操作属性, 他还能操作属性节点

​	官方推荐在操作属性节点时,具有 true 和 false 两个属性的属性节点，如 checked, selected 或者 disabled 使用prop()，其他的使用 attr()

##### jQuery操作类相关的方法            

######  1.addClass(class|fn)

  ​ 作用: 添加一个类

  ​ 如果要添加多个, 多个类名之间用空格隔开即可



######  2.removeClass([class|fn])

  ​ 作用: 删除一个类

  ​ 如果想删除多个, 多个类名之间用空格隔开即可



######  3.toggleClass(class|fn[,sw])

  ​ 作用: 切换类

  ​ 有就删除, 没有就添加

##### jQuery文本值相关的方法

######  1.html([val|fn])

​        和原生JS中的innerHTML一模一样

######  2.text([val|fn])

​         和原生JS中的innerText一模一样

######   3.val([val|fn|arr])
​		和原生JS中的value一模一样

##### jQuery操作CSS样式的方法

```javascript
  // 1.逐个设置
  $("div").css("width", "100px");
  $("div").css("height", "100px");
  $("div").css("background", "red");

  // 2.链式设置
  // 注意点: 链式操作如果大于3步, 建议分开
  $("div").css("width", "100px").css("height", "100px").css("background", "blue");

  // 3.批量设置
  $("div").css({
      width: "100px",
      height: "100px",
      background: "red"
  });

  // 4.获取CSS样式值
  console.log($("div").css("background"));;
```

##### jQuery位置和尺寸操作的方法

```javascript
var btns = document.getElementsByTagName("button");
// 监听获取
btns[0].onclick = function () {
    // 获取元素的宽度
    console.log($(".father").width());
    // offset([coordinates])
    // 作用: 获取元素距离窗口的偏移位
    console.log($(".son").offset().left);
    // position()
    // 作用: 获取元素距离定位元素的偏移位
    console.log($(".son").position().left);
}
// 监听设置
btns[1].onclick = function () {
    // 设置元素的宽度
    $(".father").width("500px")

    $(".son").offset({
        left: 10
    });

    // 注意点: position方法只能获取不能设置
    // $(".son").position({
    //     left: 10
    // });

    $(".son").css({
        left: "10px"
    });
}
```

##### jQuery的scrollTop方法

```javascript
var btns = document.getElementsByTagName("button");
// 监听获取
btns[0].onclick = function () {
    // 获取滚动的偏移位
    console.log($(".scroll").scrollTop());
    // 获取网页滚动的偏移位
    // 注意点: 为了保证浏览器的兼容, 获取网页滚动的偏移位需要按照如下写法
    console.log($("body").scrollTop()+$("html").scrollTop());
}
btns[1].onclick = function () {
    // 设置滚动的偏移位
    $(".scroll").scrollTop(300);
    // 设置网页滚动偏移位
    // 注意点: 为了保证浏览器的兼容, 设置网页滚动偏移位的时候必须按照如下写法
    $("html,body").scrollTop(300);
}
```

##### jQuery事件绑定

```javascript
 /*
  jQuery中有两种绑定事件方式
  1.eventName(fn);
  编码效率略高/ 部分事件jQuery没有实现,所以不能添加
  2.on(eventName, fn);
  编码效率略低/ 所有js事件都可以添加

  注意点:
  可以添加多个相同或者不同类型的事件,不会覆盖
  */
  $("button").click(function () {
      alert("hello lnj");
  });
  $("button").click(function () {
      alert("hello 123");
  });
  $("button").mouseleave(function () {
      alert("hello mouseleave");
  });
  $("button").mouseenter(function () {
      alert("hello mouseenter");
  });
  $("button").on("click", function () {
      alert("hello click1");
  });
  $("button").on("click", function () {
      alert("hello click2");
  });
  $("button").on("mouseleave", function () {
      alert("hello mouseleave");
  });
  $("button").on("mouseenter", function () {
      alert("hello mouseenter");
  });
```

##### jQuery事件移除

```javascript
function test1() {
    alert("hello lnj");
}
function test2() {
    alert("hello 123");
}
// 编写jQuery相关代码
$("button").click(test1);
$("button").click(test2);
$("button").mouseleave(function () {
    alert("hello mouseleave");
});
$("button").mouseenter(function () {
    alert("hello mouseenter");
});

// off方法如果不传递参数, 会移除所有的事件
// $("button").off();
// off方法如果传递一个参数, 会移除所有指定类型的事件
// $("button").off("click");
// off方法如果传递两个参数, 会移除所有指定类型的指定事件
$("button").off("click", test1);
```

##### jQuery事件冒泡和默行为

```javascript
 /*
  1.什么是事件冒泡?
  2.如何阻止事件冒泡
  3.什么是默认行为?
  4.如何阻止默认行为
  */
 
  $(".son").click(function (event) {
      alert("son");
      // return false;
      event.stopPropagation();
  });
  $(".father").click(function () {
      alert("father");
  });

  $("a").click(function (event) {
      alert("弹出注册框");
      // return false;
      event.preventDefault();
  });
```

##### jQuery事件自动触发

```javascript
$(".son").click(function (event) {
    alert("son");
});

$(".father").click(function () {
    alert("father");
});
$(".father").trigger("click");
$(".father").triggerHandler("click");

/*
trigger: 如果利用trigger自动触发事件,会触发事件冒泡
triggerHandler: 如果利用triggerHandler自动触发事件, 不会触发事件冒泡
*/
$(".son").trigger("click");
$(".son").triggerHandler("click");

$("input[type='submit']").click(function () {
    alert("submit");
});

/*
trigger: 如果利用trigger自动触发事件,会触发默认行为
triggerHandler: 如果利用triggerHandler自动触发事件, 不会触发默认行为
*/
$("input[type='submit']").trigger("click");
$("input[type='submit']").triggerHandler("click");


$("span").click(function () {
    alert("a");
});
$("a").triggerHandler("click");
$("span").trigger("click");
```

##### jQuery自定义事件

```javascript
// $(".son").myClick(function (event) {
//     alert("son");
// });
/*
想要自定义事件, 必须满足两个条件
1.事件必须是通过on绑定的
2.事件必须通过trigger来触发
*/
$(".son").on("myClick", function () {
    alert("son");
});
$(".son").triggerHandler("myClick");
```

##### jQuery事件命名空间

```javascript
 /*
  想要事件的命名空间有效,必须满足两个条件
  1.事件是通过on来绑定的
  2.通过trigger触发事件
  */
  // 绑定的两个点击事件，点击时都会触发
  $(".son").on("click.zs", function () {
      alert("click1");
  });
  $(".son").on("click.ls", function () {
      alert("click2");
  });
  // $(".son").trigger("click.zs");
  $(".son").trigger("click.ls");
```

##### jQuery事件命名空间面试题

```javascript
 $(".father").on("click", function () {
      alert("father click2");
  });
  $(".father").on("click.ls", function () {
      alert("father click1");
  });
  $(".father").on("click.nn", function () {
      alert("father click3");
  });
  $(".son").on("click.ls", function () {
      alert("son click1");
  });
  /*
  利用trigger触发子元素带命名空间的事件, 那么父元素带相同命名空间的事件也会被触发. 而父元素没有命名空间的事件不会被触发
  利用trigger触发子元素不带命名空间的事件,那么子元素所有相同类型的事件和父元素所有相同类型的事件都会被触发
  */
  $(".son").trigger("click.ls"); // alert("son click1");     alert("father click1");

  // $(".son").trigger("click");
  //  alert("son click1"); alert("father click2");  alert("father click1"); alert("father click3");
```

##### jQuery事件委托

```javascript
  1.什么是事件委托?
  请别人帮忙做事情, 然后将做完的结果反馈给我们
  */
  $("button").click(function () {
      $("ul").append("<li>我是新增的li</li>");
  })

  /*
  在jQuery中,如果通过核心函数找到的元素不止一个, 那么在添加事件的时候,jQuery会遍历所有找到的元素,给所有找到的元素添加事件
  */ 
  // 这种方式不会对后添加的元素添加事件
  $("ul>li").click(function () {
      console.log($(this).html());
  });
  /*
  以下代码的含义, 让ul帮li监听click事件
  之所以能够监听, 是因为入口函数执行的时候ul就已经存在了, 所以能够添加事件
  之所以this是li,是因为我们点击的是li, 而li没有click事件, 所以事件冒泡传递给了ul,ul响应了事件, 既然事件是从li传递过来的,所以ul必然指定this是谁
  */
  // $("ul").delegate("li", "click", function () {
  //     console.log($(this).html());
  // });
```

##### jQuery事件委托练习

```javascript
$(function () {
    // 编写jQuery相关代码
    $("a").click(function () {
        var $mask = $("<div class=\"mask\">\n" +
            "    <div class=\"login\">\n" +
            "        <img src=\"images/login.png\" alt=\"\">\n" +
            "        <span></span>\n" +
            "    </div>\n" +
            "</div>");
        // 添加蒙版
        $("body").append($mask);
        $("body").delegate(".login>span", "click", function () {
            // 移除蒙版
            $mask.remove();
        });
        return false;
    });
});
```

##### jQuery移入移出事件

```javascript
 /*
  mouseover/mouseout事件, 子元素被移入移出也会触发父元素的事件
  */

  $(".father").mouseover(function () {
      console.log("father被移入了");
  });
  $(".father").mouseout(function () {
      console.log("father被移出了");
  });


   // 1.监听li的移入事件
    $("li").mouseenter(function () {
        $(this).addClass("current");
    });
    // 2.监听li的移出事件
    $("li").mouseleave(function () {
        $(this).removeClass("current");
    });

    $("li").hover(function () {
        $(this).addClass("current");
    }, function () {
        $(this).removeClass("current");
    });
```

##### TAB选项卡

```javascript
// 1.监听选项卡的移入事件
$(".nav>li").mouseenter(function () {
    // 1.1修改被移入选项卡的背景颜色
    $(this).addClass("current");
    // 1.2还原其它兄弟选项卡的背景颜色
    $(this).siblings().removeClass("current");
    // 1.3获取当前移出选项卡的索引
    var index = $(this).index();
    // 1.4根据索引找到对应的图片
    var $li = $(".content>li").eq(index);
    // 1.5隐藏非当前的其它图片
    $li.siblings().removeClass("show");
    // 1.6显示对应的图片
    $li.addClass("show");
});
```

##### jQuery显示和隐藏动画

```javascript
 $("button").eq(0).click(function () {
      // $("div").css("display", "block");
      // 注意: 这里的时间是毫秒
      $("div").show(1000, function () {
          // 作用: 动画执行完毕之后调用
          alert("显示动画执行完毕");
      });
  });
  $("button").eq(1).click(function () {
      // $("div").css("display", "none");
      $("div").hide(1000, function () {
          alert("隐藏动画执行完毕");
      });
  });
  $("button").eq(2).click(function () {
      $("div").toggle(1000, function () {
          alert("切换动画执行完毕");
      });
  });
```

##### 对联广告

```javascript
$(window).scroll(function () {
    // 1.1获取网页滚动的偏移位
    var offset = $("html,body").scrollTop();
    // 1.2判断网页是否滚动到了指定的位置
    if(offset >= 500){
        // 1.3显示广告
        $("img").show(1000);
    }else{
        // 1.4隐藏广告
        $("img").hide(1000);
    }
});
```

##### jQuery展开和收起动画

```javascript
  $("button").eq(0).click(function () {
      $("div").slideDown(1000, function () {
          alert("展开完毕");
      });
  });
  $("button").eq(1).click(function () {
      $("div").slideUp(1000, function () {
          alert("收起完毕");
      });
  });
  $("button").eq(2).click(function () {
      $("div").slideToggle(1000, function () {
          alert("收起完毕");
      });
  });
```

##### 折叠菜单

```javascript
  $(".nav>li").click(function () {
      // 1.1拿到二级菜单
      var $sub = $(this).children(".sub");
      // 1.2让二级菜单展开
      $sub.slideDown(1000);
      // 1.3拿到所有非当前的二级菜单
      var otherSub = $(this).siblings().children(".sub");
      // 1.4让所有非当前的二级菜单收起
      otherSub.slideUp(1000);
      // 1.5让被点击的一级菜单箭头旋转
      $(this).addClass("current");
      // 1.6让所有非被点击的一级菜单箭头还原
      $(this).siblings().removeClass("current");
  });
```

##### 下拉菜单

```javascript
  /*
  在jQuery中如果需要执行动画, 建议在执行动画之前先调用stop方法,然后再执行动画
  */
  // 1.监听一级菜单的移入事件
  $(".nav>li").mouseenter(function () {
      // 1.1拿到二级菜单
      var $sub = $(this).children(".sub");
      // 停止当前正在运行的动画：
      $sub.stop();
      // 1.2让二级菜单展开
      $sub.slideDown(1000);
  });
  // 2.监听一级菜单的移出事件
  $(".nav>li").mouseleave(function () {
      // 1.1拿到二级菜单
      var $sub = $(this).children(".sub");
      // 停止当前正在运行的动画：
      $sub.stop();
      // 1.2让二级菜单收起
      $sub.slideUp(1000);
  });
```
##### jQuery淡入淡出动画
```javascript
  $("button").eq(0).click(function () {
      $("div").fadeIn(1000, function () {
          alert("淡入完毕");
      });
  });
  $("button").eq(1).click(function () {
      $("div").fadeOut(1000, function () {
          alert("淡出完毕");
      });
  });
  $("button").eq(2).click(function () {
      $("div").fadeToggle(1000, function () {
          alert("切换完毕");
      });
  });
  $("button").eq(3).click(function () {
      $("div").fadeTo(1000, 0.2, function () {
          alert("淡入完毕");
      })
  });
```
##### jQuery自定义动画
```javascript
$("button").eq(0).click(function () {
    /*
    $(".one").animate({
        width: 500
    }, 1000, function () {
        alert("自定义动画执行完毕");
    });
    */
    $(".one").animate({
        marginLeft: 500
    }, 5000, function () {
        // alert("自定义动画执行完毕");
    });
    /*
    第一个参数: 接收一个对象, 可以在对象中修改属性
    第二个参数: 指定动画时长
    第三个参数: 指定动画节奏, 默认就是swing
    第四个参数: 动画执行完毕之后的回调函数
    */
    $(".two").animate({
        marginLeft: 500
    }, 5000, "linear", function () {
        // alert("自定义动画执行完毕");
    });
})
$("button").eq(1).click(function () {
    $(".one").animate({
        width: "+=100"
    }, 1000, function () {
        alert("自定义动画执行完毕");
    });
});
$("button").eq(2).click(function () {
    $(".one").animate({
        // width: "hide"
        width: "toggle"
    }, 1000, function () {
        alert("自定义动画执行完毕");
    });
})
```
##### jQuery的stop和delay方法

```javascript
  $("button").eq(0).click(function () {
      /*
      在jQuery的{}中可以同时修改多个属性, 多个属性的动画也会同时执行
      */
      
      $(".one").animate({
          width: 500
          // height: 500
      }, 1000);

      $(".one").animate({
          height: 500
      }, 1000);
      
      /*
      delay方法的作用就是用于告诉系统延迟时长
      */
      
      $(".one").animate({
          width: 500
          // height: 500
      }, 1000).delay(2000).animate({
          height: 500
      }, 1000);
      
      // 下面动画依次进行
      $(".one").animate({
          width: 500
      }, 1000);
      $(".one").animate({
          height: 500
      }, 1000);

      $(".one").animate({
          width: 100
      }, 1000);
      $(".one").animate({
          height: 100
      }, 1000);
  });
  $("button").eq(1).click(function () {
      // 立即停止当前动画, 继续执行后续的动画
      // $("div").stop();
      // $("div").stop(false);
      // $("div").stop(false, false);

      // 立即停止当前和后续所有的动画
      // $("div").stop(true);
      // $("div").stop(true, false);

      // 立即完成当前的, 继续执行后续动画
      // $("div").stop(false, true);

      // 立即完成当前的, 并且停止后续所有的
      $("div").stop(true, true);
  });
```


##### 图标特效

```javascript
  // 1.遍历所有的li
  $("li").each(function (index, ele) {
      // 1.1生成新的图片位置
      var $url = "url(\"images/bg.png\") no-repeat 0 "+(index * -24)+"px"
      // 1.2设置新的图片位置
      $(this).children("span").css("background", $url);
  });
  
  // 2.监听li移入事件
  $("li").mouseenter(function () {
      // 2.1将图标往上移动
      $(this).children("span").animate({
          top: -50
      }, 1000, function () {
          // 2.2将图片往下移动
          $(this).css("top", "50px");
          // 2.3将图片复位
          $(this).animate({
              top: 0
          }, 1000);
      });
  });

```



##### 无限循环滚动（轮播）

```javascript
   // 0.定义变量保存偏移位
  var offset = 0;
  // 1.让图片滚动起来
  var timer;
  function autoPlay(){
      timer = setInterval(function () {
          offset += -5;
          if(offset <= -1200){
              offset = 0;
          }
          $("ul").css("marginLeft", offset);
      }, 50);
  }
  autoPlay();

  // 2.监听li的移入和移出事件
  $("li").hover(function () {
      // 停止滚动
      clearInterval(timer);
      // 给非当前选中添加蒙版
      $(this).siblings().fadeTo(100, 0.5);
      // 去除当前选中的蒙版
      $(this).fadeTo(100, 1);
  }, function () {
      // 继续滚动
      autoPlay();
      // 去除所有的蒙版
      $("li").fadeTo(100, 1);
  });

```



##### jQuery添加节点相关方法

```javascript
  /*
  内部插入
  append(content|fn)
  appendTo(content)
  会将元素添加到指定元素内部的最后

  prepend(content|fn)
  prependTo(content)
  会将元素添加到指定元素内部的最前面


  外部插入
  after(content|fn)
  会将元素添加到指定元素外部的后面

  before(content|fn)
  会将元素添加到指定元素外部的前面

  insertAfter(content)
  insertBefore(content)
  */
  $("button").click(function () {
      // 1.创建一个节点
      var $li = $("<li>新增的li</li>");
      // 2.添加节点
      $("ul").append($li);
      $("ul").prepend($li);

      // $li.appendTo("ul");
      // $li.prependTo("ul");


      // $("ul").after($li);
      // $("ul").before($li);
      // $li.insertAfter("ul");
  });

```


##### jQuery删除节点相关方法

```javascript
  /*
  删除
  remove([expr])
  删除指定元素
  empty()
  删除指定元素的内容和子元素, 指定元素自身不会被删除
  detach([expr])
  */
  $("button").click(function () {
      // $("div").remove();
      // $("div").empty();
      // $("li").remove(".item");

      // 利用remove删除之后再重新添加,原有的事件无法响应
      // var $div = $("div").remove();
      // 利用detach删除之后再重新添加,原有事件可以响应
      var $div = $("div").detach();
      // console.log($div);
      $("body").append($div);
  });
  $("div").click(function () {
      alert("div被点击了");
  });

```


##### jQuery替换节点相关方法

```javascript
   /*
    替换
    replaceWith(content|fn)
    replaceAll(selector)
    替换所有匹配的元素为指定的元素
    */
    $("button").click(function () {
        // 1.新建一个元素
        var $h6 = $("<h6>我是标题6</h6>");
        // 2.替换元素
        // $("h1").replaceWith($h6);
        $h6.replaceAll("h1");
    });

```

##### jQuery复制节点相关方法

```javascript
    // clone([Even[,deepEven]])
    /*
    如果传入false就是浅复制, 如果传入true就是深复制
    浅复制只会复制元素, 不会复制元素的事件
    深复制会复制元素, 而且还会复制元素的事件
    */
    $("button").eq(0).click(function () {
        // 1.浅复制一个元素
        var $li = $("li:first").clone(false);
        // 2.将复制的元素添加到ul中
        $("ul").append($li);
    });
    $("button").eq(1).click(function () {
        // 1.深复制一个元素
        var $li = $("li:first").clone(true);
        // 2.将复制的元素添加到ul中
        $("ul").append($li);
    });

    $("li").click(function () {
        alert($(this).html());
    });

```