// we can take advantage of the fact that it's sorted to not iterate over as much
// start with pointers to lowest and highest, and only move 1 based on the sum

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) // [-2, 2]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined

function sumZero(integers) {
    // start with i and j at 0 and length - 1
    // while i and j aren't equal, add them together.
    // if the sum is greater than 0, j - 1. if less than o, i + 1.
    // if the sume is zero, just retun that pair

    let left = 0;
    let right = integers.length - 1;

    while (left < right) {
        let sum = integers[left] + integers[right];
        if (sum === 0) return [integers[left], integers[left]];
        if (sum > 0) right--;
        if (sum < 0) left++;
    }

    return undefined;
}

// Time complexity: O(N)
// Space complexity: O(1)