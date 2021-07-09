# props

## 理解

1. 每个组件对象都会有props(properties的简写)属性
2. 组件标签的所有属性都保存在props中

##  作用

1. 通过标签属性从组件外向组件内传递变化的数据
2. 注意: 组件内部不要修改props数据

## 编码操作

### 内部读取某个属性值
```
this.props.name
```


#### 对props中的属性值进行类型限制和必要性限制

##### 第一种方式（React v15.5 开始已弃用）：
```
Person.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number
}
```
##### 第二种方式（新）：使用prop-types库进限制（需要引入prop-types库）

```
Person.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.
}
```



### 扩展属性: 将对象的所有属性通过props传递

```
<Person {...person}/>
```

#### 默认属性值：

```
Person.defaultProps = {
  age: 18,
  sex:'男'
}
```
#### 组件类的构造函数

```
constructor(props){
  super(props)
  console.log(props)//打印所有属性
}
```



### props的简写方式

```
	//创建组件
  class Person extends React.Component{

    constructor(props){
      //构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
      // console.log(props);
      super(props)
      console.log('constructor',this.props);
    }

    //对标签属性进行类型、必要性的限制
    static propTypes = {
      name:PropTypes.string.isRequired, //限制name必传，且为字符串
      sex:PropTypes.string,//限制sex为字符串
      age:PropTypes.number,//限制age为数值
    }

    //指定默认标签属性值
    static defaultProps = {
      sex:'男',//sex默认值为男
      age:18 //age默认值为18
    }
    
    render(){
      // console.log(this);
      const {name,age,sex} = this.props
      //props是只读的
      //this.props.name = 'jack' //此行代码会报错，因为props是只读的
      return (
        <ul>
          <li>姓名：{name}</li>
          <li>性别：{sex}</li>
          <li>年龄：{age+1}</li>
        </ul>
      )
    }
  }

  //渲染组件到页面
  ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))

```



### 函数组件的使用

```
//创建组件
function Person (props){
  const {name,age,sex} = props
  return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age}</li>
      </ul>
    )
}
Person.propTypes = {
  name:PropTypes.string.isRequired, //限制name必传，且为字符串
  sex:PropTypes.string,//限制sex为字符串
  age:PropTypes.number,//限制age为数值
}

//指定默认标签属性值
Person.defaultProps = {
  sex:'男',//sex默认值为男
  age:18 //age默认值为18
}
//渲染组件到页面
ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
```

