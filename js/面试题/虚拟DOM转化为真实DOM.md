# 实现虚拟DOM转化为真实DOM

```
// 输入代码：
const el = require('./element.js')；
const ul = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item'}, ['Item 3'])
])
const ulRoot = ul.render();
document.body.appendChild(ulRoot);

// 代码输出：
<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
  <li class='item'>Item 3</li>
</ul>

// 编码实现element.js?

```

```
<!-- html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>

```

```
//script.js
var el = require("./element.js")
window.onload = function(){
const ul = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item'}, ['Item 3'])
])
const ulRoot = ul.render();
document.body.appendChild(ulRoot);
}

```

```
//element.js
function Element(tagName,props,children){
  this.tagName = tagName
  this.props = props
  this.children = children
}

Element.prototype.render = function(){
  var el = document.createElement(this.tagName) //创建DOM元素
  var props = this.props

  for(propName in props){
    var propVal = props[propName]
    el.setAttribute(propName,propVal) //给DOM元素添加属性
  }

  var children = this.children || []
  children.forEach(child=>{
    el.appendChild((child instanceof Element)? child.render():document.createTextNode(child))
  })
  return el
}

module.exports = function(tagName,props,children){
  return new Element(tagName,props,children)
}

```

思路：观察script.js中的el是element.js导出的一个函数，通过这个函数可以生成的实例可以调用自己的render方法生成新的dom元素，所以可知element.js导出的函数是一个对象（实例）生成器，通过传入相应的属性可以获得实例，因此在element.js中应该还有一个构造函数，他接收这些属性并且拥有render方法，利用这些属性生成dom元素。到这里，其实重点来到了如何去写Element.prototype.render方法。首先使用`document.createElement(this.tagName)`创建DOM元素el，再使用`el.setAttribute(propName,propVal)`循环的为此元素增加属性，之后就是 `el.appendChild((child instanceof Element)? child.render():document.createTextNode(child))`为el.children增加子元素，在这里需要判断child是否是element或者只是普通的text，如果是element还要递归调用render函数。多次调用dom API需要一定的熟练度。


作者：Monst100951链接：https://juejin.cn/post/6844904122517291021