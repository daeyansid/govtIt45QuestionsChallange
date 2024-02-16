// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// code:

// • Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
let str1: string = "hello";
let str2: string = "world";

console.log("Test 1: Is str1 equal to 'hello'? I predict True.");
console.log(str1 === "hello"); // True

console.log("Test 2: Is str1 equal to str2? I predict False.");
console.log(str1 === str2); // false

// • Tests using the lower case function
console.log("Tests using the lower case function");
let inputStr: string = "HELLO";
let inputStr2: string = "World";
let lowerStr: string = inputStr.toLowerCase();
let lowerStr2: string = inputStr2.toLowerCase();

console.log("Test 3: Is lowerStr equal to 'hello'? I predict True.");
console.log(lowerStr === "hello"); // True

console.log("Test 4: Is lowerStr2 not equal to 'World'? I predict false.");
console.log(lowerStr2 === "World"); // False

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
let num1: number = 5;
let num2: number = 10;

console.log("Test 5: Is num1 less than num2? I predict True.");
console.log(num1 < num2); // True

console.log("Test 6: Is num1 equal to num2? I predict False.");
console.log(num1 === num2); // False

// • Tests using "and" and "or" operators
console.log('Tests using "and" and "or" operators');
let sunny: boolean = true;
let warm: boolean = true;
let cold: boolean = false;

console.log("Test 7: Is it sunny and warm? I predict True.");
console.log(sunny && warm); // True

console.log("Test 8: Is it not sunny and cold? I predict False.");
console.log(!sunny && cold); // False

// • Test whether an item is in an array
console.log("Test whether an item is in an array");
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Test 9: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf("banana") !== -1); // True

console.log("Test 10: Is 'grape' in the fruits array? I predict False.");
console.log(fruits.indexOf("grape") !== -1); // False

// • Test whether an item is not in an array
console.log("Test whether an item is not in an array");
console.log("Test 11: Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf("grape") === -1); // True

console.log("Test 12: Is 'apple' not in the fruits array? I predict False.");
console.log(fruits.indexOf("apple") === -1); // False











// // • Tests for equality and inequality with strings
// let str1: string = "hello";
// let str2: string = "world";

// console.log("Test 1: Is str1 equal to 'hello'? I predict True.");
// console.log(str1 === "hello"); // True

// console.log("Test 2: Is str1 not equal to str2? I predict False.");
// console.log(str1 === str2); // false

// // • Tests using the lower case function
// let inputStr: string = "HELLO";
// let inputStr2: string = "World";
// let lowerStr: string = inputStr.toLowerCase();
// let lowerStr2: string = inputStr2.toLowerCase();

// console.log("Test 3: Is lowerStr equal to 'hello'? I predict True.");
// console.log(lowerStr === "hello"); // True

// console.log("Test 4: Is lowerStr2 not equal to 'World'? I predict false.");
// console.log(lowerStr2 === "World"); // False

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let num1: number = 5;
// let num2: number = 10;

// console.log("Test 5: Is num1 less than num2? I predict True.");
// console.log(num1 < num2); // True

// // False case: equality and inequality
// console.log("Test 6: Is num1 equal to num2? I predict False.");
// console.log(num1 === num2); // False

// // • Tests using "and" and "or" operators
// let sunny: boolean = true;
// let warm: boolean = true;
// let cold: boolean = false;

// console.log("Test 7: Is it sunny and warm? I predict True.");
// console.log(sunny && warm); // True

// console.log("Test 8: Is it not sunny and cold? I predict False.");
// console.log(!sunny && cold); // False

// // • Test whether an item is in a array
// let fruits: string[] = ["apple", "banana", "orange"];

// console.log("Test 9: Is 'banana' in the fruits array? I predict True.");
// console.log(fruits.includes("banana")); // True

// console.log("Test 10: Is 'grape' in the fruits array? I predict False.");
// console.log(fruits.includes("grape")); // False

// // • Test whether an item is not in a array
// console.log("Test 11: Is 'grape' not in the fruits array? I predict True.");
// console.log(!fruits.includes("grape")); // True

// console.log("Test 12: Is 'apple' not in the fruits array? I predict False.");
// console.log(!fruits.includes("apple")); // False