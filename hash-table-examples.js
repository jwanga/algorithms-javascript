const HashTable = require('./hash-table');
const { instrument } = require('./utilities');

/**
 * Implement an algorithm to determine is a string has unique characters. Assuming Unicode characters to better illustrate runtime.
 */


let uniqueString = '';
const n = 1000;

//create a string of the first n unique unicode characters;
for(let i = 0; i < n; i++) {
    uniqueString += String.fromCharCode(i);
}

//append a non-unique character to make a non-unique string
const nonUniqueString = `${uniqueString}${String.fromCharCode(n - 1)}`;

//This naive implementation is O(n^2)
const isUniqueNaive = input => {       
    for(let i = 0; i < input.length; i++) {
        const currentChar = input.charAt(i);
        for(let j = 0; j < input.length; j++) { 
            if(j !== i) {
                if(currentChar === input.charAt(j)) {
                    return false;
                }
            }
        }
    }
    return true;
}

//This hashtable implementation is O(n) amortized
const isUniqueHashtable = input => {
    const hashTable = new HashTable(input.length);
    for(let i = 0; i < input.length; i++) {
        const currentChar = input.charAt(i);
        if(hashTable.search(currentChar)) {
            return false;
        } 
        hashTable.insert(currentChar, true);
    }
    return true;
}

const characterBooleanArray = new Array(n); 

//This boolean array implementation is O(n) but is far faster than the hash table because it avoids the hashtable overhead.
const isUniqueBooleanArray = input => {
    for(let i = 0; i < input.length; i++) {
        if(characterBooleanArray[i]) {
            return false;
        } 
        characterBooleanArray[i] = true;
    }
    return true;
}

instrument('naive unique character search', () => isUniqueNaive(uniqueString));
instrument('naive non-unique character search', () => isUniqueNaive(nonUniqueString));

instrument('hashtable unique character search', () => isUniqueHashtable(uniqueString));
instrument('hashtable non-unique character search', () => isUniqueHashtable(nonUniqueString));

instrument('boolean array unique character search', () => isUniqueBooleanArray(uniqueString));
instrument('boolean array non-unique character search', () => isUniqueBooleanArray(nonUniqueString));