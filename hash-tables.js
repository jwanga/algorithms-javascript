/**
 * A hashtable is a data structure that allows Insert, Delete and Search operations in O(1) time.
 * This hashtable implimentation uses chaining and a fairly trivial hash function for brevity.
 */
class HashTable {
    constructor(length) {
        this.length = length;
        this.table = new Array(length);
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
        return key % this.length;
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
        this.table[hashedKey] = value;
    }

    /**
     * Retrieves the value of the passed key.
     * @param {*} key 
     */
    search(key) {
        const hashedKey = this.hash(key);
        return this.table[hashedKey];
    }

    /**
     * Removes the value of the passed key from the table.
     * @param {*} key 
     */
    delete(key) {
        const hashedKey = this.hash(key);
        this.table[hashedKey] = null;
    }

    toString(){
        return this.table;
    }
}

hashTable = new HashTable(5);
hashTable.insert('foo', 'bar');
hashTable.insert('hello', 'world');

//The following entries collide.
hashTable.insert('party', 'time');
hashTable.insert('chicken', 'dinner');


hashTable.delete('hello');


console.log(hashTable.length, hashTable.search('party'), hashTable.toString());