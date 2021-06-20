// you can write to stdout for debugging purposes, e.g. console.log('this is a
// debug message');

// INPUT : [1,2,4]
// OUTPUT 3

// INPUT : [55,56]
// OUTPUT 57

const arr = [1, 2, 3, 5];

function solution(A) {
  const sortArray = A.sort((a, b) => a - b);
  let indexArray = [];
  if (sortArray.filter((number) => number > 0).length) {
    sortArray.forEach((number, index) => {
      if (number > 0) {
        if (!sortArray.includes(number + 1)) {
          indexArray.push(index);
        }
      }
    });

    return sortArray[indexArray[0]] + 1;
  } else {
    return 1;
  }
}

console.log(solution(arr));
