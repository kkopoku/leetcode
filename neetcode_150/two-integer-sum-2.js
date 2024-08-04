function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum > target) {
      // reduce the r index ==> selects a lesser number
      r--;
    } else if (sum < target) {
      // increase the l index ==> selects a bigger number
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [];
}

let numbers=[-5,-3,0,2,4,6,8]
let target=5

console.log(twoSum(numbers, target))
