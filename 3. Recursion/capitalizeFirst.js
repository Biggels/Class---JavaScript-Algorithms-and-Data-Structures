// capitalize the first letter in each word
// input is array of strings
// output is array of strings, with the first letter of each string capitalized

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


function capitalizeFirst(array) {
    if (array.length === 0) return [];

    return [array[0][0].toUpperCase().concat(array[0].slice(1))].concat(capitalizeFirst(array.slice(1)));
}