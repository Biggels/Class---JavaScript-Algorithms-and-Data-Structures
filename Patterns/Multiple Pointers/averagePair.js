// determine if there is a pair of numbers in an array whose average matches the target average
// input is a sorted array of integers and a target average
// output is true/false

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

// set a left and right pointer, check the average of the numbers at those indices
// if the average is above the target, we need smaller numbers, so right--
// if the average is below the target, we need bigger numbers, so left++
// do this while left < right, and return true if average === target

function averagePair(array, targetAverage) {
    let left = 0;
    let right = array.length;

    while (left < right) {
        const average = (array[left] + array[right - 1]) / 2;
        console.log(array[left], average, array[right - 1]);
        if (average === targetAverage) return true;
        if (average > targetAverage) right--;
        if (average < targetAverage) left++;
    }

    return false;

}