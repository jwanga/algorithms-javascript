const Stack = require('./stack');
const { assert } = require('./utilities');

console.log("Stack should:");

const stack = new Stack();

assert('initialize empty.', true, () => 
    stack.peek() === null
    && stack.pop() === null);

stack.push(1);
stack.push(2);
stack.push(3);
assert('insert items as a stack retrieve and remove them in FILO order.', true, () => 
    stack.pop() === 3
    && stack.pop() === 2
    && stack.pop() === 1
    && stack.pop() === null);

stack.push(1);
stack.push(2);
stack.push(3);
assert('insert items as a stack and retrieve them in FILO order.', true, () => 
    stack.peek() === 3
    && stack.peek() === 3);