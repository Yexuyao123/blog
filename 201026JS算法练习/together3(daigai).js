//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
//注意：答案中不可以包含重复的三元组。
//示例：
//给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//去重
let arr = [1, 2, 2, 3]; // [1, 2, 2, 3]
let set = new Set(arr); //去掉重复数据，返回结果是'set'，是对象
let newArr = Array.from(set); //将set转化为数组
console.log(newArr); // [1, 2, 3]

//第一版
var threeSum = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let target = nums[i] * -1;
    let rightNums = nums.slice(i + 1);
    // console.log(nums[i],rightNums);
    let distance = [];
    for (let j = 0; j < rightNums.length; j++) {
      distance.push(target - rightNums[j]);
      // console.log(distance);
      let cango = 0;
      for (let n = 0; n < i; n++) {
        if (rightNums[j] === nums[n]) {
          cango++;
        }
      }
      if (cango === 0) {
        for (let k = 0; k < distance.length - 1; k++) {
          if (rightNums[j] === target / 2) {
            if (distance[k] === target / 2) {
              result.push([nums[i], rightNums[j], distance[j]]);
              break;
            }
          } else if (rightNums[j] === distance[k]) {
            result.push([nums[i], rightNums[j], distance[j]]);
            break;
          }
        }
      }
    }
  }
  return result;
};
threeSum([-1, 0, 1, 2, -1, -4]);
