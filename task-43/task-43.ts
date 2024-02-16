// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.



// code:


function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

let magician_names: string[] = ["Merlin", "Gandalf", "Houdini", "Dumbledore","Crime Master GOGO"];

let magician_names_copy: string[] = [...magician_names];

let great_magicians: string[] = make_great(magician_names_copy);

console.log("Original array of magician names:");
show_magicians(magician_names);

console.log("\nArray with 'the Great' added to each magician's name:");
show_magicians(great_magicians);
