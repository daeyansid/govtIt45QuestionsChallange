// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.



// code:

let guestList: string[] = ['Amaan','Ahmed','Ali','Owais'];

console.log("Guest List 1:");
guestList.forEach(name => {
console.log(`Hey ${name} come at my place at 8 Pm sharp to celebrate my Type Script Journey`);
});

let newGuest:string[] = ['Humdan','Adil'];
guestList.slice(0,2).forEach((name, index) => {
    console.log(`${name} is not coming so i am inviting ${newGuest[index]}`);
    guestList[index] = newGuest[index];
});

console.log("Final Guest List:");
guestList.forEach(name => {
console.log(`Hey ${name} come at my place at 8 Pm sharp to celebrate my Type Script Journey`);
});