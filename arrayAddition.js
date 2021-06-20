// Array Addition
// Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
// Examples
// Input: [5,7,16,1,2]
// Output: false
// Input: [3,5,-1,8,12]
// Output: true

function ArrayAddition(arr) {
  const largestNumber = Math.max.apply(null, arr);
  const FilteredArray = arr.filter((number) => number !== largestNumber);
  var totalNumber = 0;

  for (var i = 0; i < FilteredArray.length; i++) {
    totalNumber += FilteredArray[i];
    for (var j = 0; j < FilteredArray.length; j++) {
      if (i != j) {
        totalNumber += FilteredArray[j];
        if (totalNumber == largestNumber) {
          return true;
        }
      }
    }

    for (var k = 0; k < FilteredArray.length; k++) {
      if (i != k) {
        totalNumber -= FilteredArray[k];
        if (totalNumber == largestNumber) {
          return true;
        }
      }
    }
    totalNumber = 0;
  }

  return false;
}
