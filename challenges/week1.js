function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word[0].toUpperCase() + word.slice (1);
//from Stackoverflow
    }  

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
// each parameter to be treated the same
  //Upper case in position 0
 return firstName[0].toUpperCase() +'.'+ lastName[0].toUpperCase();
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return (originalPrice/100 * vatRate) + originalPrice (Math.round);
 
  
}



function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return originalPrice - (originalPrice/100 * reduction);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

    var middleC = "";
    
    if (str.length%2 === 0) {
      middleC +=  str[(str.length/2)-1];
      middleC += str[str.length/2];
    }
    
    else if (str.length%2 === 1) {
      middleC += str[Math.floor(str.length/2)]
    }
    return middleC;
      
    }
    


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  //function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = word.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
 
  //function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = words.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
    //Original Array 
  
} 




function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  //return users = "Linux"
  let total = 0;

users.forEach(function (user) {
  const compType = user.type;
  if (compType === "Linux") {
    total += 1;   
  }
});
 
  return total;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  //sum of all elements / number of elements
  var total = 0;
  Array.prototype=''
  Array.prototype.avg = Array.prototype.avg || function () {
    return this.sum()/this.length .toFixed(2); 
     
}
return total / scores.length;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  // if divisible by 3 and 5 say fizzbuzz
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
   } else if (n % 3 === 0) {
      return "fizz";
   }   else if (n % 5 === 0) {
        return 'buzz';
      }else { 
        return n;
      }
    
}
  


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};