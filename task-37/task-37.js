// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
// code:
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is " + size + " and the message printed on it is: " + message);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "New World Is Here");
