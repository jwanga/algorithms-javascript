const LinkedList = require('./linked-lists');
const { assert } = require('./utilities');


//Linked List
console.log("Linked List should:");

const linkedList = new LinkedList('key1', 'value1');

assert('initialize with a single head node equal to the passed key value pair.', 'value1', linkedList.head.value);
assert('initialize with a single tail node equal to the passed key value pair.', 'value1', linkedList.head.value);
assert('contain a head node with no previous node.', null, linkedList.head.previous);
assert('contain a tail node with no next node.', null, linkedList.head.next);

const node1 = linkedList.search('key1');
assert('search for a node with a given key', 'value1', node1.value);

const node2 = linkedList.append(linkedList.tail, 'key2', 'value2');
assert('append to the end of the linked list', true, () => 
    linkedList.tail.key === 'key2' 
    && linkedList.tail.value === 'value2'
    && linkedList.tail.previous === node1
    && linkedList.tail.previous.next === linkedList.tail);

const node3 = linkedList.prepend(linkedList.head, 'key3', 'value3');
assert('append to the beginning of the linked list', true, () => 
    linkedList.head.key === 'key3' 
    && linkedList.head.value === 'value3'
    && linkedList.head.previous === null
    && linkedList.head.next.previous === linkedList.head);

const node4 = linkedList.append(node1, 'key4', 'value4');
assert('append to node1', true, () => 
    node4.key === 'key4'
    && node4.value === 'value4'
    && node4.previous === node1
    && node4.next === node2
    && node1.next === node4
    && node2.previous === node4);
