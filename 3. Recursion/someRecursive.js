// function that takes array and a callback function
// it returns true if any value in the array returns true when passed to the callback, and false otherwise

// at first blush this sounds like helper method recursion, and the callback is just our helper function
// well no, because the callback function provided here isn't recursive
// so am i just making a regular recursive function but i call callback in it? 

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false

function someRecursive(array, callback) {
    if (array.length === 1) return callback(array);

    return callback(array[0]) || someRecursive(array.slice(1), callback);

}
// is that really it? this one is weird