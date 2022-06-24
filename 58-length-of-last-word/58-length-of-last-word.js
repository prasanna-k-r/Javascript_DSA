/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ");
    let lastWord = "";
    if(words[words.length - 1] == '') {
        lastWord = words[words.length - 2];
    } else {
        lastWord = words[words.length - 1];
    }
    console.log(lastWord, lastWord.length);
    return lastWord.length;
};