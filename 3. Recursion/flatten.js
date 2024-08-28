// flatten an array - so no matter how nested it is, return a flat array of just the elements, no nesting

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// so my thinking is:
// look at the first element in the array
// if it's not itself an array (or maybe if it is a number), then just return that element
// if not, return flatten of that array
// but how does it move on to the next element in the array?
// helper method, where we push onto a new array once we get to an actual number, and then just return back up to the top?
// but still, how does it move on to next array?
// i guess if what i'm looking at is a number, i push to the output array, and then call flatten() on the rest of the array?
// whereas if it's not, i just return flatten on the whole thing? the internal one? i'm confusing myself, let's start playing with it


function flatten(array) {
    let flatArray = [];

    function walk(array) {
        if (array.length === 0) return;
        const element = array[0];
        if (typeof element === 'number') {
            flatArray.push(element);
            return walk(array.slice(1));
        }
        return walk(element);
    }

    walk(array);

    return flatArray;
}

// but this approach right now can only go deep, it fails to come back up when it reaches the end of a deeper array, so that's a dud
// and i don't think i actually need to do helper method

function flatten(array) {
    if (array.length === 0) return;

    const first = array[0];
    const rest = array.slice(1);

    if (typeof first === 'number') {
        return rest.length !== 0 ? [first].concat(flatten(rest)) : [first];
    }

    return rest.length !== 0 ? flatten(first).concat(flatten(rest)) : flatten(first);
}

console.log(flatten([[[[1]]], 2, 3]))

// it works! it is messy though. i don't like the ternary lines

// here's an alternative solution from the q & a on the lecture, where you keep track of your solution in a separate variable that you pass to the function
// i briefly considered doing something like that
const flatten = (arr, vector = []) => {
    if (arr.length === 0) return vector;
    if (typeof arr[0] === 'object') flatten(arr[0], vector);
    if (typeof arr[0] === 'number') vector.push(arr[0]);

    return flatten(arr.splice(1, arr.length), vector);
}

// here's another similar to mine, but it seems like returning [] instead of undefined allows them to make it simpler
// (testing whether it's an array is probably better than testing whether it's a number, but for this example i'm not going to worry about that)
function flatten(arr) {
    if (arr.length === 0) return [];
    if (!Array.isArray(arr[0]))
        return [arr[0]].concat(flatten(arr.slice(1)));
    else
        return flatten(arr[0]).concat(flatten(arr.slice(1)));
}

// okay yeah, i didn't realize [5].concat([]) would just give [5], i thought it would give [5, []], because that's how push works
// knowing that, i'm going to rework mine to get rid of all the extra ternary statements

// so here's mine now:
function flatten(array) {
    if (array.length === 0) return [];

    const first = array[0];
    const rest = array.slice(1);

    if (typeof first === 'number') return [first].concat(flatten(rest));
    if (typeof first === 'object') return flatten(first).concat(flatten(rest));
}

// i like this much better now, it's way more readable

// and once it's written out like this, you can see the commonality of the two lines more clearly, that they're both returning .concat(flatten(rest))
// the only part that's actually different is the part before the .concat(). so it's natural to try to eliminate that redundancy next.
// i'm not sure if i would have gotten to this one below if I hadn't already seen it in the q&a, but i understand it now, and i love it:

function flatten(arr) {
    if (arr.length === 0) return [];
    return (Array.isArray(arr[0]) ? flatten(arr[0]) : [arr[0]]).concat(flatten(arr.splice(1))); // ().concat()
}