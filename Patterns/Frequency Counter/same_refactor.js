function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const arr1Counts = {}
    const arr2Counts = {}

    for (let element of arr1) {
        arr1Counts[element] = (arr1Counts[element] || 0) + 1;
    }

    for (let element of arr2) {
        arr2Counts[element] = (arr2Counts[element] || 0) + 1;
    }
    console.log(arr1Counts);
    console.log(arr2Counts);

    for (let key in arr1Counts) {
        if (!(key ** 2 in arr2Counts)) {
            return false;
        }
        if (arr1Counts[key ** 2] !== arr2Counts[key]) {
            return false;
        }
    }
    return true; // test
}

console.log(same([1, 2, 3], [1, 9, 4]))