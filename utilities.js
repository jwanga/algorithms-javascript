
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

/**
 * Instruments the passed callback
 * @param {string} description - A description of the function to be instrumented.
 * @param {function} callback - The function to be instrumented.
 */
module.exports.instrument = (description, callback) => {
    const startTime = Date.now();
    let endTime = 0;
    let runTime = 0;

    const result = Reflect.apply(callback, null, []);

    endTime = Date.now();
    runTime = endTime - startTime;

    const displayTime = runTime > 1000 ? `${runTime / 1000} seconds` : `${runTime} milliseconds`

    console.log(`Executed ${description} in ${displayTime}`);

    console.log(`Result: ${result}`);
}