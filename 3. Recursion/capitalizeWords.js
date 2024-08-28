// given array of strings, return a new array with each string in all caps
// this is even simpler than capitalizeFirst, i assume

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
    if (arr.length === 0) return [];

    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

