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
  const num = (people/40);
  const roundedNum =Math.ceil(num);
  return roundedNum;
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
  const sheepOnly = arr.filter(function(item) {
    if (item === "sheep") {
      return true;
    } else {
      return false;
    } 
  }) 
  return sheepOnly.length

  // let count = 0;
  // for(var i = 0; i < arr.length; ++i){
  //     if(arr[i] === "sheep") {
  //         count++;
  
  //   }
  // }
  // return count
}
  

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
if (person === 'Manchester') {
    return true;
} if(person !== 'Manchester') {
    return false;
  
}
}
 
  //const cityFinder=person.city
  //if person:city='Manchester' {
   // return true;
//}// else {
  //return false;
  


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};