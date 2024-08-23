// let's try a recursive version of binary search, instead of just using a while loop

console.log(indexOf(6, [1, 2, 3, 5, 6, 9, 12])); // 4
console.log(indexOf(50, [1, 2, 3, 5, 6, 9, 12])); // -1
console.log(indexOf(55, [1, 55, 3, 5, 6, 9, 12, 13, 12, 9])); // -1
console.log(indexOf(6, [])) // -1
console.log(indexOf(40, [40, 41, 42, 43, 44, 45, 46, 47])); // 0
console.log(indexOf(47, [40, 41, 42, 43, 44, 45, 46, 47])); // 7
console.log(indexOf(45, [40, 41, 42, 43, 44, 45, 46, 47])); // 5




function indexOf(num, arr) {
    let left = 0;
    let right = arr.length;
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === num) return mid;
    // but this doesn't work because it returns the index in the sliced up array, not the original
    // so we actually just created a function that returns 1 if it finds it, -1 if it doesn't
    // so how can we keep track of original position? an object? but objects don't have order...
    if (arr.length <= 1) return -1;

    let leftHalf = arr.slice(left, mid);
    let rightHalf = arr.slice(mid + 1, right);

    if (arr[mid] > num) { return indexOf(num, leftHalf) === -1 ? -1 : indexOf(num, leftHalf); }
    return indexOf(num, rightHalf) === -1 ? -1 : indexOf(num, rightHalf) + leftHalf.length + 1;
    // i think this fixes it. if we took the right half, add the length of the left half (plus 1 for the mid) to the index to account for the part to the left of the right half.
    // but pass -1 up through, don't add to -1, since -1 means we didn't find anything
}