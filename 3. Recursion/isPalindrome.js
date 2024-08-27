// input is string, output is true if string is palindrome, false if not
// but do it recursively!

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('abcdefjdcba')); // false

// can't think of recursive approach yet, let's start with a multiple pointers method
// oh and of course as soon as i start writing that out, i see how i can make it recursive
function isPalindrome(string) {
    if (string.length <= 1) return true;
    let left = 0;
    let right = string.length - 1;

    if (string[left] !== string[right]) return false;
    return true && isPalindrome(string.slice(left + 1, right));
    // tacocat // true && true = true 
    // acoca // true && true = true ^
    // coc // true && true = true ^
    // o // true ^
}