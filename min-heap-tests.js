const { MinHeap } = require('./min-heap');
const { assert } = require('./utilities');

console.log("Min heap should:");

const minHeap = new MinHeap();

minHeap.insert(50);
minHeap.insert(7);
minHeap.insert(55);
minHeap.insert(4);
minHeap.insert(90);
minHeap.insert(87);
minHeap.insert(2);


// minHeap.insert(2);
// minHeap.insert(50);
// minHeap.insert(23);
// minHeap.insert(32);
// minHeap.insert(74);
// minHeap.insert(88);
// minHeap.insert(90);
// minHeap.insert(80);

console.log(minHeap.heapList);
assert('return the min value from the heap', 2, minHeap.extract()); 
assert('return the min value from the heap', 4, minHeap.extract()); 
assert('return the min value from the heap', 7, minHeap.extract()); 
assert('return the min value from the heap', 50, minHeap.extract()); 
assert('return the min value from the heap', 55, minHeap.extract()); 
assert('return the min value from the heap', 87, minHeap.extract()); 
assert('return the min value from the heap', 90, minHeap.extract()); 
assert('return the min value from the heap', undefined, minHeap.extract()); 


console.log(minHeap.heapList);