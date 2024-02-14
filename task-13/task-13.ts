// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let transportationModes:string[] = ['Car','Bike','Train','Air Craft'];
let statements:string[] = ['Drive Audi','Ride Kawasaki','Ride Shalimar','Have a Flight on A-380'];


transportationModes.forEach((mode, index) => {
console.log(`I would Love to ${statements[index]} ${mode}`);
});