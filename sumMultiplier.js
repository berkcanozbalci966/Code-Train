// Sum Multiplier
// Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.
// Examples
// Input: [2, 2, 2, 2, 4, 1]
// Output: false
// Input: [1, 1, 2, 10, 3, 1, 12]
// Output: true

function SumMultiplier(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  const biggestArrayCombinate =
    sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2];

  const sumAllArray = arr.reduce((a, b) => a + b, 0);
  // code goes here
  return biggestArrayCombinate > sumAllArray ? true : false;
}
