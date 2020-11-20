# 调试配置launch.json

```
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "使用本机 Chrome 调试", // 指定调试工具名称
            "type": "chrome",    // 指定调试语言
            "request": "launch",
             //"file": "${workspaceRoot}/index.html",
             "url": "http://localhost:9527", //使用外部服务器时,请注释掉 file, 改用 url, 并将 useBuildInServer 设置为 false 
            "runtimeExecutable": "C:\\Users\\chenjingping\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe", // 改成您的 Chrome 安装路径
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}",
        //  "preLaunchTask":"build",
            "userDataDir":"${tmpdir}",
            "port":5433
        },
        {
            "type": "chrome",
            "request": "launch",
            "name": "vuejs: chrome",
            "url": "http://localhost:9527",
            "webRoot": "${workspaceFolder}/src",
            "breakOnLoad": true,
            "sourceMaps": true,
            "sourceMapPathOverrides": {
                "webpack:///src/*": "${webRoot}/*"
              }
        },
        {
            "name": "Attach to Chrome",
            "type": "chrome",
            "request": "attach",
            "timeout":20000,
            "port": 9222,
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}"
        }
       
    ]
}
```

预定变量含义：

- ${workspaceRoot}  the path of the folder opened in VS Code(VSCode中打开文件夹的路径)
- ${workspaceRootFolderName} the name of the folder opened in VS Code without any solidus(VSCode中打开文件夹的路径, 但不包含"/")
- ${file} the current opened file(当前打开的文件)
- ${fileDirname} the current opened file's dirname(当前打开文件的目录名)
- ${fileExtname} the current opened file's extension(当前打开文件的扩展名)

启动配置必须设定请求类型，属性`request` ， 分为`launch`(启动) 和 `attach`(附加)两种

###### 下面是`launch` 和 `attach` 类型共有的属性：

-  `protocol` 设置调试协议
   `auto` 尝试自动检测目标运行时使用的协议
   `inspector` 新的V8调试器协议，解决遗留版本的多数问题，node versions >= 6.3 and Electron versions >= 1.7.4.
   `legacy` 原始的v8调试器协议，node versions < v8.0 and Electron versions < 1.7.4.
-  `port`调试使用的端口
-  `address` TCP/IP地址，用于远程调试
-  `localRoot` 远程调试时映射的本地地址
-  `remoteRoot` 远程调试时的远程目录地址
-  `sourceMaps`  默认为true
-  `outFiles` 当map文件不在js文件同目录时用于指定 sourceMaps的位置
-  `restart` 自动重启调试
-  `timeout` 配置自动附加的超时时间
-  `stopOnEntry` 自动断点到第一行代码处
-  `smartStep` 自动跳过未映射到源代码的代码
-  `skipFiles` :`[]String`,指定跳过单步调试的代码



```json
 "skipFiles": [
    "${workspaceFolder}/node_modules/**/*.js",  //跳过node_modules
    "${workspaceFolder}/lib/**/*.js",//跳过lib
    "<node_internals>/**/*.js"//跳过node核心模块
  ]
```

- `trace`启用诊断输出

###### 以下是特定于类型 `launch`(启动)的配置属性：

-  `program` 指定调试入口文件地址
-  `args :[]String` 传递给程序的参数,可在`process.argv`拿到
-  `cwd`  指定程序启动调试的目录 ,当vscode启动目录不是项目根目录，并且调试npm script时非常有用
-  `runtimeExecutable` 设置运行时可执行文件路径，默认是`node`
   可以是其他的执行程序，如`npm、nodemon` 
-  `runtimeArgs` 传递给运行时可执行文件的参数,例如：



```json
        {
            "type": "node",
            "request": "launch",
            "name": "npm launch app",
            "args":["a"],
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run-script",
                "app",
                "b"
            ],
            "port": 6666
        }
```

打印参数可以发现 `args 、runtimeArgs`都会传给程序，但是`runtimeArgs`参数会紧跟可执行文件

- `runtimeVersion` 设置运行时可执行程序的版本，如果使用`nvm`，可以切换node.js版本
-  `env` 添加额外的环境变量
-  `envFile` 文件加载环境变量
-  `console` 配置终端可以是外部终端或者内部集成终端，默认值`internalConsole` 
-  `outputCapture` -如果设置为std，则进程stdout / stderr的输出将显示在调试控制台中，而不是侦听调试端口上的输出。这对于直接写入stdout / stderr流而不是使用console.*API的程序或日志库很有用。
-  `autoAttachChildProcesses` 跟踪调试对象的所有子过程，并自动附加到在调试模式下启动的子过程

###### 以下是特定于类型 `attach`(附加)的配置属性：

-  `processId` 指定nodejs进程id,由于每次启动都会变，传入`"${command:PickProcess}"` 

###### 1. 如果使用了符号链接怎么调试？

传递参数:



```json
{
  "runtimeArgs": ["--preserve-symlinks"]
}
```

如果主脚本也在符号链接路径里面，需要再传递一个参数`"--preserve-symlinks-main"`，支持的版本是 `Node 10+.`

###### 2. 如何调试ECMAScript模块？

如果使用esm或传递`--experimental-modules`给Node.js以便使用ECMAScript模块，则可以传递这些选项通过`runtimeArgs`属性：

- `"runtimeArgs" : ["--experimental-modules"]`  -使用Node v8.5.0 +中的[实验性ECMAScript模块支持](https://links.jianshu.com/go?to=https%3A%2F%2Fnodejs.org%2Fapi%2Fesm.html)
- `"runtimeArgs" : ["-r", "esm"]` -使用[esm ES模块加载器](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fstandard-things%2Fesm)（请注意，`["-r esm"]`如果没有逗号，则无法使用）

