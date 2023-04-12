const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let tempArr = arr.slice();
    let result = [];
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === '--double-next') {
            tempArr[i] = null;
            if (i + 1 < tempArr.length && (tempArr[i + 1] !== null)) {
                result.push(tempArr[i + 1]);
            }
        } else if (tempArr[i] === '--double-prev') {
            tempArr[i] = null;
            if (i - 1 >= 0 && (tempArr[i - 1] !== null)) {
                result.push(tempArr[i - 1]);
            }
        } else if (tempArr[i] === '--discard-next') {
            if (i + 1 < tempArr.length && tempArr[i + 1] !== null) {
                tempArr[i + 1] = null;
            }
            tempArr[i] = null;
            i++;
        } else if (tempArr[i] === '--discard-prev') {
            if (i - 1 >= 0  && (tempArr[i - 1] !== null)) {
                tempArr[i - 1] = null;
                result.pop();
            }
            tempArr[i] = null;
        } else {
            result.push(tempArr[i]);
        }

    }
    return result;
}

module.exports = {

    transform
};
