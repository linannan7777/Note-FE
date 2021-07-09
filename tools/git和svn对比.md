## git和svn命令

先来复习一下命令

| 作用                                                         | git                                      | svn                |
| ------------------------------------------------------------ | ---------------------------------------- | ------------------ |
| 版本库初始化                                                 | git init                                 | svn create         |
| clone                                                        | git clone                                | svn co（checkout） |
| add                                                          | git add （.除去.gitignore，*所有的文件） | svn add            |
| commit                                                       | git commit                               | svn commit         |
| pull                                                         | git pull                                 | svn update         |
| push                                                         | git push                                 | -                  |
| 查看工作状态                                                 | git status                               | svn status         |
| 创建分支                                                     | git branch <分支名>                      | svn cp <分支名>    |
| 删除分支                                                     | git branch -d <分支名>                   | svn rm <分支名>    |
| 分支合并                                                     | git merge <分支名>                       | svn merge <分支名> |
| 工作区差异                                                   | git differ （-cached / head）            | svn diff           |
| 更新至历史版本                                               | git checkout                             | svn update -r      |
| 切换tag                                                      | git checkout                             | svn switch         |
| 切换分支                                                     | git checkout branch                      | svn switch branch  |
| 还原文件                                                     | git checkout - path                      | svn revert path    |
| 删除文件                                                     | git rm path                              | svn rm path        |
| 移动文件                                                     | git mv path                              | git mv path        |
| 清除未追踪文件                                               | git clean                                | svn status sed -e  |
| ## 1.存贮区别                                                |                                          |                    |
| 大家想想为什么我们代码管理为什么一般用git，原型图和高保真管理一般用SVN? |                                          |                    |

1.git是分布式的，有本地和远程两个版本库，SVN是集中式，只有一个远程版本库；
 2.git的内容是按元数据方式存贮，所有控制文件在.git中，svn是按文件处理，所有资源控制文件在.svn中；
 3.svn的分支是一个目录，git不是；
 4.git没有一个全局的版本号，svn有；
 5.git内容存贮是使用SHA-1哈希算法，能确保代码完整性;
 6.git 有工作区，暂存区，远程仓库，git add将代码提交到暂存区， commit提交到本地版本库，push推送到远程版本库。svn是add 提交到暂存，commit是提交到远程版本库。

![存贮1.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3febeca036ed4468b1343fd3ed8cf2ec~tplv-k3u1fbpfcp-watermark.image)

所以可以很清楚的看出因为原型图和高保真都是以单个文件为单位，所以适合用SVN管理，而我们代码时以行数为单位，适合Git

## 2.文件.svn和.git区别

1..svn目录

随便打开一个.svn的目录可以看到结构：
 如果无法查看.svn，window电脑-点击查看-勾选隐藏文件；
 mac直接shift + command + .

```
├── pristine 各个版本纪录，这个文件一般较大
├── tmp 
├── entries 当前版本号
├── format 文本文件， 放了一个整数，当前版本号
├── wc.db 二进制文件
├── wc.db-journal 二进制文件
复制代码
```

2..git 目录结构

你可能对这些目录结构很陌生，没关系，直接在终端输入 git help gitrepository-layout回车，你会发现浏览器会打开一个html文件，实际上就会打开安装git下面的一个html文档

```
├── hooks 钩子文件
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── fsmonitor-watchman.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample commit时会触发这个钩子
│   ├── pre-push.sample push触发
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── update.sample update触发
├── info
│   ├── exclude 忽略的文件
├── object git数据对象，包括commit，trees，二进制对象，标签等
├── COMMIT_EDITMSG 上一次提交的注释信息
├── log 各个refs的历史信息
├── refs 每个分支指向那个提交
├── config 本项目配置信息，包括仓库地址，分支，用户账号等
├── description 项目描述
├── HEAD 当前分支的最后一次提交
├── index 索引文件，存贮git add把要添加的项
├── packed-refs 分支标识文件
复制代码
```

所以可以看出git在处理代码方面功能比svn要强大一些

## 3..git文件动态分析

### 3.1 add阶段

1.执行git init会生成一个初始化的.git,会发现上面有些目录文件没有，因为有些文件是指定的命令后才会生成

2.新建一个test.txt,随便写点内容，执行git status

```
On branch master  // 默认一个master 分支

No commits yet

Untracked files: // 未提交的文件
  (use "git add <file>..." to include in what will be committed)

	test.txt

nothing added to commit but untracked files present (use "git add" to track)
复制代码
```

运行 find . -type f

```
./config
./HEAD
./info/exclude
./description
./hooks/commit-msg.sample
./hooks/pre-rebase.sample
./hooks/pre-commit.sample
./hooks/applypatch-msg.sample
./hooks/fsmonitor-watchman.sample
./hooks/pre-receive.sample
./hooks/prepare-commit-msg.sample
./hooks/post-update.sample
./hooks/pre-applypatch.sample
./hooks/pre-push.sample
./hooks/update.sample
./index
复制代码
```

3.执行 git add text.txt,显示

```
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   test.txt
复制代码
```

运行find . -type f

