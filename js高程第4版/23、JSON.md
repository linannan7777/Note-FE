# JSON

JSON 语法支持表示 3 种类型的值：

- 简单值:字符串、数值、布尔值和 null 可以在 JSON 中出现，就像在 JavaScript 中一样。特殊值 undefined 不可以。
- 对象:第一种复杂数据类型，对象表示有序键/值对。每个值可以是简单值，也可以是复杂类型。 
- 数组:第二种复杂数据类型，数组表示可以通过数值索引访问的值的有序列表。数组的值可以是任意类型，包括简单值、对象，甚至其他数组。
  

JSON 字符串必须使用双引号(单引号会导致语法错误)。

JSON 中的对象必须使用双引号把属性名包围起来

与 JavaScript 对象字面量相比，JSON 主要有两处不同：

- 首先，没有变量声明(JSON 中没有变量)。
- 其次，最后没有分号(不需要，因为不是 JavaScript 语句)。同样，用引号将属性名包围起来才是有效的JSON。属性的值可以是简单值或复杂数据类型值，后者可以在对象中再嵌入对象

JSON 对象有两个方法:**stringify()**和**parse()**。在简单的情况下，这两个方法分别可以将
JavaScript 序列化为 JSON 字符串，以及将 JSON 解析为原生 JavaScript 值。
### JSON.stringify()


JSON.stringify()方法除了要序列化的对象，还可以接收两个参数。这两个参数可以用
于指定其他序列化 JavaScript 对象的方式。第一个参数是过滤器，可以是数组或函数;第二个参数是用于缩进结果 JSON 字符串的选项。单独或组合使用这些参数可以更好地控制 JSON 序列化。

1、过滤结果 

如果第二个参数是一个数组，那么 JSON.stringify()返回的结果只会包含该数组中列出的对象 属性。比如下面的例子: 21 

```javascript
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4, 
  year: 2017 
}; 
let jsonText = JSON.stringify(book, ["title", "edition"]); 
```


在这个例子中，JSON.stringify()方法的第二个参数是一个包含两个字符串的数组:"title" 和"edition"。它们对应着要序列化的对象中的属性，因此结果 JSON 字符串中只会包含这两个属性: 

```
{"title":"Professional JavaScript","edition":4}
```

如果第二个参数是一个函数，则行为又有不同。提供的函数接收两个参数:属性名(key)和属性值(value)。可以根据这个 key 决定要对相应属性执行什么操作。这个 key 始终是字符串，只是在值 不属于某个键/值对时会是空字符串 

为了改变对象的序列化，返回的值就是相应 key 应该包含的结果。注意，返回 undefined 会导致属性被忽略。下面看一个例子:

```
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4, 
  year: 2017
};
let jsonText = JSON.stringify(book, (key, value) => {
      switch(key) {
        case "authors":
          return value.join(",")
        case "year":
          return 5000;
        case "edition":
          return undefined;
        default:
          return value;
      }
});
```

这个函数基于键进行了过滤。如果键是"authors"，则将数组值转换为字符串;如果键是"year"， 则将值设置为 5000;如果键是"edition"，则返回 undefined 忽略该属性。最后一定要提供默认返 回值，以便返回其他属性传入的值。第一次调用这个函数实际上会传入空字符串 key，值是 book 对象。 最终得到的 JSON 字符串是这样的: 
```
{"title":"Professional JavaScript","authors":"Nicholas C. Zakas,Matt Frisbie","year":5000} 
```

注意，函数过滤器会应用到要序列化的对象所包含的所有对象，因此如果数组中包含多个具有这些 属性的对象，则序列化之后每个对象都只会剩下上面这些属性。 

Firefox 3.5~3.6 在 JSON.stringify()的第二个参数是函数时有一个 bug:此时函数只能作为过滤器，返回 undefined 会导致跳过属性，返回其他值则会包含属性。Firefox 4 修复了这个 bug。 

2、 字符串缩进

 JSON.stringify()方法的第三个参数控制缩进和空格。在这个参数是数值时，表示每一级缩进的 空格数。例如，每级缩进 4 个空格，可以这样: 

```
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4, 
  year: 2017 
}; 
let jsonText = JSON.stringify(book, null, 4); 
```

