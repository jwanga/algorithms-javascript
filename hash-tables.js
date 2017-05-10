const LinkedList = require('./linked-lists');
const { assert } = require('./utilities');

/**
 * A hashtable is a data structure that allows Insert, Delete and Search operations in O(1) time.
 * This hashtable implimentation uses chaining and a trivial hash function for brevity.
 * Insert - O(1)
 * Delete - O(1)
 * Search - O(1)
 */
class HashTable {
    constructor(length) {
        // The table that will hold the values
        // this.table = this._initializeTable(length);
        this.table = new Array(length);

        // The size of the table.
        this.length = this.table.length;

        //the number of items in the array
        this.itemCount = 0;
    }

    /**
     * Initialized an teble pf passed length with an umpy linked list in each slot.
     * @param {number} length - length of the table.
     */
    _initializeTable(length) {
        let table = [];

        for(let i = 0; i < length; i++) {
            table.push(new LinkedList());
        }

        return table;
    }

    /**
     * The ratio of items in the array to slots availible.
     * return {number}
     */
    _getLoadFactor() {
        return this.itemCount / this.length;
    }

    /**
     * Create a numeric representation of the string so it can be converted to an array index.
     * @param {string} key 
     * @returns {number} - The hashed value of the key corresponding to an array index.
     */
    _hashString(key){
        // turn the key into an numeric array so we can convert it to a numeric index.
        const charCodes = key.split('').map(char => char.charCodeAt(0));

        // sum the values of the char.
        const sum = charCodes.reduce((previous, current) => previous + current, 0);

        // Modulo the sum of the char codes to get a number withing the array range.
        return sum % this.length;
    }

    /**
     * Convert a numeric value to an array index.
     * @param {string} key 
     * @returns {number} - The hashed value of the key corresponding to an array index.
     */
    _hashNumber(key) {
        return  key % this.length;
    }

    /**
     * Hash the passed key to an index in the array.
     * @param {any} key - The key to be hashed
     * @returns {number} - The hashed value of the key corresponding to an array index.
     */
    hash(key) {
        let value;

        switch(typeof(key)){
            case 'string':
                value = this._hashString(key);
                break;
            case 'number':
                value = this._hashNumber(key);
                break;
            default:
                throw new TypeError(`Cannot hash a key of type: ${typeof(key)}`);
        }
        return value;
    }

    /**
     * Inserts the value into the table indexed by the passed key
     * @param {any} key 
     * @param {any} value 
     */
    insert(key, value) {
        const hashedKey = this.hash(key);

        // Insert a new linked list if the index is empty otherwise append a new node to the list;
        if(!this.table[hashedKey]){
            this.table[hashedKey] = new LinkedList(key, value);;
        } else {
            this.table[hashedKey].appendToEnd(key, value);
        }
        this.itemCount++;
    }

    /**
     * Retrieves the value of the passed key.
     * @param {*} key 
     */
    search(key) {
        const hashedKey = this.hash(key);
        let node = this.table[hashedKey]

        // traverse the linked list until you find a matching key.
        while(node && node.key !== key){
            node = node.next;
        }
        return node ? node.value : undefined;
    }

    /**
     * Removes the value of the passed key from the table.
     * @param {*} key 
     */
    delete(key) {
        const hashedKey = this.hash(key);
        let node = this.table[hashedKey];

        // traverse the linked list until you find a matching key.
        while(node && node.key !== key){
            node = node.next;
        }

        if(node){
            this.table[hashedKey] = node.delete();
            this.itemCount--;
        }
    }

    toString(){
        return this.table;
    }
}

module.exports = HashTable;

hashTable = new HashTable(5);
hashTable.insert(0, 'foo');
hashTable.insert(7, 'is heaven');

//The following entries collide.
hashTable.insert('abc', 'value1');
hashTable.insert('cba', 'value2');
hashTable.insert('bca', 'value3');

//console.log(hashTable.table[0])
//assert('The table should contain a node with the key "abc"', hashTable.table[0].search('abc'), 'value1');


hashTable.delete('abc');

const searchKey = 'abc';

// console.log(`Length: ${hashTable.length}`);
// console.log(`Load Factor: ${hashTable._getLoadFactor()}`);
// console.log(`Search for : ${searchKey} = ${hashTable.search(searchKey)}`);
console.log(hashTable.toString());