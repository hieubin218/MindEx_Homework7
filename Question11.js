// Question 11.2: Get (Read) the ‘Upper it!!’ button
const BUTTON = document.getElementById("UpperIt");
console.log(BUTTON);

// Question 11.3: Catch event when ‘Upper it!!!!’ button is clicked
function first() {
    console.log("Upper It!! Just Clicked");
}

document.getElementById("UpperIt").addEventListener("click", first);

// Question 11.4
let UserName = document.getElementById("UserInput");
console.log(UserName);

// Question 11.5: Get (Read) user name from the input
function second() {
    console.log("User's name: " + UserName.value);
}

document.getElementById("UpperIt").addEventListener("click", second );

// Question 11.6: Convert user’s name to uppercase
function third() {
    console.log("User's name uppercase: " + UserName.value.toUpperCase());
}

const UpperLetter = document.getElementById("UpperIt").addEventListener("click", third);

// Question 11.7: Get (Read) the ‘Your result will appear here’ tag
const UserResult = document.getElementById("result");
console.log(UserResult);

