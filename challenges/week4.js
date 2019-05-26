function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
  //  console.log(smallNums);
}


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const beginWith = [];
  //new array to put first character into
  for (let i = 0; i < names.length; i++) {

    const name = names[i];
    // if (names[0] === char) beginWith.push(names[i]);
    if (name.charAt(0) === char)
      beginWith.push(names[i]);


  } return beginWith;

  //  console.log([findNamesBeginningWith]); 
}




//  findNamesBeginningWith(["Sally", "Dave", "Susan", "Geoff", "Riley", "Sam"], 'R')



function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const first3Chars = word.slice(0, 3);
    if (first3Chars === "to ") {
      verbs.push(word);
    }
  }
  return verbs;
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let onlyIntegers = [];

  for (let i = 0; i < nums.length; i++) {
    //go through each number
    const num = nums[i];
    //num =nums[i]
      if (Number.isInteger(num)) {
        //if num is a whole number put it in onlyIntegers array
        onlyIntegers.push(num);
      }
  }
    return onlyIntegers;
    //return the new array with just integers in.
}
//push only integers into new array
//console log onlyIntegers array to check it works in Repl.it

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let citiesDisName = [];
  //new array to push cities display name
  for (let i = 0; i < users.length; i++) {
    //go through each user
    //displayName:
    const user = users[i];//just neater to have user rather than users[i]
    const city = user.data.city.displayName;// retrieve info from object
    citiesDisName.push(city);
  }
  //sort through array using a for loop
  //push cities dis name into array
  //console.log this array to check it works in repl.it

  return citiesDisName;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let squareRoot = [];
  //for loop used to go through each element 
  for (let i = 0; i < nums.length; i++) {
  //action on each element should be to find square root of that number
  const num = nums[i];
  const square = num.Math.sqrt ();
  squareRoot.push(square);
  //if an integer * by itself = the number in the array
  //then that original integer is the squared root of the number in the array

  }
  return squareRoot;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let sentenceContaining = [];
  //returns a sentence containing specified str in new array
  //Not to be case sensitive but needs to return a whole sentence
  //. or capital letter
  return sentenceContaining;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  //search through an array and each array within that array
  // the three numbers in the arrays need to be sorted into highest number first
  //this number then needs to be returned
  //if two numbers have the highest value only one of these should be returned
  let longestSides = [];

  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
