+ nvm help                              Show this message

+ nvm --version                         Print out the latest released version of nvm

+ nvm install [-s] <version>            Download and install a <version>, [-s] from source. Uses .nvmrc if available

+ nvm uninstall <version>               Uninstall a version

+ nvm use <version>                     Modify PATH to use <version>. Uses .nvmrc if available

+ nvm run <version> [<args>]            Run <version> with <args> as arguments. Uses .nvmrc if available for <version>

+ nvm current                           Display currently activated version

+ nvm ls                                List installed versions

+ nvm ls <version>                      List versions matching a given description

+ nvm ls-remote                         List remote versions available for install

+ nvm deactivate                        Undo effects of `nvm` on current shell

+ nvm alias [<pattern>]                 Show all aliases beginning with <pattern>

+ nvm alias <name> <version>            Set an alias named <name> pointing to <version>

+ nvm unalias <name>                    Deletes the alias named <name>

+ nvm reinstall-packages <version>      Reinstall global `npm` packages contained in <version> to current version

+ nvm unload                            Unload `nvm` from shell

+ nvm which [<version>]                 Display path to installed node version. Uses .nvmrc if available

+ nvm list 是查找本电脑上所有的node版本

  \- nvm list 查看已经安装的版本
\- nvm list installed 查看已经安装的版本
  \- nvm list available 查看网络可以安装的版本
  
+ nvm install 安装最新版本nvm

+ nvm use <version> ## 切换使用指定的版本node

+ nvm ls 列出所有安装的版本

+ nvm ls-remote  列出所以远程服务器的版本（官方node version list）

+ nvm current显示当前版本

+ nvm alias <name> <version> ## 给不同的版本号添加别名

+ nvm unalias <name> ## 删除已定义的别名

+ nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包

+ nvm on 打开nodejs控制

+ nvm off 关闭nodejs控制

+ nvm proxy 查看设置与代理

+ nvm node_mirror [url] 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/
　　nvm npm_mirror [url] 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/.
  
+ nvm uninstall <version> 卸载制定的版本

+ nvm use [version] [arch] 切换制定的node版本和位数

+ nvm root [path] 设置和查看root路径

+ nvm version 查看当前的版本