// Question 12.1: Initialize a variable named items to store the data
let items = ["Backpack", "MiBand watch", "Ring"];
console.log(items);

// Question 12.3: Get (Read) the list from DOM
const ReadItems = document.getElementById("ReadItems");
console.log(ReadItems);


// Question 12.7: Register ‘Add‘ button click event
let Button = document.getElementById("button");

function ButtonClick() {
    console.log("Add button Clicked");
}

Button.addEventListener("click", ButtonClick);

// Question 12.8: When ‘Add’ button is clicked, the value of ‘New item’ input
let UserInput = document.getElementById("input");
Button.addEventListener("click", a => { (console.log(UserInput.value))});


// Question 12.9: When ‘Add’ button is clicked, add the value of ‘New item’ input to items Array
const buttonCallback = () => {

    // Add an input of User to the Items Array
    items.push(input.value);

    // Print out new items, but not yet function
    console.log(items);
}
    // Print out new Items Array and function by clicked
button.addEventListener('click', buttonCallback);


// Question 12.10: Update UI (HTML) to reflect the update of items Array
const addNewItem = (title) => {
    let newItem = document.createElement("li");
    newItem.innerText = title + " ";

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener('click', () => {
        console.log(title);
        let index = items.indexOf(title);
        items.splice(index, 1);
        console.log(items);
        newItem.remove();
    });
    newItem.appendChild(removeButton);

    ReadItems.appendChild(newItem);
}

for (let item of items) {
    addNewItem(item);
}






// Full Version of Question 12
/* let items = ['Backpack', 'MiBand Watch', 'Ring'];
let list = document.getElementById("list");

let input = document.getElementById("input");
let button = document.getElementById("button");
let removeButtons = document.getElementsByClassName("remove");

console.log(list);

console.log(input);
console.log(button);
console.log(removeButtons);

const addNewItem = (title) => {
    let newItem = document.createElement("li");
    newItem.innerText = title + " ";

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener('click', () => {
        console.log(title);
        let index = items.indexOf(title);
        items.splice(index, 1);
        console.log(items);
        newItem.remove();
    });
    newItem.appendChild(removeButton);

    list.appendChild(newItem);
}

for (let item of items) {
    addNewItem(item);
}


const buttonCallback = () => {
    items.push(input.value);
    console.log(items);

    addNewItem(input.value);
}

button.addEventListener('click', buttonCallback);
*/



