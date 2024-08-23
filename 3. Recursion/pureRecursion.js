// collecting odd values again, but no helper function this time, just a single recursive function

function collectOddValues(array) {
    let newArray = [];

    if (array.length === 0) return newArray;

    if (array[0] % 2 !== 0) newArray.push(array[0]);

    return newArray.concat(collectOddValues(array.slice(1)));
}

console.log(collectOddValues([1, 2, 3, 4, 5]));