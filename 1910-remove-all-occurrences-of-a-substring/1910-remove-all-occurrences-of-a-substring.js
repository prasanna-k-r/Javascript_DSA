/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
   for(let i=0; i<s.length; i++) {
      for(let j=0; j<part.length; j++) {
          if(s[i+j] !== part[j]) {
              break;
          }
          
          if(j === part.length - 1) {
              s = s.slice(0, i) + s.slice(i+part.length);
              i = -1;
          }
      }
  }
  
  return s;
};