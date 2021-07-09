/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const filterIndexArr = []
  nums.forEach((item, index) => {
    if(item <= target) {
      filterIndexArr.push(index)
    }
  })
  for(let i = 0; i < filterIndexArr.length; i++){
    for(let j = i+1; j < filterIndexArr.length; j++){
      if (filterIndexArr[i] + filterIndexArr[j] === target) {
        return [i, j]
      }
    }
  }
  return []
};

// var twoSum1 = function(nums, target) {
//   for(let i = 0; i < filterIndexArr.length; i++){
//     for(let j = i+1; j < filterIndexArr.length; j++){
//       if (filterIndexArr[i] + filterIndexArr[j] === target) {
//         return [i, j]
//       }
//   }
//   return []
// };
// @lc code=end
