// make every word of a sentence capitalized


function capitalizedWord(str){
  const allword=str.split(" ").map(function(word){
    return word.charAt(0).toUpperCase()+word.substring(1)
  })
  return allword.join(" ")
}

console.log(capitalizedWord('jinia is a beautiful girl'));