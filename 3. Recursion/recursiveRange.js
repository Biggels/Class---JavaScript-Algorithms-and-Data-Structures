// add up all the numbers up to a target number

function recursiveRange(number) {
    if (number === 0) return 0;
    return number + recursiveRange(number - 1);
}

console.log(recursiveRange(10));