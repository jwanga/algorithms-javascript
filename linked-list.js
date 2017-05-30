/**
 * A linked list is a data structure in which each node contains a reference to the next and previous nodes.
 * Insert - O(1)
 * Delete - O(1)
 * Search - O(n)
 */
class LinkedList {
    constructor() {
        this.length = 0;
    }

     /**
     * Apppends the passed node after the current node.
     * @param {*} key - The key of the appended node.
     * @param {*} value - The value of the appended node.
     * @param {LinkedListNode} node - The node to be appended onto
     * @return {LinkedListNode} The appended node.
     */
    append(key, value, node) {
        const newNode =  new LinkedListNode(key, value);

        if(!node && !this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        
            // If there is no next then this node is the new tail.
            if(node.next){
                newNode.next = node.next;
            } else {
                this.tail = newNode;
            }

            newNode.previous = node;
            
            if(node.next) {
                node.next.previous = newNode;
            }

            node.next = newNode;
        }

        this.length++;

        return newNode;
    }

     /**
     * Prepends the passed node before the current node.
     * @param {*} key - The key of the preppended node.
     * @param {*} value - The value of the preppended node.
     * @param {LinkedListNode} node - The node to be prepended onto
     * @return {LinkedListNode} The prepended node.
     */
    prepend(key, value, node) {
        const newNode = new LinkedListNode(key, value);

         if(!node && !this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            // If there is no previous then this node is the new head.
            if(node.previous){
                newNode.previous = node.previous
            } else {
                this.head = newNode;
            }
            newNode.previous = node.previous
            newNode.next = node;
            node.previous = newNode;

            this.length++;
        }
        return newNode;
    }

    /**
     * Deletes the passed node from the list.
     * @param {*} node - The node to delete.
     */
    delete(node){
        if(node.previous){
            node.previous.next = node.next;
        } else {
           this.head = node.next;
        }

        if(node.next) {
            node.next.previous = node.previous;
        } else {
            this.tail = node.previous
        }

        this.length--;
    }

    /**
     * Searches through the linked list for the first matching key in O(n) time.
     * @param {*} key - The node hey to search for.
     */
    search(key) {
        let node = this.head;
        while(node && node.key !== key) {
            node = node.next;
        }
        return node;
    }
}

class LinkedListNode {
    constructor(key = null, value = null){
        this.next = null;
        this.previous = null;

        //Initialize the value to null.
        this.value = value;

        //Initialize an optional key that can be used in chaining hashtables.
        this.key = key;
    }
}

module.exports = LinkedList


