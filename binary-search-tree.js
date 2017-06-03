const { Tree } = require('./tree');

class BinarySearchTree extends Tree {
    constructor() {
        super(2);
    }
}

module.exports = { BinarySearchTree };