// iterative
function countDown_(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!");
}

// recursive
function countDown(num) {
    // base case
    if (num <= 0) {
        console.log("All done!");
        return;
    }

    // print the number
    console.log(num);
    // decrement the number
    num--;
    // now call countDown again with the new number
    countDown(num);
}

countDown(10);