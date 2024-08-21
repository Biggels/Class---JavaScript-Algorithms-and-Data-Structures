// check if first string is subsequence of second string, meaning that the same characters appear in the same order, but not necessarily consecutively
// input is two strings
// output is true/false

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// can we do a left right pointer
// and move left and right inward if they don't match the beginning and end of the target substring?
// but then if it does match, we have to move a pointer in the substring too
// it feels like there should be a simpler way
// also that ignores the length of the substring. why check 0 and length of string if the substring isn't that long...
// so maybe start with 0 and length of substring?
// if neither match, move left and right over
// if one matches, move it towards the other
// if both match, move them both towards the other
// each time, left is always matching against substring[0], and right is matching against substring[right - left] (+1 -1?)
// ...no that's insane
// start them both (i and j) on the left
// if they both match, j++

// okay, i'm misunderstanding the problem. the problem i'm trying to solve can be solved by "hello" === "hello". js already does that. and i assume it uses a hash.
// in the actual problem, we care about order, but not necessarily consecutive.
// so we just need a pointer going over each string, i and j
// if first[i] === second[j], then you can do i++ and j++
// if not, j++
// and do this until either i or j reach the end  of their respective strings
// if i did, then true
// if j did, then false

function isSubsequence__(first, second) {
    let i = 0, j = 0;

    while (i < first.length && j < second.length) {
        if (first[i] === second[j]) {
            i++;
            j++;
        } else {
            j++;
        }

    }

    if (i >= first.length) return true;
    return false;
}

// better. just check for j and always j++, and check for i inside the loop
// remember to refactor! i could have come up with this

function isSubsequence_(first, second) {
    let i = 0, j = 0;

    while (j < second.length) {
        if (first[i] === second[j]) i++;
        if (i === first.length) return true;
        j++;
    }

    return false;
}

// recursive solution. i don't think i would have come up with this, but it's very cool. and similar to the subtracting from dictionary anagram solution.

function isSubsequence(first, second) {
    if (first.length === 0) return true;
    if (second.length === 0) return false;

    if (first[0] === second[0]) return isSubsequence(first.slice(1), second.slice(1));
    return isSubsequence(first, second.slice(1));
}