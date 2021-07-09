前端工程化思想一直以来都是一个非常热议的话题，其实前端工程化从技术方面来说，无非就是这么几点：CommonJS、AMD、CMD、UMD和ES6 Modules，那么我们就来说说前端这几个模块。

## 1、CommonJS

说到CommonJS，那就的从他的出发点说起了，commonjs的出发点是js没有完善的模块系统。标准库较少，缺少包管理工具，而在node.js兴起之后。能让js在任何地方运行，特别是服务端，也能具备开发大型项目的能力，所以commonjs也就应用而生了。node.js是commonjs的最佳实践者。他有四个重要的环境变量为模块化的实现提供支持：module、exports、require、global.实际使用时，用module.exports定义当前模块对外输出的接口（不推荐直接使用exports）,用require加载模块。

commonjs用同步的方式加载模块，在服务端，模块文件够存储在本地磁盘，读取会非常快。所以这样做不会有问题。但是在浏览器端，限制于网络等原因，更合理的加载方式应该是异步加载。

暴露模块：module.exports = value;或者exports.xxx = value;

引入模块：const xxx = require('xxxx')

commonjs规范：

- 一个文件就是一个模块，拥有单独的作用域；
- 普通方式定义的变量、函数、对象属于该模块内；
- 通过require来加载模块；
- 通过module.exports或者exports来暴露模块中的内容；

注意：

- 当module.exports和exports同时存在的时候，module.exports会覆盖exports;
- 当模块内全都是exports是，其实就等同于module.exports；
- exports其实就是module.exports的子集；
- 所有代码都是运行在模块作用域，不会污染全局作用域；
- 模块可以被多次加载，但是只是会在第一次运行的时候加载。然后运行结果就会被缓存了。以后的加载就直接读取缓存的结果；
- 模块加载的顺序是按照代码出现的顺序同步加载的；
- `__dirname`代表当前模块所在的文件路径
- `__filename`代表当前模块文件所在的文件路径+文件名

## 2、AMD

Asynchronous Module Definition,异步加载模块。他是在一个在浏览器端模块化的开发规范。不是原生js的规范。使用AMD规范进行页面需求开发，需要用到对应的函数库，require.js。

AMD采用异步加载的模块的方式。模块的加载并不会影响到后面语句的执行。所有以来这个模块的语句都定义在一个回掉函数中，等到加载完成之后，这个回掉函数才会执行。

使用require.js来实现AMD规范的模块化：用require.config()指定引用路径。用define()来定义模块用require来加载模块。

```
define('moduleName',['a','b'],function(ma, mb) {
    return someExportValue;
})

require(['a', 'b'], function(ma, mb) {
    //    do something
})
```

require(['a', 'b'], function(ma, mb) {
    //    do something
})

require主要解决的问题：

- 文件可以有依赖关系，被依赖的文件需要早于依赖它的文件加载的浏览器
- js加载的时候浏览会停滞页面的渲染，加载文件越多，页面响应的时间就会越长
- 异步加载前置

语法：difine(id, dependencies, factory)

- id:可选参数，用来定义模块的标识，如果没有提供该参数，脚本文件名（去掉拓展名）
- dependencies:是一个当前模块要用的模块名称组成的数组
- factory：工厂方法，模块初始化要执行的函数，或者对象，如果改为函数，他应该只被执行一次，如果是对象，此对象应该为模块的输出值。

## 3、CMD

CMD是另一种模块化方案，它和AMD很类似，不同点在于：AMD推崇依赖前置，提前执行，而CMD推崇依赖就近，延迟执行，这个规范其实就是sea.js推广过程产生的。

因为CMD推崇一个文件一个模块。因此经常会用文件名作为模块id,CMD推崇依赖就近，所以一般不在define的参数中写依赖，而是在factory中写：define(id,deps,factory)

factory: function(require,exports,module) {}

- require:factory的第一个参数，用来获取其他模块提供的接口
- exports:一个对象，用来向外提供模块接口
- module:一个对象，上面存储了与当前模块相关联的一些属性和方法

```
//    定义没有依赖的模块
define(function(require, exports, module){
    exports.xxx = value
    module.exports = value
})

//    引入模块
define(function(require, exports, module){
    const m1 = require('./module.js')
    me.show()
})
```

//    定义有依赖的模块
define(function(require, exports, module){
    var module1 = require('./module1.js')
    require.async('./module.js', function(m2) {
        //    do something
    })
    export.xxx = value
})

## 4、UMD

一个整合了commonJS和AMD规范的方法。希望能解决跨平台模块的解决方案。

运行的原理：

UMD会先判断是否支持Node.js的模块（export)是不是存在。存在则使用node.js的模块方式。

再判断是不是支持AMD(define是不是存在。存在则使用AMD方式加载模块。

```
(function(window, factory){
    if (typeof exports === 'object') {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd) {
        define(factory)
    } else {
        window.eventUtil = factory()
    }
})(this,function () {
    //    do something
})
```

## 5、ES6Module

ES6在语言标准的层面上，实现了模块化功能，而且实现的相当简单，旨在成为浏览器和服务器通用的模块化解决方案，其模块化功能主要由俩个命令构成：exports和import，export命令由于规定模块的对外接口，import命令用于输入其他模块的功能。其实ES6还提供了export default的命令。为模块指定默认输出。对应的import语句不需要大括号。这也更接近AMD的引用写法。

ES6模块不是对象，import命令被JavaScript引擎静态分析，在编译的时候就引入模块代码。而不是在代码运行时加载，所以无法实现条件加载。也就使得静态分析成为可能。

（1）export

export可以导出的是对象中包含多个属性、方法，export default只能导出一个可以不具名的函数。我们可以输用import引入。同时我们也可以直接使用require使用，原因是webpack启用了server相关。

（2）import

```
import { fn } from './xxx' //    export导出的方式

import fn from 'xx' //    export default方式
```

import fn from 'xx' //    export default方式
总结：

commonJS是同步加载的，主要是node.js也就是服务端也应用的模块化机制。通过module.exports导出声明。通过require('')加载。每个文件都是一个模块。他有自己的独立的作用域。文件内的变量，属性函数等不能被外界访问，node会将模块缓存，在第二次加载的时候会从缓存中获取。

AMD是异步加载的，主要是在浏览器环境下应用，require.js是遵守AMD规范的模块化工具。它通过define()定义声明，通过require('',function() {})来加载。

ES6模块化加载时，通过exports default导出。用import来导入，可以通过对导出内容进行解构。ES6模块运行机制与commonjs运行机制不一样。js引擎对脚本静态分析的时候，遇到模块加载指令后会生成一个只读引用。等到脚本真正执行的时候。才会通过引用模块中获取值，在引用到执行的过程中，模块中的值发生变化，导入的这里也会跟着发生变化。ES6模块是动态引入的。并不会缓存值。模块里总是绑定其所在的模块。

