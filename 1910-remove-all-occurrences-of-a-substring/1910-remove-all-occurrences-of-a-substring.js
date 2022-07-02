/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let result = s
    for (let i = 0; i < result.length; i++) {
      const firstIndex = result.indexOf(part)
      if (firstIndex > -1) {
        i = -1
        result = result.slice(0, firstIndex) + result.slice(firstIndex + part.length)    
      }
    }
    
    return result;
};