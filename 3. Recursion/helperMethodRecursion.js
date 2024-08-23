// the pattern
function outer(input) {
    let outerScopedVariable = [];

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--);
    }

    helper(input);

    return outerScopedVariable;
}

// example
function collectOddValues(array) {
    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) return;

        let value = helperInput[0];
        if (value % 2 != 0) result.push(value);

        helper(helperInput.slice(1));
    }

    helper(array);

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));