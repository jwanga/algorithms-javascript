const HashTable = require('./hash-table');
const { assert } = require('./utilities');

console.log("Hash Table should:");

const hashTable = new HashTable(10);
assert('initialize with an n sized table of empty slots', true, () => 
    hashTable.getLength() === 10
    && hashTable.itemCount === 0
    && hashTable.table.every(slot => slot === null));

hashTable.insert('key1', 'value1')
assert('should insert new key value pairs into the table', true, () => 
    hashTable.itemCount === 1);

const value1 = hashTable.search('key1');
assert('should search for a key value pair', true, () => 
    value1 === 'value1');

hashTable.insert('abc', 'value2');
hashTable.insert('cba', 'value3');
hashTable.insert('bca', 'value4');
assert('should chain collisions', true, () => 
    hashTable.itemCount === 4
    && hashTable.table[4].length === 3);

hashTable.delete('cba')
const deletedValue = hashTable.search('cba');
assert('should delete an item from the table', true, () => 
    hashTable.itemCount === 3
    && hashTable.table[4].length === 2
    && deletedValue === null);


hashTable.insert('key5', 'value5');
hashTable.insert('key6', 'value6');
hashTable.insert('key7', 'value7');
hashTable.insert('key8', 'value8');
hashTable.insert('key9', 'value9');
const value4 =  hashTable.search('bca');
assert('should grow the table if the load factor >= .75', true, () => 
    hashTable.itemCount === 8
    && hashTable.getLength() === 20
    && value4 === 'value4');

hashTable.delete('key6');
hashTable.delete('key7');
hashTable.delete('key8');
const newValue4 = hashTable.search('bca');
assert('should shrink the table if the load factor <= .25', true, () => 
    hashTable.itemCount === 5
    && hashTable.getLength() === 10
    && newValue4 === 'value4');