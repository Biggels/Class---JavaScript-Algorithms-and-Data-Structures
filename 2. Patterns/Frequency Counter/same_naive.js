function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let squareIndex = arr2.indexOf(arr1[i] ** 2);
        if (squareIndex === -1) {
            return false;
        }
        arr2.splice(squareIndex, 1);
    }
    return true;
}

console.log(same([1, 2, 3], [1, 9, 4]))

// O(n^2)