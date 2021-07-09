```
// version 1.1.0
'use strict';

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;  // 如果相等直接返回 true

  var arrA = isArray(a)
    , arrB = isArray(b)
    , i
    , length
    , key;

  if (arrA && arrB) {  
    length = a.length;
    if (length != b.length) return false;  // 都为数组时，长度不相等返回 false
    for (i = 0; i < length; i++)
      if (!equal(a[i], b[i])) return false;
    return true; // 都为数组时且长度相等时，比较每个值相等才返回真
  }

  if (arrA != arrB) return false; // 一个为数组，另外一个不是，返回 false

  var dateA = a instanceof Date
    , dateB = b instanceof Date;
  if (dateA != dateB) return false;
  if (dateA && dateB) return a.getTime() == b.getTime(); // 都为Date类型，时间相等为真，其他为false

	// 都为RegExp类型，转换为字符串相等为真，其他为false
  var regexpA = a instanceof RegExp
    , regexpB = b instanceof RegExp;
  if (regexpA != regexpB) return false;
  if (regexpA && regexpB) return a.toString() == b.toString();


  if (a instanceof Object && b instanceof Object) {
    var keys = keyList(a);
    length = keys.length;
		
		// 都为对象时，key值数量不相等返回 false
    if (length !== keyList(b).length)
      return false;
		
		
		// 都为对象时，判断各属性值不相等返回 false
    for (i = 0; i < length; i++)
      if (!hasProp.call(b, keys[i])) return false;
			
		// 在属性都一样的情况下，判断对应的属性值是否相等	
    for (i = 0; i < length; i++) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
};

```

- ES5 compatible
- works in node.js (8+) and browsers (IE9+)
- checks equality of Date and RegExp objects by value.