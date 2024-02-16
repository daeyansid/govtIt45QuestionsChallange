// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// code: 
var x = 5;
var y = 10;
var z = "10";
var isSunny = true;
var isRaining = false;
console.log("Test 1: Is x == 5? I predict True.");
console.log(x === 5); // True - 1
console.log("Test 2: Is y > x? I predict True.");
console.log(y > x); // True - 2
console.log("Test 3: Is x != y? I predict True.");
console.log(x !== y); // True - 3
console.log("Test 4: Is z === y? I predict False.");
console.log(z === y.toString()); // False
console.log("Test 5: Is isSunny && !isRaining? I predict True.");
console.log(isSunny && !isRaining); // True - 4
console.log("Test 6: Is isSunny || isRaining? I predict True.");
console.log(isSunny || isRaining); // True - 5
console.log("Test 7: Is x < y && z === '10'? I predict True.");
console.log(x < y && z === '10'); // True - 6
console.log("Test 8: Is x >= y || z != '10'? I predict False.");
console.log(x >= y || z !== '10'); // False
console.log("Test 9: Is x === 5 && y === 10? I predict True.");
console.log(x === 5 && y === 10); // True - 7
console.log("Test 10: Is x !== y || z === '10'? I predict True.");
console.log(x !== y || z === '10'); // True - 8
