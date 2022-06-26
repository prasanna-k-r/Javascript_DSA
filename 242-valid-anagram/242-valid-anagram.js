/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }
    
    let freq1 = {};
    let freq2 = {};
    for(let val of s) {
        freq1[val] = (freq1[val] || 0) + 1;
    }
    for(let val of t) {
        freq2[val] = (freq2[val] || 0) + 1;
    }
    for(let key in freq1) {
        if(freq1[key] !== freq2[key]) {
            return false;
        }
        // console.log(key);
    }
    return true;
};