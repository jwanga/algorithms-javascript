const { Tree } = require('./tree');

class BinaryTree extends Tree {
    constructor() {
        super(2);
    }
}

module.exports = { BinaryTree };