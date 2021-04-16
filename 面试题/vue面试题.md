[TOC]

# 1. vue优点？

答：轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；

简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；

双向数据绑定：保留了angular的特点，在数据操作方面更为简单；

组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；

视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；

虚拟DOM：dom操作是非常耗费性能的， 不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；

运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势。

# 2. vue父组件向子组件传递数据？

- 通过prop传值，单向数据流。

- 依赖注入：父组件通过`provide` 选项向后代组件提供数据/方法，后代组件使用 `inject` 选项来接收指定的property。如：

  ```
  // 父组件
  provide: function () {
    return {
      getMap: this.getMap
    }
  }
   
  // 后代组件
  inject: ['getMap']
  ```

  

# 3. 子组件向父组件传递值？

答：通过$emit触发父组件传递方法，并传值。

# 4. v-show和v-if指令的共同点和不同点？

答: 共同点：都能控制元素的显示和隐藏；

不同点：实现本质方法不同，v-show本质就是通过控制css中的display设置为none，控制隐藏，只会编译一次；v-if是动态的向DOM树内添加或者删除DOM元素，`v-if` 是**惰性的**，若初始值为false，就不会渲染了。而且v-if不停的销毁和创建比较消耗性能。

总结：一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

# 5. 如何让CSS只在当前组件中起作用？

答：在组件中的style前面加上scoped标记，实现样式私有化。原理是经过编译后，当前组件所有标签添加上一个 data-v-hash 的属性，当前样式表的所有尾部选择器后面也会加上该属性，那么就使得当前组件内的样式只作用域当前组件内的元素。

引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染。此时只能通过特殊的方式，穿透scoped：

方法一: 通过外联css(即在外创建.css文件,在组件的\<style scoped>\</style>中通过@import引入)
原理: 通过@import引入,外联样式表的所有尾部选择器后面不会加上data-v-hash属性
缺点: 会造成有多个css文件,若在子组件中应用时,因为通过@import引入的文件是没有data-v-hash唯一标识的,即这个文件的样式会造成组件间的污染
适用场景: 设置所有组件的全局样式时使用,即应用在app.vue

方法二: 在同一个组件, 同时存在两个\<style scoped>\</style>,\<style>\</style>
原理: 不加scoped的style,所有尾部选择器后面不会加上data-v-hash属性
优点: 方便修改
缺点: 若不是独一无二的class类,不带scoped的可能造成全局污染
使用场景: 该组件中有一个独一无二的class类进行包裹

方法三(推荐): 使用深度选择器(也叫样式穿透)
注意: (less,sass,scss等预编译)使用(/deep/或者::v-deep),非预编译的话是(>>>)
原理: 会将 /deep/或>>> 替换成对应组件的 hash 值
优点: 可以在scoped直接修改子组件样式
缺点: 没有缺点,实在说有缺点的话,就是要写(/deep/或>>>，::v-deep)
使用场景: 所有
注意: 使用/deep/在同等情况下,默认父组件设置的子组件样式权重比子组件内的高,但子组件设置的样式有嵌套父类,则子组件的高,但父组件也可以嵌套同样的父类,这样父组件权重还是比子组件的高。

# 6. \<keep-alive>\</keep-alive>的作用是什么?



答:keep-alive 是 Vue 内置的一个组件，可以使被包含的组件实例能够被在它们第一次被创建的时候缓存下来，或避免重新渲染。

# 7. 如何获取dom?

答：ref="domName" 用法：this.$refs.domName

# 8. 说出几种vue当中的指令和它的用法？

答：v-model双向数据绑定；

v-for循环；

v-if v-show 显示与隐藏；

v-on事件；v-once: 只绑定一次。

# 9.  vue-loader是什么？使用它的用途有哪些？

答：vue文件的一个加载器，将template/js/style转换成js模块。

用途：js可以写es6、style样式可以scss或less、template可以加jade等

# 10. 为什么使用key?

答：需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。

作用主要是为了高效的更新虚拟DOM。

# 11. axios及安装?

答：请求后台资源的模块。npm install axios --save装好，

js中使用import进来，然后.get或.post。返回在.then函数中如果成功，失败则是在.catch函数中。

# 12. v-modal的使用。

答：v-model用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：

