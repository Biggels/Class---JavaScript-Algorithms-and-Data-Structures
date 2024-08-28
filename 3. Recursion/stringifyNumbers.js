// convert all numbers in a nesty object into strings
// input is an object
// output is a new object with the numbers converted to strings
// don't modify the original object!

// this time let's try to make our object traversal a little more elegant by using destructuring and ... to get the first element and rest
// so that's const {a, ...rest} = obj
// and make the new object with obj2 = {whatever, ...rest}


function stringifyNumbers_(obj) {
    const keys = Object.keys(obj);
    if (keys.length === 0) return; // skips empty array, need to fix
    // if (typeof obj === undefined) return;

    let { [keys[0]]: elem, ...rest } = obj;



    if (typeof elem !== 'object') {
        if (typeof elem === 'number') {
            elem = elem.toString();
            rest = stringifyNumbers(rest);
            return { [keys[0]]: elem, ...rest };
        }
        rest = stringifyNumbers(rest);
        return { [keys[0]]: elem, ...rest };
    }
    elem = stringifyNumbers(elem);
    rest = stringifyNumbers(rest);
    return { [keys[0]]: elem, ...rest };
}

console.log(stringifyNumbers({ a: 2, b: 5, c: 10 }));


let obj = {
    num: 1,
    test: [],
    testy: [1, 2, 3],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/


// doesn't seem to accept ... in udemy, so let's redo it as helper
// fix!

function stringifyNumbers(obj) {

    output = {}

    function helper(obj) {
        const keys = Object.keys(obj);
        if (typeof obj === undefined) return;

        let elem = obj[keys[0]];
        delete obj[keys[0]]; // is this allowed? it's not modifying the *original* object
        let rest = obj;

        if (typeof elem !== 'object') {
            output[keys[0]] = typeof elem === 'number' ? elem.toString() : elem;
            return stringifyNumbers(rest);
        }
        stringifyNumbers(elem);
        stringifyNumbers(rest);
        return;
    }
}


// maybe we can try doing a version of this where we just copy the object recursively, to get that flow down
// without ...

