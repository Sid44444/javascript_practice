function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNums = [];

  nums.forEach(function (num) {
    if (num < 1) {
      smallNums.push(num);
    }
  });
  return smallNums;
}


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const beginWith = [];

  names.forEach(function (name) {
    if (name[0] === char)
      beginWith.push(name);
  });
  return beginWith;
}





//  findNamesBeginningWith(["Sally", "Dave", "Susan", "Geoff", "Riley", "Sam"], 'R')



function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];

  words.forEach(function (word) {
    const first3Chars = word.slice(0, 3);
    if (first3Chars === "to ") {
      verbs.push(word);
    }
  });
  return verbs;
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let onlyIntegers = [];

  nums.forEach(function (num) {
    if (Number.isInteger(num)) {
      //if num is a whole number put it in onlyIntegers array
      onlyIntegers.push(num);
    }
  });
  return onlyIntegers;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let citiesDisName = [];
  //new array to push cities display name
  users.forEach(function (user) {
    const city = user.data.city.displayName;// retrieve info from object
    citiesDisName.push(city);
  });


  // for (let i = 0; i < users.length; i++) {
  //   //go through each user
  //   //displayName:
  //   const user = users[i];//just neater to have user rather than users[i]
  //   const city = user.data.city.displayName;// retrieve info from object
  //   citiesDisName.push(city);
  // }
  //sort through array using a for loop
  //push cities dis name into array
  //console.log this array to check it works in repl.it

  return citiesDisName;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = [];
  //for loop used to go through each element 
  for (let i = 0; i < nums.length; i++) {
    //action on each element should be to find square root of that number
    const num = nums[i];
    const square = (Math.sqrt(num));
    const twoDec = Number(square.toFixed(2));// changed string to number by using Number here
    // const squareFound = square.toFixed(2);
    squareRoots.push(twoDec);
    //then that original integer is the squared root of the number in the array
  }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentenceContainingStr = [];
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    const sentenceLowerCase = sentence.toLowerCase();
    //sentenceLowCase is now all lower case
    if (sentenceLowerCase.indexOf(str.toLowerCase()) >= 0) {
      //as per Stackoverflow. indexOf finds the first occurance of a specified value of a string
      sentenceContainingStr.push(sentence);
      //lowercase sentence needs to be searched for str. If it is not there do nothing
      //If it is there push whole sentence (including str)into sentenceContaining
      // sentenceContaining.push(sentenceLowCase);
    } //should not be case sensitive!! (why is this not working as I have changed things to Lower Case?)
    return sentenceContainingStr;
  }
}


function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const longestSides = [];

  triangles.forEach(function (triangle) {
    triangle.sort(function (a, b) {
      return b - a;
    });
    const largestSide = triangle[0];
    longestSides.push(largestSide);
  });
  return longestSides;
}

//   for (let i = 0; i < triangles.length; i++) {
//     const biggestNum = triangles[i];
//     longestSides.push(Math.max(...biggestNum));
//   }
//   return longestSides;
// }

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
