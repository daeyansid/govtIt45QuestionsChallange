// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// code :
var guestArr = ["Owais", "Alyaan", "Ali"];
var notComing = "Owais";
var newGuest = "Ahmed";
var middleGuest = "Saad";
var middleIndex = guestArr.length / 2;
// Trying to access an index beyond the bounds of the array to create an index error
// This line will cause an error because the index is out of range
console.log(guestArr[guestArr.length]);
guestArr[guestArr.indexOf(notComing)] = newGuest;
guestArr.unshift("Rashid");
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Humdan");
console.log(guestArr.length + " guests are invited to dinner.");
