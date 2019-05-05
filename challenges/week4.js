function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNums = [ ];
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
  // Your code here
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

    const verbs = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const first3Chars = word.slice(0, 3);
      if (first3Chars === "to") {
        verbs.push(word);
      }
    }
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
