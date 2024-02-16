// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.


// code:

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let magician_names: string[] = ["Merlin", "Gandalf", "Houdini", "Dumbledore", "Crime Master GOGO"];

show_magicians(magician_names);