// check that every letter in one string exists in a second, in the same frequency
// inputs - 2 strings, to lowercase...remove non-alpha?
// output true or false

// isAnagram("sips", "piss"); true
// isAnagram("house", "car"); false
// isAnagram('', ''); true
// isAnagram('stab2', '2bats'); ???
// isAnagram('stab2', '3bats'); ??? if we remove alpha, this would be true, which seems wrong

function areTheseAnagrams(str1, str2) {
    // clean inputs - lowercase, strip
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();

    // return false if they aren't same length

    if (str1.length !== str2.length) return false;

    // create empty objects to track character frequencies
    str1Counts = {};
    str2Counts = {};

    // iterate over each anagram, counting up its character frequencies ((character count || 0) + 1)
    for (let char of str1) str1Counts[char] = (str1Counts[char] || 0) + 1;
    for (let char of str2) str2Counts[char] = (str2Counts[char] || 0) + 1;


    for (let key in str1Counts) {
        // return false if they don't have same keys
        if (!(key in str2Counts)) return false;
        // return false if they don't have same counts for those keys
        if (str1Counts[key] !== str2Counts[key]) return false;
    }

    // return true
    return true;
}

console.log(areTheseAnagrams('hello', 'hlelo'));