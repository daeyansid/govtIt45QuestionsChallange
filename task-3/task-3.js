// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// code:
var myName = "muhammad daeyan siddiqui";
console.log("Name => ".concat(myName));
console.log("Lower-Case => ", myName.toLowerCase());
console.log("Upper-Case => ", myName.toUpperCase());
var titleCase = function (str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
};
console.log("Titlecase:", titleCase(myName));
