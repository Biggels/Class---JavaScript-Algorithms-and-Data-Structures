// check if there are any duplicate values in the args
// input is any number of arguments
// output is true/false

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 

function areThereDuplicates(...args) { // apparently  you don't need to do this, you can just leave it empty. any args supplied will live in arguments variable (i think it's an object?).
    args = args.sort();

    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] === args[i + 1]) return true;
    }

    return false;
}

// or

function areThereDuplicates_() {
    return new Set(arguments).size !== arguments.length;
}