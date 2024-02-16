// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
// code:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(function (item) {
        console.log(item);
    });
    console.log("Bread");
    console.log("Sandwich is ready!");
}
console.log("Order 1:");
makeSandwich("Cheese", "Tomato", "Lettuce");
console.log("\nOrder 2:");
makeSandwich("Chicken", "Mayonnaise");
console.log("\nOrder 3:");
makeSandwich("Ham", "Cheese", "Pickles", "Mustard", "Onion");
