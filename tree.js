
/**
 * A Tree is a datastructure composed of nodes that may themselves contain child nodes.
 * All Trees have a single root node.
 */
class Tree {
  /**
   * @param {number} numberOfChildren - The number of children per node
   * @param {*} value - The value of the root node.
   */
  constructor(numberOfChildren, value) {
    this.numberOfChildren = numberOfChildren;
    this.root = value ? new TreeNode(this.numberOfChildren, value) : null;
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
   * Inserts a node an a child of this node
   * @param {*} value - the node to be inserted
   */
  insert(value) {

  }
}

module.exports = Tree;