/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  let res = [[1], [1, 1]]

  let loop = 2
  while (loop++ < numRows) {
    const pre = res[res.length - 1]
    const temp = []
    for (let i = 1; i < pre.length; i++) temp.push(pre[i - 1] + pre[i])
    res.push([1, ...temp, 1])
  }
  return res
};