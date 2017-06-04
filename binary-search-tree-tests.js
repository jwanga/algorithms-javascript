const { BinarySearchTree } = require('./binary-search-tree');
const { assert } = require('./utilities');

console.log("Binary Search Tree should:");

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(8);
binarySearchTree.insert(3);
binarySearchTree.insert(10);
binarySearchTree.insert(1);
binarySearchTree.insert(6);
binarySearchTree.insert(14);
binarySearchTree.insert(4);
binarySearchTree.insert(7);
binarySearchTree.insert(13);

assert('return a preorder traversal', [8, 3, 1, 6, 4, 7, 10, 14, 13].toString(), binarySearchTree.preOrderTraversal().toString()); 
assert('return a postorder traversal', [1, 4, 7, 6, 3, 13, 14, 10, 8].toString(), binarySearchTree.postOrderTraversal().toString());
assert('return an inorder traversal', [1, 3, 4, 6, 7, 8, 10, 13, 14].toString(), binarySearchTree.inOrderTraversal().toString()); 
assert('search for a value in the tree', 6, binarySearchTree.search(6));
assert('search for a value not ni the tree', undefined, binarySearchTree.search(76));

