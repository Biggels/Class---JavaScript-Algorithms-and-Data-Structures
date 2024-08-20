// count the unique values in a sorted array of integers


// naively, I would create a dictionary and record everything I find
// then only count up if it's something new
// but i'm assuming there's a way to do that with less space, using the fact it's sorted
// oh i guess you just take the diff of each successive pair
// it's only a new unique value when thre's a difference

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

function countUniqueValues_(integers) {
    // make sure it's at least 2 length first
    // if it's 0, we know there are 0 unique values
    // if it's 1, we know there is 1
    // only if it's 2 or more do we have to actually check

    // start with count at 1, since we now know there will be at least 1 uniqiue value
    // start with 2 pointers on the left at 0 and 1
    // take diff, and if it's not zero, ++ count
    // then ++ i and j
    // i guess we don't really need 2 pointers, just one, and we can do -1 of that
    // so we go until that's at the end (length)
    // so that's just a for loop with i going from 1 to length, and comparing i and i-1 each time
    // or 0 to length-1, comparing i to i+1, whatever

    // then just return count at the end

    if (integers.length === 0) return 0;
    if (integers.length === 1) return 1;

    let count = 1;

    for (let i = 1; i < integers.length; i++) {
        const diff = integers[i] - integers[i - 1]
        if (diff !== 0) count++;
    }

    return count;
}

// maybe another way is to have 2 pointers, and keep first until you find a new value
// then jump first to the new vale, and go again...is that better than the first approach?

// no, but the weird thing you can do is leave your first pointer behind until you find a new number with your second
// and then move the first pointer up one and store the new number there (splice)
// so similar to what we just said, where the first pointer is now using the new number as the base comparison
// but this time we're also modifying the array as we go
// then when your second pointer hits the end, i is sitting at the index of the number of unique values (well, you need to + 1, but you get it)
// so i guess this is technically slightly more space efficient, though it seems to me like they're both still O(n)

function countUniqueValues(integers) {

    if (integers.length === 0) return 0;

    let i = 0;
    let j = 0;

    for (let j = 1; j < integers.length; j++) {
        if (integers[j] !== integers[i]) {
            i++;
            integers[i] = integers[j]
        }
    }

    // return integers.length === 0 ? 0 : i + 1;
    // return integers.slice(0, i + 1).length;
    return i + 1;
}

