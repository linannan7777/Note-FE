

 npm 模块throttle-debounce，它提供了 `throttle` 和 `debounce` 两个函数：throttle 的含义是节流，debounce 的含义是防抖动，通过它们可以限制函数的执行频率，避免短时间内函数多次执行造成性能问题。它们都可以用于 **函数节流** 从而提升性能，但它们还是存在一些不同：

- debounce：将短时间内多次触发的事件合并成一次事件响应函数执行（往往是在第一次事件或者在最后一次事件触发时执行），即该段时间内仅**一次**真正执行事件响应函数。
- throttle：假如在短时间内同一事件多次触发，那么每隔一段更小的时间间隔就会执行事件响应函数，即该段时间内可能**多次**执行事件响应函数。

```js
// throttle.js
module.exports = function ( delay, noTrailing, callback, debounceMode ) {
	// delay 间隔时间，单位毫秒
	// noTrailing 可选值
	// callback 回调函数
	// debounceMode
	var timeoutID; // setTimeout 返回的时间戳

	// 保证最后一次callback执行
	var lastExec = 0;

	// noTrailing 默认是 falsy.
	// 函数所传参数少于4个时，依次赋值，将 noTrailing 设置为 undefined
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}
	// wrapper为返回的函数
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// 执行 `callback` 并更新 `lastExec` 
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		function clear () {
			timeoutID = undefined;
		}
		// wrapper函数第一次被执行，并且 debounceMode 为true
		if ( debounceMode && !timeoutID ) {
			exec();
		}

		// 清除所有存在的 timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}
		// 延迟的时间已经超过，执行callback
		if ( debounceMode === undefined && elapsed > delay ) {
			exec();
		} else if ( noTrailing !== true ) {
			// 如果 debounceMode 为真，它用它清除callback 回调的标记
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// 返回 wrapper 函数.
	return wrapper;

};
```



```
// debounce.js
var throttle = require('./throttle');
module.exports = function ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};

```

其实 throttle.js 封装有些复杂化，将节流和防抖都封装在一起。简化分开两个函数：

```
function throttle(delay, callback) {
  let timeoutID;
  let lastExec = 0;

  function wrapper() {
    const self = this;
    const elapsed = Number(new Date()) - lastExec;
    const args = arguments;

    function exec() {
      lastExec = Number(new Date());
      callback.apply(self, args);
    }

    clearTimeout(timeoutID);

    if (elapsed > delay) {
      exec();
    } else {
      timeoutID = setTimeout(exec, delay - elapsed);
    }
  }

  return wrapper;
}
```

```
function debounce(delay, callback) {
  let timeoutID;

  function wrapper() {
    const self = this;
    const args = arguments;

    function exec() {
      callback.apply(self, args);
    }

    clearTimeout(timeoutID);
    timeoutID = setTimeout(exec, delay);
  }

  return wrapper;
}

```

#### *throttle 和 debounce 使用场景举例*

`throttle` 和 `debounce` 适用于用户短时间内频繁执行某一相同操作的场景，例如：

- 用户拖动浏览器窗口改变窗口大小，触发 `resize` 事件。
- 用户移动鼠标，触发 `mousemove` 等事件。
- 用户在输入框内进入输入，触发 `keydown` | `keypress` | `keyinput` | `keyup` 等事件。
- 用户滚动屏幕，触发 `scroll` 事件。
- 用户在点击按钮后，由于 API 请求耗时未立即看到响应，可能会不断点击按钮触发 `click` 事件。