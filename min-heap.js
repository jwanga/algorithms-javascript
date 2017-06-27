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
    return 2 * currentIndex;
  }

  _getRightChildIndex(currentIndex) {
    return (2 * currentIndex) + 1;
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

   _heapifyDown() {
    let currentIndex = 0;
    while(
      this.heapList[this._getLeftChildIndex(currentIndex)] < this.heapList[currentIndex] 
      || this.heapList[this._getRightChildIndex(currentIndex)] < this.heapList[currentIndex] ) {

        if()
      const parentValue = this.heapList[this._getParentIndex(currentIndex)];
      this.heapList[this._getParentIndex(currentIndex)] = this.heapList[currentIndex];
      this.heapList[currentIndex] = parentValue;
      currentIndex = this._getParentIndex(currentIndex);
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
    this.heapList[0] = this.heapList.pop();
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