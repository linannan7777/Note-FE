# fs（文件系统）File system

```
const fs = require('fs'); // 使用fs模块，需要先导入
```

所有的文件系统操作都具有同步的、回调的、以及基于 promise 的形式。

- 同步的示例 同步的形式虽然更易理解程序，但它会阻塞 Node.js 事件循环和进一步的 JavaScript 执行，直到操作完成。 异常会被立即地抛出，可以使用 try…catch 处理，也可以冒泡

  ```
  const fs = require('fs');
  
  try {
    fs.unlinkSync('文件');
    console.log('已成功删除文件');
  } catch (err) {
    // 处理错误
  }
  ```

- 回调的示例 异步的形式总是把完成回调作为其最后一个参数。 传给完成回调的参数取决于具体方法，但第一个参数总是预留给异常。 如果操作被成功地完成，则第一个参数会为 null 或 undefined。

  ```
  const fs = require('fs');
  
  fs.unlink('文件', (err) => {
    if (err) throw err;
    console.log('已成功地删除文件');
  });
  ```

- Promise 的示例 基于 promise 的操作会返回Promise（当异步操作完成时被解决）。

  ```
  const fs = require('fs/promises');
  
  (async function(path) {
    try {
      await fs.unlink(path);
      console.log(`已成功地删除文件 ${path}`);
    } catch (error) {
      console.error('出错：', error.message);
    }
  })('文件');
  ```

## 回调与基于 promise 的操作的顺序

当使用异步的方法时，无法保证顺序。 因此，以下的操作容易出错，因为 fs.stat() 操作可能在 fs.rename() 操作之前完成：

```
fs.rename('旧文件', '新文件', (err) => {
  if (err) throw err;
  console.log('重命名完成');
});
fs.stat('新文件', (err, stats) => {
  if (err) throw err;
  console.log(`文件属性: ${JSON.stringify(stats)}`);
});
```

若要正确地排序这些操作，则移动 fs.stat() 调用到 fs.rename() 操作的回调中：

```
fs.rename('旧文件', '新文件', (err) => {
  if (err) throw err;
  fs.stat('新文件', (err, stats) => {
    if (err) throw err;
    console.log(`文件属性: ${JSON.stringify(stats)}`);
  });
});
```

或者，使用基于 promise 的 API：

```
const fs = require('fs/promises');

(async function(from, to) {
  try {
    await fs.rename(from, to);
    const stats = await fs.stat(to);
    console.log(`文件属性: ${JSON.stringify(stats)}`);
  } catch (error) {
    console.error('出错：', error.message);
  }
})('旧文件', '新文件');
```

## 文件路径

大多数 `fs` 操作接受的文件路径可以指定为字符串、Buffer、或 URL 对象（使用 `file:` 协议）。

字符串形式的路径会被解释为 UTF-8 字符序列（标识绝对或相对的文件名）。 相对路径会相对于当前工作目录（通过调用 `process.cwd()` 确定）进行处理。

使用 `Buffer`指定的路径主要用于将文件路径视为不透明字节序列的某些 POSIX (Portable Operating System Interface: 可移植操作系统接口) 操作系统。 在这些系统上，单个文件路径可以包含使用多种字符编码的子序列。 与字符串路径一样， `Buffer` 路径也可以是相对或绝对的：

在 POSIX 上使用绝对路径的示例：

```js
fs.open(Buffer.from('/文件.txt'), 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
```

在 Windows 上，Node.js 遵循独立驱动器工作目录的概念。 当使用没有反斜杠的驱动器路径时，可以观察到此行为。 例如， `fs.readdirSync('C:\\')` 可能会返回与 `fs.readdirSync('C:')` 不同的结果。

对于大多数 `fs` 模块的函数， `path` 或 `filename` 参数可以传入 WHATWG(超文本应用技术工作组) `URL` 对象。 仅支持使用 `file:` 协议的 `URL` 对象。

