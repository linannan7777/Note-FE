新增于: v12.12.0

表示目录流的类。

由 [`fs.opendir()`](http://nodejs.cn/api/fs.html#fs_fs_opendir_path_options_callback)、[`fs.opendirSync()`](http://nodejs.cn/api/fs.html#fs_fs_opendirsync_path_options) 或 [`fsPromises.opendir()`](http://nodejs.cn/api/fs.html#fs_fspromises_opendir_path_options) 创建。

```js
const fs = require('fs');

async function print(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
}
print('./').catch(console.error);
```

### `dir.close()`[#](http://nodejs.cn/api/fs.html#fs_dir_close)

[中英对照](http://nodejs.cn/api/fs/dir_close.html) [在线运行](http://run.nodejs.cn/?api=fs.Dir/close) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_close.md)

新增于: v12.12.0

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地关闭目录的底层资源句柄。 后续的读取会导致错误。

返回 `Promise`（在资源被关闭之后会被解决）。

### `dir.close(callback)`[#](http://nodejs.cn/api/fs.html#fs_dir_close_callback)

[中英对照](http://nodejs.cn/api/fs/dir_close_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_close_callback.md)

新增于: v12.12.0

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步地关闭目录的底层资源句柄。 后续的读取会导致错误。

关闭资源句柄之后将会调用 `callback`。

### `dir.closeSync()`[#](http://nodejs.cn/api/fs.html#fs_dir_closesync)

[中英对照](http://nodejs.cn/api/fs/dir_closesync.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_closesync.md)

新增于: v12.12.0

同步地关闭目录的底层资源句柄。 后续的读取会导致错误。

### `dir.path`[#](http://nodejs.cn/api/fs.html#fs_dir_path)

[中英对照](http://nodejs.cn/api/fs/dir_path.html) [在线运行](http://run.nodejs.cn/?api=fs.Dir/path) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_path.md)

新增于: v12.12.0

- [](http://url.nodejs.cn/9Tw2bK)

此目录的只读路径，与提供给 [`fs.opendir()`](http://nodejs.cn/api/fs.html#fs_fs_opendir_path_options_callback)、[`fs.opendirSync()`](http://nodejs.cn/api/fs.html#fs_fs_opendirsync_path_options) 或 [`fsPromises.opendir()`](http://nodejs.cn/api/fs.html#fs_fspromises_opendir_path_options) 的一样。

### `dir.read()`[#](http://nodejs.cn/api/fs.html#fs_dir_read)

[中英对照](http://nodejs.cn/api/fs/dir_read.html) [在线运行](http://run.nodejs.cn/?api=fs.Dir/read) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_read.md)

新增于: v12.12.0

- 返回: 包含 [](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) | [](http://url.nodejs.cn/334hvC) 的 [](http://url.nodejs.cn/ri1kj8)

通过 [`readdir(3)`](http://url.nodejs.cn/QvrbKw) 异步地读取下一个目录项作为 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent)。

读取完成之后，则会返回 `Promise`（resolve 时会传入 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) 或 `null`（如果读取不到目录项））。

此函数返回的目录项不遵循操作系统的底层目录机制所提供的特定顺序。 遍历目录时添加或删除的目录项可能不会包含在遍历的结果中。

### `dir.read(callback)`[#](http://nodejs.cn/api/fs.html#fs_dir_read_callback)

[中英对照](http://nodejs.cn/api/fs/dir_read_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_read_callback.md)

新增于: v12.12.0

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `dirent` [](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) | [<;null>](http://url.nodejs.cn/334hvC)

通过 [`readdir(3)`](http://url.nodejs.cn/QvrbKw) 异步地读取下一个目录项作为 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent)。

读取完成之后，则会调用 `callback`（传入 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) 或 `null`（如果读取不到目录项））。

此函数返回的目录项不遵循操作系统的底层目录机制所提供的特定顺序。 遍历目录时添加或删除的目录项可能不会包含在遍历的结果中。

### `dir.readSync()`[#](http://nodejs.cn/api/fs.html#fs_dir_readsync)

[中英对照](http://nodejs.cn/api/fs/dir_readsync.html) [在线运行](http://run.nodejs.cn/?api=fs.Dir/readSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_readsync.md)

新增于: v12.12.0

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) | [](http://url.nodejs.cn/334hvC)

通过 [`readdir(3)`](http://url.nodejs.cn/QvrbKw) 同步地读取下一个目录项作为 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent)。

如果读取不到目录项，则将会返回 `null`。

此函数返回的目录项不遵循操作系统的底层目录机制所提供的特定顺序。 遍历目录时添加或删除的目录项可能不会包含在遍历的结果中。

### `dir[Symbol.asyncIterator]()`[#](http://nodejs.cn/api/fs.html#fs_dir_symbol_asynciterator)

[中英对照](http://nodejs.cn/api/fs/dir_symbol_asynciterator.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dir_symbol_asynciterator.md)

新增于: v12.12.0

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) 的 [](http://url.nodejs.cn/HnG4ws)

通过 [`readdir(3)`](http://url.nodejs.cn/QvrbKw) 异步地遍历目录，直到读取了所有的目录项。

异步迭代器返回的目录项始终为 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent)。 `dir.read()` 中为 `null` 的情况会在内部处理。

有关示例，请参见 [`fs.Dir`](http://nodejs.cn/api/fs.html#fs_class_fs_dir)。

该迭代器返回的目录项不遵循操作系统的底层目录机制所提供的特定顺序。 遍历目录时添加或删除的目录项可能不会包含在遍历的结果中。

## fs.Dirent 类[#](http://nodejs.cn/api/fs.html#fs_class_fs_dirent)

[中英对照](http://nodejs.cn/api/fs/class_fs_dirent.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/class_fs_dirent.md)

新增于: v10.10.0

目录项（可以是文件或目录中的子目录）的表示，通过读取 [`fs.Dir`](http://nodejs.cn/api/fs.html#fs_class_fs_dir) 返回。 目录项是文件名和文件类型对的组合。

此外，当调用 [`fs.readdir()`](http://nodejs.cn/api/fs.html#fs_fs_readdir_path_options_callback) 或 [`fs.readdirSync()`](http://nodejs.cn/api/fs.html#fs_fs_readdirsync_path_options)（`withFileTypes` 选项设置为 `true`）时，则生成的数组会使用 `fs.Dirent` 对象（而不是字符串或 `Buffer`）填充。

### `dirent.isBlockDevice()`[#](http://nodejs.cn/api/fs.html#fs_dirent_isblockdevice)

[中英对照](http://nodejs.cn/api/fs/dirent_isblockdevice.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_isblockdevice.md)

新增于: v10.10.0

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Dirent` 对象描述块设备，则返回 `true`。

### `dirent.isCharacterDevice()`[#](http://nodejs.cn/api/fs.html#fs_dirent_ischaracterdevice)

[中英对照](http://nodejs.cn/api/fs/dirent_ischaracterdevice.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_ischaracterdevice.md)

新增于: v10.10.0

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Dirent` 对象描述字符设备，则返回 `true`。

### `dirent.isDirectory()`[#](http://nodejs.cn/api/fs.html#fs_dirent_isdirectory)

[中英对照](http://nodejs.cn/api/fs/dirent_isdirectory.html) [在线运行](http://run.nodejs.cn/?api=fs.Dirent/isDirectory) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_isdirectory.md)

新增于: v10.10.0

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Dirent` 对象描述文件系统目录，则返回 `true`。

### `dirent.isFIFO()`[#](http://nodejs.cn/api/fs.html#fs_dirent_isfifo)

[中英对照](http://nodejs.cn/api/fs/dirent_isfifo.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_isfifo.md)

新增于: v10.10.0

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Dirent` 对象描述先进先出（FIFO）管道，则返回 `true`。

### `dirent.isFile()`[#](http://nodejs.cn/api/fs.html#fs_dirent_isfile)

[中英对照](http://nodejs.cn/api/fs/dirent_isfile.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_isfile.md)

新增于: v10.10.0

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Dirent` 对象描述普通的文件，则返回 `true`。

### `dirent.isSocket()`[#](http://nodejs.cn/api/fs.html#fs_dirent_issocket)

[中英对照](http://nodejs.cn/api/fs/dirent_issocket.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_issocket.md)

新增于: v10.10.0

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Dirent` 对象描述套接字，则返回 `true`。

### `dirent.isSymbolicLink()`[#](http://nodejs.cn/api/fs.html#fs_dirent_issymboliclink)

[中英对照](http://nodejs.cn/api/fs/dirent_issymboliclink.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_issymboliclink.md)

新增于: v10.10.0

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Dirent` 对象描述符号链接，则返回 `true`。

### `dirent.name`[#](http://nodejs.cn/api/fs.html#fs_dirent_name)

[中英对照](http://nodejs.cn/api/fs/dirent_name.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/dirent_name.md)

新增于: v10.10.0

- [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

`fs.Dirent` 对象指向的文件名。 此值的类型取决于传递给 [`fs.readdir()`](http://nodejs.cn/api/fs.html#fs_fs_readdir_path_options_callback) 或 [`fs.readdirSync()`](http://nodejs.cn/api/fs.html#fs_fs_readdirsync_path_options) 的 `options.encoding`。

## fs.FSWatcher 类[#](http://nodejs.cn/api/fs.html#fs_class_fs_fswatcher)

[中英对照](http://nodejs.cn/api/fs/class_fs_fswatcher.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/class_fs_fswatcher.md)

新增于: v0.5.8

- 继承自 [](http://nodejs.cn/api/events.html#events_class_eventemitter)

成功调用 [`fs.watch()`](http://nodejs.cn/api/fs.html#fs_fs_watch_filename_options_listener) 方法会返回新建的 `fs.FSWatcher` 对象。

每当指定监视的文件被修改时，所有的 `fs.FSWatcher` 对象都会触发 `'change'` 事件。

### 'change' 事件[#](http://nodejs.cn/api/fs.html#fs_event_change)

[中英对照](http://nodejs.cn/api/fs/event_change.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_change.md)

新增于: v0.5.8

- `eventType` [](http://url.nodejs.cn/9Tw2bK) 已发生的更改事件的类型。
- `filename` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) 更改的文件名（如果相关或可用）。

当监视的目录或文件中发生更改时触发。 在 [`fs.watch()`](http://nodejs.cn/api/fs.html#fs_fs_watch_filename_options_listener) 中查看更多详细信息。

可能不提供 `filename` 参数，这取决于操作系统的支持。 如果提供了 `filename`，则当调用 `fs.watch()` 并将其 `encoding` 选项设置为 `'buffer'` 时， `filename` 将是一个 `Buffer`，否则 `filename` 将是 UTF-8 字符串。

```js
// 使用 fs.watch（）监听器的示例。
fs.watch('./tmp', { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(filename);
    // 打印: <Buffer ...>
  }
});
```

### 'close' 事件[#](http://nodejs.cn/api/fs.html#fs_event_close)

[中英对照](http://nodejs.cn/api/fs/event_close.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_close.md)

新增于: v10.0.0

当监视器停止监视更改时触发。 关闭的 `fs.FSWatcher` 对象在事件处理函数中不再可用。

### 'error' 事件[#](http://nodejs.cn/api/fs.html#fs_event_error)

[中英对照](http://nodejs.cn/api/fs/event_error.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_error.md)

新增于: v0.5.8

- `error` [](http://url.nodejs.cn/qZ873x)

当监视文件时发生错误时触发。 发生错误的 `fs.FSWatcher` 对象在事件处理函数中不再可用。

### `watcher.close()`[#](http://nodejs.cn/api/fs.html#fs_watcher_close)

[中英对照](http://nodejs.cn/api/fs/watcher_close.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/watcher_close.md)

新增于: v0.5.8

给定的 `fs.FSWatcher` 停止监视更改。 一旦停止，则 `fs.FSWatcher` 对象将不再可用。

### `watcher.ref()`[#](http://nodejs.cn/api/fs.html#fs_watcher_ref)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/watcher_ref.md)

新增于: v14.3.0

- Returns: [](http://nodejs.cn/api/fs.html#fs_class_fs_fswatcher)

When called, requests that the Node.js event loop *not* exit so long as the `FSWatcher` is active. Calling `watcher.ref()` multiple times will have no effect.

By default, all `FSWatcher` objects are "ref'ed", making it normally unnecessary to call `watcher.ref()` unless `watcher.unref()` had been called previously.

### `watcher.unref()`[#](http://nodejs.cn/api/fs.html#fs_watcher_unref)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/watcher_unref.md)

新增于: v14.3.0

- Returns: [](http://nodejs.cn/api/fs.html#fs_class_fs_fswatcher)

When called, the active `FSWatcher` object will not require the Node.js event loop to remain active. If there is no other activity keeping the event loop running, the process may exit before the `FSWatcher` object's callback is invoked. Calling `watcher.unref()` multiple times will have no effect.

## fs.StatWatcher 类[#](http://nodejs.cn/api/fs.html#fs_class_fs_statwatcher)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/class_fs_statwatcher.md)

新增于: v14.3.0

- Extends [](http://nodejs.cn/api/events.html#events_class_eventemitter)

A successful call to `fs.watchFile()` method will return a new `fs.StatWatcher` object.

### `watcher.ref()`[#](http://nodejs.cn/api/fs.html#fs_watcher_ref_1)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/watcher_ref_1.md)

新增于: v14.3.0

- Returns: [](http://nodejs.cn/api/fs.html#fs_class_fs_statwatcher)

When called, requests that the Node.js event loop *not* exit so long as the `StatWatcher` is active. Calling `watcher.ref()` multiple times will have no effect.

By default, all `StatWatcher` objects are "ref'ed", making it normally unnecessary to call `watcher.ref()` unless `watcher.unref()` had been called previously.

### `watcher.unref()`[#](http://nodejs.cn/api/fs.html#fs_watcher_unref_1)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/watcher_unref_1.md)

新增于: v14.3.0

- Returns: [](http://nodejs.cn/api/fs.html#fs_class_fs_statwatcher)

When called, the active `StatWatcher` object will not require the Node.js event loop to remain active. If there is no other activity keeping the event loop running, the process may exit before the `StatWatcher` object's callback is invoked. Calling `watcher.unref()` multiple times will have no effect.

## fs.ReadStream 类[#](http://nodejs.cn/api/fs.html#fs_class_fs_readstream)

[中英对照](http://nodejs.cn/api/fs/class_fs_readstream.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/class_fs_readstream.md)

新增于: v0.1.93

- 继承自: [](http://nodejs.cn/api/stream.html#stream_class_stream_readable)

使用 [`fs.createReadStream()`](http://nodejs.cn/api/fs.html#fs_fs_createreadstream_path_options) 函数创建并返回的 `fs.ReadStream` 实例。

### 'close' 事件[#](http://nodejs.cn/api/fs.html#fs_event_close_1)

[中英对照](http://nodejs.cn/api/fs/event_close_1.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_close_1.md)

新增于: v0.1.93

当 `fs.ReadStream` 的底层文件描述符已关闭时触发。

### 'open' 事件[#](http://nodejs.cn/api/fs.html#fs_event_open)

[中英对照](http://nodejs.cn/api/fs/event_open.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_open.md)

新增于: v0.1.93

- `fd` [](http://url.nodejs.cn/SXbo1v) `ReadStream` 使用的整数型文件描述符。

当 `fs.ReadStream` 的文件描述符打开时触发。

### 'ready' 事件[#](http://nodejs.cn/api/fs.html#fs_event_ready)

[中英对照](http://nodejs.cn/api/fs/event_ready.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_ready.md)

新增于: v9.11.0

当 `fs.ReadStream` 准备好使用时触发。

`'open'` 事件之后立即触发。

### `readStream.bytesRead`[#](http://nodejs.cn/api/fs.html#fs_readstream_bytesread)

[中英对照](http://nodejs.cn/api/fs/readstream_bytesread.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/readstream_bytesread.md)

新增于: v6.4.0

- [](http://url.nodejs.cn/SXbo1v)

到目前为止已读取的字节数。

### `readStream.path`[#](http://nodejs.cn/api/fs.html#fs_readstream_path)

[中英对照](http://nodejs.cn/api/fs/readstream_path.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/readstream_path.md)

新增于: v0.1.93

- [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

流正在读取的文件的路径，由 `fs.createReadStream()` 的第一个参数指定。 如果 `path` 传入字符串，则 `readStream.path` 将是字符串。 如果 `path` 传入 `Buffer`，则 `readStream.path` 将是 `Buffer`。

### `readStream.pending`[#](http://nodejs.cn/api/fs.html#fs_readstream_pending)

[中英对照](http://nodejs.cn/api/fs/readstream_pending.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/readstream_pending.md)

新增于: v11.2.0, v10.16.0

- [](http://url.nodejs.cn/jFbvuT)

如果底层的文件还未被打开（即在触发 `'ready'` 事件之前），则此属性为 `true`。

## fs.Stats 类[#](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

[中英对照](http://nodejs.cn/api/fs/class_fs_stats.html) [在线运行](http://run.nodejs.cn/?api=fs.stat) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/class_fs_stats.md)

版本历史

`fs.Stats` 对象提供了关于文件的信息。

从 [`fs.stat()`](http://nodejs.cn/api/fs.html#fs_fs_stat_path_options_callback)、[`fs.lstat()`](http://nodejs.cn/api/fs.html#fs_fs_lstat_path_options_callback)、[`fs.fstat()`](http://nodejs.cn/api/fs.html#fs_fs_fstat_fd_options_callback)、以及它们的同步方法返回的对象都是此类型。 如果传给这些方法的 `options` 中的 `bigint` 为 true，则数值会是 `bigint` 型而不是 `number` 型，并且该对象还会包含额外的纳秒级精度的属性（以 `Ns` 为后缀）。

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

`bigint` 的版本：

```console
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,
  mtimeNs: 1318289051000000000n,
  ctimeNs: 1318289051000000000n,
  birthtimeNs: 1318289051000000000n,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

### `stats.isBlockDevice()`[#](http://nodejs.cn/api/fs.html#fs_stats_isblockdevice)

[中英对照](http://nodejs.cn/api/fs/stats_isblockdevice.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_isblockdevice.md)

新增于: v0.1.10

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Stats` 对象描述块设备，则返回 `true`。

### `stats.isCharacterDevice()`[#](http://nodejs.cn/api/fs.html#fs_stats_ischaracterdevice)

[中英对照](http://nodejs.cn/api/fs/stats_ischaracterdevice.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_ischaracterdevice.md)

新增于: v0.1.10

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Stats` 对象描述字符设备，则返回 `true`。

### `stats.isDirectory()`[#](http://nodejs.cn/api/fs.html#fs_stats_isdirectory)

[中英对照](http://nodejs.cn/api/fs/stats_isdirectory.html) [在线运行](http://run.nodejs.cn/?api=fs.Stats/isDirectory) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_isdirectory.md)

新增于: v0.1.10

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Stats` 对象描述文件系统目录，则返回 `true`。

如果 `fs.Stats` 对象来自 [`fs.lstat()`](http://nodejs.cn/api/fs.html#fs_fs_lstat_path_options_callback)，则此方法会始终返回 `false`。 这是因为 [`fs.lstat()`](http://nodejs.cn/api/fs.html#fs_fs_lstat_path_options_callback) 返回关于符号链接本身（而不是其解析的路径）的信息。

### `stats.isFIFO()`[#](http://nodejs.cn/api/fs.html#fs_stats_isfifo)

[中英对照](http://nodejs.cn/api/fs/stats_isfifo.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_isfifo.md)

新增于: v0.1.10

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Stats` 对象描述先进先出（FIFO）管道，则返回 `true`。

### `stats.isFile()`[#](http://nodejs.cn/api/fs.html#fs_stats_isfile)

[中英对照](http://nodejs.cn/api/fs/stats_isfile.html) [在线运行](http://run.nodejs.cn/?api=fs.Stats/isFile) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_isfile.md)

新增于: v0.1.10

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Stats` 对象描述普通的文件，则返回 `true`。

### `stats.isSocket()`[#](http://nodejs.cn/api/fs.html#fs_stats_issocket)

[中英对照](http://nodejs.cn/api/fs/stats_issocket.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_issocket.md)

新增于: v0.1.10

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Stats` 对象描述套接字，则返回 `true`。

### `stats.isSymbolicLink()`[#](http://nodejs.cn/api/fs.html#fs_stats_issymboliclink)

[中英对照](http://nodejs.cn/api/fs/stats_issymboliclink.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_issymboliclink.md)

新增于: v0.1.10

- 返回: [](http://url.nodejs.cn/jFbvuT)

如果 `fs.Stats` 对象描述符号链接，则返回 `true`。

此方法仅在使用 [`fs.lstat()`](http://nodejs.cn/api/fs.html#fs_fs_lstat_path_options_callback) 时有效。

### `stats.dev`[#](http://nodejs.cn/api/fs.html#fs_stats_dev)

[中英对照](http://nodejs.cn/api/fs/stats_dev.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_dev.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

包含该文件的设备的数字标识符。

### `stats.ino`[#](http://nodejs.cn/api/fs.html#fs_stats_ino)

[中英对照](http://nodejs.cn/api/fs/stats_ino.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_ino.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

文件系统特定的文件索引节点编号。

### `stats.mode`[#](http://nodejs.cn/api/fs.html#fs_stats_mode)

[中英对照](http://nodejs.cn/api/fs/stats_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_mode.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

描述文件类型和模式的位字段。

### `stats.nlink`[#](http://nodejs.cn/api/fs.html#fs_stats_nlink)

[中英对照](http://nodejs.cn/api/fs/stats_nlink.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_nlink.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

文件存在的硬链接数。

### `stats.uid`[#](http://nodejs.cn/api/fs.html#fs_stats_uid)

[中英对照](http://nodejs.cn/api/fs/stats_uid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_uid.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

拥有该文件（POSIX）的用户的数字型用户标识符。

### `stats.gid`[#](http://nodejs.cn/api/fs.html#fs_stats_gid)

[中英对照](http://nodejs.cn/api/fs/stats_gid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_gid.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

拥有该文件（POSIX）的群组的数字型群组标识符。

### `stats.rdev`[#](http://nodejs.cn/api/fs.html#fs_stats_rdev)

[中英对照](http://nodejs.cn/api/fs/stats_rdev.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_rdev.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

如果文件表示一个设备，则此值为数字型设备标识符。

### `stats.size`[#](http://nodejs.cn/api/fs.html#fs_stats_size)

[中英对照](http://nodejs.cn/api/fs/stats_size.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_size.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

文件的大小（以字节为单位）。

### `stats.blksize`[#](http://nodejs.cn/api/fs.html#fs_stats_blksize)

[中英对照](http://nodejs.cn/api/fs/stats_blksize.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_blksize.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

用于 I/O 操作的文件系统块的大小。

### `stats.blocks`[#](http://nodejs.cn/api/fs.html#fs_stats_blocks)

[中英对照](http://nodejs.cn/api/fs/stats_blocks.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_blocks.md)

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

为此文件分配的块数。

### `stats.atimeMs`[#](http://nodejs.cn/api/fs.html#fs_stats_atimems)

[中英对照](http://nodejs.cn/api/fs/stats_atimems.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_atimems.md)

新增于: v8.1.0

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

表明上次访问此文件的时间戳，以 POSIX 纪元以来的毫秒数表示。

### `stats.mtimeMs`[#](http://nodejs.cn/api/fs.html#fs_stats_mtimems)

[中英对照](http://nodejs.cn/api/fs/stats_mtimems.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_mtimems.md)

新增于: v8.1.0

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

表明上次修改此文件的时间戳，以 POSIX 纪元以来的毫秒数表示。

### `stats.ctimeMs`[#](http://nodejs.cn/api/fs.html#fs_stats_ctimems)

[中英对照](http://nodejs.cn/api/fs/stats_ctimems.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_ctimems.md)

新增于: v8.1.0

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

表明上次更改文件状态的时间戳，以 POSIX 纪元以来的毫秒数表示。

### `stats.birthtimeMs`[#](http://nodejs.cn/api/fs.html#fs_stats_birthtimems)

[中英对照](http://nodejs.cn/api/fs/stats_birthtimems.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_birthtimems.md)

新增于: v8.1.0

- [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/gJMq1y)

表明此文件的创建时间的时间戳，以 POSIX 纪元以来的毫秒数表示。

### `stats.atimeNs`[#](http://nodejs.cn/api/fs.html#fs_stats_atimens)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_atimens.md)

新增于: v12.10.0

- [](http://url.nodejs.cn/gJMq1y)

Only present when `bigint: true` is passed into the method that generates the object. The timestamp indicating the last time this file was accessed expressed in nanoseconds since the POSIX Epoch.

### `stats.mtimeNs`[#](http://nodejs.cn/api/fs.html#fs_stats_mtimens)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_mtimens.md)

新增于: v12.10.0

- [](http://url.nodejs.cn/gJMq1y)

Only present when `bigint: true` is passed into the method that generates the object. The timestamp indicating the last time this file was modified expressed in nanoseconds since the POSIX Epoch.

### `stats.ctimeNs`[#](http://nodejs.cn/api/fs.html#fs_stats_ctimens)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_ctimens.md)

新增于: v12.10.0

- [](http://url.nodejs.cn/gJMq1y)

Only present when `bigint: true` is passed into the method that generates the object. The timestamp indicating the last time the file status was changed expressed in nanoseconds since the POSIX Epoch.

### `stats.birthtimeNs`[#](http://nodejs.cn/api/fs.html#fs_stats_birthtimens)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_birthtimens.md)

新增于: v12.10.0

- [](http://url.nodejs.cn/gJMq1y)

Only present when `bigint: true` is passed into the method that generates the object. The timestamp indicating the creation time of this file expressed in nanoseconds since the POSIX Epoch.

### `stats.atime`[#](http://nodejs.cn/api/fs.html#fs_stats_atime)

[中英对照](http://nodejs.cn/api/fs/stats_atime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_atime.md)

新增于: v0.11.13

- [](http://url.nodejs.cn/A9TMoa)

表明上次访问此文件的时间戳。

### `stats.mtime`[#](http://nodejs.cn/api/fs.html#fs_stats_mtime)

[中英对照](http://nodejs.cn/api/fs/stats_mtime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_mtime.md)

新增于: v0.11.13

- [](http://url.nodejs.cn/A9TMoa)

表明上次修改此文件的时间戳。

### `stats.ctime`[#](http://nodejs.cn/api/fs.html#fs_stats_ctime)

[中英对照](http://nodejs.cn/api/fs/stats_ctime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_ctime.md)

新增于: v0.11.13

- [](http://url.nodejs.cn/A9TMoa)

表明上次更改文件状态的时间戳。

### `stats.birthtime`[#](http://nodejs.cn/api/fs.html#fs_stats_birthtime)

[中英对照](http://nodejs.cn/api/fs/stats_birthtime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stats_birthtime.md)

新增于: v0.11.13

- [](http://url.nodejs.cn/A9TMoa)

表示此文件的创建时间的时间戳。

### 文件属性的时间值[#](http://nodejs.cn/api/fs.html#fs_stat_time_values)

[中英对照](http://nodejs.cn/api/fs/stat_time_values.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/stat_time_values.md)

`atimeMs`、 `mtimeMs`、 `ctimeMs` 和 `birthtimeMs` 属性是保存相应时间（以毫秒为单位）的[数值](http://url.nodejs.cn/SXbo1v)。 它们的精度取决于平台。 当将 `bigint: true` 传给生成该对象的方法时，属性将会是 [bigint](http://url.nodejs.cn/3Jk6h6) 型，否则它们将会是[数字型](http://url.nodejs.cn/SXbo1v)。

`atimeNs`、 `mtimeNs`、 `ctimeNs` 和 `birthtimeNs` 属性是保存相应时间（以纳秒为单位）的 [bigint](http://url.nodejs.cn/3Jk6h6)。 仅当将 `bigint: true` 传给生成该对象的方法时，它们才会出现。 它们的精度取决于平台。

`atime`、 `mtime`、 `ctime` 和 `birthtime` 是对应时间的 [`Date`](http://url.nodejs.cn/A9TMoa) 对象。 `Date` 值和数值没有关联性。 赋值新的数值、或者改变 `Date` 的值，都将不会影响到对应的属性。

stat 对象中的时间具有以下语义：

- `atime` "访问时间" - 上次访问文件数据的时间。由 [`mknod(2)`](http://url.nodejs.cn/dC6BPb)、 [`utimes(2)`](http://url.nodejs.cn/58Fxaj) 和 [`read(2)`](http://url.nodejs.cn/3BmXqe) 系统调用更改。
- `mtime` "修改时间" - 上次修改文件数据的时间。由 [`mknod(2)`](http://url.nodejs.cn/dC6BPb)、 [`utimes(2)`](http://url.nodejs.cn/58Fxaj) 和 [`write(2)`](http://url.nodejs.cn/NmUvmK) 系统调用更改。
- `ctime` "更改时间" - 上次更改文件状态（修改索引节点数据）的时间。由 [`chmod(2)`](http://url.nodejs.cn/K3psEw)、 [`chown(2)`](http://url.nodejs.cn/vSBegL)、 [`link(2)`](http://url.nodejs.cn/U8H1mr)、 [`mknod(2)`](http://url.nodejs.cn/dC6BPb)、 [`rename(2)`](http://url.nodejs.cn/YbqghQ)、 [`unlink(2)`](http://url.nodejs.cn/gjRRsM)、 [`utimes(2)`](http://url.nodejs.cn/58Fxaj)、 [`read(2)`](http://url.nodejs.cn/3BmXqe) 和 [`write(2)`](http://url.nodejs.cn/NmUvmK) 系统调用更改。
- `birthtime` "创建时间" - 创建文件的时间。当创建文件时设置一次。 在不支持创建时间的文件系统上，该字段可能改为保存 `ctime` 或 `1970-01-01T00:00Z`（即 Unix 纪元时间戳 `0`）。 在这种情况下，该值可能大于 `atime` 或 `mtime`。 在 Darwin 和其他的 FreeBSD 衍生系统上，也可能使用 [`utimes(2)`](http://url.nodejs.cn/58Fxaj) 系统调用将 `atime` 显式地设置为比 `birthtime` 更早的值。

在 Node.js 0.12 之前，在 Windows 系统上 `ctime` 保存 `birthtime`。 从 0.12 开始， `ctime` 不再是“创建时间”，而在 Unix 系统上则从来都不是。

## fs.WriteStream 类[#](http://nodejs.cn/api/fs.html#fs_class_fs_writestream)

[中英对照](http://nodejs.cn/api/fs/class_fs_writestream.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/class_fs_writestream.md)

新增于: v0.1.93

- 继承自 [](http://nodejs.cn/api/stream.html#stream_class_stream_writable)

使用 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options) 函数创建并返回的 `fs.WriteStream` 实例。

### 'close' 事件[#](http://nodejs.cn/api/fs.html#fs_event_close_2)

[中英对照](http://nodejs.cn/api/fs/event_close_2.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_close_2.md)

新增于: v0.1.93

当 `WriteStream` 的底层文件描述符已关闭时触发。

### 'open' 事件[#](http://nodejs.cn/api/fs.html#fs_event_open_1)

[中英对照](http://nodejs.cn/api/fs/event_open_1.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_open_1.md)

新增于: v0.1.93

- `fd` [](http://url.nodejs.cn/SXbo1v) `WriteStream` 使用的整数型文件描述符。

当 `WriteStream` 的文件打开时触发。

### 'ready' 事件[#](http://nodejs.cn/api/fs.html#fs_event_ready_1)

[中英对照](http://nodejs.cn/api/fs/event_ready_1.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/event_ready_1.md)

新增于: v9.11.0

当 `fs.WriteStream` 准备好使用时触发。

`'open'` 事件之后立即触发。

### `writeStream.bytesWritten`[#](http://nodejs.cn/api/fs.html#fs_writestream_byteswritten)

[中英对照](http://nodejs.cn/api/fs/writestream_byteswritten.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/writestream_byteswritten.md)

新增于: v0.4.7

到目前为止写入的字节数。 不包括仍在排队等待写入的数据。

### `writeStream.path`[#](http://nodejs.cn/api/fs.html#fs_writestream_path)

[中英对照](http://nodejs.cn/api/fs/writestream_path.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/writestream_path.md)

新增于: v0.1.93

流正在写入的文件的路径，由 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options) 的第一个参数指定。 如果 `path` 传入字符串，则 `writeStream.path` 将是字符串。 如果 `path` 传入 `Buffer`，则 `writeStream.path` 将是 `Buffer`。

### `writeStream.pending`[#](http://nodejs.cn/api/fs.html#fs_writestream_pending)

[中英对照](http://nodejs.cn/api/fs/writestream_pending.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/writestream_pending.md)

新增于: v11.2.0

- [](http://url.nodejs.cn/jFbvuT)

如果底层的文件还未被打开（即在触发 `'ready'` 事件之前），则此属性为 `true`。

## `fs.access(path[, mode], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback)

[中英对照](http://nodejs.cn/api/fs/fs_access_path_mode_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.access) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_access_path_mode_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `fs.constants.F_OK`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

测试用户对 `path` 指定的文件或目录的权限。 `mode` 参数是一个可选的整数，指定要执行的可访问性检查。 查看[文件可访问性的常量](http://nodejs.cn/api/fs.html#fs_file_access_constants)了解 `mode` 的可选值。 可以创建由两个或更多个值按位或组成的掩码（例如 `fs.constants.W_OK | fs.constants.R_OK`）。

最后一个参数 `callback` 是回调函数，调用时会传入可能的错误参数。 如果任何可访问性检查失败，则错误参数会是 `Error` 对象。 以下示例会检查 `package.json` 是否存在、以及是否可读或可写。

```js
const file = 'package.json';

// 检查文件是否存在于当前目录中。
fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? '不存在' : '存在'}`);
});

// 检查文件是否可读。
fs.access(file, fs.constants.R_OK, (err) => {
  console.log(`${file} ${err ? '不可读' : '可读'}`);
});

// 检查文件是否可写。
fs.access(file, fs.constants.W_OK, (err) => {
  console.log(`${file} ${err ? '不可写' : '可写'}`);
});

// 检查文件是否存在于当前目录中、以及是否可写。
fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
  if (err) {
    console.error(
      `${file} ${err.code === 'ENOENT' ? '不存在' : '只可读'}`);
  } else {
    console.log(`${file} 存在，且可写`);
  }
});
```

不要在调用 `fs.open()`、 `fs.readFile()` 或 `fs.writeFile()` 之前使用 `fs.access()` 检查文件的可访问性。 这样做会引入竞态条件，因为其他进程可能会在两个调用之间更改文件的状态。 而是，应该直接打开、读取或写入文件，并且当文件无法访问时处理引发的错误。

**写入（不推荐）**

```js
fs.access('文件', (err) => {
  if (!err) {
    console.error('文件已存在');
    return;
  }

  fs.open('文件', 'wx', (err, fd) => {
    if (err) throw err;
    writeMyData(fd);
  });
});
```

**写入（推荐）**

```js
fs.open('文件', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('文件已存在');
      return;
    }

    throw err;
  }

  writeMyData(fd);
});
```

**读取（不推荐）**

```js
fs.access('文件', (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('文件不存在');
      return;
    }

    throw err;
  }

  fs.open('文件', 'r', (err, fd) => {
    if (err) throw err;
    readMyData(fd);
  });
});
```

**读取（推荐）**

```js
fs.open('文件', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('文件不存在');
      return;
    }

    throw err;
  }

  readMyData(fd);
});
```

上面的“不推荐”示例会先检查可访问性，然后再使用文件。 “推荐”示例则更好，因为它们直接使用文件并处理错误（如果有错误的话）。

通常，仅在不直接使用文件时（例如当其可访问性是来自其他进程的信号时），才检查文件的可访问性。

在 Windows 上，目录上的访问控制策略（ACL）可能会限制对文件或目录的访问。 但是， `fs.access()` 函数不检查 ACL，因此即使 ACL 限制用户读取或写入，也可能报告路径是可访问的。

## `fs.accessSync(path[, mode])`[#](http://nodejs.cn/api/fs.html#fs_fs_accesssync_path_mode)

[中英对照](http://nodejs.cn/api/fs/fs_accesssync_path_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_accesssync_path_mode.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `fs.constants.F_OK`。

同步地测试用户对 `path` 指定的文件或目录的权限。 `mode` 参数是一个可选的整数，指定要执行的可访问性检查。 查看[文件可访问性的常量](http://nodejs.cn/api/fs.html#fs_file_access_constants)了解 `mode` 的可选值。 可以创建由两个或更多个值按位或组成的掩码（例如 `fs.constants.W_OK | fs.constants.R_OK`）。

如果可访问性检查失败，则抛出 `Error`。 否则，该方法将返回 `undefined`。

```js
try {
  fs.accessSync('etc/passwd', fs.constants.R_OK | fs.constants.W_OK);
  console.log('可以读写');
} catch (err) {
  console.error('无权访问');
}
```

## `fs.appendFile(path, data[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_appendfile_path_data_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_appendfile_path_data_options_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.appendFile) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_appendfile_path_data_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://url.nodejs.cn/SXbo1v) 文件名或文件描述符。

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。**默认值:** `'a'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步地追加数据到文件，如果文件尚不存在则创建文件。 `data` 可以是字符串或 [`Buffer`](http://nodejs.cn/api/buffer.html#buffer_buffer)。

```js
fs.appendFile('文件.txt', '追加的数据', (err) => {
  if (err) throw err;
  console.log('数据已被追加到文件');
});
```

如果 `options` 是字符串，则它指定字符编码：

```js
fs.appendFile('文件.txt', '追加的数据', 'utf8', callback);
```

`path` 可以指定为已打开用于追加（使用 `fs.open()` 或 `fs.openSync()`）的数字型文件描述符。 文件描述符不会自动关闭。

```js
fs.open('文件.txt', 'a', (err, fd) => {
  if (err) throw err;
  fs.appendFile(fd, '追加的数据', 'utf8', (err) => {
    fs.close(fd, (err) => {
      if (err) throw err;
    });
    if (err) throw err;
  });
});
```

## `fs.appendFileSync(path, data[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_appendfilesync_path_data_options)

[中英对照](http://nodejs.cn/api/fs/fs_appendfilesync_path_data_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_appendfilesync_path_data_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://url.nodejs.cn/SXbo1v) 文件名或文件描述符。

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。**默认值:** `'a'`。

同步地将数据追加到文件，如果文件尚不存在则创建该文件。 `data` 可以是字符串或 [`Buffer`](http://nodejs.cn/api/buffer.html#buffer_buffer)。

```js
try {
  fs.appendFileSync('文件.txt', '追加的数据');
  console.log('数据已被追加到文件');
} catch (err) {
  /* 处理错误 */
}
```

如果 `options` 是字符串，则它指定字符编码：

```js
fs.appendFileSync('文件.txt', '追加的数据', 'utf8');
```

`path` 可以指定为已打开用于追加（使用 `fs.open()` 或 `fs.openSync()`）的数字型文件描述符。 文件描述符不会自动关闭。

```js
let fd;

try {
  fd = fs.openSync('文件.txt', 'a');
  fs.appendFileSync(fd, '追加的数据', 'utf8');
} catch (err) {
  /* 处理错误 */
} finally {
  if (fd !== undefined)
    fs.closeSync(fd);
}
```

## `fs.chmod(path, mode, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_chmod_path_mode_callback)

[中英对照](http://nodejs.cn/api/fs/fs_chmod_path_mode_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_chmod_path_mode_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步地更改文件的权限。 除了可能的异常，完成回调没有其他参数。

也可参见 [`chmod(2)`](http://url.nodejs.cn/K3psEw)。

```js
fs.chmod('my_file.txt', 0o775, (err) => {
  if (err) throw err;
  console.log('文件 “my_file.txt” 的权限已被更改');
});
```

### 文件的模式[#](http://nodejs.cn/api/fs.html#fs_file_modes)

[中英对照](http://nodejs.cn/api/fs/file_modes.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_modes.md)

`fs.chmod()` 和 `fs.chmodSync()` 方法中使用的 `mode` 参数是使用以下常量的逻辑或运算创建的数字型位掩码：

| 常量                   | 八进制值 | 说明               |
| :--------------------- | :------- | :----------------- |
| `fs.constants.S_IRUSR` | `0o400`  | 所有者可读         |
| `fs.constants.S_IWUSR` | `0o200`  | 所有者可写         |
| `fs.constants.S_IXUSR` | `0o100`  | 所有者可执行或搜索 |
| `fs.constants.S_IRGRP` | `0o40`   | 群组可读           |
| `fs.constants.S_IWGRP` | `0o20`   | 群组可写           |
| `fs.constants.S_IXGRP` | `0o10`   | 群组可执行或搜索   |
| `fs.constants.S_IROTH` | `0o4`    | 其他人可读         |
| `fs.constants.S_IWOTH` | `0o2`    | 其他人可写         |
| `fs.constants.S_IXOTH` | `0o1`    | 其他人可执行或搜索 |

构造 `mode` 更简单的方法是使用三个八进制数字的序列（ 例如 `765`）。 最左边的数字（示例中的 `7`）指定文件所有者的权限。 中间的数字（示例中的 `6`）指定群组的权限。 最右边的数字（示例中的 `5`）指定其他人的权限。

| 数字 | 说明               |
| :--- | :----------------- |
| `7`  | 可读、可写、可执行 |
| `6`  | 可读、可写         |
| `5`  | 可读、可执行       |
| `4`  | 只读               |
| `3`  | 可写、可执行       |
| `2`  | 只写               |
| `1`  | 只可执行           |
| `0`  | 没有权限           |

例如，八进制值 `0o765` 表示：

- 所有者可以读取、写入和执行该文件。
- 群组可以读和写入该文件。
- 其他人可以读取和执行该文件。

当使用期望的文件模式的原始数字时，任何大于 `0o777` 的值都可能导致不支持一致的特定于平台的行为。 因此，诸如 `S_ISVTX`、 `S_ISGID` 或 `S_ISUID` 之类的常量不会在 `fs.constants` 中公开。

注意事项：在 Windows 上，只能更改写入权限，并且不会实现群组、所有者或其他人的权限之间的区别。

## `fs.chmodSync(path, mode)`[#](http://nodejs.cn/api/fs.html#fs_fs_chmodsync_path_mode)

[中英对照](http://nodejs.cn/api/fs/fs_chmodsync_path_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_chmodsync_path_mode.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v)

详见此 API 的异步版本的文档：[`fs.chmod()`](http://nodejs.cn/api/fs.html#fs_fs_chmod_path_mode_callback)。

也可参见 [`chmod(2)`](http://url.nodejs.cn/K3psEw)。

## `fs.chown(path, uid, gid, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_chown_path_uid_gid_callback)

[中英对照](http://nodejs.cn/api/fs/fs_chown_path_uid_gid_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_chown_path_uid_gid_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `uid` [](http://url.nodejs.cn/SXbo1v)

- `gid` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步地更改文件的所有者和群组。 除了可能的异常，完成回调没有其他参数。

也可参见 [`chown(2)`](http://url.nodejs.cn/vSBegL)。

## `fs.chownSync(path, uid, gid)`[#](http://nodejs.cn/api/fs.html#fs_fs_chownsync_path_uid_gid)

[中英对照](http://nodejs.cn/api/fs/fs_chownsync_path_uid_gid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_chownsync_path_uid_gid.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `uid` [](http://url.nodejs.cn/SXbo1v)
- `gid` [](http://url.nodejs.cn/SXbo1v)

同步地更改文件的所有者和群组。 返回 `undefined`。 这是 [`fs.chown()`](http://nodejs.cn/api/fs.html#fs_fs_chown_path_uid_gid_callback) 的同步版本。

也可参见 [`chown(2)`](http://url.nodejs.cn/vSBegL)。

## `fs.close(fd, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_close_fd_callback)

[中英对照](http://nodejs.cn/api/fs/fs_close_fd_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_close_fd_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`close(2)`](http://url.nodejs.cn/vCJCMG)。 除了可能的异常，完成回调没有其他参数。

通过任何其他 `fs` 操作在当前正在使用的任何文件描述符（`fd`）上调用 `fs.close()` 可能导致未定义的行为。

## `fs.closeSync(fd)`[#](http://nodejs.cn/api/fs.html#fs_fs_closesync_fd)

[中英对照](http://nodejs.cn/api/fs/fs_closesync_fd.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_closesync_fd.md)

新增于: v0.1.21

- `fd` [](http://url.nodejs.cn/SXbo1v)

同步的 [`close(2)`](http://url.nodejs.cn/vCJCMG)。返回 `undefined`。

通过任何其他 `fs` 操作在当前正在使用的任何文件描述符（`fd`）上调用 `fs.closeSync()` 可能导致未定义的行为。

## `fs.constants`[#](http://nodejs.cn/api/fs.html#fs_fs_constants)

[中英对照](http://nodejs.cn/api/fs/fs_constants.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_constants.md)

- [](http://url.nodejs.cn/jzn6Ao)

返回包含文件系统操作常用常量的对象。 当前定义的特定常量在 [FS 常量](http://nodejs.cn/api/fs.html#fs_fs_constants_1)中描述。

## `fs.copyFile(src, dest[, mode], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_copyfile_src_dest_mode_callback)

[中英对照](http://nodejs.cn/api/fs/fs_copyfile_src_dest_mode_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_copyfile_src_dest_mode_callback.md)

版本历史

- `src` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) 要拷贝的源文件名。
- `dest` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) 拷贝操作的目标文件名。
- `mode` [](http://url.nodejs.cn/SXbo1v) 用于拷贝操作的修饰符。**默认值:** `0`。
- `callback` [](http://url.nodejs.cn/ceTQa6)

异步地将 `src` 拷贝到 `dest`。 默认情况下，如果 `dest` 已经存在，则覆盖它。 除了可能的异常，回调函数没有其他参数。 Node.js 不保证拷贝操作的原子性。 如果在打开目标文件用于写入后发生错误，则 Node.js 将尝试删除目标文件。

`mode` 是一个可选的整数，指定拷贝操作的行为。 可以创建由两个或更多个值按位或组成的掩码（比如 `fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`）。

- `fs.constants.COPYFILE_EXCL` - 如果 `dest` 已存在，则拷贝操作将失败。
- `fs.constants.COPYFILE_FICLONE` - 拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
- `fs.constants.COPYFILE_FICLONE_FORCE` - 拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。

```js
const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;

function callback(err) {
  if (err) throw err;
  console.log('源文件已拷贝到目标文');
}

// 默认情况下将创建或覆盖目标文件。
fs.copyFile('源文件.txt', '目标文件.txt', callback);

// 通过使用 COPYFILE_EXCL，如果目标文件存在，则操作将失败。
fs.copyFile('源文件.txt', '目标文件.txt', COPYFILE_EXCL, callback);
```

## `fs.copyFileSync(src, dest[, mode])`[#](http://nodejs.cn/api/fs.html#fs_fs_copyfilesync_src_dest_mode)

[中英对照](http://nodejs.cn/api/fs/fs_copyfilesync_src_dest_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_copyfilesync_src_dest_mode.md)

版本历史

- `src` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) 要拷贝的源文件名。
- `dest` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) 拷贝操作的目标文件名。
- `mode` [](http://url.nodejs.cn/SXbo1v) 用于拷贝操作的修饰符。**默认值:** `0`。

同步地将 `src` 拷贝到 `dest`。 默认情况下，如果 `dest` 已经存在，则覆盖它。 返回 `undefined`。 Node.js 不保证拷贝操作的原子性。 如果在打开目标文件用于写入后发生错误，则 Node.js 将尝试删除目标文件。

`mode` 是一个可选的整数，指定拷贝操作的行为。 可以创建由两个或更多个值按位或组成的掩码（比如 `fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`）。

- `fs.constants.COPYFILE_EXCL` - 如果 `dest` 已存在，则拷贝操作将失败。
- `fs.constants.COPYFILE_FICLONE` - 拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
- `fs.constants.COPYFILE_FICLONE_FORCE` - 拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。

```js
const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;

// 默认情况下将创建或覆盖目标文件。
fs.copyFileSync('源文件.txt', '目标文件.txt');
console.log('源文件已拷贝到目标文件');

// 通过使用 COPYFILE_EXCL，如果目标文件存在，则操作将失败。
fs.copyFileSync('源文件.txt', '目标文件.txt', COPYFILE_EXCL);
```

## `fs.createReadStream(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_createreadstream_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_createreadstream_path_options.html) [在线运行](http://run.nodejs.cn/?api=fs.createReadStream) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_createreadstream_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `flags` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。 **默认值:** `'r'`。
  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `null`。
  - `fd` [](http://url.nodejs.cn/SXbo1v) **默认值:** `null`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `autoClose` [](http://url.nodejs.cn/jFbvuT) **默认值:** `true`。
  - `emitClose` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。
  - `start` [](http://url.nodejs.cn/SXbo1v)
  - `end` [](http://url.nodejs.cn/SXbo1v) **默认值:** `Infinity`。
  - `highWaterMark` [](http://url.nodejs.cn/SXbo1v) **默认值:** `64 * 1024`。
  - `fs` [](http://url.nodejs.cn/jzn6Ao) | [](http://url.nodejs.cn/334hvC) **默认值:** `null`。

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_readstream) 参见[可读流](http://nodejs.cn/api/stream.html#stream_class_stream_readable)。

与可读流的 16 kb 的默认 `highWaterMark` 不同，此方法返回的流具有 64 kb 的默认 `highWaterMark`。

`options` 可以包括 `start` 和 `end` 值，用于从文件中读取一定范围的字节，而不是读取整个文件。 `start` 和 `end` 都是包含的，并且从 0 开始计数，允许的值在 [0, [`Number.MAX_SAFE_INTEGER`](http://url.nodejs.cn/e9ereu)] 的范围内。 如果指定了 `fd`，并且省略 `start` 或为 `undefined`，则 `fs.createReadStream()` 会从当前的文件位置继续读取。 `encoding` 可以是能被 [`Buffer`](http://nodejs.cn/api/buffer.html#buffer_buffer) 接受的任何一种字符编码。

如果指定了 `fd`，则 `ReadStream` 会忽略 `path` 参数，并且会使用指定的文件描述符。 这意味着不会触发 `'open'` 事件。 `fd` 必须是阻塞的，非阻塞的 `fd` 应该传给 [`net.Socket`](http://nodejs.cn/api/net.html#net_class_net_socket)。

如果 `fd` 指向仅支持阻塞读取的字符设备（例如键盘或声卡），则在数据可用之前，读取操作不会结束。 这可以防止进程的退出与流的自动关闭。

默认情况下，流被销毁之后不会触发 `'close'` 事件。 这与其他 `Readable` 流的默认设置是相反的。 设置 `emitClose` 选项为 `true` 可以更改此行为。

通过提供 `fs` 选项，可以重写对应的 `fs` 实现（用于 `open`、 `read` 和 `close`）。 当提供 `fs` 选项时，则必须重写 `open`、 `read` 和 `close`。

```js
const fs = require('fs');
// 从某个字符设备创建流。
const stream = fs.createReadStream('设备');
setTimeout(() => {
  stream.close(); // 这可能不会关闭流。
  // 手动标记流的结束，就像底层的资源自身已表明文件的结束一样，使得流可以关闭。
  // 这不会取消待处理的读取操作，如果存在此类操作，则进程可能仍无法成功地退出，直到完成。
  stream.push(null);
  stream.read(0);
}, 100);
```

如果 `autoClose` 为 false，则即使发生错误，文件描述符也不会被关闭。 应用程序需要负责关闭它并确保没有文件描述符泄漏。 如果 `autoClose` 被设置为 true（默认的行为），则当 `'error'` 或 `'end'` 事件时，文件描述符会被自动地关闭。

`mode` 用于设置文件模式（权限和粘滞位），但仅限于文件被创建时。

示例，读取文件（长度为 100 个字节）的最后 10 个字节：

```js
fs.createReadStream('文件', { start: 90, end: 99 });
```

如果 `options` 是字符串，则它指定字符编码。

## `fs.createWriteStream(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_createwritestream_path_options.html) [在线运行](http://run.nodejs.cn/?api=fs.createWriteStream) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_createwritestream_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `flags` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。 **默认值:** `'w'`。
  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。
  - `fd` [](http://url.nodejs.cn/SXbo1v) **默认值:** `null`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `autoClose` [](http://url.nodejs.cn/jFbvuT) **默认值:** `true`。
  - `emitClose` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。
  - `start` [](http://url.nodejs.cn/SXbo1v)
  - `fs` [](http://url.nodejs.cn/jzn6Ao) | [](http://url.nodejs.cn/334hvC) **默认值:** `null`。

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_writestream) 参见[可写流](http://nodejs.cn/api/stream.html#stream_class_stream_writable)。

`options` 还可以包括 `start` 选项，用于写入数据到文件开头之后的某个位置，允许的值在 [0, [`Number.MAX_SAFE_INTEGER`](http://url.nodejs.cn/e9ereu)] 的范围内。 若要修改文件而不是覆盖文件，则需要 `flags` 选项被设置为 `r+` 而不是默认的 `w`。 `encoding` 可以是能被 [`Buffer`](http://nodejs.cn/api/buffer.html#buffer_buffer) 接受的任何一种字符编码。

如果 `autoClose` 被设置为 true（默认的行为），则当 `'error'` 或 `'finish'` 事件时，文件描述符会被自动地关闭。 如果 `autoClose` 为 false，则即使发生错误，文件描述符也不会被关闭。 应用程序需要负责关闭它并确保没有文件描述符泄漏。

默认情况下，流被销毁之后不会触发 `'close'` 事件。 这与其他 `Writable` 流的默认设置是相反的。 设置 `emitClose` 选项为 `true` 可以更改此行为。

通过提供 `fs` 选项，可以重写对应的 `fs` 实现（用于 `open`、 `write`、 `writev` 和 `close`）。 如果重写 `write()` 但没有重写 `writev()`，则会降低性能，因为某些优化（`_writev()`）会被禁用。 当提供 `fs` 选项时，则必须重写 `open`、 `close`、以及 `write` 和 `writev` 两者至少其中之一。

与 [`ReadStream`](http://nodejs.cn/api/fs.html#fs_class_fs_readstream) 一样，如果指定了 `fd`，则 [`WriteStream`](http://nodejs.cn/api/fs.html#fs_class_fs_writestream) 会忽略 `path` 参数，并且会使用指定的文件描述符。 这意味着不会触发 `'open'` 事件。 `fd` 必须是阻塞的，非阻塞的 `fd` 应该传给 [`net.Socket`](http://nodejs.cn/api/net.html#net_class_net_socket)。

如果 `options` 是字符串，则它指定字符编码。

## `fs.exists(path, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_exists_path_callback)

[中英对照](http://nodejs.cn/api/fs/fs_exists_path_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_exists_path_callback.md)

版本历史



[稳定性: 0](http://nodejs.cn/api/documentation.html#documentation_stability_index) - 弃用: 改为使用 [`fs.stat()`](http://nodejs.cn/api/fs.html#fs_fs_stat_path_options_callback) 或 [`fs.access()`](http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback)。



- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  callback
  ```

   

  <Function>

  - `exists` [](http://url.nodejs.cn/jFbvuT)

通过检查文件系统来测试给定的路径是否存在。 然后调用 `callback` 并带上参数 `true` 或 `false`：

```js
fs.exists('/etc/passwd', (exists) => {
  console.log(exists ? '存在' : '不存在');
});
```

此回调的参数与其他 Node.js 回调不一致。 通常，Node.js 回调的第一个参数是 `err` 参数，后面可选地跟随其他参数。 `fs.exists()` 的回调只有一个布尔值参数。 这是推荐 `fs.access()` 代替 `fs.exists()` 的原因之一。

不建议在调用 `fs.open()`、 `fs.readFile()` 或 `fs.writeFile()` 之前使用 `fs.exists()` 检查文件是否存在。 这样做会引入竞态条件，因为其他进程可能会在两次调用之间更改文件的状态。 相反，应该直接打开、读取或写入文件，如果文件不存在则处理引发的错误。

**写入（不推荐）**

```js
fs.exists('myfile', (exists) => {
  if (exists) {
    console.error('myfile 已存在');
  } else {
    fs.open('myfile', 'wx', (err, fd) => {
      if (err) throw err;
      writeMyData(fd);
    });
  }
});
```

**写入（推荐）**

```js
fs.open('myfile', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile 已存在');
      return;
    }

    throw err;
  }

  writeMyData(fd);
});
```

**读取（不推荐）**

```js
fs.exists('myfile', (exists) => {
  if (exists) {
    fs.open('myfile', 'r', (err, fd) => {
      if (err) throw err;
      readMyData(fd);
    });
  } else {
    console.error('myfile 不存在');
  }
});
```

**读取（推荐）**

```js
fs.open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile 不存在');
      return;
    }

    throw err;
  }

  readMyData(fd);
});
```

上面的“不推荐”示例会先检查文件是否存在然后再使用该文件。 “推荐”示例则更好，因为它们直接使用文件并处理错误（如果有错误的话）。

通常，仅在文件不直接使用时才检查文件是否存在，例如当其存在性是来自另一个进程的信号时。

## `fs.existsSync(path)`[#](http://nodejs.cn/api/fs.html#fs_fs_existssync_path)

[中英对照](http://nodejs.cn/api/fs/fs_existssync_path.html) [在线运行](http://run.nodejs.cn/?api=fs.existsSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_existssync_path.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- 返回: [](http://url.nodejs.cn/jFbvuT)

如果路径存在，则返回 `true`，否则返回 `false`。

详见此 API 的异步版本的文档：[`fs.exists()`](http://nodejs.cn/api/fs.html#fs_fs_exists_path_callback)。

虽然 `fs.exists()` 是弃用的，但 `fs.existsSync()` 不是弃用的。 `fs.exists()` 的 `callback` 参数接受的参数与其他的 Node.js 回调的不一致。 `fs.existsSync()` 不使用回调。

```js
if (fs.existsSync('文件')) {
  console.log('该路径已存在');
}
```

## `fs.fchmod(fd, mode, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_fchmod_fd_mode_callback)

[中英对照](http://nodejs.cn/api/fs/fs_fchmod_fd_mode_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fchmod_fd_mode_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`fchmod(2)`](http://url.nodejs.cn/L3LQRh)。 除了可能的异常，完成回调没有其他参数。

## `fs.fchmodSync(fd, mode)`[#](http://nodejs.cn/api/fs.html#fs_fs_fchmodsync_fd_mode)

[中英对照](http://nodejs.cn/api/fs/fs_fchmodsync_fd_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fchmodsync_fd_mode.md)

新增于: v0.4.7

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v)

同步的 [`fchmod(2)`](http://url.nodejs.cn/L3LQRh)。返回 `undefined`。

## `fs.fchown(fd, uid, gid, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_fchown_fd_uid_gid_callback)

[中英对照](http://nodejs.cn/api/fs/fs_fchown_fd_uid_gid_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fchown_fd_uid_gid_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `uid` [](http://url.nodejs.cn/SXbo1v)

- `gid` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`fchown(2)`](http://url.nodejs.cn/vZfXQ2)。 除了可能的异常，完成回调没有其他参数。

## `fs.fchownSync(fd, uid, gid)`[#](http://nodejs.cn/api/fs.html#fs_fs_fchownsync_fd_uid_gid)

[中英对照](http://nodejs.cn/api/fs/fs_fchownsync_fd_uid_gid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fchownsync_fd_uid_gid.md)

新增于: v0.4.7

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `uid` [](http://url.nodejs.cn/SXbo1v)
- `gid` [](http://url.nodejs.cn/SXbo1v)

同步的 [`fchown(2)`](http://url.nodejs.cn/vZfXQ2)。返回 `undefined`。

## `fs.fdatasync(fd, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_fdatasync_fd_callback)

[中英对照](http://nodejs.cn/api/fs/fs_fdatasync_fd_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fdatasync_fd_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`fdatasync(2)`](http://url.nodejs.cn/AEp6fv)。 除了可能的异常，完成回调没有其他参数。

## `fs.fdatasyncSync(fd)`[#](http://nodejs.cn/api/fs.html#fs_fs_fdatasyncsync_fd)

[中英对照](http://nodejs.cn/api/fs/fs_fdatasyncsync_fd.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fdatasyncsync_fd.md)

新增于: v0.1.96

- `fd` [](http://url.nodejs.cn/SXbo1v)

同步的 [`fdatasync(2)`](http://url.nodejs.cn/AEp6fv)。返回 `undefined`。

## `fs.fstat(fd[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_fstat_fd_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_fstat_fd_options_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fstat_fd_options_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `stats` [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

异步的 [`fstat(2)`](http://url.nodejs.cn/anrsLJ)。 回调会传入两个参数 `(err, stats)`，其中 `stats` 是 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象。 `fstat()` 与 [`stat()`](http://nodejs.cn/api/fs.html#fs_fs_stat_path_options_callback) 相同，除了文件是由文件描述符 `fd` 指定。

## `fs.fstatSync(fd[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_fstatsync_fd_options)

[中英对照](http://nodejs.cn/api/fs/fs_fstatsync_fd_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fstatsync_fd_options.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

同步的 [`fstat(2)`](http://url.nodejs.cn/anrsLJ)。

## `fs.fsync(fd, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_fsync_fd_callback)

[中英对照](http://nodejs.cn/api/fs/fs_fsync_fd_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fsync_fd_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`fsync(2)`](http://url.nodejs.cn/d4u3Ks)。 除了可能的异常，完成回调没有其他参数。

## `fs.fsyncSync(fd)`[#](http://nodejs.cn/api/fs.html#fs_fs_fsyncsync_fd)

[中英对照](http://nodejs.cn/api/fs/fs_fsyncsync_fd.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_fsyncsync_fd.md)

新增于: v0.1.96

- `fd` [](http://url.nodejs.cn/SXbo1v)

同步的 [`fsync(2)`](http://url.nodejs.cn/d4u3Ks)。返回 `undefined`。

## `fs.ftruncate(fd[, len], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_ftruncate_fd_len_callback)

[中英对照](http://nodejs.cn/api/fs/fs_ftruncate_fd_len_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_ftruncate_fd_len_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `len` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`ftruncate(2)`](http://url.nodejs.cn/nU6hxN)。 除了可能的异常，完成回调没有其他参数。

如果文件描述符指向的文件大于 `len` 个字节，则只有前面 `len` 个字节会保留在文件中。

例如，以下程序只保留文件的前 4 个字节：

```js
console.log(fs.readFileSync('temp.txt', 'utf8'));
// 打印: Node.js

// 获取要截断的文件的文件描述符。
const fd = fs.openSync('temp.txt', 'r+');

// 将文件截断为前 4 个字节。
fs.ftruncate(fd, 4, (err) => {
  assert.ifError(err);
  console.log(fs.readFileSync('temp.txt', 'utf8'));
});
// 打印: Node
```

如果文件小于 `len` 个字节，则会对其进行扩展，并且扩展部分将填充空字节（`'\0'`）：

```js
console.log(fs.readFileSync('temp.txt', 'utf8'));
// 打印: Node.js

// 获取要截断的文件的文件描述符。
const fd = fs.openSync('temp.txt', 'r+');

// 将文件截断为前 10 个字节，但实际大小为 7 个字节。
fs.ftruncate(fd, 10, (err) => {
  assert.ifError(err);
  console.log(fs.readFileSync('temp.txt'));
});
// 打印: <Buffer 4e 6f 64 65 2e 6a 73 00 00 00>
// (UTF8 的值为 'Node.js\0\0\0')
```

最后 3 个字节是空字节（`'\0'`），以补充超出的截断。

## `fs.ftruncateSync(fd[, len])`[#](http://nodejs.cn/api/fs.html#fs_fs_ftruncatesync_fd_len)

[中英对照](http://nodejs.cn/api/fs/fs_ftruncatesync_fd_len.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_ftruncatesync_fd_len.md)

新增于: v0.8.6

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `len` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0`。

返回 `undefined`。

有关详细信息，请参见此API的异步版本的文档：[`fs.ftruncate()`](http://nodejs.cn/api/fs.html#fs_fs_ftruncate_fd_len_callback)。

## `fs.futimes(fd, atime, mtime, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_futimes_fd_atime_mtime_callback)

[中英对照](http://nodejs.cn/api/fs/fs_futimes_fd_atime_mtime_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_futimes_fd_atime_mtime_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

更改文件描述符指向的对象的文件系统时间戳。 参见 [`fs.utimes()`](http://nodejs.cn/api/fs.html#fs_fs_utimes_path_atime_mtime_callback)。

此函数在 7.1 之前的 AIX 版本上不起作用，它将返回 `UV_ENOSYS` 错误。

## `fs.futimesSync(fd, atime, mtime)`[#](http://nodejs.cn/api/fs.html#fs_fs_futimessync_fd_atime_mtime)

[中英对照](http://nodejs.cn/api/fs/fs_futimessync_fd_atime_mtime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_futimessync_fd_atime_mtime.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

[`fs.futimes()`](http://nodejs.cn/api/fs.html#fs_fs_futimes_fd_atime_mtime_callback) 的同步版本。返回 `undefined`。

## `fs.lchmod(path, mode, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_lchmod_path_mode_callback)

[中英对照](http://nodejs.cn/api/fs/fs_lchmod_path_mode_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lchmod_path_mode_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `mode` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`lchmod(2)`](http://url.nodejs.cn/yC9BxV)。 除了可能的异常，完成回调没有其他参数。

仅适用于 macOS。

## `fs.lchmodSync(path, mode)`[#](http://nodejs.cn/api/fs.html#fs_fs_lchmodsync_path_mode)

[中英对照](http://nodejs.cn/api/fs/fs_lchmodsync_path_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lchmodsync_path_mode.md)

弃用于: v0.4.7

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `mode` [](http://url.nodejs.cn/SXbo1v)

同步的 [`lchmod(2)`](http://url.nodejs.cn/yC9BxV)。返回 `undefined`。

## `fs.lchown(path, uid, gid, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_lchown_path_uid_gid_callback)

[中英对照](http://nodejs.cn/api/fs/fs_lchown_path_uid_gid_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lchown_path_uid_gid_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `uid` [](http://url.nodejs.cn/SXbo1v)

- `gid` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`lchown(2)`](http://url.nodejs.cn/fGGBXD)。 除了可能的异常，完成回调没有其他参数。

## `fs.lchownSync(path, uid, gid)`[#](http://nodejs.cn/api/fs.html#fs_fs_lchownsync_path_uid_gid)

[中英对照](http://nodejs.cn/api/fs/fs_lchownsync_path_uid_gid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lchownsync_path_uid_gid.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `uid` [](http://url.nodejs.cn/SXbo1v)
- `gid` [](http://url.nodejs.cn/SXbo1v)

同步的 [`lchown(2)`](http://url.nodejs.cn/fGGBXD)。返回 `undefined`。

## `fs.lutimes(path, atime, mtime, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_lutimes_path_atime_mtime_callback)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lutimes_path_atime_mtime_callback.md)

新增于: v14.5.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

Changes the access and modification times of a file in the same way as [`fs.utimes()`](http://nodejs.cn/api/fs.html#fs_fs_utimes_path_atime_mtime_callback), with the difference that if the path refers to a symbolic link, then the link is not dereferenced: instead, the timestamps of the symbolic link itself are changed.

No arguments other than a possible exception are given to the completion callback.

## `fs.lutimesSync(path, atime, mtime)`[#](http://nodejs.cn/api/fs.html#fs_fs_lutimessync_path_atime_mtime)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lutimessync_path_atime_mtime.md)

新增于: v14.5.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

Change the file system timestamps of the symbolic link referenced by `path`. Returns `undefined`, or throws an exception when parameters are incorrect or the operation fails. This is the synchronous version of [`fs.lutimes()`](http://nodejs.cn/api/fs.html#fs_fs_lutimes_path_atime_mtime_callback).

## `fs.link(existingPath, newPath, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_link_existingpath_newpath_callback)

[中英对照](http://nodejs.cn/api/fs/fs_link_existingpath_newpath_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_link_existingpath_newpath_callback.md)

版本历史

- `existingPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `newPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`link(2)`](http://url.nodejs.cn/U8H1mr)。 除了可能的异常，完成回调没有其他参数。

## `fs.linkSync(existingPath, newPath)`[#](http://nodejs.cn/api/fs.html#fs_fs_linksync_existingpath_newpath)

[中英对照](http://nodejs.cn/api/fs/fs_linksync_existingpath_newpath.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_linksync_existingpath_newpath.md)

版本历史

- `existingPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `newPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

同步的 [`link(2)`](http://url.nodejs.cn/U8H1mr)。返回 `undefined`。

## `fs.lstat(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_lstat_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_lstat_path_options_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lstat_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `stats` [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

异步的 [`lstat(2)`](http://url.nodejs.cn/fGaHTu)。 回调会传入两个参数 `(err, stats)`，其中 `stats` 是 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象。 `lstat()` 与 [`stat()`](http://nodejs.cn/api/fs.html#fs_fs_stat_path_options_callback) 相同，只是如果 `path` 是符号链接，则查看的是链接自身，而不是它指向的文件。

## `fs.lstatSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_lstatsync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_lstatsync_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_lstatsync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

同步的 [`lstat(2)`](http://url.nodejs.cn/fGaHTu)。

## `fs.mkdir(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_mkdir_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_mkdir_path_options_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.mkdir) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_mkdir_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <integer>

  - `recursive` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。
  - `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) 在 Windows 上不支持。**默认值:** `0o777`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步地创建目录。

回调会传入可能的异常、以及创建的第一个目录的路径（如果 `recursive` 为 `true`）， `(err, [path])`。

可选的 `options` 参数可以是整数（指定 `mode`（权限和粘滞位））、或对象（具有 `mode` 属性和 `recursive` 属性（指示是否要创建父目录））。 当 `path` 是已存在的目录时，调用 `fs.mkdir()` 仅在 `recursive` 为 false 时才会导致错误。

```js
// 创建 `/目录1/目录2/目录3`，不管 `/目录1` 和 `/目录1/目录2` 是否存在。
fs.mkdir('/目录1/目录2/目录3', { recursive: true }, (err) => {
  if (err) throw err;
});
```

在 Windows 上，对根目录使用 `fs.mkdir()`（即使使用遍历）也会导致错误：

```js
fs.mkdir('/', { recursive: true }, (err) => {
  // => [Error: EPERM: operation not permitted, mkdir 'C:\']
});
```

也可参见 [`mkdir(2)`](http://url.nodejs.cn/ebLzdi)。

## `fs.mkdirSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_mkdirsync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_mkdirsync_path_options.html) [在线运行](http://run.nodejs.cn/?api=fs.mkdirSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_mkdirsync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <integer>

  - `recursive` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。
  - `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) 在 Windows 上不支持。**默认值:** `0o777`。

- 返回: [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/8ym6ow)

同步地创建目录。 返回 `undefined`，或创建的第一个目录的路径（如果 `recursive` 为 `true`）。 这是 [`fs.mkdir()`](http://nodejs.cn/api/fs.html#fs_fs_mkdir_path_options_callback) 的同步版本。

也可参见 [`mkdir(2)`](http://url.nodejs.cn/ebLzdi)。

## `fs.mkdtemp(prefix[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_mkdtemp_prefix_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_mkdtemp_prefix_options_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_mkdtemp_prefix_options_callback.md)

版本历史

- `prefix` [](http://url.nodejs.cn/9Tw2bK)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `directory` [](http://url.nodejs.cn/9Tw2bK)

创建一个唯一的临时目录。

生成要附加在必需的 `prefix` 后面的六位随机字符，以创建唯一的临时目录。 由于平台的不一致性，请避免在 `prefix` 中以 `X` 字符结尾。 在某些平台上，特别是 BSD，可以返回六个以上的随机字符，并用随机字符替换 `prefix` 中结尾的 `X` 字符。

创建的目录路径作为字符串传给回调的第二个参数。

可选的 `options` 参数可以是指定字符编码的字符串，也可以是具有指定要使用的字符编码的 `encoding` 属性的对象。

```js
fs.mkdtemp(path.join(os.tmpdir(), '目录-'), (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // 打印: /tmp/目录-itXde2 或 C:\Users\...\AppData\Local\Temp\目录-itXde2
});
```

`fs.mkdtemp()` 方法将六位随机选择的字符直接附加到 `prefix` 字符串。 例如，给定目录 `/tmp`，如果打算在 `/tmp` 中创建临时目录，则 `prefix` 必须在尾部加上特定平台的路径分隔符（`require('path').sep`）。

```js
// 新的临时目录的父目录。
const tmpDir = os.tmpdir();

// 此用法是错误的：
fs.mkdtemp(tmpDir, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // 输出类似 `/tmpabc123`。
  // 新的临时目录会被创建在文件系统根目录，而不是在 /tmp 目录中。
});

// 此用法是正确的：
const { sep } = require('path');
fs.mkdtemp(`${tmpDir}${sep}`, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // 输出类似 `/tmp/abc123`。
  // 新的临时目录会被创建在 /tmp 目录中。
});
```

## `fs.mkdtempSync(prefix[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_mkdtempsync_prefix_options)

[中英对照](http://nodejs.cn/api/fs/fs_mkdtempsync_prefix_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_mkdtempsync_prefix_options.md)

新增于: v5.10.0

- `prefix` [](http://url.nodejs.cn/9Tw2bK)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/9Tw2bK)

返回创建的目录路径。

有关详细信息，请参见此 API 异步版本的文档：[`fs.mkdtemp()`](http://nodejs.cn/api/fs.html#fs_fs_mkdtemp_prefix_options_callback)。

可选的 `options` 参数可以是指定字符编码的字符串，也可以是具有指定要使用的字符编码的 `encoding` 属性的对象。

## `fs.open(path[, flags[, mode]], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_open_path_flags_mode_callback)

[中英对照](http://nodejs.cn/api/fs/fs_open_path_flags_mode_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.open) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_open_path_flags_mode_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `flags` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。 **默认值:** `'r'`。

- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`（可读写）。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `fd` [](http://url.nodejs.cn/SXbo1v)

异步地打开文件。 参见 [`open(2)`](http://url.nodejs.cn/ss2dGs)。

`mode` 用于设置文件模式（权限和粘滞位），但仅限于创建文件时。 在 Windows 上，只能操作写权限，参见 [`fs.chmod()`](http://nodejs.cn/api/fs.html#fs_fs_chmod_path_mode_callback)。

回调有两个参数 `(err, fd)`。

有些字符 (`< > : " / \ | ? *`) 在 Windows 上是预留的，参见[命名文件、路径以及命名空间](http://url.nodejs.cn/GmL95W)。 在 NTFS 上，如果文件名包含冒号，则 Node.js 会打开文件系统流，参见[此 MSDN 页面](http://url.nodejs.cn/FY8iKV)。

基于 `fs.open()` 的函数也会表现出以上行为，比如 `fs.writeFile()`、 `fs.readFile()` 等。

## `fs.opendir(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_opendir_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_opendir_path_options_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_opendir_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `bufferSize` [](http://url.nodejs.cn/SXbo1v) 当从目录读取时在内部缓冲的目录项的数量。值越高，则性能越好，但内存占用更高。**默认值:** `32`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `dir` [](http://nodejs.cn/api/fs.html#fs_class_fs_dir)

异步地打开目录。 参见 [`opendir(3)`](http://url.nodejs.cn/KKZ5fX)。

创建一个 [`fs.Dir`](http://nodejs.cn/api/fs.html#fs_class_fs_dir)，其中包含所有用于更进一步读取和清理目录的的函数。

`encoding` 选项用于在打开目录和后续的读取操作时设置 `path` 的字符编码。

## `fs.opendirSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_opendirsync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_opendirsync_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_opendirsync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `bufferSize` [](http://url.nodejs.cn/SXbo1v) 当从目录读取时在内部缓冲的目录项的数量。值越高，则性能越好，但内存占用更高。**默认值:** `32`。

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_dir)

同步地打开目录。 参见 [`opendir(3)`](http://url.nodejs.cn/KKZ5fX)。

创建一个 [`fs.Dir`](http://nodejs.cn/api/fs.html#fs_class_fs_dir)，其中包含所有用于更进一步读取和清理目录的函数。

`encoding` 选项用于在打开目录和后续的读取操作时设置 `path` 的字符编码。

## `fs.openSync(path[, flags, mode])`[#](http://nodejs.cn/api/fs.html#fs_fs_opensync_path_flags_mode)

[中英对照](http://nodejs.cn/api/fs/fs_opensync_path_flags_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_opensync_path_flags_mode.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `flags` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) **默认值:** `'r'`。参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。
- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
- 返回: [](http://url.nodejs.cn/SXbo1v)

返回表示文件描述符的整数。

详见此 API 的异步版本的文档：[`fs.open()`](http://nodejs.cn/api/fs.html#fs_fs_open_path_flags_mode_callback)。

## `fs.read(fd, buffer, offset, length, position, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback)

[中英对照](http://nodejs.cn/api/fs/fs_read_fd_buffer_offset_length_position_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.read) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_read_fd_buffer_offset_length_position_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD)

- `offset` [](http://url.nodejs.cn/SXbo1v)

- `length` [](http://url.nodejs.cn/SXbo1v)

- `position` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `bytesRead` [](http://url.nodejs.cn/SXbo1v)
  - `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

从 `fd` 指定的文件中读取数据。

`buffer` 是数据（从 fd 读取）要被写入的 buffer。

`offset` 是 buffer 中开始写入的偏移量。

`length` 是整数，指定要读取的字节数。

`position` 参数指定从文件中开始读取的位置。 如果 `position` 为 `null`，则从当前文件位置读取数据，并更新文件位置。 如果 `position` 是整数，则文件位置会保持不变。

回调有三个参数 `(err, bytesRead, buffer)`。

如果文件没有被同时地修改，则当读取的字节数为零时，即到达文件的末尾。

如果调用此方法的 [`util.promisify()`](http://nodejs.cn/api/util.html#util_util_promisify_original) 版本，则返回 `Promise`（会传入具有 `bytesRead` 属性和 `buffer` 属性的 `Object`）。

## `fs.read(fd, [options,] callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_read_fd_options_callback)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_read_fd_options_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- ```
  options
  ```

   

  <Object>

  - `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD) **Default:** `Buffer.alloc(16384)`
  - `offset` [](http://url.nodejs.cn/SXbo1v) **Default:** `0`
  - `length` [](http://url.nodejs.cn/SXbo1v) **Default:** `buffer.length`
  - `position` [](http://url.nodejs.cn/SXbo1v) **Default:** `null`

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `bytesRead` [](http://url.nodejs.cn/SXbo1v)
  - `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

Similar to the above `fs.read` function, this version takes an optional `options` object. If no `options` object is specified, it will default with the above values.

## `fs.readdir(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_readdir_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_readdir_path_options_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.readdir) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readdir_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。
  - `withFileTypes` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `files` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/fs.html#fs_class_fs_dirent)

异步的 [`readdir(3)`](http://url.nodejs.cn/QvrbKw)。 读取目录的内容。 回调有两个参数 `(err, files)`，其中 `files` 是目录中文件的名称的数组（不包括 `'.'` 和 `'..'`）。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于传给回调的文件名的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的文件名会作为 `Buffer` 对象传入。

如果 `options.withFileTypes` 被设置为 `true`，则 `files` 数组会包含 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) 对象。

## `fs.readdirSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_readdirsync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_readdirsync_path_options.html) [在线运行](http://run.nodejs.cn/?api=fs.readdirSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readdirsync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。
  - `withFileTypes` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。

- 返回: [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/fs.html#fs_class_fs_dirent)

同步的 [`readdir(3)`](http://url.nodejs.cn/QvrbKw)。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于返回的文件名的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的文件名会作为 `Buffer` 对象传入。

如果 `options.withFileTypes` 被设置为 `true`，则结果会包含 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) 对象。

## `fs.readFile(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_readfile_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_readfile_path_options_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.readFile) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readfile_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://url.nodejs.cn/SXbo1v) 文件名或文件描述符。

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `null`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。**默认值:** `'r'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

异步地读取文件的全部内容。

```js
fs.readFile('文件名', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

回调会传入两个参数 `(err, data)`，其中 `data` 是文件的内容。

如果没有指定字符编码，则返回原始的 buffer。

如果 `options` 是字符串，则它指定字符编码：

```js
fs.readFile('文件名', 'utf8', callback);
```

当路径是目录时，则 `fs.readFile()` 和 [`fs.readFileSync()`](http://nodejs.cn/api/fs.html#fs_fs_readfilesync_path_options) 的行为是特定于平台的。 在 macOS、Linux 和 Windows 上，会返回错误。 在 FreeBSD 上，会返回目录内容的表示。

```js
// 在 macOS、Linux 和 Windows 上：
fs.readFile('<目录>', (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <目录>]
});

// 在 FreeBSD 上：
fs.readFile('<目录>', (err, data) => {
  // => null, <data>
});
```

`fs.readFile()` 函数会缓冲整个文件。 若要最小化内存成本，则尽可能选择流式（使用 `fs.createReadStream()`）。

### 文件描述符[#](http://nodejs.cn/api/fs.html#fs_file_descriptors_1)

[中英对照](http://nodejs.cn/api/fs/file_descriptors_1.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_descriptors_1.md)

1. 任何指定的文件描述符都必须支持读取。
2. 如果将文件描述符指定为 `path`，则不会自动关闭它。
3. 读数将从当前位置开始。例如，如果文件已经有内容 `'Hello World`' 并且使用文件描述符读取了六个字节，则使用相同文件描述符调用 `fs.readFile()` 将返回 `'World'` 而不是 `'Hello World'`。

## `fs.readFileSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_readfilesync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_readfilesync_path_options.html) [在线运行](http://run.nodejs.cn/?api=fs.readFileSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readfilesync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://url.nodejs.cn/SXbo1v) 文件名或文件描述符。

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `null`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。 **默认值:** `'r'`。

- 返回: [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

返回 `path` 的内容。

详见此 API 的异步版本的文档：[`fs.readFile()`](http://nodejs.cn/api/fs.html#fs_fs_readfile_path_options_callback)。

如果指定了 `encoding` 选项，则此函数返回字符串。 否则，返回 buffer。

与 [`fs.readFile()`](http://nodejs.cn/api/fs.html#fs_fs_readfile_path_options_callback) 相似，当路径是目录时， `fs.readFileSync()` 的行为是特定于平台的。

```js
// 在 macOS、Linux 和 Windows 上：
fs.readFileSync('<目录>');
// => [Error: EISDIR: illegal operation on a directory, read <目录>]

// 在 FreeBSD 上：
fs.readFileSync('<目录>'); // => <data>
```

## `fs.readlink(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_readlink_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_readlink_path_options_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readlink_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `linkString` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

异步的 [`readlink(2)`](http://url.nodejs.cn/CFw99K)。 回调会传入两个参数 `(err, linkString)`。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于传给回调的链接路径的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的链接路径会作为 `Buffer` 对象传入。

## `fs.readlinkSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_readlinksync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_readlinksync_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readlinksync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

同步的 [`readlink(2)`](http://url.nodejs.cn/CFw99K)。 返回符号链接的字符串值。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于返回的链接路径的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的链接路径会作为 `Buffer` 对象传入。

## `fs.readSync(fd, buffer, offset, length, position)`[#](http://nodejs.cn/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position)

[中英对照](http://nodejs.cn/api/fs/fs_readsync_fd_buffer_offset_length_position.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readsync_fd_buffer_offset_length_position.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD)
- `offset` [](http://url.nodejs.cn/SXbo1v)
- `length` [](http://url.nodejs.cn/SXbo1v)
- `position` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/SXbo1v)

返回 `bytesRead` 的数量。

有关详细信息，请参见此 API 异步版本的文档：[`fs.read()`](http://nodejs.cn/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback)。

## `fs.readSync(fd, buffer, [options])`[#](http://nodejs.cn/api/fs.html#fs_fs_readsync_fd_buffer_options)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readsync_fd_buffer_options.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD)

- ```
  options
  ```

   

  <Object>

  - `offset` [](http://url.nodejs.cn/SXbo1v) **Default:** `0`
  - `length` [](http://url.nodejs.cn/SXbo1v) **Default:** `buffer.length`
  - `position` [](http://url.nodejs.cn/SXbo1v) **Default:** `null`

- Returns: [](http://url.nodejs.cn/SXbo1v)

Returns the number of `bytesRead`.

Similar to the above `fs.readSync` function, this version takes an optional `options` object. If no `options` object is specified, it will default with the above values.

For detailed information, see the documentation of the asynchronous version of this API: [`fs.read()`](http://nodejs.cn/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback).

## `fs.readv(fd, buffers[, position], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_readv_fd_buffers_position_callback)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readv_fd_buffers_position_callback.md)

新增于: v14.0.0

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `buffers` [](http://url.nodejs.cn/qijt55)

- `position` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `bytesRead` [](http://url.nodejs.cn/SXbo1v)
  - `buffers` [](http://url.nodejs.cn/qijt55)

Read from a file specified by `fd` and write to an array of `ArrayBufferView`s using `readv()`.

`position` is the offset from the beginning of the file from where data should be read. If `typeof position !== 'number'`, the data will be read from the current position.

The callback will be given three arguments: `err`, `bytesRead`, and `buffers`. `bytesRead` is how many bytes were read from the file.

If this method is invoked as its [`util.promisify()`](http://nodejs.cn/api/util.html#util_util_promisify_original)ed version, it returns a `Promise` for an `Object` with `bytesRead` and `buffers` properties.

## `fs.readvSync(fd, buffers[, position])`[#](http://nodejs.cn/api/fs.html#fs_fs_readvsync_fd_buffers_position)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_readvsync_fd_buffers_position.md)

新增于: v14.0.0

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `buffers` [](http://url.nodejs.cn/qijt55)
- `position` [](http://url.nodejs.cn/SXbo1v)
- Returns: [](http://url.nodejs.cn/SXbo1v) The number of bytes read.

For detailed information, see the documentation of the asynchronous version of this API: [`fs.readv()`](http://nodejs.cn/api/fs.html#fs_fs_readv_fd_buffers_position_callback).

## `fs.realpath(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_realpath_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_realpath_path_options_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_realpath_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `resolvedPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

通过解析 `.`、 `..` 和符号链接异步地计算规范路径名。

规范路径名不一定是唯一的。 硬链接和绑定装载可以通过许多路径名暴露文件系统实体。

此函数的行为类似于 [`realpath(3)`](http://url.nodejs.cn/k8V6gK)，但有一些例外：

1. 在不区分大小写的文件系统上不执行大小写转换。。
2. 符号链接的最大数量与平台无关，并且通常高于本地 [`realpath(3)`](http://url.nodejs.cn/k8V6gK) 实现支持的数量。

`callback` 有两个参数 `(err, resolvedPath)`。 可以使用 `process.cwd` 来解析相对路径。

仅支持可转换为 UTF8 字符串的路径。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于传给回调的路径的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的路径会作为 `Buffer` 对象传入。

如果 `path` 解析为套接字或管道，则该函数将返回该对象的系统相关名称。

## `fs.realpath.native(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_realpath_native_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_realpath_native_path_options_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_realpath_native_path_options_callback.md)

新增于: v9.2.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `resolvedPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

异步的 [`realpath(3)`](http://url.nodejs.cn/k8V6gK)。

`callback` 有两个参数 `(err, resolvedPath)`。

仅支持可转换为 UTF8 字符串的路径。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于传给回调的路径的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的路径会作为 `Buffer` 对象传入。

在 Linux 上，当 Node.js 与 musl libc 链接时，procfs 文件系统必须挂载在 `/proc` 上才能使此功能正常工作。 Glibc 没有这个限制。

## `fs.realpathSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_realpathsync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_realpathsync_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_realpathsync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

返回已解析的路径名。

详见此 API 的异步版本的文档：[`fs.realpath()`](http://nodejs.cn/api/fs.html#fs_fs_realpath_path_options_callback)。

## `fs.realpathSync.native(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_realpathsync_native_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_realpathsync_native_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_realpathsync_native_path_options.md)

新增于: v9.2.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- Returns: [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

同步的 [`realpath(3)`](http://url.nodejs.cn/k8V6gK)。

仅支持可转换为 UTF8 字符串的路径。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于返回的路径的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的路径会作为 `Buffer` 对象传入。

在 Linux 上，当 Node.js 与 musl libc 链接时，procfs 文件系统必须挂载在 `/proc` 上才能使此功能正常工作。 Glibc 没有这个限制。

## `fs.rename(oldPath, newPath, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_rename_oldpath_newpath_callback)

[中英对照](http://nodejs.cn/api/fs/fs_rename_oldpath_newpath_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.rename) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_rename_oldpath_newpath_callback.md)

版本历史

- `oldPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `newPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步地把 `oldPath` 文件重命名为 `newPath` 提供的路径名。 如果 `newPath` 已存在，则覆盖它。 除了可能的异常，完成回调没有其他参数。

也可参见 [`rename(2)`](http://url.nodejs.cn/YbqghQ)。

```js
fs.rename('旧文件.txt', '新文件.txt', (err) => {
  if (err) throw err;
  console.log('重命名完成');
});
```

## `fs.renameSync(oldPath, newPath)`[#](http://nodejs.cn/api/fs.html#fs_fs_renamesync_oldpath_newpath)

[中英对照](http://nodejs.cn/api/fs/fs_renamesync_oldpath_newpath.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_renamesync_oldpath_newpath.md)

版本历史

- `oldPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `newPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

同步的 [`rename(2)`](http://url.nodejs.cn/YbqghQ)。返回 `undefined`。

## `fs.rmdir(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_rmdir_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_rmdir_path_options_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.rmdir) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_rmdir_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `maxRetries` [](http://url.nodejs.cn/SXbo1v) 如果遇到 `EBUSY`、 `EMFILE`、 `ENFILE`、 `ENOTEMPTY` 或 `EPERM` 错误，则 Node.js 会重试该操作（每次尝试时使用 `retryDelay` 毫秒时长的线性回退等待）。 此选项表示重试的次数。 如果 `recursive` 选项不为 `true`，则此选项会被忽略。 **默认值:** `0`。
  - `recursive` [](http://url.nodejs.cn/jFbvuT) 如果为 `true`，则执行递归的目录删除。 在递归模式中，错误不会被报告（如果 `path` 不存在），并且操作会被重试（当失败时）。 **默认值:** `false`。
  - `retryDelay` [](http://url.nodejs.cn/SXbo1v) 重试之间等待的时间（以毫秒为单位）。 如果 `recursive` 选项不为 `true`，则此选项会被忽略。 **默认值:** `100`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`rmdir(2)`](http://url.nodejs.cn/BuUYuq)。 除了可能的异常，完成回调没有其他参数。

对文件（而不是目录）使用 `fs.rmdir()` 会导致 `ENOENT` 错误（在 Windows 上）或 `ENOTDIR` 错误（在 POSIX 上）。

设置为 `recursive` 为 `true` 会导致行为类似于 Unix 命令 `rm -rf`：不存在的路径不会引发错误，表示文件的路径会被删除。 `recursive` 选项的宽容行为已弃用，未来会抛出 `ENOTDIR` 和 `ENOENT`。

## `fs.rmdirSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_rmdirsync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_rmdirsync_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_rmdirsync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `maxRetries` [](http://url.nodejs.cn/SXbo1v) 如果遇到 `EBUSY`、 `EMFILE`、 `ENFILE`、 `ENOTEMPTY` 或 `EPERM` 错误，则 Node.js 会重试该操作（每次尝试时使用 `retryDelay` 毫秒时长的线性回退等待）。 此选项表示重试的次数。 如果 `recursive` 选项不为 `true`，则此选项会被忽略。 **默认值:** `0`。
  - `recursive` [](http://url.nodejs.cn/jFbvuT) 如果为 `true`，则执行递归的目录删除。 在递归模式中，错误不会被报告（如果 `path` 不存在），并且操作会被重试（当失败时）。 **默认值:** `false`。
  - `retryDelay` [](http://url.nodejs.cn/SXbo1v) 重试之间等待的时间（以毫秒为单位）。 如果 `recursive` 选项不为 `true`，则此选项会被忽略。 **默认值:** `100`。

同步的 [`rmdir(2)`](http://url.nodejs.cn/BuUYuq)。 返回 `undefined`。

对文件（而不是目录）使用 `fs.rmdirSync()` 会导致 `ENOENT` 错误（在 Windows 上）或 `ENOTDIR` 错误（在 POSIX 上）。

## `fs.rm(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_rm_path_options_callback)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_rm_path_options_callback.md)

新增于: v14.14.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `force` [](http://url.nodejs.cn/jFbvuT) When `true`, exceptions will be ignored if `path` does not exist. **Default:** `false`.
  - `maxRetries` [](http://url.nodejs.cn/SXbo1v) If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or `EPERM` error is encountered, Node.js will retry the operation with a linear backoff wait of `retryDelay` milliseconds longer on each try. This option represents the number of retries. This option is ignored if the `recursive` option is not `true`. **Default:** `0`.
  - `recursive` [](http://url.nodejs.cn/jFbvuT) If `true`, perform a recursive removal. In recursive mode operations are retried on failure. **Default:** `false`.
  - `retryDelay` [](http://url.nodejs.cn/SXbo1v) The amount of time in milliseconds to wait between retries. This option is ignored if the `recursive` option is not `true`. **Default:** `100`.

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

Asynchronously removes files and directories (modeled on the standard POSIX `rm` utility). No arguments other than a possible exception are given to the completion callback.

## `fs.rmSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_rmsync_path_options)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_rmsync_path_options.md)

新增于: v14.14.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `force` [](http://url.nodejs.cn/jFbvuT) When `true`, exceptions will be ignored if `path` does not exist. **Default:** `false`.
  - `maxRetries` [](http://url.nodejs.cn/SXbo1v) If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or `EPERM` error is encountered, Node.js will retry the operation with a linear backoff wait of `retryDelay` milliseconds longer on each try. This option represents the number of retries. This option is ignored if the `recursive` option is not `true`. **Default:** `0`.
  - `recursive` [](http://url.nodejs.cn/jFbvuT) If `true`, perform a recursive directory removal. In recursive mode operations are retried on failure. **Default:** `false`.
  - `retryDelay` [](http://url.nodejs.cn/SXbo1v) The amount of time in milliseconds to wait between retries. This option is ignored if the `recursive` option is not `true`. **Default:** `100`.

Synchronously removes files and directories (modeled on the standard POSIX `rm` utility). Returns `undefined`.

## `fs.stat(path[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_stat_path_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_stat_path_options_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.stat) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_stat_path_options_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否为 `bigint` 型。 **默认值:** `false`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `stats` [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

异步的 [`stat(2)`](http://url.nodejs.cn/7U6CBC)。 回调有两个参数 `(err, stats)`，其中 `stats` 是 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象。

如果发生错误，则 `err.code` 会是[常见的系统错误](http://nodejs.cn/api/errors.html#errors_common_system_errors)之一。

不建议在调用 `fs.open()`、 `fs.readFile()` 或 `fs.writeFile()` 之前使用 `fs.stat()` 检查文件的存在性。 而是应该直接地打开、读取或写入文件，如果文件不可用，则处理引发的错误。

若要只检查文件是否存在，但没有更多的操作，则建议使用 [`fs.access()`](http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback)。

例如，给定以下的目录结构：

```text
- 目录
-- 文件.txt
- 文件.js
```

以下程序会检查给定路径的文件属性：

```js
const fs = require('fs');

const pathsToCheck = ['./目录', './目录/文件.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
  fs.stat(pathsToCheck[i], function(err, stats) {
    console.log(stats.isDirectory());
    console.log(stats);
  });
}
```

结果的输出会类似于：

```console
true
Stats {
  dev: 16777220,
  mode: 16877,
  nlink: 3,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14214262,
  size: 96,
  blocks: 0,
  atimeMs: 1561174653071.963,
  mtimeMs: 1561174614583.3518,
  ctimeMs: 1561174626623.5366,
  birthtimeMs: 1561174126937.2893,
  atime: 2019-06-22T03:37:33.072Z,
  mtime: 2019-06-22T03:36:54.583Z,
  ctime: 2019-06-22T03:37:06.624Z,
  birthtime: 2019-06-22T03:28:46.937Z
}
false
Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14214074,
  size: 8,
  blocks: 8,
  atimeMs: 1561174616618.8555,
  mtimeMs: 1561174614584,
  ctimeMs: 1561174614583.8145,
  birthtimeMs: 1561174007710.7478,
  atime: 2019-06-22T03:36:56.619Z,
  mtime: 2019-06-22T03:36:54.584Z,
  ctime: 2019-06-22T03:36:54.584Z,
  birthtime: 2019-06-22T03:26:47.711Z
}
```

## `fs.statSync(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_statsync_path_options)

[中英对照](http://nodejs.cn/api/fs/fs_statsync_path_options.html) [在线运行](http://run.nodejs.cn/?api=fs.statSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_statsync_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

同步的 [`stat(2)`](http://url.nodejs.cn/7U6CBC)。

## `fs.symlink(target, path[, type], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_symlink_target_path_type_callback)

[中英对照](http://nodejs.cn/api/fs/fs_symlink_target_path_type_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_symlink_target_path_type_callback.md)

版本历史

- `target` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `type` [](http://url.nodejs.cn/9Tw2bK)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`symlink(2)`](http://url.nodejs.cn/th7NwY)，它会创建名为 `path` 的链接，该链接指向 `target`。 除了可能的异常，完成回调没有其他参数。

`type` 参数仅在 Windows 上可用，在其他平台上则会被忽略。 它可以被设置为 `'dir'`、 `'file'` 或 `'junction'`。 如果未设置 `type` 参数，则 Node.js 将会自动检测 `target` 的类型并使用 `'file'` 或 `'dir'`。 如果 `target` 不存在，则将会使用 `'file'`。 Windows 上的连接点要求目标路径是绝对路径。 当使用 `'junction'` 时， `target` 参数将会自动地标准化为绝对路径。

相对目标是相对于链接的父目录。

```js
fs.symlink('./mew', './example/mewtwo', callback);
```

上面的示例中，在 `example` 中创建了符号链接 `mewtwo`，它指向同一目录中的 `mew`：

```bash
$ tree example/
example/
├── mew
└── mewtwo -> ./mew
```

## `fs.symlinkSync(target, path[, type])`[#](http://nodejs.cn/api/fs.html#fs_fs_symlinksync_target_path_type)

[中英对照](http://nodejs.cn/api/fs/fs_symlinksync_target_path_type.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_symlinksync_target_path_type.md)

版本历史

- `target` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `type` [](http://url.nodejs.cn/9Tw2bK)

返回 `undefined`。

详见此 API 的异步版本的文档：[`fs.symlink()`](http://nodejs.cn/api/fs.html#fs_fs_symlink_target_path_type_callback)。

## `fs.truncate(path[, len], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_truncate_path_len_callback)

[中英对照](http://nodejs.cn/api/fs/fs_truncate_path_len_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_truncate_path_len_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `len` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步的 [`truncate(2)`](http://url.nodejs.cn/9o417s)。 除了可能的异常，完成回调没有其他参数。 文件描述符也可以作为第一个参数传入。 在这种情况下，调用 `fs.ftruncate()`。

不推荐传入文件描述符，可能导致将来抛出错误。

## `fs.truncateSync(path[, len])`[#](http://nodejs.cn/api/fs.html#fs_fs_truncatesync_path_len)

[中英对照](http://nodejs.cn/api/fs/fs_truncatesync_path_len.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_truncatesync_path_len.md)

新增于: v0.8.6

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `len` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0`。

同步的 [`truncate(2)`](http://url.nodejs.cn/9o417s)。 返回 `undefined`。 文件描述符也可以作为第一个参数传入。 在这种情况下，调用 `fs.ftruncateSync()`。

不推荐传入文件描述符，可能导致将来抛出错误。

## `fs.unlink(path, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_unlink_path_callback)

[中英对照](http://nodejs.cn/api/fs/fs_unlink_path_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.unlink) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_unlink_path_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

异步地删除文件或符号链接。 除了可能的异常，完成回调没有其他参数。

```js
// 假设 '文件.txt' 是普通的文件。
fs.unlink('文件.txt', (err) => {
  if (err) throw err;
  console.log('文件已被删除');
});
```

`fs.unlink()` 对空或非空的目录均不起作用。 若要删除目录，则使用 [`fs.rmdir()`](http://nodejs.cn/api/fs.html#fs_fs_rmdir_path_options_callback)。

也可参见 [`unlink(2)`](http://url.nodejs.cn/gjRRsM)。

## `fs.unlinkSync(path)`[#](http://nodejs.cn/api/fs.html#fs_fs_unlinksync_path)

[中英对照](http://nodejs.cn/api/fs/fs_unlinksync_path.html) [在线运行](http://run.nodejs.cn/?api=fs.unlinkSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_unlinksync_path.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

同步的 [`unlink(2)`](http://url.nodejs.cn/gjRRsM)。 返回 `undefined`。

## `fs.unwatchFile(filename[, listener])`[#](http://nodejs.cn/api/fs.html#fs_fs_unwatchfile_filename_listener)

[中英对照](http://nodejs.cn/api/fs/fs_unwatchfile_filename_listener.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_unwatchfile_filename_listener.md)

新增于: v0.1.31

- `filename` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `listener` [](http://url.nodejs.cn/ceTQa6) 可选的，之前使用 `fs.watchFile()` 绑定的监听器。

停止监视 `filename` 的变化。 如果指定了 `listener`，则仅移除此特定监听器，否则，将移除所有监听器，从而停止监视 `filename`。

对未被监视的文件名调用 `fs.unwatchFile()` 将是空操作，而不是错误。

使用 [`fs.watch()`](http://nodejs.cn/api/fs.html#fs_fs_watch_filename_options_listener) 比 `fs.watchFile()` 和 `fs.unwatchFile()` 更高效。 应尽可能使用 `fs.watch()` 代替 `fs.watchFile()` 和 `fs.unwatchFile()`。

## `fs.utimes(path, atime, mtime, callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_utimes_path_atime_mtime_callback)

[中英对照](http://nodejs.cn/api/fs/fs_utimes_path_atime_mtime_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_utimes_path_atime_mtime_callback.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

更改 `path` 指向的对象的文件系统时间戳。

`atime` 和 `mtime` 参数遵循以下规则：

- 值可以是表示 Unix 纪元时间（以秒为单位）的数字、 `Date` 对象、或类似 `'123456789.0'` 的数值字符串。
- 如果该值无法转换为数值、或值为 `NaN`、 `Infinity` 或 `-Infinity`，则抛出错误。

## `fs.utimesSync(path, atime, mtime)`[#](http://nodejs.cn/api/fs.html#fs_fs_utimessync_path_atime_mtime)

[中英对照](http://nodejs.cn/api/fs/fs_utimessync_path_atime_mtime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_utimessync_path_atime_mtime.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)

返回 `undefined`。

详见此 API 的异步版本的文档：[`fs.utimes()`](http://nodejs.cn/api/fs.html#fs_fs_utimes_path_atime_mtime_callback)。

## `fs.watch(filename[, options][, listener])`[#](http://nodejs.cn/api/fs.html#fs_fs_watch_filename_options_listener)

[中英对照](http://nodejs.cn/api/fs/fs_watch_filename_options_listener.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_watch_filename_options_listener.md)

版本历史

- `filename` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `persistent` [](http://url.nodejs.cn/jFbvuT) 指示如果文件已正被监视，进程是否应继续运行。**默认值:** `true`。
  - `recursive` [](http://url.nodejs.cn/jFbvuT) 指示应该监视所有子目录，还是仅监视当前目录。这适用于监视目录时，并且仅适用于受支持的平台（参见[注意事项](http://nodejs.cn/api/fs.html#fs_caveats)）。**默认值:** `false`。
  - `encoding` [](http://url.nodejs.cn/9Tw2bK) 指定用于传给监听器的文件名的字符编码。**默认值:** `'utf8'`。

- ```
  listener
  ```

   

  <Function>

   

  |

   

  <undefined>

   

  默认值:

   

  ```
  undefined
  ```

  。

  - `eventType` [](http://url.nodejs.cn/9Tw2bK)
  - `filename` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

- 返回: [](http://nodejs.cn/api/fs.html#fs_class_fs_fswatcher)

监视 `filename` 的更改，其中 `filename` 是文件或目录。

第二个参数是可选的。 如果 `options` 传入字符串，则它指定 `encoding`。 否则， `options` 应传入对象。

监听器回调有两个参数 `(eventType, filename)`。 `eventType` 是 `'rename'` 或 `'change'`， `filename` 是触发事件的文件的名称。

在大多数平台上，每当文件名在目录中出现或消失时，就会触发 `'rename'` 事件。

监听器回调绑定在由 [`fs.FSWatcher`](http://nodejs.cn/api/fs.html#fs_class_fs_fswatcher) 触发的 `'change'` 事件上，但它与 `eventType` 的 `'change'` 值不是一回事。

### 注意事项[#](http://nodejs.cn/api/fs.html#fs_caveats)

[中英对照](http://nodejs.cn/api/fs/caveats.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/caveats.md)

`fs.watch` 的 API 在各个平台上并非 100％ 一致，在某些情况下不可用。

仅在 macOS 和 Windows 上支持 `recursive` 选项。 当在不支持该选项的平台上使用该选项时，则会抛出 `ERR_FEATURE_UNAVAILABLE_ON_PLATFORM` 异常。

在 Windows 上，如果监视的目录被移动或重命名，则不会触发任何事件。 当监视的目录被删除时，则报告 `EPERM` 错误。

#### 可用性[#](http://nodejs.cn/api/fs.html#fs_availability)

[中英对照](http://nodejs.cn/api/fs/availability.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/availability.md)

此特性取决于底层操作系统，提供了一种通知文件系统更改的方法。

- 在 Linux 系统上，使用 [`inotify(7)`](http://url.nodejs.cn/2vfjsf)。
- 在 BSD 系统上，使用 [`kqueue(2)`](http://url.nodejs.cn/sKFUBp)。
- 在 macOS 系统上，对文件使用 [`kqueue(2)`](http://url.nodejs.cn/sKFUBp)，对目录使用 [`FSEvents`](http://url.nodejs.cn/Asxgry)。
- 在 SunOS 系统上（包括 Solaris 和 SmartOS），使用[事件端口](http://url.nodejs.cn/bqLYZP)。
- 在 Windows 系统上，此特性取决于 [`ReadDirectoryChangesW`](http://url.nodejs.cn/Tbrfbe)。
- 在 Aix 系统上，此特性取决于 [`AHAFS`](http://url.nodejs.cn/uAha9z) 必须启动。
- 在 IBM i 系统上，不支持此特性。

如果底层功能由于某些原因不可用，则 `fs.watch()` 会无法运行且可能抛出异常。 例如，当使用虚拟化软件（如 Vagrant 或 Docker）时，在网络文件系统（NFS、SMB 等）或主文件系统上监视文件或目录可能是不可靠的，在某些情况下也是不可能的。

仍然可以使用 `fs.watchFile()`，因为它使用 stat 轮询 ，但这种方法较慢且不太可靠。

#### 索引节点[#](http://nodejs.cn/api/fs.html#fs_inodes)

[中英对照](http://nodejs.cn/api/fs/inodes.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/inodes.md)

在 Linux 或 macOS 系统上， `fs.watch()` 解析路径到[索引节点](http://url.nodejs.cn/ofGTst)并监视该索引节点。 如果删除并重新创建监视的路径，则会为其分配一个新的索引节点。 监视器会因删除而触发事件，但会继续监视原始的索引节点。 不会因新建索引节点而触发事件。 这是预期的行为。

AIX 文件在文件的生命周期中保留相同的索引节点。 在 AIX 上保存和关闭监视的文件将导致两个通知（一个用于添加新内容，一个用于截断）。

#### 文件名参数[#](http://nodejs.cn/api/fs.html#fs_filename_argument)

[中英对照](http://nodejs.cn/api/fs/filename_argument.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filename_argument.md)

仅在 Linux、macOS、Windows 和 AIX 上支持在回调中提供 `filename` 参数。 即使在支持的平台上，也不总是保证提供 `filename`。 因此，不要假设在回调中始终提供 `filename` 参数，并且如果它为 `null` 则需要一些后备逻辑。

```js
fs.watch('somedir', (eventType, filename) => {
  console.log(`事件类型是: ${eventType}`);
  if (filename) {
    console.log(`提供的文件名: ${filename}`);
  } else {
    console.log('文件名未提供');
  }
});
```

## `fs.watchFile(filename[, options], listener)`[#](http://nodejs.cn/api/fs.html#fs_fs_watchfile_filename_options_listener)

[中英对照](http://nodejs.cn/api/fs/fs_watchfile_filename_options_listener.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_watchfile_filename_options_listener.md)

版本历史

- `filename` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。
  - `persistent` [](http://url.nodejs.cn/jFbvuT) **默认值:** `true`。
  - `interval` [](http://url.nodejs.cn/SXbo1v) **默认值:** `5007`。

- ```
  listener
  ```

   

  <Function>

  - `current` [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)
  - `previous` [](http://nodejs.cn/api/fs.html#fs_class_fs_stats)

- Returns: [](http://nodejs.cn/api/fs.html#fs_class_fs_statwatcher)

监视 `filename` 的更改。 每当访问文件时都会调用 `listener` 回调。

`options` 参数可以省略。 如果提供，则它应该是一个对象。 `options` 对象可以包含一个名为 `persistent` 的布尔值，指示当文件正在被监视时，进程是否应该继续运行。 `options` 对象可以指定 `interval` 属性，指示轮询目标的频率（以毫秒为单位）。

`listener` 有两个参数，当前的 stat 对象和之前的 stat 对象：

```js
fs.watchFile('message.text', (curr, prev) => {
  console.log(`当前的最近修改时间是: ${curr.mtime}`);
  console.log(`之前的最近修改时间是: ${prev.mtime}`);
});
```

这些 stat 对象是 `fs.Stat` 的实例。 如果 `bigint` 选项为 `true`，则这些对象中的数值会被指定为 `BigInts` 类型。

要在修改文件（而不仅仅是访问）时收到通知，则需要比较 `curr.mtime` 和 `prev.mtime`。

当 `fs.watchFile` 操作导致 `ENOENT` 错误时，它将调用一次监听器，并将所有字段置零（或将日期设为 Unix 纪元）。 如果文件是在那之后创建的，则监听器会被再次调用，且带上最新的 stat 对象。 这是 v0.10 之后的功能变化。

使用 [`fs.watch()`](http://nodejs.cn/api/fs.html#fs_fs_watch_filename_options_listener) 比 `fs.watchFile` 和 `fs.unwatchFile` 更高效。 应尽可能使用 `fs.watch` 代替 `fs.watchFile` 和 `fs.unwatchFile`。

当 `fs.watchFile()` 正在监视的文件消失并重新出现时，第二次回调事件（文件重新出现）中的 `previous` 的内容会与第一次回调事件（文件消失）中的 `previous` 的内容相同。

这种情况发生在:

- 文件被删除，然后又恢复。
- 文件被重命名，然后再第二次重命名回其原来的名称。

## `fs.write(fd, buffer[, offset[, length[, position]]], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback)

[中英对照](http://nodejs.cn/api/fs/fs_write_fd_buffer_offset_length_position_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.write) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_write_fd_buffer_offset_length_position_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/jzn6Ao)

- `offset` [](http://url.nodejs.cn/SXbo1v)

- `length` [](http://url.nodejs.cn/SXbo1v)

- `position` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `bytesWritten` [](http://url.nodejs.cn/SXbo1v)
  - `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD)

写入 `buffer` 到 `fd` 指定的文件。 如果 `buffer` 是普通的对象，则它必须具有自身的 `toString` 函数属性。

`offset` 决定 buffer 中要被写入的部位， `length` 是整数，指定要写入的字节数。

`position` 指定文件开头的偏移量（数据要被写入的位置）。 如果 `typeof position !== 'number'`，则数据会被写入当前的位置。 参见 [`pwrite(2)`](http://url.nodejs.cn/2qJ9AM)。

回调有三个参数 `(err, bytesWritten, buffer)`，其中 `bytesWritten` 指定从 `buffer` 中被写入的字节数。

如果调用此方法的 [`util.promisify()`](http://nodejs.cn/api/util.html#util_util_promisify_original) 版本，则返回 `Promise`（会传入具有 `bytesWritten` 和 `buffer` 属性的 `Object`）。

不等待回调就对同一个文件多次使用 `fs.write()` 是不安全的。 对于这种情况，建议使用 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options)。

在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

## `fs.write(fd, string[, position[, encoding]], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_write_fd_string_position_encoding_callback)

[中英对照](http://nodejs.cn/api/fs/fs_write_fd_string_position_encoding_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_write_fd_string_position_encoding_callback.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `string` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/jzn6Ao)

- `position` [](http://url.nodejs.cn/SXbo1v)

- `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `written` [](http://url.nodejs.cn/SXbo1v)
  - `string` [](http://url.nodejs.cn/9Tw2bK)

将 `string` 写入到 `fd` 指定的文件。 如果 `string` 不是字符串或具有自有 `toString` 函数属性的对象，则抛出异常。

`position` 指定文件开头的偏移量（数据要被写入的位置）。 如果 `typeof position !== 'number'`，则数据会被写入当前的位置。 参见 [`pwrite(2)`](http://url.nodejs.cn/2qJ9AM)。

`encoding` 是期望的字符串编码。

回调会接收到参数 `(err, written, string)`，其中 `written` 指定传入的字符串中被要求写入的字节数。 被写入的字节数不一定与被写入的字符串字符数相同。 参见 [`Buffer.byteLength`](http://nodejs.cn/api/buffer.html#buffer_static_method_buffer_bytelength_string_encoding)。

不等待回调就对同一个文件多次使用 `fs.write()` 是不安全的。 对于这种情况，建议使用 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options)。

在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

在 Windows 上，如果文件描述符连接到控制台（例如 `fd == 1` 或 `stdout`），则无论使用何种编码，包含非 ASCII 字符的字符串默认情况下都不会被正确地渲染。 通过使用 `chcp 65001` 命令更改活动的代码页，可以将控制台配置为正确地渲染 UTF-8。 详见 [chcp](http://url.nodejs.cn/NAMZkR) 文档。

## `fs.writeFile(file, data[, options], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback)

[中英对照](http://nodejs.cn/api/fs/fs_writefile_file_data_options_callback.html) [在线运行](http://run.nodejs.cn/?api=fs.writeFile) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_writefile_file_data_options_callback.md)

版本历史

- `file` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://url.nodejs.cn/SXbo1v) 文件名或文件描述符。

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。 **默认值:** `'w'`。

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)

当 `file` 是文件名时，则异步地写入数据到文件（如果文件已存在，则覆盖文件）。 `data` 可以是字符串或 buffer。

当 `file` 是文件描述符时，则其行为类似于直接调用 `fs.write()`（建议使用）。 参见以下关于使用文件描述符的说明。

如果 `data` 是 buffer，则 `encoding` 选项会被忽略。 如果 `data` 是普通的对象，则它必须具有自身的 `toString` 函数属性。

```js
const data = new Uint8Array(Buffer.from('Node.js 中文网'));
fs.writeFile('文件.txt', data, (err) => {
  if (err) throw err;
  console.log('文件已被保存');
});
```

如果 `options` 是字符串，则它指定字符编码：

```js
fs.writeFile('文件.txt', 'Node.js 中文网', 'utf8', callback);
```

不等待回调就对同一个文件多次使用 `fs.writeFile()` 是不安全的。 对于这种情况，建议使用 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options)。

### 使用 fs.writeFile() 与文件描述符[#](http://nodejs.cn/api/fs.html#fs_using_fs_writefile_with_file_descriptors)

[中英对照](http://nodejs.cn/api/fs/using_fs_writefile_with_file_descriptors.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/using_fs_writefile_with_file_descriptors.md)

当 `file` 是一个文件描述符时，行为几乎与直接调用 `fs.write()` 类似：

```js
fs.write(fd, Buffer.from(data, options.encoding), callback);
```

与直接调用 `fs.write()` 的区别在于，在某些异常情况下， `fs.write()` 可能只写入部分 buffer，需要重试以写入剩余的数据，而 `fs.writeFile()` 将会重试直到数据完全写入（或发生错误）。

这种影响是混淆的常见原因。 在文件描述符的情况下，文件不会被替换！ 数据不一定写入到文件的开头，文件的原始数据可以保留在新写入的数据之前和/或之后。

例如，如果连续两次调用 `fs.writeFile()`，首先写入字符串 `'Hello'`，然后写入字符串 `', World'`，则该文件将会包含 `'Hello, World'`，并且可能包含文件的一些原始数据（取决于原始文件的大小和文件描述符的位置）。 如果使用了文件名而不是描述符，则该文件将会保证仅包含 `', World'`。

## `fs.writeFileSync(file, data[, options])`[#](http://nodejs.cn/api/fs.html#fs_fs_writefilesync_file_data_options)

[中英对照](http://nodejs.cn/api/fs/fs_writefilesync_file_data_options.html) [在线运行](http://run.nodejs.cn/?api=fs.writeFileSync) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_writefilesync_file_data_options.md)

版本历史

- `file` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://url.nodejs.cn/SXbo1v) 文件名或文件描述符。

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。 **默认值:** `'w'`。

返回 `undefined`。

详见此 API 的异步版本的文档：[`fs.writeFile()`](http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback)。

## `fs.writeSync(fd, buffer[, offset[, length[, position]]])`[#](http://nodejs.cn/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position)

[中英对照](http://nodejs.cn/api/fs/fs_writesync_fd_buffer_offset_length_position.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_writesync_fd_buffer_offset_length_position.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/oh3CkV) | [](http://url.nodejs.cn/yCdVkD) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/jzn6Ao)
- `offset` [](http://url.nodejs.cn/SXbo1v)
- `length` [](http://url.nodejs.cn/SXbo1v)
- `position` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/SXbo1v) 写入的字节数。

详见此 API 的异步版本的文档：[`fs.write(fd, buffer...)`](http://nodejs.cn/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback)。

## `fs.writeSync(fd, string[, position[, encoding]])`[#](http://nodejs.cn/api/fs.html#fs_fs_writesync_fd_string_position_encoding)

[中英对照](http://nodejs.cn/api/fs/fs_writesync_fd_string_position_encoding.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_writesync_fd_string_position_encoding.md)

版本历史

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `string` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/jzn6Ao)
- `position` [](http://url.nodejs.cn/SXbo1v)
- `encoding` [](http://url.nodejs.cn/9Tw2bK)
- 返回: [](http://url.nodejs.cn/SXbo1v) 写入的字节数。

详见此 API 的异步版本的文档： [`fs.write(fd, string...)`](http://nodejs.cn/api/fs.html#fs_fs_write_fd_string_position_encoding_callback)。

## `fs.writev(fd, buffers[, position], callback)`[#](http://nodejs.cn/api/fs.html#fs_fs_writev_fd_buffers_position_callback)

[中英对照](http://nodejs.cn/api/fs/fs_writev_fd_buffers_position_callback.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_writev_fd_buffers_position_callback.md)

新增于: v12.9.0

- `fd` [](http://url.nodejs.cn/SXbo1v)

- `buffers` [](http://url.nodejs.cn/qijt55)

- `position` [](http://url.nodejs.cn/SXbo1v)

- ```
  callback
  ```

   

  <Function>

  - `err` [](http://url.nodejs.cn/qZ873x)
  - `bytesWritten` [](http://url.nodejs.cn/SXbo1v)
  - `buffers` [](http://url.nodejs.cn/qijt55)

使用 `writev()` 将一个 `ArrayBufferView` 数组写入 `fd` 指定的文件。

`position` 指定文件开头的偏移量（数据要被写入的位置）。 如果 `typeof position !== 'number'`，则数据会被写入当前的位置。

回调有三个参数：`err`、 `bytesWritten` 和 `buffers`。 `bytesWritten` 是从 `buffers` 写入的字节数。

如果此方法是 [`util.promisify()`](http://nodejs.cn/api/util.html#util_util_promisify_original) 化的版本，则它返回的 `Promise` 会返回具有 `bytesWritten` 和 `buffers` 属性的 `Object`。

不等待回调就对同一个文件多次使用 `fs.writev()` 是不安全的。 对于这种情况，建议使用 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options)。

在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

## `fs.writevSync(fd, buffers[, position])`[#](http://nodejs.cn/api/fs.html#fs_fs_writevsync_fd_buffers_position)

[中英对照](http://nodejs.cn/api/fs/fs_writevsync_fd_buffers_position.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_writevsync_fd_buffers_position.md)

新增于: v12.9.0

- `fd` [](http://url.nodejs.cn/SXbo1v)
- `buffers` [](http://url.nodejs.cn/qijt55)
- `position` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/SXbo1v) 写入的字节数。

详见此 API 的异步版本的文档：[`fs.writev()`](http://nodejs.cn/api/fs.html#fs_fs_writev_fd_buffers_position_callback)。

## fs 的 Promise API[#](http://nodejs.cn/api/fs.html#fs_fs_promises_api)

[中英对照](http://nodejs.cn/api/fs/fs_promises_api.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_promises_api.md)

`fs.promises` API 提供了一组备用的异步文件系统的方法，它们返回 `Promise` 对象而不是使用回调。 API 可通过 `require('fs').promises` 或 `require('fs/promises')` 访问。

### FileHandle 类[#](http://nodejs.cn/api/fs.html#fs_class_filehandle)

[中英对照](http://nodejs.cn/api/fs/class_filehandle.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/class_filehandle.md)

新增于: v10.0.0

`FileHandle` 对象是数字文件描述符的包装器。 `FileHandle` 的实例与数字文件描述符的不同之处在于它们提供了一个面向对象的 API 来处理文件。

如果没有使用 `filehandle.close()` 方法关闭 `FileHandle`，则它可能会自动关闭文件描述符并触发进程警告，从而有助于防止内存泄漏。 请不要在代码中依赖此行为，因为它不可靠，且该文件可能无法关闭。 相反，应该始终显式的关闭 `FileHandles`。 Node.js 将来可能会改变这种行为。

`FileHandle` 对象的实例由 `fsPromises.open()` 方法在内部创建。

与基于回调的 API（如 `fs.fstat()`、 `fs.fchown()`、 `fs.fchmod()` 等）不同，基于 promise 的 API 不使用数字文件描述符。 而是，基于 promise 的 API 使用 `FileHandle` 类，以帮助避免在解决或拒绝 `Promise` 后意外泄漏未关闭的文件描述符。

#### `filehandle.appendFile(data, options)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_appendfile_data_options)

[中英对照](http://nodejs.cn/api/fs/filehandle_appendfile_data_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_appendfile_data_options.md)

新增于: v10.0.0

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

[`filehandle.writeFile()`](http://nodejs.cn/api/fs.html#fs_filehandle_writefile_data_options) 的别名。

当在文件句柄上进行操作时，无法将模式更改为使用 [`fsPromises.open()`](http://nodejs.cn/api/fs.html#fs_fspromises_open_path_flags_mode) 设置的模式。 因此，这等效于 [`filehandle.writeFile()`](http://nodejs.cn/api/fs.html#fs_filehandle_writefile_data_options)。

#### `filehandle.chmod(mode)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_chmod_mode)

[中英对照](http://nodejs.cn/api/fs/filehandle_chmod_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_chmod_mode.md)

新增于: v10.0.0

- `mode` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改文件的权限。 `Promise` 将会在成功时解决，且不带参数。

#### `filehandle.chown(uid, gid)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_chown_uid_gid)

[中英对照](http://nodejs.cn/api/fs/filehandle_chown_uid_gid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_chown_uid_gid.md)

新增于: v10.0.0

- `uid` [](http://url.nodejs.cn/SXbo1v)
- `gid` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改文件的所有者，然后在成功时解决 `Promise` 且不带参数。

#### `filehandle.close()`[#](http://nodejs.cn/api/fs.html#fs_filehandle_close)

[中英对照](http://nodejs.cn/api/fs/filehandle_close.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_close.md)

新增于: v10.0.0

- 返回: [](http://url.nodejs.cn/ri1kj8) 如果底层的文件描述符被关闭则 `Promise` 将会被解决，如果关闭时发生错误则将 `Promise` 将会被拒绝。

等待句柄上的所有处理中的操作完成之后，关闭文件句柄。

```js
const fsPromises = require('fs').promises;
async function openAndClose() {
  let filehandle;
  try {
    filehandle = await fsPromises.open('thefile.txt', 'r');
  } finally {
    if (filehandle !== undefined)
      await filehandle.close();
  }
}
```

#### `filehandle.datasync()`[#](http://nodejs.cn/api/fs.html#fs_filehandle_datasync)

[中英对照](http://nodejs.cn/api/fs/filehandle_datasync.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_datasync.md)

新增于: v10.0.0

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步的 [`fdatasync(2)`](http://url.nodejs.cn/AEp6fv)。 `Promise` 将会在成功时解决，且不带参数。

#### `filehandle.fd`[#](http://nodejs.cn/api/fs.html#fs_filehandle_fd)

[中英对照](http://nodejs.cn/api/fs/filehandle_fd.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_fd.md)

新增于: v10.0.0

- [](http://url.nodejs.cn/SXbo1v) 由 `FileHandle` 对象管理的数字文件描述符。

#### `filehandle.read(buffer, offset, length, position)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_read_buffer_offset_length_position)

[中英对照](http://nodejs.cn/api/fs/filehandle_read_buffer_offset_length_position.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_read_buffer_offset_length_position.md)

新增于: v10.0.0

- `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/ZbDkpm)
- `offset` [](http://url.nodejs.cn/SXbo1v)
- `length` [](http://url.nodejs.cn/SXbo1v)
- `position` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

从文件中读取数据。

`buffer` 是数据将写入的缓冲区。

`offset` 是 buffer 中开始写入的偏移量。

`length` 是整数，指定要读取的字节数。

`position` 参数指定从文件中开始读取的位置。 如果 `position` 为 `null`，则从当前文件位置读取数据，并更新文件位置。 如果 `position` 是整数，则文件位置会保持不变。

成功读取之后， `Promise` 会被解决并带上一个对象，对象上有一个 `bytesRead` 属性（指定读取的字节数）和一个 `buffer` 属性（指向传入的 `buffer` 参数）。

如果文件没有被同时地修改，则当读取的字节数为零时，即到达文件的末尾。

#### `filehandle.read(options)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_read_options)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_read_options.md)

新增于: v13.11.0

- ```
  options
  ```

   

  <Object>

  - `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/ZbDkpm) **Default:** `Buffer.alloc(16384)`
  - `offset` [](http://url.nodejs.cn/SXbo1v) **Default:** `0`
  - `length` [](http://url.nodejs.cn/SXbo1v) **Default:** `buffer.length`
  - `position` [](http://url.nodejs.cn/SXbo1v) **Default:** `null`

- Returns: [](http://url.nodejs.cn/ri1kj8)

#### `filehandle.readFile(options)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_readfile_options)

[中英对照](http://nodejs.cn/api/fs/filehandle_readfile_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_readfile_options.md)

新增于: v10.0.0

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `null`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地读取文件的全部内容。

`Promise` 被解决时会带上文件的内容。 如果没有指定字符编码（使用 `options.encoding`），则数据会以 `Buffer` 对象返回。 否则，数据将会是一个字符串。

如果 `options` 是字符串，则它指定字符编码。

`FileHandle` 必须支持读取。

如果对文件句柄进行了一次或多次 `filehandle.read()` 调用，然后再调用 `filehandle.readFile()`，则将从当前位置读取数据，直到文件结束。 它并不总是从文件的开头读取。

#### `filehandle.readv(buffers[, position])`[#](http://nodejs.cn/api/fs.html#fs_filehandle_readv_buffers_position)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_readv_buffers_position.md)

新增于: v14.0.0

- `buffers` [](http://url.nodejs.cn/qijt55)
- `position` [](http://url.nodejs.cn/SXbo1v)
- Returns: [](http://url.nodejs.cn/ri1kj8)

Read from a file and write to an array of `ArrayBufferView`s

The `Promise` is resolved with an object containing a `bytesRead` property identifying the number of bytes read, and a `buffers` property containing a reference to the `buffers` input.

`position` is the offset from the beginning of the file where this data should be read from. If `typeof position !== 'number'`, the data will be read from the current position.

#### `filehandle.stat([options])`[#](http://nodejs.cn/api/fs.html#fs_filehandle_stat_options)

[中英对照](http://nodejs.cn/api/fs/filehandle_stat_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_stat_options.md)

版本历史

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

检索文件的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats)。

#### `filehandle.sync()`[#](http://nodejs.cn/api/fs.html#fs_filehandle_sync)

[中英对照](http://nodejs.cn/api/fs/filehandle_sync.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_sync.md)

新增于: v10.0.0

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步的 [`fsync(2)`](http://url.nodejs.cn/d4u3Ks)。 `Promise` 将会在成功时解决，且不带参数。

#### `filehandle.truncate(len)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_truncate_len)

[中英对照](http://nodejs.cn/api/fs/filehandle_truncate_len.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_truncate_len.md)

新增于: v10.0.0

- `len` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0`
- 返回: [](http://url.nodejs.cn/ri1kj8)

截断文件，然后在成功时解决 `Promise` 且不带参数。

如果文件大于 `len` 个字节，则只有前面 `len` 个字节会保留在文件中。

例如，以下程序只保留文件的前 4 个字节：

```js
const fs = require('fs');
const fsPromises = fs.promises;

console.log(fs.readFileSync('temp.txt', 'utf8'));
// 打印: Node.js

async function doTruncate() {
  let filehandle = null;
  try {
    filehandle = await fsPromises.open('temp.txt', 'r+');
    await filehandle.truncate(4);
  } finally {
    if (filehandle) {
      // 如果文件已打开，则关闭文件。
      await filehandle.close();
    }
  }
  console.log(fs.readFileSync('temp.txt', 'utf8'));  // 打印: Node
}

doTruncate().catch(console.error);
```

如果文件小于 `len` 个字节，则会对其进行扩展，并且扩展部分将填充空字节（`'\0'`）：

```js
const fs = require('fs');
const fsPromises = fs.promises;

console.log(fs.readFileSync('temp.txt', 'utf8'));
// 打印: Node.js

async function doTruncate() {
  let filehandle = null;
  try {
    filehandle = await fsPromises.open('temp.txt', 'r+');
    await filehandle.truncate(10);
  } finally {
    if (filehandle) {
      // 如果文件已打开，则关闭文件。
      await filehandle.close();
    }
  }
  console.log(fs.readFileSync('temp.txt', 'utf8'));  // 打印 Node.js\0\0\0
}

doTruncate().catch(console.error);
```

最后 3 个字节是空字节（`'\0'`），以补充超出的截断。

#### `filehandle.utimes(atime, mtime)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_utimes_atime_mtime)

[中英对照](http://nodejs.cn/api/fs/filehandle_utimes_atime_mtime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_utimes_atime_mtime.md)

新增于: v10.0.0

- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改 `FileHandle` 指向的对象的文件系统时间戳，然后在成功时解决 `Promise` 且不带参数。

此函数在 7.1 之前的 AIX 版本上不起作用，它将会解决 `Promise` 并带上使用 `UV_ENOSYS` 代码的错误。

#### `filehandle.write(buffer[, offset[, length[, position]]])`[#](http://nodejs.cn/api/fs.html#fs_filehandle_write_buffer_offset_length_position)

[中英对照](http://nodejs.cn/api/fs/filehandle_write_buffer_offset_length_position.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_write_buffer_offset_length_position.md)

版本历史

- `buffer` [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/ZbDkpm) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/jzn6Ao)
- `offset` [](http://url.nodejs.cn/SXbo1v)
- `length` [](http://url.nodejs.cn/SXbo1v)
- `position` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

写入 `buffer` 到文件。

`Promise` 会被解决并带上一个对象，对象包含一个 `bytesWritten` 属性（指定写入的字节数）和一个 `buffer` 属性（指向写入的 `buffer`）。

`offset` 决定 buffer 中要被写入的部位， `length` 是整数，指定要写入的字节数。

`position` 指定文件开头的偏移量（数据要被写入的位置）。 如果 `typeof position !== 'number'`，则数据会被写入当前的位置。 参见 [`pwrite(2)`](http://url.nodejs.cn/2qJ9AM)。

在同一个文件上多次使用 `filehandle.write()` 且不等待 `Promise` 被解决（或被拒绝）是不安全的。 对于这种情况，建议使用 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options)。

在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

#### `filehandle.write(string[, position[, encoding]])`[#](http://nodejs.cn/api/fs.html#fs_filehandle_write_string_position_encoding)

[中英对照](http://nodejs.cn/api/fs/filehandle_write_string_position_encoding.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_write_string_position_encoding.md)

版本历史

- `string` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/jzn6Ao)
- `position` [](http://url.nodejs.cn/SXbo1v)
- `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。
- 返回: [](http://url.nodejs.cn/ri1kj8)

将 `string` 写入到文件。 如果 `string` 不是字符串或具有自有 `toString` 函数属性的对象，则抛出异常。

`Promise` 会被解决并带上一个对象，对象包含一个 `bytesWritten` 属性（指定写入的字节数）和一个 `buffer` 属性（指向写入的 `string`）。

`position` 指定文件开头的偏移量（数据要被写入的位置）。 如果 `position` 的类型不是一个 `number`，则数据会被写入当前的位置。 参见 [`pwrite(2)`](http://url.nodejs.cn/2qJ9AM)。

`encoding` 是期望的字符串编码。

在同一个文件上多次使用 `filehandle.write()` 且不等待 `Promise` 被解决（或被拒绝）是不安全的。 对于这种情况，建议使用 [`fs.createWriteStream()`](http://nodejs.cn/api/fs.html#fs_fs_createwritestream_path_options)。

在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

#### `filehandle.writeFile(data, options)`[#](http://nodejs.cn/api/fs.html#fs_filehandle_writefile_data_options)

[中英对照](http://nodejs.cn/api/fs/filehandle_writefile_data_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_writefile_data_options.md)

版本历史

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/ZbDkpm) | [](http://url.nodejs.cn/jzn6Ao)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地将数据写入到一个文件，如果文件已存在则覆盖该文件。 `data` 可以是字符串、buffer、或具有自有 `toString` 函数属性的对象。 `Promise` 会在成功时被解决，且不带参数。

如果 `data` 是 buffer，则 `encoding` 选项会被忽略。

如果 `options` 是字符串，则它指定字符编码。

`FileHandle` 必须支持写入。

在同一个文件上多次使用 `filehandle.writeFile()` 且不等待 `Promise` 被解决（或被拒绝）是不安全的。

如果对文件句柄进行了一次或多次 `filehandle.write()` 调用，然后再调用 `filehandle.writeFile()`，则将从当前位置写入数据，直到文件结束。 它并不总是从文件的开头写入。

#### `filehandle.writev(buffers[, position])`[#](http://nodejs.cn/api/fs.html#fs_filehandle_writev_buffers_position)

[中英对照](http://nodejs.cn/api/fs/filehandle_writev_buffers_position.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/filehandle_writev_buffers_position.md)

新增于: v12.9.0

- `buffers` [](http://url.nodejs.cn/qijt55)
- `position` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

将 `ArrayBufferViews` 数组写入该文件。

`Promise` 会被解决并带上一个对象，对象包含一个 `bytesWritten` 属性（表明写入的字节数）和一个 `buffers` 属性（指向 `buffers` 输入）。

`position` 指定文件开头的偏移量（数据要被写入的位置）。 如果 `typeof position !== 'number'`，则数据会被写入当前的位置。

在同一文件上多次调用 `writev()` 且不等待前面的操作完成，这是不安全的。

在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

### `fsPromises.access(path[, mode])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_access_path_mode)

[中英对照](http://nodejs.cn/api/fs/fspromises_access_path_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_access_path_mode.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `fs.constants.F_OK`。
- 返回: [](http://url.nodejs.cn/ri1kj8)

测试用户对 `path` 指定的文件或目录的权限。 `mode` 参数是一个可选的整数，指定要执行的可访问性检查。 查看[文件可访问性的常量](http://nodejs.cn/api/fs.html#fs_file_access_constants)了解 `mode` 的可选值。
可以创建由两个或更多个值按位或组成的掩码（例如 `fs.constants.W_OK | fs.constants.R_OK`）。

如果可访问性检查成功，则 `Promise` 会被解决且不带值。 如果任何可访问性检查失败，则 `Promise` 会被拒绝并带上 `Error` 对象。 以下示例会检查当前进程是否可以读取和写入 `/etc/passwd` 文件。

```js
const fs = require('fs');
const fsPromises = fs.promises;

fsPromises.access('/etc/passwd', fs.constants.R_OK | fs.constants.W_OK)
  .then(() => console.log('可以访问'))
  .catch(() => console.error('不可访问'));
```

不建议在调用 `fsPromises.open()` 之前使用 `fsPromises.access()` 检查文件的可访问性。 这样做会引入竞态条件，因为其他进程可能会在两个调用之间更改文件的状态。 而是，应该直接打开、读取或写入文件，并且当文件无法访问时处理引发的错误。

### `fsPromises.appendFile(path, data[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_appendfile_path_data_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_appendfile_path_data_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_appendfile_path_data_options.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://nodejs.cn/api/fs.html#fs_class_filehandle) 文件名或 `FileHandle`。

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。默认值: `'a'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地追加数据到文件，如果文件尚不存在则创建文件。 `data` 可以是字符串或 [`Buffer`](http://nodejs.cn/api/buffer.html#buffer_buffer)。 `Promise` 将会在成功时解决，且不带参数。

如果 `options` 是字符串，则它指定字符编码。

`path` 可以指定为已打开用于追加（使用 `fsPromises.open()`）的 `FileHandle`。

### `fsPromises.chmod(path, mode)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_chmod_path_mode)

[中英对照](http://nodejs.cn/api/fs/fspromises_chmod_path_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_chmod_path_mode.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改文件的权限，然后在成功时解决 `Promise` 且不带参数。

### `fsPromises.chown(path, uid, gid)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_chown_path_uid_gid)

[中英对照](http://nodejs.cn/api/fs/fspromises_chown_path_uid_gid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_chown_path_uid_gid.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `uid` [](http://url.nodejs.cn/SXbo1v)
- `gid` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改文件的所有者，然后在成功时解决 `Promise` 且不带参数。

### `fsPromises.copyFile(src, dest[, mode])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_copyfile_src_dest_mode)

[中英对照](http://nodejs.cn/api/fs/fspromises_copyfile_src_dest_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_copyfile_src_dest_mode.md)

版本历史

- `src` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) 要拷贝的源文件名。
- `dest` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) 拷贝操作的目标文件名。
- `mode` [](http://url.nodejs.cn/SXbo1v) 用于拷贝操作的修饰符。**默认值:** `0`。
- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地将 `src` 拷贝到 `dest`。 默认情况下，如果 `dest` 已经存在，则覆盖它。 `Promise` 将会在成功时解决，且不带参数。

Node.js 不保证拷贝操作的原子性。 如果在打开目标文件用于写入后发生错误，则 Node.js 将尝试删除目标文件。

`mode` 是一个可选的整数，指定拷贝操作的行为。 可以创建由两个或更多个值按位或组成的掩码（比如 `fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`）。

- `fs.constants.COPYFILE_EXCL` - 如果 `dest` 已存在，则拷贝操作将失败。
- `fs.constants.COPYFILE_FICLONE` - 拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
- `fs.constants.COPYFILE_FICLONE_FORCE` - 拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。

```js
const {
  promises: fsPromises,
  constants: {
    COPYFILE_EXCL
  }
} = require('fs');

// 默认情况下将创建或覆盖目标文件。
fsPromises.copyFile('源文件.txt', '目标文件.txt')
  .then(() => console.log('源文件已拷贝到目标文件'))
  .catch(() => console.log('该文件无法拷贝'));

// 通过使用 COPYFILE_EXCL，如果目标文件存在，则操作将失败。
fsPromises.copyFile('源文件.txt', '目标文件.txt', COPYFILE_EXCL)
  .then(() => console.log('源文件已拷贝到目标文件'))
  .catch(() => console.log('该文件无法拷贝'));
```

### `fsPromises.lchmod(path, mode)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_lchmod_path_mode)

[中英对照](http://nodejs.cn/api/fs/fspromises_lchmod_path_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_lchmod_path_mode.md)

弃用于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `mode` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改符号链接的权限，然后在成功时解决 `Promise` 且不带参数。 此方法仅在 macOS 上实现。

### `fsPromises.lchown(path, uid, gid)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_lchown_path_uid_gid)

[中英对照](http://nodejs.cn/api/fs/fspromises_lchown_path_uid_gid.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_lchown_path_uid_gid.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `uid` [](http://url.nodejs.cn/SXbo1v)
- `gid` [](http://url.nodejs.cn/SXbo1v)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改符号链接的拥有者，然后在成功时解决 `Promise` 且不带参数。

### `fsPromises.lutimes(path, atime, mtime)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_lutimes_path_atime_mtime)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_lutimes_path_atime_mtime.md)

新增于: v14.5.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- Returns: [](http://url.nodejs.cn/ri1kj8)

Changes the access and modification times of a file in the same way as [`fsPromises.utimes()`](http://nodejs.cn/api/fs.html#fs_fspromises_utimes_path_atime_mtime), with the difference that if the path refers to a symbolic link, then the link is not dereferenced: instead, the timestamps of the symbolic link itself are changed.

Upon success, the `Promise` is resolved without arguments.

### `fsPromises.link(existingPath, newPath)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_link_existingpath_newpath)

[中英对照](http://nodejs.cn/api/fs/fspromises_link_existingpath_newpath.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_link_existingpath_newpath.md)

新增于: v10.0.0

- `existingPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `newPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- 返回: [](http://url.nodejs.cn/ri1kj8)

异步的 [`link(2)`](http://url.nodejs.cn/U8H1mr)。 `Promise` 将会在成功时解决，且不带参数。

### `fsPromises.lstat(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_lstat_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_lstat_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_lstat_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步的 [`lstat(2)`](http://url.nodejs.cn/fGaHTu)。 `Promise` 会被解决并带上用于给定的符号链接 `path` 的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象。

### `fsPromises.mkdir(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_mkdir_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_mkdir_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_mkdir_path_options.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <integer>

  - `recursive` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。
  - `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) 在 Windows 上不支持。**默认值:** `0o777`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地创建目录，然后在成功时解决 `Promise`，且不带参数，或者带上创建的第一个目录的路径（如果 `recursive` 为 `true`）。

可选的 `options` 参数可以是整数（指定 `mode`（权限和粘滞位））、或对象（具有 `mode` 属性和 `recursive` 属性（指示是否要创建父目录））。 当 `path` 是已存在的目录时，调用 `fsPromises.mkdir()` 仅在 `recursive` 为 false 时才导致拒绝。

### `fsPromises.mkdtemp(prefix[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_mkdtemp_prefix_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_mkdtemp_prefix_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_mkdtemp_prefix_options.md)

新增于: v10.0.0

- `prefix` [](http://url.nodejs.cn/9Tw2bK)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

创建一个唯一的临时目录，且解决 `Promise` 时带上创建的目录路径。 唯一的目录名称是通过在提供的 `prefix` 的末尾附加六个随机字符来生成的。 由于平台的不一致性，请避免在 `prefix` 中以 `X` 字符结尾。 在某些平台上，特别是 BSD，可以返回六个以上的随机字符，并用随机字符替换 `prefix` 中结尾的 `X` 字符。

可选的 `options` 参数可以是指定字符编码的字符串，也可以是具有指定要使用的字符编码的 `encoding` 属性的对象。

```js
fsPromises.mkdtemp(path.join(os.tmpdir(), 'foo-'))
  .catch(console.error);
```

`fsPromises.mkdtemp()` 方法将六位随机选择的字符直接附加到 `prefix` 字符串。 例如，给定目录 `/tmp`，如果打算在 `/tmp` 中创建临时目录，则 `prefix` 必须在尾部加上特定平台的路径分隔符（`require('path').sep`）。

### `fsPromises.open(path, flags[, mode])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_open_path_flags_mode)

[中英对照](http://nodejs.cn/api/fs/fspromises_open_path_flags_mode.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_open_path_flags_mode.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `flags` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。**默认值:** `'r'`。
- `mode` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`（可读写）。
- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地打开文件并返回一个 `Promise`，当解决时会带上一个 `FileHandle` 对象。 参见 [`open(2)`](http://url.nodejs.cn/ss2dGs)。

`mode` 用于设置文件模式（权限和粘滞位），但仅限于创建文件时。

有些字符 (`< > : " / \ | ? *`) 在 Windows 上是预留的，参见[命名文件、路径以及命名空间](http://url.nodejs.cn/GmL95W)。 在 NTFS 上，如果文件名包含冒号，则 Node.js 会打开文件系统流，参见[此 MSDN 页面](http://url.nodejs.cn/FY8iKV)。

### `fsPromises.opendir(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_opendir_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_opendir_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_opendir_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `bufferSize` [](http://url.nodejs.cn/SXbo1v) 当从目录读取时在内部缓冲的目录项的数量。值越高，则性能越好，但内存占用更高。**默认值:** `32`。

- 返回: 包含 [](http://nodejs.cn/api/fs.html#fs_class_fs_dir) 的 [](http://url.nodejs.cn/ri1kj8)

异步地打开目录。 参见 [`opendir(3)`](http://url.nodejs.cn/KKZ5fX)。

创建一个 [`fs.Dir`](http://nodejs.cn/api/fs.html#fs_class_fs_dir)，其中包含所有用于更进一步读取和清理目录的函数。

`encoding` 选项用于在打开目录和后续的读取操作时设置 `path` 的字符编码。

使用异步迭代的示例：

```js
const fs = require('fs');

async function print(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
}
print('./').catch(console.error);
```

### `fsPromises.readdir(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_readdir_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_readdir_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_readdir_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。
  - `withFileTypes` [](http://url.nodejs.cn/jFbvuT) **默认值:** `false`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

读取目录的内容，然后解决 `Promise` 并带上一个数组（包含目录中的文件的名称，但不包括 `'.'` 和 `'..'`）。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于文件名的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的文件名会作为 `Buffer` 对象传入。

如果 `options.withFileTypes` 被设置为 `true`，则解决的数组会包含 [`fs.Dirent`](http://nodejs.cn/api/fs.html#fs_class_fs_dirent) 对象。

```js
const fs = require('fs');

async function print(path) {
  const files = await fs.promises.readdir(path);
  for (const file of files) {
    console.log(file);
  }
}
print('./').catch(console.error);
```

### `fsPromises.readFile(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_readfile_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_readfile_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_readfile_path_options.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://nodejs.cn/api/fs.html#fs_class_filehandle) 文件名或 `FileHandle`。

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `null`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。**默认值:** `'r'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地读取文件的全部内容。

`Promise` 被解决时会带上文件的内容。 如果没有指定字符编码（使用 `options.encoding`），则数据会以 `Buffer` 对象返回。 否则，数据将会是一个字符串。

如果 `options` 是字符串，则它指定字符编码。

当 `path` 是目录时， `fsPromises.readFile()` 的行为是特定于平台的。 在 macOS、Linux 和 Windows 上，promise 将会被拒绝并带上一个错误。 在 FreeBSD 上，则将会返回目录内容的表示。

指定的 `FileHandle` 必须支持读取。

### `fsPromises.readlink(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_readlink_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_readlink_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_readlink_path_options.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步的 [`readlink(2)`](http://url.nodejs.cn/CFw99K)。 `Promise` 会在成功时解决，且带上 `linkString`。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于链接路径的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的链接路径会作为 `Buffer` 对象传入。

### `fsPromises.realpath(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_realpath_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_realpath_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_realpath_path_options.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <string>

   

  |

   

  <Object>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'utf8'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

使用与 `fs.realpath.native()` 函数相同的语义来判断 `path` 的实际位置，然后解决 `Promise` 并带上解析后的路径。

仅支持可转换为 UTF8 字符串的路径。

可选的 `options` 参数可以是字符串（指定字符编码）、或具有 `encoding` 属性（指定用于路径的字符编码）的对象。 如果 `encoding` 被设置为 `'buffer'`，则返回的路径会作为 `Buffer` 对象传入。

在 Linux 上，当 Node.js 与 musl libc 链接时，procfs 文件系统必须挂载在 `/proc` 上才能使此功能正常工作。 Glibc 没有这个限制。

### `fsPromises.rename(oldPath, newPath)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_rename_oldpath_newpath)

[中英对照](http://nodejs.cn/api/fs/fspromises_rename_oldpath_newpath.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_rename_oldpath_newpath.md)

新增于: v10.0.0

- `oldPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `newPath` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- 返回: [](http://url.nodejs.cn/ri1kj8)

将 `oldPath` 重命名为 `newPath`，然后在成功时解决 `Promise` 且不带参数。

### `fsPromises.rmdir(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_rmdir_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_rmdir_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_rmdir_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `maxRetries` [](http://url.nodejs.cn/SXbo1v) 如果遇到 `EBUSY`、 `EMFILE`、 `ENFILE`、 `ENOTEMPTY` 或 `EPERM` 错误，则 Node.js 会重试该操作（每次尝试时使用 `retryDelay` 毫秒时长的线性回退等待）。 此选项表示重试的次数。 如果 `recursive` 选项不为 `true`，则此选项会被忽略。 **默认值:** `0`。
  - `recursive` [](http://url.nodejs.cn/jFbvuT) 如果为 `true`，则执行递归的目录删除。 在递归模式中，错误不会被报告（如果 `path` 不存在），并且操作会被重试（当失败时）。 **默认值:** `false`。
  - `retryDelay` [](http://url.nodejs.cn/SXbo1v) 重试之间等待的时间（以毫秒为单位）。 如果 `recursive` 选项不为 `true`，则此选项会被忽略。 **默认值:** `100`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

删除 `path` 指定的目录，然后在成功时解决 `Promise` 且不带参数。

对文件（而不是目录）使用 `fsPromises.rmdir()` 会导致 `Promise` 被拒绝，在 Windows 上会带上 `ENOENT` 错误、在 POSIX 上会带上 `ENOTDIR` 错误。

设置为 `recursive` 为 `true` 会导致行为类似于 Unix 命令 `rm -rf`：不存在的路径不会引发错误，表示文件的路径会被删除。 `recursive` 选项的宽容行为已弃用，未来会抛出 `ENOTDIR` 和 `ENOENT`。

### `fsPromises.rm(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_rm_path_options)

暂无中英对照 [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_rm_path_options.md)

新增于: v14.14.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `force` [](http://url.nodejs.cn/jFbvuT) When `true`, exceptions will be ignored if `path` does not exist. **Default:** `false`.
  - `maxRetries` [](http://url.nodejs.cn/SXbo1v) If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or `EPERM` error is encountered, Node.js will retry the operation with a linear backoff wait of `retryDelay` milliseconds longer on each try. This option represents the number of retries. This option is ignored if the `recursive` option is not `true`. **Default:** `0`.
  - `recursive` [](http://url.nodejs.cn/jFbvuT) If `true`, perform a recursive directory removal. In recursive mode operations are retried on failure. **Default:** `false`.
  - `retryDelay` [](http://url.nodejs.cn/SXbo1v) The amount of time in milliseconds to wait between retries. This option is ignored if the `recursive` option is not `true`. **Default:** `100`.

Removes files and directories (modeled on the standard POSIX `rm` utility). Resolves the `Promise` with no arguments on success.

### `fsPromises.stat(path[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_stat_path_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_stat_path_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_stat_path_options.md)

版本历史

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)

- ```
  options
  ```

   

  <Object>

  - `bigint` [](http://url.nodejs.cn/jFbvuT) 返回的 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象中的数值是否应为 `bigint` 型。**默认值:** `false`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

`Promise` 会被解决并带上 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象（用于给定的 `path`）。

### `fsPromises.symlink(target, path[, type])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_symlink_target_path_type)

[中英对照](http://nodejs.cn/api/fs/fspromises_symlink_target_path_type.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_symlink_target_path_type.md)

新增于: v10.0.0

- `target` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `type` [](http://url.nodejs.cn/9Tw2bK) **默认值:** `'file'`。
- 返回: [](http://url.nodejs.cn/ri1kj8)

创建一个符号链接，然后在成功时解决 `Promise` 且不带参数。

`type` 参数仅在 Windows 上可用，可以是 `'dir'`、 `'file'` 或 `'junction'` 之一。 Windows 上使用 `'junction'` 要求目标路径是绝对路径。 当使用 `'junction'` 时， `target` 参数将自动标准化为绝对路径。

### `fsPromises.truncate(path[, len])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_truncate_path_len)

[中英对照](http://nodejs.cn/api/fs/fspromises_truncate_path_len.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_truncate_path_len.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `len` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0`。
- 返回: [](http://url.nodejs.cn/ri1kj8)

截断 `path`，然后在成功时解决 `Promise` 且不带参数。 `path` 必须是一个字符串或 `Buffer`。

### `fsPromises.unlink(path)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_unlink_path)

[中英对照](http://nodejs.cn/api/fs/fspromises_unlink_path.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_unlink_path.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- 返回: [](http://url.nodejs.cn/ri1kj8)

异步的 [`unlink(2)`](http://url.nodejs.cn/gjRRsM)。 `Promise` 将会在成功时解决，且不带参数。

### `fsPromises.utimes(path, atime, mtime)`[#](http://nodejs.cn/api/fs.html#fs_fspromises_utimes_path_atime_mtime)

[中英对照](http://nodejs.cn/api/fs/fspromises_utimes_path_atime_mtime.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_utimes_path_atime_mtime.md)

新增于: v10.0.0

- `path` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api)
- `atime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- `mtime` [](http://url.nodejs.cn/SXbo1v) | [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/A9TMoa)
- 返回: [](http://url.nodejs.cn/ri1kj8)

更改 `path` 指向的对象的文件系统时间戳，然后在成功时解决 `Promise` 且不带参数。

`atime` 和 `mtime` 参数遵循以下规则：

- 值可以是表示 Unix 纪元时间的数字、 `Date` 对象、或类似 `'123456789.0'` 的数值字符串。
- 如果该值无法转换为数值、或值为 `NaN`、 `Infinity` 或 `-Infinity`，则抛出 `Error`。

### `fsPromises.writeFile(file, data[, options])`[#](http://nodejs.cn/api/fs.html#fs_fspromises_writefile_file_data_options)

[中英对照](http://nodejs.cn/api/fs/fspromises_writefile_file_data_options.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fspromises_writefile_file_data_options.md)

版本历史

- `file` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://nodejs.cn/api/url.html#url_the_whatwg_url_api) | [](http://nodejs.cn/api/fs.html#fs_class_filehandle) 文件名或 `FileHandle`。

- `data` [](http://url.nodejs.cn/9Tw2bK) | [](http://nodejs.cn/api/buffer.html#buffer_class_buffer) | [](http://url.nodejs.cn/ZbDkpm) | [](http://url.nodejs.cn/jzn6Ao)

- ```
  options
  ```

   

  <Object>

   

  |

   

  <string>

  - `encoding` [](http://url.nodejs.cn/9Tw2bK) | [](http://url.nodejs.cn/334hvC) **默认值:** `'utf8'`。
  - `mode` [](http://url.nodejs.cn/SXbo1v) **默认值:** `0o666`。
  - `flag` [](http://url.nodejs.cn/9Tw2bK) 参见[文件系统 `flag` 的支持](http://nodejs.cn/api/fs.html#fs_file_system_flags)。默认值: `'w'`。

- 返回: [](http://url.nodejs.cn/ri1kj8)

异步地将数据写入到一个文件，如果文件已存在则覆盖该文件。 `data` 可以是字符串、buffer、或具有自有 `toString` 函数属性的对象。 `Promise` 会在成功时被解决，且不带参数。

如果 `data` 是 buffer，则 `encoding` 选项会被忽略。

如果 `options` 是字符串，则它指定字符编码。

指定的 `FileHandle` 必须支持写入。

在同一个文件上多次使用 `fsPromises.writeFile()` 且不等待 `Promise` 被解决（或被拒绝）是不安全的。

## FS 常量[#](http://nodejs.cn/api/fs.html#fs_fs_constants_1)

[中英对照](http://nodejs.cn/api/fs/fs_constants_1.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/fs_constants_1.md)

以下常量由 `fs.constants` 输出。

并非所有操作系统都可以使用每个常量。

To use more than one constant, use the bitwise OR `|` operator.

Example:

```js
const fs = require('fs');

const {
  O_RDWR,
  O_CREAT,
  O_EXCL
} = fs.constants;

fs.open('/path/to/my/file', O_RDWR | O_CREAT | O_EXCL, (err, fd) => {
  // ...
});
```

### 文件可访问性的常量[#](http://nodejs.cn/api/fs.html#fs_file_access_constants)

[中英对照](http://nodejs.cn/api/fs/file_access_constants.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_access_constants.md)

以下常量适用于 [`fs.access()`](http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback)。

| 常量   | 说明                                                         |
| :----- | :----------------------------------------------------------- |
| `F_OK` | 表明文件对调用进程可见。 这对于判断文件是否存在很有用，但对 `rwx` 权限没有任何说明。 如果未指定模式，则默认值为该值。 |
| `R_OK` | 表明调用进程可以读取文件。                                   |
| `W_OK` | 表明调用进程可以写入文件。                                   |
| `X_OK` | 表明调用进程可以执行文件。 在 Windows 上无效（表现得像 `fs.constants.F_OK`）。 |

### 文件拷贝的常量[#](http://nodejs.cn/api/fs.html#fs_file_copy_constants)

[中英对照](http://nodejs.cn/api/fs/file_copy_constants.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_copy_constants.md)

以下常量适用于 [`fs.copyFile()`](http://nodejs.cn/api/fs.html#fs_fs_copyfile_src_dest_mode_callback)。

| 常量                     | 说明                                                         |
| :----------------------- | :----------------------------------------------------------- |
| `COPYFILE_EXCL`          | 如果目标路径已存在，则拷贝操作将失败。                       |
| `COPYFILE_FICLONE`       | 拷贝操作将尝试创建写时拷贝链接。 如果底层平台不支持写时拷贝，则使用备选的拷贝机制。 |
| `COPYFILE_FICLONE_FORCE` | 拷贝操作将尝试创建写时拷贝链接。 如果底层平台不支持写时拷贝，则拷贝操作将失败。 |

### 文件打开的常量[#](http://nodejs.cn/api/fs.html#fs_file_open_constants)

[中英对照](http://nodejs.cn/api/fs/file_open_constants.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_open_constants.md)

以下常量适用于 `fs.open()`。

| 常量              | 说明                                                         |
| :---------------- | :----------------------------------------------------------- |
| `O_RDONLY`        | 表明打开文件用于只读访问。                                   |
| `O_WRONLY`        | 表明打开文件用于只写访问。                                   |
| `O_RDWR`          | 表明打开文件用于读写访问。                                   |
| `O_CREAT`         | 表明如果文件尚不存在则创建该文件。                           |
| `O_EXCL`          | 表明如果设置了 `O_CREAT` 标志且文件已存在，则打开文件应该失败。 |
| `O_NOCTTY`        | 表明如果路径表示终端设备，则打开该路径不应该造成该终端变成进程的控制终端（如果进程还没有终端）。 |
| `O_TRUNC`         | 表明如果文件存在且是普通的文件、并且文件成功打开以进行写入访问，则其长度应截断为零。 |
| `O_APPEND`        | 表明数据将会追加到文件的末尾。                               |
| `O_DIRECTORY`     | 表明如果路径不是目录，则打开应该失败。                       |
| `O_NOATIME`       | 表明文件系统的读取访问将不再导致与文件相关联的 `atime` 信息的更新。 仅在 Linux 操作系统上可用。 |
| `O_NOFOLLOW`      | 表明如果路径是符号链接，则打开应该失败。                     |
| `O_SYNC`          | 表明文件是为同步 I/O 打开的，写入操作将会等待文件的完整性。  |
| `O_DSYNC`         | 表明文件是为同步 I/O 打开的，写入操作将会等待数据的完整性    |
| `O_SYMLINK`       | 表明打开符号链接自身，而不是它指向的资源。                   |
| `O_DIRECT`        | 表明将尝试最小化文件 I/O 的缓存效果。                        |
| `O_NONBLOCK`      | 表明在可能的情况下以非阻塞模式打开文件。                     |
| `UV_FS_O_FILEMAP` | 当设置后，将会使用内存文件的映射来访问文件。 此标志仅在 Windows 操作系统上可用。 在其他操作系统上，此标志会被忽略。 |

### 文件类型的常量[#](http://nodejs.cn/api/fs.html#fs_file_type_constants)

[中英对照](http://nodejs.cn/api/fs/file_type_constants.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_type_constants.md)

以下常量适用于 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象的 `mode` 属性，用于决定文件的类型。

| 常量       | 说明                           |
| :--------- | :----------------------------- |
| `S_IFMT`   | 用于提取文件类型代码的位掩码。 |
| `S_IFREG`  | 表示普通的文件。               |
| `S_IFDIR`  | 表示目录。                     |
| `S_IFCHR`  | 表示面向字符的设备文件。       |
| `S_IFBLK`  | 表示面向块的设备文件。         |
| `S_IFIFO`  | 表示 FIFO 或管道。             |
| `S_IFLNK`  | 表示符号链接。                 |
| `S_IFSOCK` | 表示套接字。                   |

### 文件模式的常量[#](http://nodejs.cn/api/fs.html#fs_file_mode_constants)

[中英对照](http://nodejs.cn/api/fs/file_mode_constants.html) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_mode_constants.md)

以下常量适用于 [`fs.Stats`](http://nodejs.cn/api/fs.html#fs_class_fs_stats) 对象的 `mode` 属性，用于决定文件的访问权限。

| 常量      | 说明                           |
| :-------- | :----------------------------- |
| `S_IRWXU` | 表明所有者可读、可写、可执行。 |
| `S_IRUSR` | 表明所有者可读。               |
| `S_IWUSR` | 表明所有者可写。               |
| `S_IXUSR` | 表明所有者可执行。             |
| `S_IRWXG` | 表明群组可读、可写、可执行。   |
| `S_IRGRP` | 表明群组可读。                 |
| `S_IWGRP` | 表明群组可写。                 |
| `S_IXGRP` | 表明群组可执行。               |
| `S_IRWXO` | 表明其他人可读、可写、可执行。 |
| `S_IROTH` | 表明其他人可读。               |
| `S_IWOTH` | 表明其他人可写。               |
| `S_IXOTH` | 表明其他人可执行。             |

## 文件系统标志[#](http://nodejs.cn/api/fs.html#fs_file_system_flags)

[中英对照](http://nodejs.cn/api/fs/file_system_flags.html) [在线运行](http://run.nodejs.cn/?api=fs.open) [提交修改](https://github.com/nodejscn/node-api-cn/edit/master/fs/file_system_flags.md)

当 `flag` 选项采用字符串时，则以下标志均可用：

- `'a'`: 打开文件用于追加。 如果文件不存在，则创建该文件。

- `'ax'`: 类似于 `'a'`，但如果路径存在，则失败。

- `'a+'`: 打开文件用于读取和追加。 如果文件不存在，则创建该文件。

- `'ax+'`: 类似于 `'a+'`，但如果路径存在，则失败。

- `'as'`: 打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件。

- `'as+'`: 打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件。

- `'r'`: 打开文件用于读取。 如果文件不存在，则会发生异常。

- `'r+'`: 打开文件用于读取和写入。 如果文件不存在，则会发生异常。

- `'rs+'`: 打开文件用于读取和写入（在同步模式中）。 指示操作系统绕过本地的文件系统缓存。

  这对于在 NFS 挂载上打开文件时非常有用，因为它可以跳过可能过时的本地缓存。 它对 I/O 性能有非常实际的影响，因此不建议使用此标志（除非真的需要）。

  这不会把 `fs.open()` 或 `fsPromises.open()` 变成同步的阻塞调用。 如果需要同步的操作，则应使用 `fs.openSync()` 之类的。

- `'w'`: 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。

- `'wx'`: 类似于 `'w'`，但如果路径存在，则失败。

- `'w+'`: 打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件。

- `'wx+'`: 类似于 `'w+'`，但如果路径存在，则失败。

`flag` 也可以是数字，参见 [`open(2)`](http://url.nodejs.cn/ss2dGs) 文档。 常用的常量可以从 `fs.constants` 获取。 在 Windows 上，标志会被转换为合适的等效标志，例如 `O_WRONLY` 转换为 `FILE_GENERIC_WRITE`、 `O_EXCL|O_CREAT` 转换为能被 `CreateFileW` 接受的 `CREATE_NEW`。

如果路径已经存在，则排他性标志 `'x'`（ [`open(2)`](http://url.nodejs.cn/ss2dGs) 中的 `O_EXCL` 标志）会使操作返回错误。 在 POSIX 上，如果路径是符号链接，则使用 `O_EXCL` 也会返回错误（即使符号链接指向不存在的路径）。 排他性标志可能不适用于网络文件系统。

在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

如果要修改文件而不是覆盖文件，则 `flag` 选项需要被设置为 `'r+'` 而不是默认的 `'w'`。

有些标志的行为是特定于平台的。 例如，在 macOS 和 Linux 上使用 `'a+'` 标志打开目录会返回错误。 但是，在 Windows 和 FreeBSD 上，则会返回文件描述符或 `FileHandle`。

```js
// 在 macOS 和 Linux 上：
fs.open('<目录>', 'a+', (err, fd) => {
  // => [Error: EISDIR: illegal operation on a directory, open <目录>]
});

// 在 Windows 和 FreeBSD 上：
fs.open('<目录>', 'a+', (err, fd) => {
  // => null, <fd>
});
```

在 Windows 上，使用 `'w'` 标志打开（通过 `fs.open()`、 `fs.writeFile()` 或 `fsPromises.open()`）现有的隐藏文件，则会抛出 `EPERM`。 现有的隐藏文件可以使用 `'r+'` 标志打开用于写入。

调用 `fs.ftruncate()` 或 `fsPromises.ftruncate()` 可以用于重置文件的内容。