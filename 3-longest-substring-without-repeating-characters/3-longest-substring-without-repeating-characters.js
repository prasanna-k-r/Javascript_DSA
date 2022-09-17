/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let right = 0, left = 0, maxLength = 0;
  let map = new Map();
  while(right < s.length) {
    while(map.has(s[right])) {
      map.delete(s[left])
      left++;
    }
    map.set(s[right], 1);
    maxLength = Math.max(maxLength, map.size);
    right++;
  }
  return maxLength;
};