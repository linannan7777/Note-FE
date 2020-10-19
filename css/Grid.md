网格布局（Grid）是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。



采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。

> ```markup
> <div>
>   <div><p>1</p></div>
>   <div><p>2</p></div>
>   <div><p>3</p></div>
> </div>
> ```

上面代码中，最外层的`<div>`元素就是容器，内层的三个`<div>`元素就是项目。

注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的`<p>`元素就不是项目。Grid 布局只对项目生效。



### 容器属性

`display: grid`指定一个容器采用网格布局。

默认情况下，容器元素都是块级元素，但也可以设成行内元素。

> ```css
> div {
>   display: inline-grid;
> }
> ```

上面代码指定`div`是一个行内元素，该元素内部采用网格布局。

注意，设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。

###  grid-template-columns 属性和 grid-template-rows 属性

。`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: 100px 100px 100px;
>   grid-template-rows: 100px 100px 100px;
> }
> ```

上面代码指定了一个三行三列的网格，列宽和行高都是`100px`。

除了使用绝对单位，也可以使用百分比。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: 33.33% 33.33% 33.33%;
>   grid-template-rows: 33.33% 33.33% 33.33%;
> }
> ```

#### **repeat()**关键字

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用`repeat()`函数，简化重复的值。上面的代码用`repeat()`改写如下。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: repeat(3, 33.33%);
>   grid-template-rows: repeat(3, 33.33%);
> }
> ```

`repeat()`接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。

`repeat()`重复某种模式也是可以的。

> ```css
> grid-template-columns: repeat(2, 100px 20px 80px);
> ```

上面代码定义了6列，第一列和第四列的宽度为`100px`，第二列和第五列为`20px`，第三列和第六列为`80px`。

#### **auto-fill**关键字

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用`auto-fill`关键字表示自动填充。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: repeat(auto-fill, 100px);
> }
> ```

上面代码表示每列宽度`100px`，然后自动填充，直到容器不能放置更多的列。

#### **fr 关键字**

为了方便表示比例关系，网格布局提供了`fr`关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为`1fr`和`2fr`，就表示后者是前者的两倍。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: 1fr 1fr;
> }
> ```

`fr`可以与绝对长度的单位结合使用，这时会非常方便。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: 150px 1fr 2fr;
> }
> ```

上面代码表示，第一列的宽度为150像素，第二列的宽度是第三列的一半。

#### **minmax()**

`minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

> ```css
> grid-template-columns: 1fr 1fr minmax(100px, 1fr);
> ```

上面代码中，`minmax(100px, 1fr)`表示列宽不小于`100px`，不大于`1fr`。

#### **auto 关键字**

`auto`关键字表示由浏览器自己决定长度。

> ```css
> grid-template-columns: 100px auto 100px;
> ```

上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了`min-width`，且这个值大于最大宽度。

#### **网格线的名称**

`grid-template-columns`属性和`grid-template-rows`属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
>   grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
> }
> ```

上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。

网格布局允许同一根线有多个名字，比如`[fifth-line row-5]`。

#### **布局实例**

`grid-template-columns`属性对于网页布局非常有用。两栏式布局只需要一行代码。

> ```css
> .wrapper {
>   display: grid;
>   grid-template-columns: 70% 30%;
> }
> ```

上面代码将左边栏设为70%，右边栏设为30%。

传统的十二网格布局，写起来也很容易。

> ```css
> grid-template-columns: repeat(12, 1fr);
> ```

### grid-row-gap 属性， grid-column-gap 属性， grid-gap 属性

`grid-row-gap`属性设置行与行的间隔（行间距），`grid-column-gap`属性设置列与列的间隔（列间距）。

> ```css
> .container {
>   grid-row-gap: 20px;
>   grid-column-gap: 20px;
> }
> ```

`grid-gap`属性是`grid-column-gap`和`grid-row-gap`的合并简写形式，语法如下。

> ```css
> grid-gap: <grid-row-gap> <grid-column-gap>;
> ```

因此，上面一段 CSS 代码等同于下面的代码。

> ```css
> .container {
>   grid-gap: 20px 20px;
> }
> ```

如果`grid-gap`省略了第二个值，浏览器认为第二个值等于第一个值。

> 根据最新标准，上面三个属性名的`grid-`前缀已经删除，`grid-column-gap`和`grid-row-gap`写成`column-gap`和`row-gap`，`grid-gap`写成`gap`。

### grid-template-areas 属性

网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。`grid-template-areas`属性用于定义区域。

> ```css
> .container {
>   display: grid;
>   grid-template-columns: 100px 100px 100px;
>   grid-template-rows: 100px 100px 100px;
>   grid-template-areas: 'a b c'
>                        'd e f'
>                        'g h i';
> }
> ```

上面代码先划分出9个单元格，然后将其定名为`a`到`i`的九个区域，分别对应这九个单元格。

多个单元格合并成一个区域的写法如下。

> ```css
> grid-template-areas: 'a a a'
>                      'b b b'
>                      'c c c';
> ```

上面代码将9个单元格分成`a`、`b`、`c`三个区域。

下面是一个布局实例。

> ```css
> grid-template-areas: "header header header"
>                      "main main sidebar"
>                      "footer footer footer";
> ```

上面代码中，顶部是页眉区域`header`，底部是页脚区域`footer`，中间部分则为`main`和`sidebar`。

如果某些区域不需要利用，则使用"点"（`.`）表示。

> ```css
> grid-template-areas: 'a . c'
>                      'd . f'
>                      'g . i';
> ```

上面代码中，中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域。

> 注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为`区域名-start`，终止网格线自动命名为`区域名-end`。
>
> 比如，区域名为`header`，则起始位置的水平网格线和垂直网格线叫做`header-start`，终止位置的水平网格线和垂直网格线叫做`header-end`。

### grid-auto-flow 属性

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行。这个顺序由`grid-auto-flow`属性决定，默认值是`row`，即"先行后列"。也可以将它设成`column`，变成"先列后行"。

> ```css
> grid-auto-flow: column;
> ```

`grid-auto-flow`属性除了设置成`row`和`column`，还可以设成`row dense`和`column dense`。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。