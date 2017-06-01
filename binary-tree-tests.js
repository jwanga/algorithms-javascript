const BinaryTree = require('./binary-tree');
const { assert } = require('./utilities');

console.log("Binary Tree should:");

const binaryTree = new BinaryTree();
// linkedList.append('key1', 'value1')
// assert('initialize with a single node.', true, () => 
//     linkedList.length === 1
//     && linkedList.head.key === 'key1'
//     && linkedList.head.value === 'value1'
//     && linkedList.head.previous === null
//     && linkedList.head.next === null
//     && linkedList.head === linkedList.tail);