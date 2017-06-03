const { Tree } = require('./tree');
const { assert } = require('./utilities');

console.log("Tree should:");

const tree = new Tree(3);

assert('initialize with an empty root', null, tree.root); 

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(10);

assert('return a preorder traversal', [1, 2, 5, 6, 7, 3, 8, 9, 10, 4].toString(), tree.preOrderTraversal().toString()); 
assert('return a postorder traversal', [5, 6, 7, 2, 8, 9, 10, 3, 4, 1].toString(), tree.postOrderTraversal().toString());

const binaryTree = new Tree(2);
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);

assert('return an inorder traversal', [4, 2, 5, 1, 3].toString(), binaryTree.inOrderTraversal().toString()); 
