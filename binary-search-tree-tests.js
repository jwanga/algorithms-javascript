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
// assert('return a postorder traversal', [5, 6, 7, 2, 8, 9, 10, 3, 4, 1].toString(), binarySearchTree.postOrderTraversal().toString());
// assert('return an inorder traversal', [4, 2, 5, 1, 3].toString(), binarySearchTree.inOrderTraversal().toString()); 

