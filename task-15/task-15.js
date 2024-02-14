// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
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
