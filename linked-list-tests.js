const LinkedList = require('./linked-list');
const { assert } = require('./utilities');

console.log("Linked List should:");

const linkedList = new LinkedList();
linkedList.append('key1', 'value1')
assert('initialize with a single node.', true, () => 
    linkedList.length === 1
    && linkedList.head.key === 'key1'
    && linkedList.head.value === 'value1'
    && linkedList.head.previous === null
    && linkedList.head.next === null
    && linkedList.head === linkedList.tail);

const node1 = linkedList.search('key1');
assert('search for a node with a given key', 'value1', node1.value);

const node2 = linkedList.append('key2', 'value2', linkedList.tail);
assert('append to the end of the linked list', true, () => 
    linkedList.length === 2
    && linkedList.tail.key === 'key2' 
    && linkedList.tail.value === 'value2'
    && linkedList.tail.previous === node1
    && linkedList.tail.previous.next === linkedList.tail);

const node3 = linkedList.prepend('key3', 'value3', linkedList.head);
assert('append to the beginning of the linked list', true, () => 
    linkedList.length === 3
    && linkedList.head.key === 'key3' 
    && linkedList.head.value === 'value3'
    && linkedList.head.previous === null
    && linkedList.head.next.previous === linkedList.head);

const node4 = linkedList.append('key4', 'value4', node1);
assert('append to another node', true, () => 
    linkedList.length === 4
    && node4.key === 'key4'
    && node4.value === 'value4'
    && node4.previous === node1
    && node4.next === node2
    && node1.next === node4
    && node2.previous === node4);

linkedList.append('key5', 'value5', linkedList.tail);
linkedList.append('key6', 'value6', linkedList.tail);
linkedList.append('key7', 'value7', linkedList.tail);
linkedList.append('key8', 'value8', linkedList.tail);
linkedList.append('key9', 'value9', linkedList.tail);

linkedList.delete(node4);
const deletedNode = linkedList.search('key4')
assert('delete a node from the list', true, () => 
    linkedList.length === 8
    && deletedNode === null
    && node1.next === node2
    && node2.previous === node1);