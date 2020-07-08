// 设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。

// 说明：解集不能包含重复的子集。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generateParenthesis = (n) => {
  const result = [];
  // 递归取值
  const dfs = (cur, left, right) => {
    // 如果当前字符串的长度是 n * 2（即 n 对），收租
    if (cur.length === 2 * n) {
      result.push(cur);
      return;
    }
    // 左边起手
    if (left < n) {
      dfs(cur + '(', left + 1, right);
    }
    // 右边补足
    if (right < left) {
      dfs(cur + ')', left, right + 1);
    }
  };
  dfs('', 0, 0);
  return result;
};
console.log(generateParenthesis(3))
console.log(generateParenthesis(4))
console.log(generateParenthesis(5))
function caseConvert(str) {
    return str.replace(/([([a-z]*)A-Z]*)/g,(m, s1,s2) =>{
        console.log(m)
        console.log(s1)
        console.log(s2)
        return `${s1.toUpperCase()}${s2.toLowerCase()}`
        // return `111`
    })
}

function caseConvert(str){
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
    console.log(m+'=======111111')
    console.log(s1+'=======222222')
    console.log(s2+'=======333333')
    return `${s1.toUpperCase()}${s2.toLowerCase()}`
      })
}
console.log(caseConvert("rr11aa23adkhAJHJHDAKJfjdk"))
