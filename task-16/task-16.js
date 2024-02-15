// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// code:
var guestList = ['Amaan', 'Ahmed', 'Ali', 'Owais'];
console.log("Guest List 1:");
guestList.forEach(function (name) {
    console.log("Hey ".concat(name, " come at my place at 8 Pm sharp to celebrate my Type Script Journey"));
});
var newGuest = ['Humdan', 'Adil'];
guestList.slice(0, 2).forEach(function (name, index) {
    console.log("".concat(name, " is not coming so i am inviting ").concat(newGuest[index]));
    guestList[index] = newGuest[index];
});
console.log("Final Guest List:");
guestList.forEach(function (name) {
    console.log("Hey ".concat(name, " come at my place at 8 Pm sharp to celebrate my Type Script Journey"));
});
console.log("Ohhhh, I have Found a bigger dinner table for party. I am Inviting More Guest !!!!! Yayyyy");
var moreGuest = ['Alyaan', 'Hadi', 'Ibad'];
guestList.unshift(moreGuest[0]); // for first guest
guestList.splice(guestList.length / 2, 0, moreGuest[1]); // for middle guest
guestList.push(moreGuest[2]); // for last guest
console.log("Updated Guest List:");
guestList.forEach(function (name) {
    console.log("Hey ".concat(name, " come at my place at 8 Pm sharp to celebrate my Type Script Journey"));
});
