## NoSQL介绍

NoSQL(NoSQL=NotOnlySQL)，意即“不仅仅是SQL”，它指的是非关系型的数据库，是以key-value形式存储，和传统的关系型数据库不一样，不一定遵循传统数据库的一些基本要求，比如说遵循SQL标准、ACID属性、表结构等等。NoSQL最早被提出是在20世纪80年代，在当时更多是强调的是与关系数据库区别对待，最近这些年被提及的更多是强调协助解决大数据等相关问题。NoSQL在大数据时代有自己的意义。

NoSQL数据库在以下的这几种情况下比较适用：

1、数据模型比较简单；

2、需要灵活性更强的IT系统；

3、对数据库性能要求较高

4、不需要高度的数据一致性；

5、对于给定key，比较容易映射复杂值的环境。

NoSql和传统数据库简单对比:

非结构型数据库。没有行、列的概念。用JSON来存储数据。集合就相当于“表”，文档就相当于“行”。

## MongoDb介绍

MongoDB是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的NoSql数据库。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongodb最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。它的特点是高性能、易部署、易使用，存储数据非常方便。

### 安装

官网：https://www.mongodb.com/

手册：https://docs.mongodb.org/manual/

下载：https://www.mongodb.com/download-center/community

[Mac下安装MongoDB和可视化工具以及安装过程中问题解决办法](https://blog.csdn.net/it_cgq/article/details/94762335)

### 使用MongoDb

在mongodb4.x之前我们必须手动启动mongodb，但是mongodb4.x以后不需要手动启动mongodb了，它默认会开机启动安装完成后直接运行 `mongo` 命令就可以连上mongod数据库。