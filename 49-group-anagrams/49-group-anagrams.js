/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let strObj = {};
    
    for(let str of strs) {
        //sort and join the string to compare with other
        let anagram = str.split("").sort().join("");
        if(strObj[anagram]) {
            strObj[anagram].push(str);
        } else {
            strObj[anagram] = [str];
        }
    }
    
    return Object.values(strObj);
};