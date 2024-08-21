// find a certain value in a sorted array
// our input is the value to search for
// our output is the index where it is, or -1 if we didn't find it

console.log(indexOf(6, [1, 2, 3, 5, 6, 9, 12])); // 4
console.log(indexOf(50, [1, 2, 3, 5, 6, 9, 12])); // -1
console.log(indexOf(55, [1, 55, 3, 5, 6, 9, 12, 13, 12, 9])); // -1
console.log(indexOf(6, [])) // -1

// find midpoint index
// ask if the value there is more or less than what we're looking for
// find a new midpoint based on the answer - look above or below the previous midpoint - and do it again

function indexOf(num, arr) {
    let left = 0;
    let right = arr.length;
    let mid = left + Math.floor((right - left) / 2);
    // console.log(left, mid, right);

    while ((arr[mid] !== num) && left !== mid && right !== mid) { // better condition?
        if (arr[mid] > num) right = mid;
        if (arr[mid] < num) left = mid;
        mid = left + Math.floor((right - left) / 2);
        // console.log(left, mid, right);
    }

    if (arr[mid] !== num) return -1;
    return mid;

}