const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  if(nums.includes(n)) 
  return nums(n.indexOf+1);
  //  } else {
  //   return null
  // };
  // //Search each element in array for a given number
  // let numberIndex = nums.indexOf(n);
  // let nextIndex = numberIndex + 1;

  // nums.forEach(function (num) {
  //   if (num.indexOf(n) === -1) {
  //     return null;
  //   }

  //   // if number not found return 'null'
  //   //if number is found return next index position number
  //   //if number found more than once only return 
  //   //next index number of first number found. 'break'?
  //   //if at final index return 'null'
  //   // const nextNumber = integer

  // }
  //   // return nextNumber
  //   return nums[nextIndex]
  };

  const count1sand0s = str => {
    if (str === undefined) throw new Error("str is required");

    let ones = 0;
    let zeroes = 0;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === "1") {
        ones++;
      } else if (char === "0") {
        zeroes++;
      }
    }
    return {
      1: ones,
      0: zeroes
    }
  };


  const reverseNumber = n => {
    if (n === undefined) throw new Error("n is required");
    // Your code here!
    //reverse digits in a number (not in an array)
    //if number = 100 return 1 as no need to return 001
    let reversedNumber = n.toString().split('').reverse().join('');
    return parseInt(reversedNumber);
  };

  const sumArrays = arrs => {
    if (arrs === undefined) throw new Error("arrs is required");
    // Your code here!
    //for each array and those within an array add digits
    // return sum of digits
  };

  const arrShift = arr => {
    if (arr === undefined) throw new Error("arr is required");
    // Your code here!
    //swop first and last digits in an array
    // all other numbers to remain the same
    // if array <2 digits no change
    //return new array
  };

  const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");
    // Your code here!
    //search an object for a string
    //should not be case sensitive
    // Note that the objects provided to the function could have any keys/values
    //return true if string found
    //return false if string not found (boolean)
  };

  const getWordFrequencies = str => {
    if (str === undefined) throw new Error("str is required");
    // Your code here!
    //searches through a string
    //counts frequency of word 
    //"returns the frequencies of each word in a string"
    //"hello: 4
    //world: 4"

  };

  module.exports = {
    findNextNumber,
    count1sand0s,
    reverseNumber,
    sumArrays,
    arrShift,
    findNeedle,
    getWordFrequencies
  };
