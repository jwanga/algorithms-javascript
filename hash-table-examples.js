const HashTable = require('./hash-table');
const { instrument } = require('./utilities');

const uniqueString = 'abcdefghijklmnopqrstuvwxyz';
const nonUniqueString = new Array(10000).fill('a').
    join('');

//Implement an algorithm to determine is a string has unique characters.
//Both algorithms below could terminate when they find a non-unique character but we let them run on to illustrate the worst case complexity.

//This naive implementation is O(n^2)
const isUniqueNaive = input => {
    let result = true; 

    for(let i = 0; i < input.length; i++) {
        const currentChar = input.charAt(i);
        for(let j = 0; j < input.length; j++) { 
            if(j !== i && result) {
                result = currentChar !== input.charAt(j);
            }
        }
    }
    return result;
}

//This hashtab;e implementation is O(n)
const isUniqueHashtable = input => {
    const hashTable = new HashTable(input.length);
    let result = true; 

    for(let i = 0; i < input.length; i++) {
        const currentChar = input.charAt(i);
        let value;

        if(result) {
            value = hashTable.search(currentChar) || 0;
            result = value === 0;
        }

        hashTable.insert(currentChar, value + 1);
    }
    return result;
}

instrument('naive unique character search', () => isUniqueNaive(uniqueString));
instrument('naive non-unique character search', () => isUniqueNaive(nonUniqueString));

instrument('hashtable unique character search', () => isUniqueHashtable(uniqueString));
instrument('hashtable non-unique character search', () => isUniqueHashtable(nonUniqueString));