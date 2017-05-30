const LinkedList = require('./linked-list');

/**
 * A Queue is a FIFO (first in first out) datastructure.
 */
class Queue {

    constructor() {
        this.list = new LinkedList();

        //auto incrementing key for each new item so we can track intentional null items.
        this.keyId = 0;
    }

    /**
     * Inserts an item the end of the queue
     * @param {*} item - Item to be inserted
     * @throws {TypeError} - If the item is null or undefined.
     */
    add(item) {

        if(item !== null && typeof(item) !== 'undefined') {
            this.keyId++;
            this.list.append(this.keyId, item, this.list.tail);

        } else {
            throw new TypeError('Cannot insert a null item')
        }
    }

    /**
     * Retrieves and removes an item at the front of the queue.
     * @return {*} - The item at the front of the queue.
     */
    remove() {
        const item = this.peek();
        if(item) {
            this.list.delete(this.list.head);
        }

        return item;
    }

    /**
     * Retrieves, but doesn't remove, an item at the front of the queue.
     * @return {*} - The item at the front of the queue.
     */
    peek(){
        const item = this.list.head ? this.list.head.value : null;
        return item;
    }
}

module.exports = Queue