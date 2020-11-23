# fatal:Unable to create“.../.git/index.lock“: File exists.

#### 错误原因：

index.lock文件是在进行某些比较费时的git操作时自动生成，操作结束后自动删除，相当于一个锁定文件，目的在于防止对一个目录同时进行多个操作。有时强制关闭进行中的git操作，这个文件没有被自动删除，之后你就无法进行其他操作，必须手动删除。

#### 解决办法：

手动删除index.lock文件

```git
rm -rf xxx/index.lock
```



## git clone卡住问题

#### 错误原因：

1、git clone慢的原因其实主要是因为这条指令默认是将所有的git历史记录都克隆下来，也就是把git项目从头演变一次

2、clone文件太大

3、可能因为`github.global.ssl.fastly.net`域名被限制了。只要找到这个域名对应的ip地址，然后在hosts文件中加上ip–>域名的映射，刷新DNS缓存便可。

#### 解决办法：

1、git clone浅拷贝： git clone --depth=1 https://…

2、查看当前Postbuffer的数值: git config —list    设置合适的值: git config --global http.postBuffer 524288000

3、在网站 https://www.ipaddress.com/ 分别搜索：

```
github.global.ssl.fastly.net
github.com
```

得到对应ip，打开hosts文件

- Windows上的hosts文件路径在`C:\Windows\System32\drivers\etc\hosts`
- Linux的hosts文件路径在：`sudo vim /etc/hosts`

在hosts文件末尾添加两行(对应上面查到的ip)

```
151.101.185.194 github.global-ssl.fastly.net
192.30.253.112 github.com
```

保存更新DNS

- Winodws系统的做法：打开CMD，输入`ipconfig /flushdns`
- Linux的做法：在终端输入`sudo /etc/init.d/networking restart`

