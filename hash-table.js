const LinkedList = require('./linked-list');

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

        // The number of items in the array
        this.itemCount = 0;

        // The factor by which we grow and shrink the table.
        this._growthFactor = 2;

        // The load factor threshold for growing the table;
        this._growthLoadFactorThreshold = 0.75;

        // The load factor threshold for shrinking the table;
        this._shrinkLoadFactorThreshold = 0.25;
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
        return this.itemCount / this.getLength();
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
        return sum % this.getLength();
    }

    /**
     * Convert a numeric value to an array index.
     * @param {string} key 
     * @returns {number} - The hashed value of the key corresponding to an array index.
     */
    _hashNumber(key) {
        return  key % this.getLength();
    }

    /**
     * grow the table when the load factor reaches a threshhold.
     */
    _growTable(){
        if(this._getLoadFactor() >= this._growthLoadFactorThreshold) {
            const oldTable = [...this.table];
            const newTableSize = this.getLength() * this._growthFactor;
            this.table = new Array(newTableSize);
            this._rehash(oldTable)
        } 
    }

    /**
     * Shrink the table when the load factor reaches a threshhold.
     */
    _shrinkTable() {
        if(this._getLoadFactor() <= this._shrinkLoadFactorThreshold) {
            const oldTable = [...this.table];
            const newTableSize = Math.ceil(this.getLength() / this._growthFactor);
            this.table = new Array(newTableSize);
            this._rehash(oldTable)
        }
    }

    /**
     * Iterates through the old table and rehashes each item into the resized table.
     * @param {array} oldTable 
     */
    _rehash(oldTable) {
        //reset item count before rehashing.
        this.itemCount = 0;
        for(let i = 0; i < oldTable.length; i++) {
            if(oldTable[i]) {
                let node = oldTable[i].head;
                while(node) {
                    this.insert(node.key, node.value);
                    node = node.next;
                }
            }
        }
    }

    /**
     * Hash the passed key to an index in the array.
     * @param {any} key - The key to be hashed
     * @returns {number} - The hashed value of the key corresponding to an array index.
     */
    _hash(key) {
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
     * Returns the length of the table.
     * @returns {number} The length of the table.
     */
    getLength() {
        return this.table.length;
    }

    /**
     * Inserts the value into the table indexed by the passed key
     * @param {any} key 
     * @param {any} value 
     */
    insert(key, value) {
        const hashedKey = this._hash(key);

        // Insert a new linked list if the index is empty otherwise append a new node to the list;
        if(!this.table[hashedKey]){
            this.table[hashedKey] = new LinkedList(key, value);
        } else {
            this.table[hashedKey].append(this.table[hashedKey].tail, key, value);
        }
        this.itemCount++;

        this._growTable();

    }

    /**
     * Retrieves the value of the passed key.
     * @param {*} key - The key to search for.
     * @return {*} The value of the passed key.
     */
    search(key) {
        const hashedKey = this._hash(key);
        let linkedList = this.table[hashedKey]
        // Search the linked list for the key.
        const node = linkedList ? linkedList.search(key) : null
        return node ? node.value : node;
    }

    /**
     * Removes the value of the passed key from the table.
     * @param {*} key 
     */
    delete(key) {
        const hashedKey = this._hash(key);
        const linkedList = this.table[hashedKey];
        if(linkedList) {
            const node = linkedList.search(key);

            if (node) {
                linkedList.delete(node);
                this.itemCount--;
            }
        }

        this._shrinkTable();
    }

    toString(){
        return this.table;
    }
}

module.exports = HashTable;