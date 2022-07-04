/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxCount = 0;
    for(let i=0; i<sentences.length; i++) {
        let words = sentences[i].split(" ");
        maxCount = Math.max(words.length, maxCount);
    }
    return maxCount;
};