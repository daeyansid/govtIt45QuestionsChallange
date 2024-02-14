// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// code:

let myName:string = "muhammad daeyan siddiqui";

console.log(`Name => ${myName}`);
console.log("Lower-Case => ",myName.toLowerCase());
console.log("Upper-Case => ",myName.toUpperCase());
const titleCase = (str: string) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};

console.log("Titlecase:", titleCase(myName));