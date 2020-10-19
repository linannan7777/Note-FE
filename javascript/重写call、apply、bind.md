# 重写Call

在重写之前我们分析一下call到底是怎么执行的

```javaScript
function func(a,b){
    console.log(this,a,b)
}
let obj ={
    name:'Marine'
}
func.call(obj,10,20)
复制代码
```

 1.func首先基于*proto*找到Function.prototype.call,并且让call方法执行

 2.在call方法执行的过程中（call方法中的this->func),把func执行，并且让func中的this变为传递的第一个参数obj，再并且把10/20当作实惨传递给func，最后接收func执行的返回值，把返回值作为call方法的返回值返回

```javascript
// 模拟内置基于c++完成的CALL方法
Function.prototype.myCall = function myCall(context,...params){
   //context->最后要改变的函数中的this指向obj
   //params->最后要传递给函数的实参信息[10,20]
   //this->要处理的函数 fn
   context = context==null?window:context;
   //必须保证context是个对象,因为他将作为函数的this
   let contextType = typeof context;
   if(!/^(object|function)$/i.test(contextType)){
       //context.constructor:当前所属的类
       //context = new context.constructor(context);//=>不适合Symbol/BigInt,Symbol/BigInt不能被new
       context = Object(context)
   }
   let key = Symbol('KEY')
   //把函数当成对象的某个成员,(成员名唯一:防止修改原始对象的结构值)
   context[key] = this;
   //基于“对象[成员]()”方法把函数执行，此时函数中的THIS就是对象(把参数传递给函数，并且接收返回值)
   let result = context[key](...params);
   //设置的成员用完后删除掉
   delete context[key];
   //把函数的返回值作为CALL方法执行的结果返回
   return result;
}
复制代码
```

# 重写Apply

- 和call的区别只是传递的参数是数组

```javascript
Function.prototype.myApply = function myApply(context,params){
    context = context==null?window:context;
    //必须保证context是个对象,因为他将作为函数的this
    let contextType = typeof context;
    if(!/^(object|function)$/i.test(contextType)){
        //context.constructor:当前所属的类
        //context = new context.constructor(context);//=>不适合Symbol/BigInt
        context = Object(context)
    }
    let key = Symbol('KEY')
    //把函数当成对象的某个成员,(成员名唯一:防止修改原始对象的结构值)
    context[key] = this;
    //基于“对象[成员]()”方法把函数执行，此时函数中的THIS就是对象(把参数传递给函数，并且接收返回值)
    let result = context[key](...params);
    //设置的成员用完后删除掉
    delete context[key];
    //把函数的返回值作为CALL方法执行的结果返回
    return result;
}
复制代码
```

# 重写bind

- call/apply:立即执行函数并且修改里面的THIS
- bind：利用柯理化函数的编程思想，预先把“需要执行的函数/改变的THIS/传递的实参”等信息存储在闭包中，后期达到条件(事件出发/定时器等)，先执行返回的匿名函数，在执行匿名函数的过程中，再去改变THIS等 =>THIS和参数的预处理

```javascript
Function.prototype.myBind = function myBind(context,...params){
    //this->处理的函数func
    //context->要改变的函数中的this执行 obj
    //params ->最后给函数传递的实参
    let _this = this;
    return function(...agrs){
        //args->可能传递的事件等信息
        _this.call(context,...params.concat(agrs))
    }
}
```