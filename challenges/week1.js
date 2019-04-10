function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word[0].toUpperCase() + word.slice(1);
  //from Stackoverflow
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  // each parameter to be treated the same
  //Upper case in position 0
  return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return (originalPrice / 100 * vatRate) + originalPrice;


}



function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return originalPrice - Math.round(100 * (originalPrice / 100 * reduction)) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  var middleC = "";

  if (str.length % 2 === 0) {
    middleC += str[(str.length / 2) - 1];
    middleC += str[str.length / 2];
  }

  else if (str.length % 2 === 1) {
    middleC += str[Math.floor(str.length / 2)]
  }
  return middleC;

}



function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  // Step 1. Use the split() method to return a new array
  const splitString = word.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  const joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}





function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
    const reverseAllWords = words.map(function(item) {
      return item.split('').reverse().join('');
    });
    return reverseAllWords;
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
    const reducer = (total, currentValue) => total + currentValue;
    const sum = scores.reduce(reducer);
    return Math.round(100 * (sum / scores.length)) / 100;
    //I watched a video on this that explained it brilliantly 
    //(https://www.youtube.com/watch?v=uibEcNmGCi8)
    //The rounding numbers down to 2 decimal places caused me problems.
    //I used .toFixed(2) but this converted my number to a string
    // causing both tests to fail. 
}

  function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");
    // Add your code here!
    // if divisible by 3 and 5 say fizzbuzz
    if (n % 3 === 0 && n % 5 === 0) {
      return 'fizzbuzz';
    } else if (n % 3 === 0) {
      return "fizz";
    } else if (n % 5 === 0) {
      return 'buzz';
    } else {
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
  }