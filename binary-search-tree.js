const { Tree, TreeNode } = require('./tree');

class BinarySearchTree extends Tree {
    constructor() {
        super(2);
    }

  /**
   * Inserts a value into the tree.
   * @param {*} value - The value to be inserted.
   */
  insert(value) {
    if (!this.root){
      this.root = new BinarySearchTreeNode(null, value);
    } else {
      this.root.insert(value);
    }
  }
}

class BinarySearchTreeNode extends TreeNode {
    constructor(parent = null, value) {
        super(2, parent, value);
    }

    /**
     * Inserts value into tree.
     * @param {*} value - Value to be inserted into tree.
     * @throws {TypeError} - If duplicate value is inserted.
     */
    insert(value) {
        if(value < this.value) {
            if(this.children[0]) {
                this.children[0].insert(value);
            } else {
                this.children[0] = new BinarySearchTreeNode(this, value);
            }
        } else if(value > this.value) {
             if(this.children[1]) {
                this.children[1].insert(value);
            } else {
                this.children[1] = new BinarySearchTreeNode(this, value);
            }
        } else {
            throw new TypeError('Duplicate values are not allowed in a binary search tree')
        }
    }

    search(){
        return this.value;
    }
}

module.exports = { BinarySearchTree, BinarySearchTreeNode };