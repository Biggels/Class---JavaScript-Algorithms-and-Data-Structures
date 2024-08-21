// determine if 2 positive integers have the same frequency of digits
// inputs are 2 positive integers
// output is true or false

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

// i think this is the same logic as an anagram, so i'm going to try that same approach
// count frequencies of digits for first, and then iterate over second and subtract its digits from first
// if you ever hit a digit that doesn't have a key, or has value of zero, return false
// if you get to the end without doing that, return true

function sameFrequency(first, second) {
    first = first.toString().split('');
    second = second.toString().split('');
    let counts = {}

    for (let digit of first) counts[digit] = (counts[digit] || 0) + 1; // remember, in for loop, "in" gives keys, and "of" gives values

    for (let digit of second) {
        if (!(digit in counts)) return false;
        if (counts[digit] === 0) return false;
        counts[digit]--;
    }

    return true;
}