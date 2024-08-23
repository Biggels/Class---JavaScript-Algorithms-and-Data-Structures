// find the shortest contiguous subarray whose sum is greater than or equal to the provided integer and tell me its length
// inputs are an array of positive integers (not sorted) and a positive target integer
// output is the length of the subarray, 0 if there isn't one

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0


// first thought is to start with window of 1 and iterate over the whole thing, then 2, etc.
// but obviously that's the n^2 approach
// and it involves duplicate sums, so there must be a way to use the previous information about sums, just like with maxsubarraysum

// does it work if you start with size 1, and make the window bigger or smaller based on whether you're bigger or smaller than the target?
// but when would you move over?
// maybe you move right pointer over if you're smaller, and left pointer over if you're bigger or equal? unless left equals right already, in which case you move both over
// well actually if left equals right and you're bigger, then the answer is 1
// i guess you store your length each time if it's less than previous length
// and actually, if you are equal to the target, you can move both over, because you know just moving left over won't work

// let's try that
// start with left at 0, right at 1, minLength at 0
// while right is less than array length
// store right - left + 1 as minLength if sum is greater than or equal to target
// then, if sum is greater than target, you move left over
// if it's greater than target, you move left over
// if it's equal, you move both over





function minSubArrayLen(array, target) {
    let left = 0, right = 0, minLength = Infinity;

    while (right < array.length) {
        let sum = array.slice(left, right + 1).reduce((a, b) => a + b, 0);
        let length = right - left + 1;

        minLength = sum >= target && length < minLength ? length : minLength;

        // console.log(`${array.slice(left, right + 1)} = ${sum}`, minLength)

        if (sum >= target) {
            if (length === 1) return 1;
            left++;
            if (sum === target) right++;
        } else {
            right++;
        }

    }

    return minLength < Infinity ? minLength : 0;

}