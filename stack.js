const LinkedList = require('./linked-list');

/**
 * A Stack is a FILO (first in last out) datastructure.\
 */
class Stack {

    constructor() {
        this.list = new LinkedList();
    }

    /**
     * Inserts an item onto the top of the stack
     * @param {*} item - Item to be inserted
     * @throws
     */
    push(item) {

        if(item !== null && typeof(item) !== 'undefined') {
            this.list.prepend(null, item, this.list.head);
        } else {
            throw new TypeError('Cannot insert a null item')
        }
    }

    /**
     * Retrieves and removes an item from the top of the stack
     * @return {*} - The item at the top of the stack
     */
    pop() {
        const item = this.peek();
        if(item) {
            this.list.delete(this.list.head);
        }

        return item;
    }

    /**
     * Retrieves, but doesn't remove, an item from the top of the stack
     * @return {*} - The item at the top of the stack
     */
    peek(){
        const item = this.list.head ? this.list.head.value : null;
        return item;
    }
}

module.exports = Stack