### 1、package.json关闭eslint

直接注释掉package.json文件中eslint的配置

```
"eslintConfig": {
  "root": true,此项是用来告诉eslint找当前配置文件不能往父级查找
  "env": {
    "node": true//此项指定环境的全局变量，下面的配置指定为node环境
  },
  "extends": [// 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    "plugin:vue/essential",
    "@vue/standard"
  ],
  "rules": {//规则配置写在这里
    "indent": [1, 4]
  },
  "parserOptions": {
    "parser": "babel-eslint"//此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  }
},
```

或者vue.config.js中将以下三项设置为false

```
devServer: {
  overlay: {
      warnings: false,
      errors: false
  },
  lintOnSave: false
}
```

### 2、修改eslint的语法检测，文件为根目录下的 package.json文件（规则写在rules内）

格式：

```
rules: {
	"规则名": [规则值, 规则配置]
}
```

规则值：

```
"off"或者0    //关闭规则关闭
"warn"或者1    //在打开的规则作为警告（不影响退出代码）
"error"或者2    //把规则作为一个错误（退出代码触发时为1）
```

部分eslint 规则配置参数

```
"no-alert": 0,//禁止使用alert confirm prompt
"no-array-constructor": 2,//禁止使用数组构造器
"no-bitwise": 0,//禁止使用按位运算符
"no-caller": 1,//禁止使用arguments.caller或arguments.callee
"no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
"no-class-assign": 2,//禁止给类赋值
"no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
"no-console": 2,//禁止使用console
"no-const-assign": 2,//禁止修改const声明的变量
"no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
"no-continue": 0,//禁止使用continue
"no-control-regex": 2,//禁止在正则表达式中使用控制字符
"no-debugger": 2,//禁止使用debugger
"no-delete-var": 2,//不能对var声明的变量使用delete操作符
"no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
"no-dupe-args": 2,//函数参数不能重复
```

### 3.vue cli关闭eslint

找到`.eslintrc.js`的文件中,直接删除里边全部内容就可以了,但不要删除这个文件,否则会报错`Error: No ESLint configuration found.`