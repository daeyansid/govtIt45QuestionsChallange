// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportationModes = ['Car', 'Bike', 'Train', 'Air Craft'];
var statements = ['Drive Audi', 'Ride Kawasaki', 'Ride Shalimar', 'Have a Flight on A-380'];
transportationModes.forEach(function (mode, index) {
    console.log("I would Love to ".concat(statements[index], " ").concat(mode));
});
