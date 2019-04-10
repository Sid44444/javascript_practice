function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!
  // function isEmpty(obj) {
  //   for (var key in obj) {
  //     if obj.hasOwnProperty(key))
  //       return false;
  //   }
  //   return true;
  // }
  // if true {
    var array1 = [];
    const map1 = array1.map(x => x * x);
    return map1;
  }



function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
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
