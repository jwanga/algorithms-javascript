
module.exports.assert = (description, expected, actual) => {
    //If actual is a function, evaluate it.
    const actualResults = typeof(actual) === 'function' ? actual() : actual;
    const results = `${description} - Expected: ${expected} Acutal: ${actualResults}`;
    if(actualResults === expected){
        console.log('\x1b[32m', `PASSED: ${results}`);
    } else {
        console.error('\x1b[31m', `FAILED: ${results}`);
    }
}