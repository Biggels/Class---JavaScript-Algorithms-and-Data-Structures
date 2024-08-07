let names = ["Michael", "Melissa", "Andrea"]

let values = [true, {}, [], 2, "awesome"]

// Big O of Arrays
// Insertion: if i add to the end, it's O(1), but if i insert at the beginning, i have to update all indexes, so it's O(N)
// Removal: same as insertion
// so push and pop are faster than shift or unshift

// Searching: O(N)
// Access: O(1) - this still operates like objects, it can jump to any index to access; it's not like it has to count up


// push: O(1)
// pop: O(1)
// shift: O(N)
// unshift: O(N)
// concat: O(N)
// slice: O(N)
// splice: O(N)
// sort: O(N * log N)
// foreach/map/filter/reduce/etc.: O(N)