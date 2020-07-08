现在各种支持HTML5的浏览器都能够播放html5视频了，但是对于字幕的支持却很少，我们期待像DVD那样强大的字幕。

往往我们还不得不通过js来做，着实是一件痛苦的事情。

现在IE10率先对HTML5 Video 字幕给与内置的支持，而且还支持多语言，可任意切换，真是太给力了。

示例代码如下：

 ```html
<video id="mainvideo" controls autoplay loop>  
  <track src="en_track.vtt" srclang="en" label="English" kind="caption" default>  
  <track src="cn_track.vtt" srclang="zh-cn" label="简体中文" kind="caption">  
</video>  
 ```



通过两个<track>标签分别指定了一个英文字幕文件、一个中文字幕文件，默认为中文字幕，用户可以切换，也可以由程序脚本切换。
IE10支持2种字幕文件格式：

 

 

- WebVTT : Web Video Text Track  (Web视频文本轨道)
- TTML : Timed Text Markup Language (时序文本标记语言)

 

## WebVTT

WebVTT是UTF-8编码格式的文本文件，内容示例如下：

 

```
WEBVTT  
  
00:00:01.878 --> 00:00:05.334  
曾经有一份真诚的爱情放在我面前，  
  
00:00:08.608 --> 00:00:15.296  
我没有珍惜，等我失去的时候我才后悔莫及，   
人世间最痛苦的事莫过于此。
```



 

第一行必需是WEBVTT，接着空行，接下来是一行时间范围＋一行或多行字幕内容＋空行，一行时间范围＋一行或多行字幕内容＋空行，……

 

时间格式是HH:MM:SS.sss，时:分:秒.毫秒， 开始时间 --> 结束时间，-->的两边各有一个空格，这两个时间必需写在同一行。

时间都是相对于视频开始的时间间隔。

时间之后是字幕文本，时间和字幕文本之间不能有空行，字幕文本可以是一行或多行，字幕文本中不能有空行。WebVTT字幕文件的MIME类型约定是"text/vtt"，需要在IIS或者Apache等Web服务器中配置.

## TTML

TTML是xml格式的文件，内容示例如下：

 

```xml
<?xml version='1.0' encoding='UTF-8'?>  
<tt xmlns='http://www.w3.org/ns/ttml' xml:lang='en' >  
<body>  
<div>  
  
<p begin="00:00:01.878" end="00:00:05.334" >曾经有一份真诚的爱情放在我面前，</p>  
<p begin="00:00:08.608" end="00:00:15.296" >我没有珍惜，等我失去的时候我才后悔莫及，<br/>人世间最痛苦的事莫过于此。</p>  
</div>  
  
</body>  
</tt>  
```



结构很明确了，分别是tt标签，body标签，div标签，p标签，br标签，和HTML很像啊！p元素的begin/end属性指定了字幕的起止时间。
TTML文件的MIME类型约定为application/ttml+xml

 

通过在video标签内使用1个或多个track标签来指定1个或多个语言的字幕文件，每个track元素对应一个字幕文件。

track标签的属性主要有4个，如下表：

 

| 属性    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| kind    | 定义字幕内容类型，只能是这五种之一: subtitles, captions, descriptions, chapters, metadata. |
| src     | 字幕文件的URL地址                                            |
| srclang | 字幕文件的语言类型，标识信息的作用，播放器不使用这个属性。   |
| label   | 字幕标签，每个字幕元素必需设置一个唯一不重复的标签，切换字幕时显示的名称。 |
| default | 指定是否是默认字幕。如果每个都不指定，将不会自动显示字幕.    |

 

 可以通过javascript方式访问每一个字幕元素，甚至其中的每一句台词。这一部分代码比较多，我就不展开了，有兴趣的可以自己看原文。

参考链接： http://msdn.microsoft.com/en-us/library/ie/hh673566(v=vs.85).aspx