function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // using map, get each number in nums
  // times the number by itself
  //return the result of map
  const squaredNums = nums.map(function (num) {
    return num * num;
  })
return squaredNums;
}
  
  
  // Your code here!
  // get each number in nums
  // times the number by itself
  //put the number into a new array
// const squaredNums = [];
//   //return the array of squared numbers
//   nums.forEach(function (num) { // num name used istead of item
// const squared = num * num;
// squaredNums.push(squared);
//   });
//   return squaredNums;
// }


//   for (let i = 0; i < nums.length; i = i + 1) {
//     const num = nums[i];
//     const squared = num * num;
//     squaredNums.push(squared);
//   }
// return squaredNums;
// }


function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
// let count =0;
// function forEach (people,{name ,subjects}){
//   count = count + 1;
// }
//return count;
}


function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
