function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  const squaredNums = nums.map(function (num) {
    return num * num;
  })
  return squaredNums;
}


function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  return words.split('').map(function (word, index) {
    if (index === 0) {
      return words.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  let totalSubjects = 0;
  people.forEach(function (element) {
    totalSubjects = totalSubjects + element.subjects.length;
  });
  return totalSubjects;

}



function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let foundFoodItem = false;

  menu.forEach(function (menuItem) {
    menuItem.ingredients.forEach(function (menuItemIngredient) {
      if (menuItemIngredient === ingredient) {
        foundFoodItem = true;
      }
    });
  });
  return foundFoodItem;
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  const duplicates = [];

  arr1.forEach(function (num) {
    arr2.forEach(function (num2) {
      if (num === num2) {
        const duplicatesContainsNum = duplicates.includes(num);
        if (duplicatesContainsNum === false) {
          duplicates.push(num2);
        }
      }
    });
  });
  return duplicates.sort(function (a, b) { return a - b });
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
