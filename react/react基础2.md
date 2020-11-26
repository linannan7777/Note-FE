## React Props

父传递给子组件数据，单向流动，不能子传递给父。

props的传值，可以是任意的类型。

Props可以设置默认值

```
HelloMessage.defaultProps = {  name:”老陈”，msg：“helloworld”  } 
```

注意：props可以传递函数，props可以传递父元素的函数，就可以去修改父元素的state,从而达到传递数据给父元素。

Props 验证使用 **propTypes**，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。

```
MyComponent.propTypes = {
    // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
   optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,
 
    // 可以被渲染的对象 numbers, strings, elements 或 array
    optionalNode: React.PropTypes.node,
 
    //  React 元素
    optionalElement: React.PropTypes.element,
 
    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
    optionalMessage: React.PropTypes.instanceOf(Message),
 
    // 用 enum 来限制 prop 只接受指定的值。
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
 
    // 可以是多个对象类型中的一个
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),
 
    // 指定类型组成的数组
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
 
    // 指定类型的属性构成的对象
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
 
    // 特定 shape 参数的对象
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),
 
    // 任意类型加上 `isRequired` 来使 prop 不可空。
    requiredFunc: React.PropTypes.func.isRequired,
 
    // 不可空的任意类型
    requiredAny: React.PropTypes.any.isRequired,
 
    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
  }
}
```

## REACT 事件

- React 事件绑定属性的命名采用驼峰式写法，而不是小写。
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)

```
// HTML 通常写法
<button onclick="activateLasers()">
  激活按钮
</button>

// React 中写法
<button onClick={activateLasers}>
  激活按钮
</button>
```

在 React 中另一个不同是你不能使用返回 **false** 的方式阻止默认行为， 你必须明确的使用 **preventDefault**。因为React返回的事件对象是代理的原生的事件对象。

类的方法默认是不会绑定 this 的。如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。

```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
 
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
 
ReactDOM.render(
  <Toggle />,
  document.getElementById('example')
);
```

解决办法：

1、使用属性初始化器来正确的绑定回调函数：

```
class LoggingButton extends React.Component {
  // 这个语法确保了 `this` 绑定在  handleClick 中
  // 这里只是一个测试
  handleClick = () => {
    console.log('this is:', this);
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

2、可以在回调函数中使用 箭头函数

```
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }
 
  render() {
    //  这个语法确保了 `this` 绑定在  handleClick 中
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
/*
使用这个语法有个问题就是每次 LoggingButton 渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。
*/
```

### 向事件处理程序传递参数

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

两种方式是等价的,参数 e 作为 React 事件对象将会被作为第二个参数进行传递。通过箭头函数的方式，事件对象必须显式的进行传递，但是通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面。

## React 条件渲染

1、直接通过条件运算返回要渲染的JSX对象

2、通过条件运算得出jsx对象，在将JSX对象渲染到模板中。

判断的方法有：

- 元素变量

- 与运算符 &&

- 三目运算符

想要阻止组件渲染可以让 render 方法返回 null 。

## 列表渲染

将列表内容拼装成数组放置到模板中。将数据拼装成数组的JSX对象。

使用数组的map方法，对每一项数据按照JSX的形式进行加工，最终得到每一项都是JSX对象的数组，在将数组渲染到模板中。

组件接收数组参数，每个列表元素分配一个 key，不然会出现警告 **a key should be provided for list items**。

Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。

元素的 key 只有在它和它的兄弟节点对比时才有意义。

数组元素中使用的 key 在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的键。

