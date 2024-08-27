// take in a string and output the reverse
// but do it recursively!

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

function reverse(string) {
    if (string.length === 0) return '';

    const lastIndex = string.length - 1;
    return string[lastIndex] + reverse(string.slice(0, lastIndex));
}

function reverse_(string) {
    output = '';

    for (let i = string.length - 1; i >= 0; i--) {
        output += string[i];
    }

    return output;
}