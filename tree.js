
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
    this.root = undefined;
    this.Li
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
   * Serach the tree for a value;
   * @param {*} value -The value to search for
   * @return {*} The found value;
   */
  search(value) {
    return this.root.search ? this.root.search(value) : undefined;
  }

   /**
   * Gets the left node, then the current node then the right node.
   * @return {Array} A in ordered array of thre values.
   */
  inOrderTraversal() {
    if(!this.root) {
      throw new TypeError('The tree is empty');
    } else if(this.numberOfChildren !== 2) {
      throw new TypeError('You can only perform an in-order traversal of a binary tree')
    } else {
      return this.root.inOrderTraversal();
    }
  }

  /**
   * Gets the current node then gets the children left to right.
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

  /**
   * Gets the child values of n-ary trees
   * @param {string} traversal - the type of traversal to be performed.
   *  False if performing a post-order traversal.
   * @return {Array} An array of the child values
   */
  _traverse(traversal) {
    let values = []; 
    this.children.forEach( child => {
      if(child) {
        values = [ ...values, ...child[traversal]() ];
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
   * Serach the tree for a value;
   * @param {*} value -The value to search for
   * @return {*} The found value;
   */
  search(value) {
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
      while(node.children[i] && node.children[i].value !== value && i < node.children.length ){
        queue.add(node.children[i]);
        i++;
      }

      //If the child node is null then ad a new node there and exit the loop.
      if(node.children[i] && node.children[i].value === value){
        return node.children[i].value;
      }
    }

    return undefined;
  }

  /**
   * Gets the current node then gets the children left to right.
   * @return {Array} A pre ordered array of thre values.
   */
  preOrderTraversal() {
    return [ this.value, ...this._traverse('preOrderTraversal')]; 
  }

  /**
   * Gets the the children left to right then the current node.
   * @return {Array} A post ordered array of thre values.
   */
  postOrderTraversal() {
    return [ ...this._traverse('postOrderTraversal'), this.value]; 
  }

  /**
   * Gets the left node, then the current node then the right node.
   * @return {Array} A in ordered array of thre values.
   */
  inOrderTraversal() {
    const leftTraversal = this.children[0] ? this.children[0].inOrderTraversal() : [];
    const rightTraversal = this.children[1] ? this.children[1].inOrderTraversal() : [];
    //console.log(traversal, this.value)
    return [ ...leftTraversal, this.value, ...rightTraversal];
  }
}

module.exports = { 
  Tree, 
  TreeNode
} ;

