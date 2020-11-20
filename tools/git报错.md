# fatal:Unable to create“.../.git/index.lock“: File exists.

#### 错误原因：

index.lock文件是在进行某些比较费时的git操作时自动生成，操作结束后自动删除，相当于一个锁定文件，目的在于防止对一个目录同时进行多个操作。有时强制关闭进行中的git操作，这个文件没有被自动删除，之后你就无法进行其他操作，必须手动删除。

#### 解决办法：

手动删除index.lock文件

```git
rm -rf xxx/index.lock
```

