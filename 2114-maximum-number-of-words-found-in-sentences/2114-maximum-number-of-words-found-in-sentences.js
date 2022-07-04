/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return sentences.reduce((max, s) => Math.max(max, s.split(' ').length), 0);
};