v-bind绑定一个value属性；

v-on指令给当前元素绑定input事件。

# 13. 请说出vue.cli项目中src目录每个文件夹和文件的用法？

答：assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置; app.vue是一个应用主组件；main.js是入口文件。

# 14. 分别简述computed和watch的使用场景

答：computed:

　　　　当一个属性受多个属性影响的时候就需要用到computed

　　　　最典型的栗子： 购物车商品结算的时候

watch:

　　　　当一条数据影响多条数据的时候就需要用watch

　　　　栗子：搜索数据

# 15. v-on可以监听多个方法吗？

答：可以，栗子：<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur, }">。

# 16. $nextTick的使用

答：vue实现响应式并不是数据发生变化后dom立即变化，而是按照一定的策略来进行dom更新。

当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值，

你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后在获取，才能成功。

# 17. vue组件中data为什么必须是一个函数？

答：因为JavaScript的特性所导致，在component中，data必须以函数的形式存在，不可以是对象。

　　组件中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个data，这样改一个全都改了。

# 18. 渐进式框架的理解

答：主张最少；可以根据不同的需求选择不同的层级；

# 19. Vue中双向数据绑定是如何实现的？

答：vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；

核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。

# 20. 单页面应用和多页面应用区别及优缺点

答：单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。

多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新

单页面的优点：

用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。

单页面缺点：

不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。

# 21. v-if和v-for的优先级

答：当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中。所以，不推荐v-if和v-for同时使用。

如果v-if和v-for一起用的话，vue中的的会自动提示v-if应该放到外层去。

# 22. assets和static的区别

答：相同点：assets和static两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下，这是相同点

不相同点：assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器。static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是static中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于assets中打包后的文件提交较大点。在服务器中就会占据更大的空间。

建议：将项目中template需要的样式文件js文件等都可以放置在assets中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css等文件可以放置在static中，因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。

# 23. vue常用的修饰符

答：.stop：等同于JavaScript中的event.stopPropagation()，防止事件冒泡；

.prevent：等同于JavaScript中的event.preventDefault()，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；

.capture：与事件冒泡的方向相反，事件捕获由外到内；

.self：只会触发自己范围内的事件，不包含子元素；

.once：只会触发一次。

# 24. vue的两个核心点

答：数据驱动、组件系统

数据驱动：ViewModel，保证数据和视图的一致性。

组件系统：应用类UI可以看作全部是由组件树构成的。

# 25. vue和jQuery的区别

答：jQuery是使用选择器（$）选取DOM对象，对其进行赋值、取值、事件绑定等操作，其实和原生的HTML的区别只在于可以更方便的选取和操作DOM对象，而数据和界面是在一起的。比如需要获取label标签的内容：$("lable").val();,它还是依赖DOM元素的值。

Vue则是通过Vue对象将数据和View完全分离开来了。对数据进行操作不再需要引用相应的DOM对象，可以说数据和View是分离的，他们通过Vue对象这个vm实现相互的绑定。这就是传说中的MVVM。

# 26. 引进组件的步骤

答: 在template中引入组件；

在script的第一行用import引入路径；

用component中写上组件名称。

# 27. delete和Vue.delete删除数组的区别

答：delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。Vue.delete 直接删除了数组 改变了数组的键值。

# 28. SPA首屏加载慢如何解决

答：安装动态懒加载所需插件；使用CDN资源。

# 29. Vue-router跳转和location.href有什么区别

答：使用location.href='/url'来跳转，简单方便，但是刷新了页面；

使用history.pushState('/url')，无刷新页面，静态跳转；

引进router，然后使用router.push('/url')来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。

其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了history.pushState()，尤其是在history模式下。

# 30. vue slot

答：简单来说，假如父组件需要在子组件内放一些DOM，那么这些DOM是显示、不显示、在哪个地方显示、如何显示，就是slot分发负责的活。

# 31. 你们vue项目是打包了一个js文件，一个css文件，还是有多个文件？

答：根据vue-cli脚手架规范，一个js文件，一个CSS文件。

# 32. Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？

答：Vue路由在Android机上有问题，babel问题，安装babel polypill插件解决。

# 33. Vue2中注册在router-link上事件无效解决方法

