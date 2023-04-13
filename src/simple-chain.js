const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        if(value!== null || value !==0 || typeof value !=='string') {
            this.chain.push(`( ${value} )`);
            return this;
        }
    },

    removeLink(position) {
        if (typeof position !== 'number' || position > this.chain.length || position < 1 ) {
            this.chain = [];
            throw new Error(`You can't remove incorrect link!`);
        }
        this.chain.splice(position-1, 1);
        return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        const arr = this.chain.join('~~');
        this.chain = [];
        return arr;
    }
};

module.exports = {
    chainMaker
};
