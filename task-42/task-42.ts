// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


// code:

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

let magician_names: string[] = ["Merlin", "Gandalf", "Houdini", "Dumbledore", "Crime Master GOGO"];

magician_names = make_great(magician_names);

show_magicians(magician_names);
