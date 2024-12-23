function findMissingNumbers(nums: number[]): number[] {
  const max = Math.max(...nums);
  const unique = [...new Set(nums)];
  const allNums = Array.from({ length: max }, (_, index) => index + 1);
  return allNums.filter((n) => !unique.includes(n));
}

// Examples
console.log(findMissingNumbers([1, 2, 4, 6]));
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]));
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]));
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]));
// [4]
