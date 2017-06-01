const { Tree } = require('./tree');
const { assert } = require('./utilities');

console.log("Tree should:");

const tree = new Tree(3);
// linkedList.append('key1', 'value1')
assert('initialize with an empty root', null, tree.root); 

tree.insert(1)
assert('insert items and retutn a preorder traversal', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], tree.preOrderTraversal()); 