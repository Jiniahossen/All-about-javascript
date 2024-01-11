// make every word of a sentence capitalized


function capitalizedWord(str){
  const allword=str.split(" ").map(function(word){
    return word.charAt(0).toUpperCase()+word.substring(1)
  })
  return allword.join(" ")
}

console.log(capitalizedWord('jinia is a beautiful girl'));


// alphabet occurances value
function occ(str) {
  var occur = {};
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (!occur.hasOwnProperty(char)) {
      occur[char] = 1;
    } else {
      occur[char]++;
    }
  }

  return occur;
}

console.log(occ('Jinia'));

function sumArray(arr) {
  return arr.reduce(function (acc, currentValue) {
    return acc + currentValue;
  }, 0);
}

var myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray)); // Output: 15