这样得到的 jsonText 格式如下:

```
{
    "title": "Professional JavaScript",
    "authors": [
        "Nicholas C. Zakas",
        "Matt Frisbie"
    ],
    "edition": 4,
    "year": 2017
}
```

注意，除了缩进，JSON.stringify()方法还为方便阅读插入了换行符。这个行为对于所有有效的缩进参数都会发生。(只缩进不换行也没什么用。)最大缩进值为 10，大于 10 的值会自动设置为 10。

如果缩进参数是一个字符串而非数值，那么 JSON 字符串中就会使用这个字符串而不是空格来缩进。使用字符串，也可以将缩进字符设置为 Tab 或任意字符，如两个连字符:

```
let jsonText = JSON.stringify(book, null, "--" );
```

这样，jsonText 的值会变成如下格式:

```
{
  --"title": "Professional JavaScript",
  --"authors": [
  ----"Nicholas C. Zakas",
  ----"Matt Frisbie"
  --],
  --"edition": 4,
  --"year": 2017
}
```

使用字符串时同样有 10 个字符的长度限制。如果字符串长度超过 10，则会在第 10 个字符处截断。 

3、 **toJSON()**方法 

有时候，对象需要在 JSON.stringify()之上自定义 JSON 序列化。此时，可以在要序列化的对象 中添加 toJSON()方法，序列化时会基于这个方法返回适当的 JSON 表示。事实上，原生 Date 对象就 有一个 toJSON()方法，能够自动将 JavaScript 的 Date 对象转换为 ISO 8601 日期字符串(本质上与在 Date 对象上调用 toISOString()方法一样)。 

下面的对象为自定义序列化而添加了一个 toJSON()方法: 

```
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017,
  toJSON: function() {
    return this.title;
  }
```
这里 book 对象中定义的 toJSON()方法简单地返回了图书的书名(this.title)。与 Date 对象 类似，这个对象会被序列化为简单字符串而非对象。toJSON()方法可以返回任意序列化值，都可以起到相应的作用。如果对象被嵌入在另一个对象中，返回undefined会导致值变成null;或者如果是顶 级对象，则本身就是 undefined。注意，箭头函数不能用来定义 toJSON()方法。主要原因是箭头函数 的词法作用域是全局作用域，在这种情况下不合适。 

toJSON()方法可以与过滤函数一起使用，因此理解不同序列化流程的顺序非常重要。在把对象传给 JSON.stringify()时会执行如下步骤。

(1) 如果可以获取实际的值，则调用 toJSON()方法获取实际的值，否则使用默认的序列化。
(2) 如果提供了第二个参数，则应用过滤。传入过滤函数的值就是第(1)步返回的值。
(3) 第(2)步返回的每个值都会相应地进行序列化。
(4) 如果提供了第三个参数，则相应地进行缩进。 
理解这个顺序有助于决定是创建 toJSON()方法，还是使用过滤函数，抑或是两者都用。 

### JSON.parse()

JSON.parse()方法也可以接收一个额外的参数，这个函数会针对每个键/值对都调用一次。为区别 于传给 JSON.stringify()的起过滤作用的替代函数(replacer)，这个函数被称为还原函数(reviver)。 实际上它们的格式完全一样，即还原函数也接收两个参数，属性名(key)和属性值(value)，另外也 需要返回值。 

如果还原函数返回 undefined，则结果中就会删除相应的键。如果返回了其他任何值，则该值就 会成为相应键的值插入到结果中。还原函数经常被用于把日期字符串转换为 Date 对象。例如: 
```
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017,
  releaseDate: new Date(2017, 11, 1)
};
let jsonText = JSON.stringify(book); 
let bookCopy = JSON.parse(jsonText, (key, value) => key == "releaseDate" ? new Date(value) : value);
alert(bookCopy.releaseDate.getFullYear());
```

以上代码在 book 对象中增加了 releaseDate 属性，是一个 Date 对象。这个对象在被序列化为
JSON 字符串后，又被重新解析为一个对象 bookCopy。这里的还原函数会查找"releaseDate"键，如
果找到就会根据它的日期字符串创建新的 Date 对象。得到的 bookCopy.releaseDate 属性又变回了
Date 对象，因此可以调用其 getFullYear()方法。

