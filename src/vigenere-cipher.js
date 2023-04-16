const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.numAlph = {};
    for (let i = 0; i < this.alphabet.length; i++) {
      this.numAlph[this.alphabet[i]] = i;
    }
  }

  encrypt(text, key) {
    if(!(typeof text === 'string') || !(typeof key === 'string')){
      throw Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let code = '';
    for (let i = 0, j=0; i < text.length; i++, j++) {
      if ((this.alphabet.includes(text[i]))) {

        let textCode = this.numAlph[text[i]];
        let keyCode = this.numAlph[key[j % key.length]];
        code += this.alphabet[(textCode + keyCode) % this.alphabet.length];
      } else {
        code+=text[i];
        j--;
      }
    }
    if(this.direction === undefined || this.direction ) {
      return code;
    } else {
      return  code.split('').reverse().join('');
    }
  }

  decrypt(text, key) {
    if(!(typeof text === 'string') || !(typeof key === 'string')) {
      throw Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let code = '';
    for (let i = 0, j = 0; i < text.length; i++, j++) {
      if ((this.alphabet.includes(text[i]))) {
        let textCode = this.numAlph[text[i]];
        let keyCode = this.numAlph[key[j % key.length]];
        code += this.alphabet[(textCode - keyCode + this.alphabet.length) % this.alphabet.length];
      } else {
        code+=text[i];
        j--;
      }
    }
    if(this.direction === undefined || this.direction) {
      return code
    } else {
      return  code.split('').reverse().join('');
    }
  }

}

module.exports = {
  VigenereCipheringMachine
};
