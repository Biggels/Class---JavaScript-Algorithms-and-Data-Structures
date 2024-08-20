// calculate the maximum sum of n consecutives integers in an array
// we're getting an array of integers, not sorted, and n
// we need to output the sum

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6 - shortcut. if n is 1, return arr.max
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null


function maxSubarraySum_(arr, n) {
    let maxSum = -Infinity;

    if (arr.length === 0) return null;
    if (n > arr.length) return null;
    if (n === 0) return null;
    if (n === 1) return arr.reduce((acc, curr) => { // this doesn't help much, but i guess it's something
        return acc = curr > acc ? curr : acc;
    }, 0);

    for (let i = 0; i < arr.length - n + 1; i++) {
        const subarray = arr.slice(i, i + n);
        const sum = subarray.reduce((a, b) => a + b, 0); // reduce is looping though, so we do have bad time complexity here. it's ~ O(arr.length * n), which is O(n^2)
        maxSum = sum > maxSum ? sum : maxSum;
    }

    return maxSum;
}

// so this is bad time complexity, since we have a loop within a loop
// and we are duplicating a lot of work, because we're adding the same numbers together over and over again
// really we only need to drop our previous first guy, and add our new ending guy

function maxSubarraySum(arr, n) {
    let sum = arr.slice(0, n).reduce((a, b) => a + b, null);
    let maxSum = sum;

    // if (n > arr.length) return null;

    for (let i = 1; i < arr.length - n + 1; i++) { // can start i at n and go to length, and subtract and add accordingly, but it doesn't matter
        sum = sum - arr[i - 1] + arr[i + n - 1]; // now we don't have a loop inside our loop, just some math and comparisons. so we're at O(n)
        maxSum = sum > maxSum ? sum : maxSum; // could do Math.max() here
    }
    return maxSum;
}