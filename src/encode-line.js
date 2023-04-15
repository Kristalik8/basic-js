const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.slice();
  let resultARR = [];
  if (arr.length < 1) {
    return '';
  }
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let obj = {};
    while (arr[i] === arr[i + count]) {
      count++;
    }
    obj[arr[i]] = count;
    i += count - 1;
    resultARR.push(count, arr[i])
  }
  return resultARR.filter(e => e!==1).join('');
}


module.exports = {
  encodeLine
};
