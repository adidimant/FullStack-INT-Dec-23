"use strict";

console.log("test"); //today is great
// function lengthOfLastWord(str) {
//     const alphabet = "qwertyuiopasdfghjklzxcvbnm";
//     let length = 0;
//     const splitReverseStr = str.split(" ").reverse();
//     console.log(splitReverseStr);
//     splitReverseStr.foreach((word) => {
//         if (
//             word.length >= 2 &&
//             (word.split("").every((letter) => alphabet.includes(letter)))
//         ) {
//            console.log(word)
//         }
//     });
//     return length
// }
// lengthOfLastWord("hehe asda")

console.log(lengthOfLastWord("asd aada ofad  "));

function lengthOfLastWord(str) {
  numberToReturn = 0;
  var alphabet = "qwertyuiopasdfghjklzxcvbnm";
  var splitReverseStr = str.split(" ").reverse();
  console.log(splitReverseStr);
  splitReverseStr.every(function (word) {
    word.length;

    if (word.length >= 2 && word.split("").every(function (letter) {
      return alphabet.includes(letter);
    })) {
      numberToReturn = word.length;
      console.log(word.length); // return false
    }
  });
  return numberToReturn;
}