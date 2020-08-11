const SAMPLE__STRINGS = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];

// run node 1-findStrings.js at the terminal to see the result

const findStringsHaveLengthAppearMost = strArray => {
  let resultStrings = [];
  // find the length of string appear the most
  let stringArrayLength = [];
  strArray.forEach(str => stringArrayLength.push(str.length));
  // sorted the length array
  stringArrayLength = stringArrayLength.sort((a, b) => a - b);
  // the length string appear the most
  const length = stringArrayLength[findIndexElement(stringArrayLength)];
  // filter out the string has that length
  resultStrings = strArray.filter(str => str.length === length);
  return resultStrings;
}

// function to find the index of the element appear the most in the array (array are sorted)

const findIndexElement = arr => {
  let max = 1;
  let count = 1;
  let index = 0;
  for (let i = 0; i < arr.length - 1; i++)
  {
    if (arr[i] === arr[i + 1])
    {
      count++;
    } else
    {
      if (count > max)
      {
        max = count;
        index = i;
      }
      count = 1;
    }
  }
  return index;
}

const result = findStringsHaveLengthAppearMost(SAMPLE__STRINGS);
console.log(result);