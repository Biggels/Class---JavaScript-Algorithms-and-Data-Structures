// find the longest continuous subset of a string that contains no repeat characters
// input is a string. i don't think we care about whether there are non-alpha characters, but we do want it to all be the same case
// output is the substring, and/or the length

console.log(longestUniqueSubstr('numbers')); // 'numbers'
console.log(longestUniqueSubstr('hello')); // 'hel'
console.log(longestUniqueSubstr('basketball')); // 'sketbal'

// window indexes of start=0 and end=1
// maxLength = 0
// set maxLength to the length of the slice defined by those indices
// maybe also save the max substring itself
// tell me if the slice has any repeats (come back to this)
// if it doesn't, end++ and check again
// if it does, then start++ and check again



function longestUniqueSubstr(str) {

    let longestSubstring = '';
    let start = 0;
    let end = 1;

    while (end < str.length) {
        const substr = str.slice(start, end + 1);
        if (unique(substr)) {
            longestSubstring = substr;
            end++
        } else {
            start++;
            end++;
        }
    }

    return longestSubstring;

}

function unique(str) {
    str = str.toLowerCase();

    str = str.split('').sort().join('');

    for (let i = 0; i < str.length; i++) { // could i use reduce on the array version for this?
        if (str[i] === str[i + 1]) {
            return false;
        }
    }

    return true;

}