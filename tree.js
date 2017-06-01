
/**
 * A Tree is a datastructure composed of nodes that may themselves contain child nodes.
 * All Trees have a single root node.
 */
class Tree {

  /**
   * @param {number} numberOfChildren - The number of children per node
   * @param {*} value - The value of the root node.
   */
  constructor(numberOfChildren) {
    this.numberOfChildren = numberOfChildren;
    this.root = null;
  }

  /**
   * Inserts a value into the tree.
   * @param {*} value - The value to be inserted.
   */
  insert(value) {
    if (!this.root){
      this.root = new TreeNode(this.numberOfChildren, value);
    }
    this.root.insert(value);
  }

  /**
   * Prints the current node then prints the children left to right.
   */
  preOrderTraversal() {
    if(this.root) {
      this.root.preOrderTraversal();
    } else {
      throw new Error('The tree is empty');
    }
  }
  
}

/**
 * A Tree node can contain n children and has a reference to it's parent
 */
class TreeNode {
  constructor(numberOfChildren, value) {
    this.numberOfChildren = numberOfChildren;
    const children = new Array(this.numberOfChildren)

    this.value = value;
    this.parent = null;
    this.children = children.fill(null);
  }

  /**
   * Inserts a value into this node.
   * @param {*} value - The value to be inserted
   */
  insert(value) {
    
  }

  /**
   * Prints the current node then prints the children left to right.
   */
  preOrderTraversal() {
  }
}

module.exports = { 
  Tree, 
  TreeNode
} ;

