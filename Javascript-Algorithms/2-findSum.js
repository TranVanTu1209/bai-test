const SAMPLE__NUMBERS = [1, 4, 2, 3, 5];

// run node 2-findSum.js at the terminal to see the result

const findTopSum = arr => {
  // sort array by descending order
  let sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[0] + sortedArray[1];
}
const result = findTopSum(SAMPLE__NUMBERS);
console.log(result);