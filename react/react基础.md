## noticeInvestIdReact 是什么

React 是一个用于构建用户界面的 javascript 库。

React 主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。

React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。

React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

## React 特点

1、声明式的设计

2、高效，采用虚拟DOM来实现DOM的渲染，最大限度的减少DOM的操作。

3、灵活，跟其他库灵活搭配使用。

4、JSX，俗称JS里面写HTML，JavaScript语法的扩展。

5、组件化，模块化。代码容易复用。

6、单向数据流。没有实现数据的双向绑定。数据 =》视图 =》事件 =》数据

## 创建项目

1、直接通过script 标签引入使用。这种方式大多数用于学习调试使用.

```
// React 的核心库
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
// 提供与 DOM 相关的功能
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<!-- 生产环境中不建议使用 -->
// 在浏览器中使用 Babel 来编译 JSX 效率是非常低的。
// Babel 可以将 ES6 代码转为 ES5 代码,Babel 内嵌了对 JSX 的支持。
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```

2、通过react的脚手架，创建项目进行开发，部署。

```
//安装脚手架create-react-app。
cnpm install -g create-react-app
// 创建项目
create-react-app myapp(项目名称可以自定义)
```

## React元素渲染

```
const h1 = <h1>hello world</h1>;
// 使用JSX的写法，可以创建JS元素对象
// 注意：JSX元素对象，或者组件对象，必须只有1个根元素（根节点）
ReactDOM.render(
    h1,
    document.getElementById('example')
);
```

React 元素都是不可变的。当元素被创建之后，你是无法改变其内容或属性的。

目前更新界面的唯一办法是创建一个新的元素，然后将它传入 ReactDOM.render() 方法：

```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('example')
  );
}
 
setInterval(tick, 1000);
```

还可以将要展示的部分封装起来，以下实例用一个函数来表示：

```
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
 
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('example')
  );
}
 
setInterval(tick, 1000);
```

除了函数外我们还可以创建一个 React.Component 的 ES6 类，该类封装了要展示的元素，需要注意的是在 render() 方法中，需要使用 **this.props** 替换 **props**：

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
 
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('example')
  );
}
 
setInterval(tick, 1000);
```

## React JSX

JSX是一种JavaScript的语法扩展，运用于 React 架构中，其格式比较像是模版语言，但事实上完全是在 JavaScript 内部实现的。元素是构成React应用的最小单位，JSX就是用来声明React当中的元素，React使用JSX来描述用户界面。

优点：

- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。

注意：

1、JSX必须要有根节点。

2、正常的普通HTML元素要小写。如果是大写，默认认为是组件。

3、*由于 JSX 就是 JavaScript，一些标识符像* `class` *和* `for` *不建议作为 XML 属性名。作为替代，React DOM 使用* `className` *和* `htmlFor` *来做对应的属性。*

### JSX表达式

1、由HTML元素构成

2、中间如果需要插入变量用{}

3、{}中间可以使用表达式

4、{}中间表达式中可以使用JSX对象

5、属性和html内容一样都是用{}来插入内容

### 样式

React 推荐使用内联样式。我们可以使用 **camelCase** 语法来设置内联样式。React 会在指定元素数字后自动添加 **px** 。

```
const myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```

### 注释

注释需要写在花括号中

```
ReactDOM.render(
    <div>
    <h1>hello world</h1>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```

### 数组

JSX 允许在模板中插入数组，数组会自动展开所有成员

```
const arr = [
  <h1>hello world</h1>,
  <h2>react</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```

## React 组件

函数式组件与类组件的区别和使用，函数式比较简单，一般用于静态没有交互事件内容的组件页面。类组件，一般又称为动态组件，那么一般会有交互或者数据修改的操作。

1、函数式组件

```
function Childcom(props){
    console.log(props)
    let title = <h2>我是副标题</h2>
    let weather = props.weather
    //条件判断 
    let isGo = weather=='下雨' ?"不出门":"出门"

    return (
        <div>
            <h1>函数式组件helloworld</h1>
            {title}
            <div>
                是否出门？
                <span>{isGo}</span>
            </div>
        </div>
    )
}

```

2、类组件

```
class HelloWorld extends React.Component{
    render(){
        console.log(this)
        return (
        	<div>
                <h1>类组件定义HELLOWORLD</h1>
                <h1>hello:{this.props.name}</h1>
                <Childcom weather={this.props.weather} />
            </div>
        )
    }
}
```

3、复合组件：组件中又有其他的组件，复合组件中既可以有类组件又可以有函数组件。

```
import React from 'react';
import ReactDOM from 'react-dom';
import './04style.css';
//函数式组件
function Childcom(props){
    console.log(props)

    let title = <h2>我是副标题</h2>
    let weather = props.weather
    //条件判断 
    let isGo = weather=='下雨' ?"不出门":"出门"

    return (
        <div>
            <h1>函数式组件helloworld</h1>
            {title}

            <div>
                是否出门？
                <span>{isGo}</span>
            </div>
        </div>
    )
}

//类组件定义
class HelloWorld extends React.Component{
    render(){
        console.log(this)
        //返回的都是JSX对象
         return (
            <div>
                <h1>类组件定义HELLOWORLD</h1>
                <h1>hello:{this.props.name}</h1>
                <Childcom weather={this.props.weather} />
            </div>
        )
    }
}

// ReactDOM.render(
//     <Childcom weather="出太阳" />,
//     document.querySelector('#root')
// )

ReactDOM.render(
    <HelloWorld name="老陈" weather="下雨" />,
    document.querySelector('#root')
)


```

*原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 HelloWorld 不能写成 helloWorld。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。*

## React State(状态)

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM），相当于 vue 的 data ,但是使用方式跟vue不一致。

React.Component 的 ES6 类中使用 this.setState() 去改变 state 对象内的值。数据自顶向下流动(单向数据流)。

