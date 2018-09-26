var args = process.argv.slice(2);
var lettersArray = args.join("");
function countLetters(lettersArray) {
  var outputArray = [];
  var outputObject = {};
  for (let letter of lettersArray) {

    if (!outputArray.includes(letter)){
      outputArray.push(letter);
      outputObject[letter] = 1;
    } else {
      outputObject[letter] += 1;
   }

  }
  return outputObject;
}
console.log(countLetters(lettersArray));