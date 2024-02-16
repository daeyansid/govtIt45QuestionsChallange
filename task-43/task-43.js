// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// code:
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great " + magician; });
}
var magician_names = ["Merlin", "Gandalf", "Houdini", "Dumbledore", "Crime Master GOGO"];
var magician_names_copy = __spreadArray([], magician_names, true);
var great_magicians = make_great(magician_names_copy);
console.log("Original array of magician names:");
show_magicians(magician_names);
console.log("\nArray with 'the Great' added to each magician's name:");
show_magicians(great_magicians);
