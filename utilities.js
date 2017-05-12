
module.exports.assert = (description, expected, actual) => {
    // If actual is a function, evaluate it.
    const actualResults = typeof(actual) === 'function' ? actual() : actual;
    const results = `${description} - Expected: ${expected} Acutal: ${actualResults}`;
    const colorReset = '\x1b[0m';

    // Print the results to the console with appropriate colors.
    if(actualResults === expected){
        console.log('\x1b[32m', `PASSED: ${results}`, colorReset);
    } else {
        console.error('\x1b[31m', `FAILED: ${results}`, colorReset);
    }
}