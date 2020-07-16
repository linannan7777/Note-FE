### Text类型

##### 属性：

- nodeType的值为3 
- nodeName的值为"#text" 
-  nodeValue的值为节点所包含的文本 
- parentNode是一个Element 
- 不支持（没有）子节点   
- length 返回元素或属性的文本长度

##### 方法

- appendData(string)             在文本节点的末尾添加一个字符串。

- - string： 必需。向文本节点添加的字符串。

- deleteData(start,length)     从节点删除数据。

  - start：必需。规定从何处开始删除数据。开始值以 0 开始
  - length： 必需。规定删除多少个字符。

- insertData(start,string)      向节点中插入数据

- - start：必需。规定在何处插入字符。开始值以 0 开始。

  - string： 必需。规定要插入的字符串。

- replaceData(start,length,string) 方法替换文本节点中的数据

  | 参数   | 描述                                        |
  | :----- | :------------------------------------------ |
  | start  | 必需。规定在何处替换字符。开始值以 0 开始。 |
  | length | 必需。规定替换多少个字符。                  |
  | string | 必需。规定插入的字符串。                    |

- splitText(offset) 方法按照指定的 offset 把文本节点分割为两个节点。

  | 参数   | 描述                                            |
  | :----- | :---------------------------------------------- |
  | offset | 必需。规定在何处分割文本节点。开始值以 0 开始。 |

- substringData(start,length) 方法从文本节点中获取数据。

  | 参数   | 描述                                    |
  | :----- | :-------------------------------------- |
  | start  | 必需。从何处提取字符。开始值以 0 开始。 |
  | length | 必需。规定提取多少字符。                |

1. document.createTextNode(data) 创建新的文本节点。*data* 是一个字符串，包含了要放入文本节点的内容
2. 规范化文本节点： normalize():包含了多个文本节点的父元素调用的话，会合并相邻的文本节点并删除空的文本节点
3. 分割文本节点： splitText(start)：与normalize()方法相反。此方法会将一个文本节点分成两个。start为分割位置

### Comment类型

注释在DOM中是通过Comment类型来表示的

##### 特征：

- nodeType的值为8 
- nodeName的值为"#comment" 
- nodeValue的值是注释的内容           
- parentNode可能是Document或Element  
- 不支持（没有）子节点

##### 方法

Comment类型与Text类型继承自相同的基类，因此它拥有除splitText()之外的所有字符串操作方法

使用document.createComment() 并为其传递注释文本也可以创建注释节点

### CDATASection类型

CDATASection类型只针对XML文档，CDATASection类型继承自Text类型，拥有除splitText()之外的所有字符串操作方法

##### 特征：

- nodeType的值为4 
- nodeName的值为"#cdata-section" 
- nodeValue的值是CDATA区域中内容           
- parentNode可能是Document或Element  
- 不支持（没有）子节点

document.createCDataSection()创建CDATA区域

### DocumentType类型

 仅有Firefox Safari Opera支持它。包含着与文档doctype有关的所有信息

##### 特征：

- nodeType的值为10
- nodeName的值为doctype的名称
- nodeValue的值是null          
- parentNode可能是Document 
- 不支持（没有）子节点

### DocumentFragment类型

在文档中无对应标记。它有一种特殊的行为，该行为使得它非常有用，即当请求把一个 DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment 自身，而是它的所有子孙节点。这使得 DocumentFragment 成了有用的占位符，暂时存放那些一次插入文档的节点。

##### 特征：

- nodeType的值为11
- nodeName的值为"#document-fragment"
- nodeValue的值是null          
- parentNode的值是null 
- 子节点可以是Element、ProcessingInstruction、Comment、Text、CDATASection或EntityReference

可以用 Document.createDocumentFragment() 方法创建新的空 DocumentFragment 节点。

加入我们要为一个元素添加 3 个列表项。如果逐个地添加列表项，将会导致浏览器反复渲染。为避免这个问题，可以像下面这样使用一个文档片段来保存创建的列表项，然后再一次性将它们添加到文档中。

### Attr类型

- Attr 对象有 3 个属性： name、 value 和 specified。其中， name 是特性名称（与 nodeName 的值相同）， value 是特性的值（与 nodeValue 的值相同），而 specified 是一个布尔值，用以区别特性是在代码中指定的，还是默认的。
- 使用 getAttributeNode 可以获取属性节点，但是， getAttribute()、 setAttribute()和 removeAttribute()方法远比操作特性节点更为方便。
- 使用 document.createAttribute()并传入特性的名称可以创建新的特性节点。