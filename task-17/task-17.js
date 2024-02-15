// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
var guestList = ['Amaan', 'Ahmed', 'Ali', 'Owais'];
console.log("Guest List 1:");
guestList.forEach(function (name) {
    console.log("Hey ".concat(name, ", come to my place at 8 PM sharp to celebrate my TypeScript Journey!"));
});
var moreGuests = ['Alyaan', 'Hadi', 'Ibad'];
guestList.unshift(moreGuests[0]);
guestList.splice(2, 0, moreGuests[1]);
console.log("\nUpdated Guest List:");
guestList.forEach(function (name) {
    console.log("Hey ".concat(name, ", come to my place at 8 PM sharp to celebrate my TypeScript Journey!"));
});
console.log("\nOh no! The new dinner table won't arrive in time. I can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
console.log("\nRemaining Guests:");
guestList.forEach(function (name) {
    console.log("Hey ".concat(name, ", you're still invited to dinner!"));
});
// Remove the last two names from the list
guestList.splice(0, guestList.length);
console.log("\nFinal Guest List:");
console.log(guestList);
