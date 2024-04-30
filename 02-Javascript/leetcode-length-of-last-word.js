/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
  A word is a maximal 
  substring
  consisting of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
" Hello World   "
var lengthOfLastWordWithJSFuncs = function(s) {
    const trimmed = s.trim();
    const splitted = trimmed.split(' ');
    const lastWord = splitted[splitted.length -1];
    return lastWord.length;
};

// Checked:
// "Hello World"
// " Hello World "
// "World"

var lengthOfLastWordNoJSFuncs = function(s) {
    let wordStarted = false;
    let count = 0;
    for (let i = s.length -1; i >= 0; i--) {
        if (s.charAt(i) == " ") {
            if (!wordStarted) {
                continue;
            } else {
                return count;
            }
        } else {
            wordStarted = true;
            count++;
        }
    }

    return count;
};

// Exercise TWO:
// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150