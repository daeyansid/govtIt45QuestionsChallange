// 5. Famous Quote 2: 
//Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
// code
var famous_person = "Alan Kay";
var quote = "The best way to predict the future is to invent it.";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
