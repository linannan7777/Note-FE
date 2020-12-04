```
// ES5写法
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

```
// ES6写法
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

ES6 的`class`可以看作只是一个语法糖。`constructor`就是构造方法，而`this`关键字则代表实例对象。

ES6的`class`里的方法之间不需要逗号分隔，加了会报错。

```javascript
typeof Point // "function"
Point === Point.prototype.constructor // true
```

类的数据类型就是函数，类本身就指向构造函数。使用的时候，也是直接对类使用`new`命令，跟构造函数的用法完全一致。但是类必须使用`new`调用，否则会报错。

类的所有方法都定义在类的`prototype`属性上面。

类的内部所有定义的方法，都是不可枚举的（non-enumerable）。

```
Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

`constructor`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。

`constructor`方法默认返回实例对象（即`this`），也可以指定返回另外一个对象。

使用 `Object.getPrototypeOf` 方法可以获取实例对象的原型

在“类”的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

```
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}
let inst = new MyClass();
inst.prop = 123;
// setter: 123
inst.prop
// 'getter'
```

存值函数和取值函数是设置在属性的 Descriptor 对象上的。

类的属性名，可以采用表达式。

```
let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
```

与函数一样，类也可以使用表达式的形式定义。

```
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
// 类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。
// 如果类的内部没用到的话，可以省略Me
```

使用类应注意：

1、类和模块的内部，默认就是严格模式

2、类不存在变量提升

3、类包含`name`属性

4、如果某个方法之前加上星号（`*`），就表示该方法是一个 Generator 函数。

5、类的方法内部如果含有`this`，它默认指向类的实例。

**静态方法**：在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用。如果静态方法包含`this`关键字，这个`this`指的是类，而不是实例。

静态方法可以与非静态方法重名。

父类的静态方法，可以被子类继承。



实例属性除了定义在`constructor()`方法里面的`this`上面，也可以定义在类的最顶层。