```js
const fs = require('fs');
const fileUrl = new URL('file:///文件');

fs.readFileSync(fileUrl);
```

`file:` URL 始终是绝对路径。

使用 WHATWG `URL`对象可能会采用特定于平台的行为。

在 Windows 上，带有主机名的 `file:` URL 会转换为 UNC 路径，而带有驱动器号的 `file:` URL 会转换为本地的绝对路径。 没有主机名和驱动器号的 `file:` URL 会导致抛出错误：

```js
// 在 Windows 上：

// - 带有主机名的 WHATWG 文件的 URL 会转换为 UNC 路径。
// file://主机名/文件 => \\主机名\文件
fs.readFileSync(new URL('file://主机名/文件'));

// - 带有驱动器号的 WHATWG 文件的 URL 会转换为绝对路径。
// file:///C:/文件 => C:\文件
fs.readFileSync(new URL('file:///C:/文件'));

// - 没有主机名的 WHATWG 文件的 URL 必须包含驱动器号。
fs.readFileSync(new URL('file:///无驱动器号/文件'));
fs.readFileSync(new URL('file:///文件'));
// TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must be absolute
```

带有驱动器号的 `file:` URL 必须使用 `:` 作为驱动器号后面的分隔符。 使用其他分隔符会导致抛出错误。

在所有其他平台上，不支持带有主机名的 `file:` URL，使用时会导致抛出错误：

```js
// 在其他平台上：

// - 不支持带有主机名的 WHATWG 文件的 URL。
// file://主机名/文件 => 抛出错误!
fs.readFileSync(new URL('file://主机名/文件'));
// TypeError [ERR_INVALID_FILE_URL_PATH]: must be absolute

// - WHATWG 文件的 URL 会转换为绝对路径。
// file:///文件 => /文件
fs.readFileSync(new URL('file:///文件'));
```

包含编码后的斜杆字符的 `file:` URL 在所有平台上都会导致抛出错误：

```js
// 在 Windows 上：
fs.readFileSync(new URL('file:///C:/%2F'));
fs.readFileSync(new URL('file:///C:/%2f'));
/* TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must not include encoded
\ or / characters */

// 在 POSIX 上：
fs.readFileSync(new URL('file:///%2F'));
fs.readFileSync(new URL('file:///%2f'));
/* TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must not include encoded
/ characters */
```

在 Windows 上，包含编码后的反斜杆字符的 `file:` URL 会导致抛出错误：

```js
// 在 Windows 上：
fs.readFileSync(new URL('file:///C:/%5C'));
fs.readFileSync(new URL('file:///C:/%5c'));
/* TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must not include encoded
\ or / characters */
```

## 文件描述符

在 POSIX 系统上，对于每个进程，内核都维护着一张当前打开着的文件和资源的表格。 每个打开的文件都分配了一个称为文件描述符的简单的数字标识符。 在系统层，所有文件系统操作都使用这些文件描述符来标识和跟踪每个特定的文件。 Windows 系统使用了一个虽然不同但概念上类似的机制来跟踪资源。 为了简化用户的工作，Node.js 抽象出操作系统之间的特定差异，并为所有打开的文件分配一个数字型的文件描述符。

`fs.open()` 方法用于分配新的文件描述符。 一旦被分配，则文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息。

```js
fs.open('/open/some/file.txt', 'r', (err, fd) => {
  if (err) throw err;
  fs.fstat(fd, (err, stat) => {
    if (err) throw err;
    // 使用文件属性。

    // 始终关闭文件描述符！
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});
```

大多数操作系统限制在任何给定时间内可能打开的文件描述符的数量，因此当操作完成时关闭描述符至关重要。 如果不这样做将导致内存泄漏，最终导致应用程序崩溃。

## 线程池的使用

所有的文件系统 API，除了 `fs.FSWatcher()` 和那些显式同步的之外，都使用 libuv 的线程池，这对某些应用程序可能会产生意外和负面的性能影响

## fs.Dir 类