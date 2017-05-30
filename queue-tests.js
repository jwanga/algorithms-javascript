const Queue = require('./queue');
const { assert } = require('./utilities');

console.log("Queue should:");

const queue = new Queue();

assert('initialize empty.', true, () => 
    queue.peek() === null
    && queue.remove() === null);

queue.add(1);
queue.add(2);
queue.add(3);
assert('add items as a queue retrieve and remove them in FIFO order.', true, () => 
    queue.remove() === 1
    && queue.remove() === 2
    && queue.remove() === 3
    && queue.remove() === null);

queue.add(1);
queue.add(2);
queue.add(3);
assert('add items as a queue and retrieve them in FIFO order.', true, () => 
    queue.peek() === 1
    && queue.peek() === 1);