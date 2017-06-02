
const Queue = require('./queue');
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
      this.root = new TreeNode(this.numberOfChildren, null, value);
    } else {
      this.root.insert(value);
    }
  }

  /**
   * Gets the current node then prints the children left to right.
   * @return {Array} A pre ordered array of thre values.
   */
  preOrderTraversal() {
    if(this.root) {
      return this.root.preOrderTraversal();
    } else {
      throw new Error('The tree is empty');
    }
  }

   /**
   * Gets the the children left to right then the current node.
   * @return {Array} A post ordered array of thre values.
   */
  postOrderTraversal() {
    if(this.root) {
      return this.root.postOrderTraversal();
    } else {
      throw new Error('The tree is empty');
    }
  }
  
}

/**
 * A Tree node can contain n children and has a reference to it's parent
 */
class TreeNode {
  constructor(numberOfChildren, parent = null, value) {
    this.numberOfChildren = numberOfChildren;
    const children = new Array(this.numberOfChildren)

    this.value = value;
    this.parent = parent;
    this.children = children.fill(null);
  }

  _search() {
    const queue = new Queue();
    queue.add(this);

    while(queue.isEmpty()) {
      const node = queue.remove();
      this.children.forEach(child => {
        console.log(child.value);
      })
    }
  }

  /**
   * Gets the child values
   * @param {boolean} isPreOrder - true if performing a pre-order traversal. 
   *  False if performing a post-order traversal.
   * @return {Array} An array of the child values
   */
  _traverse(isPreOrder) {
    let values = []; 
    this.children.forEach( child => {
      if(child) {
        values = [ ...values, ...(isPreOrder ? child.preOrderTraversal() : child.postOrderTraversal()) ];
      }
    });
    return values
  }

  /**
   * Inserts a value into this node.
   * @param {*} value - The value to be inserted
   */
  insert(value) {

    // In order to insert a value we havr to perform a breadth first search for 
    // an open child with a null value.
    const queue = new Queue();
    queue.add(this);
    let inserted = false;

    // visit each element being added to the queue.
    while(!queue.isEmpty()) {
      const node = queue.remove();
      let i = 0;

      //add the children of the dequeued node to the queue if they are not null
      while(node.children[i] !== null && i < node.children.length ){
        queue.add(node.children[i]);
        i++
      }

      //If the child node is null then ad a new node there and exit the loop.
      if(node.children[i] === null){
        node.children[i] = new TreeNode(this.numberOfChildren, this, value);
        break;
      }
    }
  }

  /**
   * Gets the current node then prints the children left to right.
   * @return {Array} A pre ordered array of thre values.
   */
  preOrderTraversal() {
    return [ this.value, ...this._traverse(true)]; 
  }

  /**
   * Gets the the children left to right then the current node.
   * @return {Array} A post ordered array of thre values.
   */
  postOrderTraversal() {
    return [ ...this._traverse(false), this.value]; 
  }
}

module.exports = { 
  Tree, 
  TreeNode
} ;