```
./config
./objects/61/de0edff4ebeeff225da34006cbe6427638fadc  # 比之前多了一个文件
./HEAD
./info/exclude
./description
./hooks/commit-msg.sample
./hooks/pre-rebase.sample
./hooks/pre-commit.sample
./hooks/applypatch-msg.sample
./hooks/fsmonitor-watchman.sample
./hooks/pre-receive.sample
./hooks/prepare-commit-msg.sample
./hooks/post-update.sample
./hooks/pre-applypatch.sample
./hooks/pre-push.sample
./hooks/update.sample
./index
复制代码
```

4.总结：可以看出git add后test.txt 被标记为staged 状态，而且object多了一个61/de0edff 文件，所以object 可以存贮git仓库内容，以二进制方式存贮。

5.我们可以查看下文件来源

```
git cat-file -p 61de0edf
打印 test
复制代码
```

6.git如何管理和归档文件
 我们常见的文件系统(NTFS、FAT、FAT32)是基于地址方式检索文件，即先给具体的地址，然后从地址编号对应的存储单元读取文件内容，而git是基于内容检索，是对整个内容检索，得到一个真实的存储位置，类似哈希映射。

### 3.2 commit阶段

1.执行 git commit -m 'add test'

```
1 file changed, 1 insertion(+)
create mode 100644 test.txt
复制代码
```

2.运行 find . -type f

```
./test.txt
./.git/config
./.git/objects/61/de0edff4ebeeff225da34006cbe6427638fadc
./.git/objects/ed/fd7e903f8f622f9a52542adfa077552608202d
./.git/objects/26/ef8e81bc27b4a67f251145a4f83782364fa9fa
./.git/HEAD
./.git/info/exclude
./.git/logs/HEAD
./.git/logs/refs/heads/master
./.git/description
./.git/hooks/commit-msg.sample
./.git/hooks/pre-rebase.sample
./.git/hooks/pre-commit.sample
./.git/hooks/applypatch-msg.sample
./.git/hooks/fsmonitor-watchman.sample
./.git/hooks/pre-receive.sample
./.git/hooks/prepare-commit-msg.sample
./.git/hooks/post-update.sample
./.git/hooks/pre-applypatch.sample
./.git/hooks/pre-push.sample
./.git/hooks/update.sample
./.git/refs/heads/master
./.git/index
./.git/COMMIT_EDITMSG
复制代码
```

可以看出commit 后在add 的基础上object多了两个文件ed/fd7e90和26/ef8e8，从文件的归档路径和命名可以看出git使用SHA-1算法对文件内容进行了校验

还多了一个COMMIT_EDITMSG ，里面是上一次提交的注释信息

3.使用git cat-file 查看来源

```
git cat-file -t edfd7e90
// 终端输出tree

git cat-file -t 26ef8e8
// 终端输出commit

git cat-file -p edfd7e90
// 终端输出 100644 blob 61de0edff4ebeeff225da34006cbe6427638fadc	test.txt

git cat-file -p 26ef8e8
// 终端输出 tree edfd7e903f8f622f9a52542adfa077552608202d
author 信息  1612668900 +0800
committer author 信息  1612668900 +0800
复制代码
```

ed/fd7e90 是一个commit 对象，tree属性指向了26/ef8e8，纪录了文件操作，作者，提交者信息；
 26/ef8e8 是一个tree 对象，blob 属性指向了blob对象61/de0edf，纪录了文件名；
 61/de0edf 是一个blob 对象，纪录了文件内容。

三个文件关系：

![文件关系.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c470dd6f4bf44823a78239ebfe897e49~tplv-k3u1fbpfcp-watermark.image) 所以现在知道为什么object文件会很大的吧

### 3.3 branch

git branch 获取分支列表
 列表保存到refs/heads/master 下面

### 3.4 git对象模型

通过上面3.2的分析知道，在git系统中有四种尅性的对象：
 1.commit：指向一个tree，纪录了文件操作，作者，提交者信息；
 2.tree：对象关系树，管理tree和blob的关系；
 3.blob：保存文件内容；
 4.tag：标记提交。

### 3.5 git生命周期钩子

1.钩子初始化：
 上面说到的hooks 下面都是生命周期脚本，初始化仓库（git init）或 git clone 都会初始化.git文件；

2.钩子是本地的，因为不会提交到代码仓库，只不过clone的时候会初始化；

3.钩子分类：

| 钩子名             | 作用                                                         |
| ------------------ | ------------------------------------------------------------ |
| pre-commit         | 每次git commit之前会触发，很常见的应用就是在package.json结合husky和lint-staged做代码eslint校验 |
| prepare-commit-msg | 在pre-commit在文本编辑器生成提交信息被调用，方便的修改自动生成的squash和merage提交 |
| commit-msg         | 用户输入提交信息被调用，就是commit -m 后面那个提交信息，可以用来规范提交信息 |
| post-commit        | commit-msg后执行，通知git commit的结果                       |
| post-checkout      | git checkout被调用                                           |
| pre-rebase         | git rebase 更改之前运行                                      |
| pre-receive        | git push后执行，存在于远程仓库中，服务端远程钩子             |
| update             | pre-receive 后调用                                           |
| post-receive       | push 推送成功后被调用，通知push的用户                        |

