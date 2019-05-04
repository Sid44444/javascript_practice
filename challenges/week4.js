function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  
  //check each element in an array
  //if element is a minus number or a decimal number under 1 create a new array with those numbers.
  //if array is empty return empty
  //if no negative numbers or <1 numbers return an empty array.
  const smallNums=[];
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const small = Math.sign(num);
    smallNums.push(small) ;
  
    //return small;
  }
  //return the array of small numbers
  //return small;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
    [
 
    ]
    const verbs = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      //slice off the first 3 chars of each word
      const first3Chars = word.slice(0, 3);
      // are they equal to "to "?
      if (first3Chars === "to") {
        verbs.push(word);
      }
      //if so push to new array to collect the verbs
    }
    //return the new array
    return verbs;
  }
     

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
