// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// code:
var current_users = ["admin", "Amaan ", "Saim", "Ali", "Daeyan"];
;
var new_users = ["Muskan", "Rida", "Amaan", "Saim", "Sahil"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
new_users.forEach(function (username) {
    var username_lower = username.toLowerCase();
    if (current_users_lower.includes(username_lower)) {
        console.log("The username '" + username + "' is not available. Please enter a new username.");
    }
    else {
        console.log("The username '" + username + "' is available.");
    }
});
