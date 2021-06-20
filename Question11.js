// Lecture:
// When using addEventListener, in the callback you can add a parameter / argument to get more information about the event, 
// for example:
//btn.addEventListener(‘click’, (e) => {
    // })   --> Callback Body

// (e) = Event Object, which contains additional information about the events.

    // =======================================
//Catch ‘click’ event from 2 different buttons, id=”button1” and id=”button2”, in the callback body of the 2 events, print, or log out e.target. What is it?
//Catch a ‘keydown’ event from an input, in the callback body of the event, print / log out the e.key. What is it?

// function callback(event) {
//     console.log(event);
// }
// let btn = document.getElementById("button");
// btn.addEventListener('click', callback);

// function inputCallback(event) {
//     console.log(event);
//     console.log(event.key);
// }
// let input = document.getElementById("input");
// console.log(input);
// input.addEventListener("keydown", inputCallback);


// =======================================================================



// Question 11.2: Get (Read) the ‘Upper it!!’ button
let button = document.getElementById("UpperIt");


// Question 11.3: Catch event when ‘Upper it!!!!’ button is clicked
function first() {
    console.log("Upper It!! Just Clicked");
}

button.addEventListener("click", first);

// Question 11.4: Get (Read) ‘Enter your name’ input
let UserName = document.getElementById("UserInput");


// Question 11.5: Get (Read) user name from the input
const second = () => {
    console.log("User's name: " + UserName.value);
}

button.addEventListener("click", second);



// Question 11.6: Convert user’s name to uppercase

const UpperCaseValue = () => {
    let NameUpper = UserName.value;
    NameUpper = NameUpper.toUpperCase();
    console.log("User's name uppercase: " + NameUpper);


}

button.addEventListener("click", UpperCaseValue);


// Question 11.7: Get (Read) the ‘Your result will appear here’ tag
let UserResult = document.getElementById("result");

// Question 11.8: Update the ‘Your result will appear here’ to the username uppercase version
function InnerTextUser() {
    UserResult.innerText = UserName.value.toUpperCase();
}

button.addEventListener("click", InnerTextUser);




