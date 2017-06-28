const { Tree, TreeNode } = require('./tree');

class MinHeap {

   constructor() {
     //Backing Array for list.
     this.heapList = [];
   }

  _getParentIndex(currentIndex) {
    return Math.floor((currentIndex) / 2);
  }

  _getLeftChildIndex(currentIndex) {
    return (2 * currentIndex) + 1;
  }

  _getRightChildIndex(currentIndex) {
    return (2 * currentIndex) + 2;
  }

  _heapifyUp() {
    let currentIndex = this.heapList.length - 1;
    while(this.heapList[this._getParentIndex(currentIndex)] > this.heapList[currentIndex] && this._getParentIndex(currentIndex) >= 0) {
      const parentValue = this.heapList[this._getParentIndex(currentIndex)];
      this.heapList[this._getParentIndex(currentIndex)] = this.heapList[currentIndex];
      this.heapList[currentIndex] = parentValue;
      currentIndex = this._getParentIndex(currentIndex);
    }
  }

  /**
   * After a min is extracted swap the last node to the root and move it down the tree based on its children.
   */
  _heapifyDown() {
    let currentIndex = 0;
    
    //move the current index down the tree if it's larger than its children.
    while(
      (this.heapList[this._getLeftChildIndex(currentIndex)] < this.heapList[currentIndex] 
      || this.heapList[this._getRightChildIndex(currentIndex)] < this.heapList[currentIndex] )
      && this.heapList[this._getRightChildIndex(currentIndex)]) {
      
      const currentValue = this.heapList[currentIndex];

      if(this.heapList[this._getLeftChildIndex(currentIndex)] < this.heapList[this._getRightChildIndex(currentIndex)]){
        this.heapList[currentIndex] = this.heapList[this._getLeftChildIndex(currentIndex)];
        this.heapList[this._getLeftChildIndex(currentIndex)] = currentValue;
        currentIndex = this._getLeftChildIndex(currentIndex);
      } else {
        this.heapList[currentIndex] = this.heapList[this._getRightChildIndex(currentIndex)];
        this.heapList[this._getRightChildIndex(currentIndex)] = currentValue;
        currentIndex = this._getRightChildIndex(currentIndex);
      }
    }
  }

  /**
   * Inserts a new value into the heap.
   * @param {*} value - The value to be inserted.
   */
  insert(value) {
    this.heapList.push(value)
    this._heapifyUp();
  }

  /**
   * Extracts the minimum value from the heap.
   * @return The minimum value.
   */
  extract() {
    const extractedValue = this.heapList[0];

    //Only swap if there is more than 1 value left.
    if(this.heapList.length > 1 ){
      this.heapList[0] = this.heapList.pop();
    } else {
      this.heapList.pop();
    }

    this._heapifyDown();
    return extractedValue;
  }
}

class MinHeapNode extends TreeNode {
    constructor(parent = null, value) {
        super(2, parent, value);
    }

  /**
   * Inserts a new value into the heap.
   * @param {*} value - The value to be inserted.
   */
  insert(value) {
    
  }

  /**
   * Extracts the minimum value from the heap.
   * @return The minimum value.
   */
  extract() {

  }
}

module.exports = { MinHeap, MinHeapNode };