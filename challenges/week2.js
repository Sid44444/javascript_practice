function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  // finds fillings: array 
  //lists all contents still in array format
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
  const sheepOnly = arr.filter(function (item) {
    if (item === "sheep") {
      return true;
    } else {
      return false;
    }
  })
  return sheepOnly.length
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  const firstLetter = person.address.postCode[0];
  const secondLetter = person.address.postCode[1];
const isAlphabeticCharacter = isNaN(Number(secondLetter))
  return firstLetter === "M" && !isAlphabeticCharacter;
}



module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};