答： 使用@click.native。原因：router-link会阻止click事件，.native指直接监听一个原生事件。

# 34. RouterLink在IE和Firefox中不起作用（路由不跳转）的问题

答: 方法一：只用a标签，不适用button标签；方法二：使用button标签和Router.navigate方法

# 35. axios的特点有哪些

答：从浏览器中创建XMLHttpRequests；

node.js创建http请求；

支持Promise API；

拦截请求和响应；

转换请求数据和响应数据；

取消请求；

自动换成json。

axios中的发送字段的参数是data跟params两个，两者的区别在于params是跟请求地址一起发送的，data的作为一个请求体进行发送

params一般适用于get请求，data一般适用于post put 请求。

# 36. 请说下封装 vue 组件的过程？

答：1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os：思考1小时，码码10分钟，程序猿的准则。)

　　2. 准备好组件的数据输入。即分析好逻辑，定好 props 里面的数据、类型。

　　3. 准备好组件的数据输出。即根据组件逻辑，做好要暴露出来的方法。

　　4. 封装完毕了，直接调用即可

# 37. params和query的区别

答：用法：query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。

url地址显示：query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示

注意点：query刷新不会丢失query里面的数据

params刷新 会 丢失 params里面的数据。

# 38. vue初始化页面闪动问题

答：使用vue开发时，在vue初始化之前，由于div是不归vue管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于{{message}}的字样，虽然一般情况下这个时间很短暂，但是我们还是有必要让解决这个问题的。

首先：在css里加上[v-cloak] {

display: none;

}。

如果没有彻底解决问题，则在根元素加上style="display: none;" :style="{display: 'block'}"

# 39. vue更新数组时触发视图更新的方法

答:push()；pop()；shift()；unshift()；splice()； sort()；reverse()

# 40. vue常用的UI组件库

答：Mint UI，element，VUX

# 41. vue修改打包后静态资源路径的修改

答：cli2版本：将 config/index.js 里的 assetsPublicPath 的值改为 './' 。

```
build: {

...

assetsPublicPath: './',

...

}

```

...

assetsPublicPath: './',

...

}

```

cli3版本：在根目录下新建vue.config.js 文件，然后加上以下内容：（如果已经有此文件就直接修改）

```
module.exports = {
	publicPath: '', // 相对于 HTML 页面（目录相同）
}
```

publicPath: '', // 相对于 HTML 页面（目录相同） }

# 42、组件之间的通信（父子组件、兄弟组件、跨级组件）

下面我们分别介绍每种通信方式:

**（1）props / $emit 适用 父子组件通信**

父传子`props`，子传父 `$on、$emit`。

**（2）ref 与 $parent / $children 适用 父子组件通信**

- `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
- `$parent` / `$children`：访问父 / 子实例

**（3）EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信**

这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。

**（4）$attrs/$listeners 适用于 隔代组件通信**

- `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 `v-bind="$attrs"` 传入内部组件。通常配合 inheritAttrs 选项一起使用。
- `$listeners`：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件

**（5）provide / inject 适用于 隔代组件通信**

祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

# 43、做过哪些Vue的性能优化

优化是个很大的话题，涉及多个方面：

### 编码阶段

- 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
- v-if和v-for不能连用
- 如果需要使用v-for给每项元素绑定事件时使用事件代理
- SPA 页面采用keep-alive缓存组件
- 在更多的情况下，使用v-if替代v-show
- key保证唯一
- 使用路由懒加载、异步组件
- 防抖、节流
- 第三方模块按需导入
- 长列表滚动到可视区域动态加载
- 图片懒加载

### SEO优化

- 预渲染
- 服务端渲染SSR

### 打包优化

- 压缩代码
- Tree Shaking/Scope Hoisting
- 使用cdn加载第三方模块
- 多线程打包happypack
- splitChunks抽离公共文件
- sourceMap优化

### 用户体验

- 骨架屏
- PWA

# 44、SSR是什么？

SSR也就是服务端渲染，`也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端`。

SSR有着更好的SEO、并且首屏加载速度更快等优点。不过它也有一些缺点，比如我们的开发条件会受到限制，服务器端渲染只支持`beforeCreate`和`created`两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境。还有就是服务器会有更大的负载需求。

