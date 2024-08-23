// find the length of the longest substring with all distinct characters
// input is string
// output is length of the substring, 0 if empty string

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6

// this is the same as longestUniqueSubstring, but maybe I can find a better method
// i don't think my solution there was O(n) really

// do i start from left and right and move in? if i just check the Set length, is that really O(n)? or does making a set also just iterate over everything
// how do i decide whether to move right or left in?
// maybe this is the same approach as minsubarraylen, but opposite:
// you start from the left, and every time it's still unique, you right++, and every time it's not, you left++
// so
// left = 0
// right = 0
// maxLength = 0
// while right < string.length
// slice = string.slice
// if set length equals length, then right ++ to grow the slice
// if set length does not equal length, then left++ to shrink the slice
// if it's unique and greater than maxLength, make slice length the new maxLength

function findLongestSubstring(string) {
    let left = 0;
    let right = 0;
    let maxLength = 0;

    while (right < string.length) {
        let slice = string.slice(left, right + 1);
        if (unique(slice)) {
            if (slice.length > maxLength) maxLength = slice.length;
            right++;
        } else {
            left++;
        }
    }


    return maxLength;

}

function unique(slice) {
    return new Set(slice).size === slice.length;
}

// i'm not sure how set works, so this might not be O(n) really
// the other way is to use a frequency counter along with your sliding window, but I wanted to try avoiding that
// and it did pass the exercise, though I don't know if he's actually testing for time complexity