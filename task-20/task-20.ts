// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.


// code:


let countries: string[] = ["USA", "Canada", "Australia", "Japan", "Brazil", "France", "Germany", "India", "China", "Russia"];

console.log("List of countries:");
countries.forEach(country => {
    console.log(country);
});