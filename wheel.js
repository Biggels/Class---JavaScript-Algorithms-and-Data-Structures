// i want to simulate the spinning of a wheel like in a slot machine
// so given an array that represents the wheel and a window size, i want to return the subarray that represents the part visible through the window

// so basically i'm subsetting with wraparound
// so let's start with that problem, returning a slice of an array that can wrap around to the start of the array

// oh, let's take the part of the array before the startingIndex and put it on the end of the array, reversed
// and actually we could get more granular, and have a kind of "next" function/method that moves the wheel 1 state, and moves 1 piece from the back to the front
// we could do that recursively
// we could say that a wheel is indexed such that the first element is the one in the "center" of the window
// so the window would always be the 0th value plus the x next elements and x last elements
// so if the window size is 5, the window array (getter) is [wheel[length-2], wheel[length-1], wheel[0], wheel[1], wheel[2]]
// then our "next" method would advance the wheel 1 by taking the last value and making it the first, or vv depending on direction (we can do down and up spins)
// then the "spin" method just calls next a certain number of times, so we can have spins of different powers

// theoretically, this would allow you to animate it easier in the future, right? because it's actually transitioning between the different states 1 at a time

// just a function first
function wraparoundSlice(array, startingIndex, windowSize) {

    // put the elements from before the start onto the end
    array = array.slice(startingIndex).concat(array.slice(0, startingIndex));

    // then just give me a normal slice
    // but starting index is now 0, because our starting point is now the beginning of the array
    return array.slice(0, windowSize);
}

// console.log(wraparoundSlice([1, 2, 3, 4, 5], 3, 3));


// but let's try making our wheel object
// in a slot machine they're called "reels", so let's call them that

class Reel {
    // let's assume the reel values start at index 0 with the value on the center payline, and go "down" as the index increases
    stops = []; // could add default

    constructor(stops) { // for now let's just specify the stops array, but we could have a randomly constructed one based on size
        this.stops = stops;
    }

    spin = function (steps = 1) { // let's assume our spin will be "down" by default. we could add a "up" spin later. (with push and shift)
        // we don't actually have to spin all these times, we can mod // maybe we care when animating it, but we can worry about that when (if) we get there
        steps = steps % this.size; // if size is 10, then 10 spins takes us back to the beginning and is actually 0. 11 spins is 1, etc.
        for (let i = 0; i < steps; i++) {
            this.stops.unshift(this.stops.pop());
        }
    }

    get numStops() {
        return this.stops.length;
    }
}

const reel = new Reel([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(reel.stops);
reel.spin(100000000);
console.log(reel.stops);



// ultimately the wheel would consist of tiles (i think they're called "steps" or "stops"), not just numbers

// and we would probably have a slot machine object that has a certain number of wheels and has its own spin method that spins each wheel
// the machine would also specify the window size and the paylines (so center gets a certain bonus, but maybe above and below give smaller bonus)
// you could even have different paylines other than just the horizontal lines across the window, like diagonal ones


// hmmm. calling machine.reels[0].spin() doesn't seem to actually affect machine.reels[0]. i wonder what i'm doing wrong


class Machine {
    reels = [];
    numReels;
    windowSize;

    constructor(numReels, windowSize) {
        this.numReels = numReels;
        this.windowSize = windowSize;

        for (let i = 0; i < numReels; i++) {
            const reel = new Reel([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            this.reels.push(reel);
        }
    }

    spin = function (power) { // for now power will be number of steps, but maybe later we can have a function
        for (let reel of this.reels) {
            reel.spin(power);
        }
    }

    get window() {
        const r = Math.floor(this.windowSize / 2);
        return this.reels.map((reel) => reel.stops.slice(reel.numStops - r).concat(reel.stops.slice(0, r + 1)));
    }
}

const machine = new Machine(3, 3);
machine.spin(5);
console.log(machine.window);