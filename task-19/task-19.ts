// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.


// code:


// Array of initial guests
let guestArr: string[] = ["Owais", "Alyaan", "Ali"];

let notComing: string = "Owais";
let newGuest: string = "Ahmed";

let middleGuest: string = "Saad";
let middleIndex = guestArr.length / 2;

guestArr[guestArr.indexOf(notComing)] = newGuest;

guestArr.unshift("Rshid");

guestArr.splice(middleIndex, 0, middleGuest);

guestArr.push("Humdan");

console.log(guestArr.length + " guests are invited to dinner.");
