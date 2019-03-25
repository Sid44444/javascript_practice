function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word[0].toUpperCase() + word.slice (1);
//from Stackoverflow, answers to 
//How do I make the first letter of a string uppercase in JavaScript?
  //String.prototype.capitalize = function() {
  //return this.charAt(0).toUpperCase() + this.slice(1);
    }  //this might work better

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  
//return firstName[0]+lastName[0].substring(0, 1).toUpperCase();
      
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return originalPrice/100 * vatRate + originalPrice;
}


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return originalPrice -reduction(originalPrice/100 * reduction);
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
    let reversed = "";
    for(let char of word){
      reversed = char + reversed;
    }
    return reversed;
  
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var total = 0;
for(var i = 0; i < scores.length; i++) {
    total += scores[i];
}
return total / scores.length;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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