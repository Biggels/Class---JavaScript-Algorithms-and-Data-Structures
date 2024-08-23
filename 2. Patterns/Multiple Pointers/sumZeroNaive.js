// Find the first pair of values in a sorted array who sum to 0
// input will be a sorted array of integers, low to high
// output should be a new array that contains the two integers in the pair, undefined if a pair doesn't exist

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined

function sumZero(integers) {
    // nested loop over the array and check for pairs
    // start with i at 0
    // then within each i, loop j from i + 1 to the end
    // return i and j if they sum to zero
    for (let i = 0; i < integers.length; i++) {
        for (let j = i + 1; j < integers.length; j++) {
            if (integers[i] + integers[j] === 0) {
                return [integers[i], integers[j]]
            }
        }
    }
}

// Time complexity: O(n^2)
// Space complexity: O(1)