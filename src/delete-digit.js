const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let temptARR = arr.slice();
    temptARR.splice(i, 1);
    let b = Number(temptARR.join(''));
    max = (max > b) ? max : b;
  }
  return max;
}

module.exports = {
  deleteDigit
};
