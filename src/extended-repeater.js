const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  str = String(str);
  let separator = (options.separator) ? options.separator : "+";
  let repeatTimes = (options.repeatTimes) ? options.repeatTimes : 1;
  let addition = ((options.hasOwnProperty('addition'))) ? String(options.addition) : "";
  let additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator) ? options.additionSeparator : "|";


  let additionARR = []
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionARR.push(addition);
  }
  addition = additionARR.join(additionSeparator);
  str = str + addition;
  console.log(str);

  let strARR = [];
  for (let i = 0; i < repeatTimes; i++) {
    strARR.push(str);
  }

  str = strARR.join(separator);
  return str;
}

module.exports = {
  repeater
};
