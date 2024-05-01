console.log(`test`);

//today is great
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
console.log(lengthOfLastWord(`asd aada of123  `));
function lengthOfLastWord(str) {
    numberToReturn = ""
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const splitReverseStr = str.trim().split(" ").reverse();
    console.log(splitReverseStr);
    splitReverseStr.every((word) => {
        if(word.length >=2 &&
            word.split("").every((letter) => alphabet.includes(letter))) {
                numberToReturn = word.length;
                return false
        }
    });
    return numberToReturn
}
