// 2. Ask the user to enter their name, location, and hobby. Display it in a single sentence: "Your name is XXX, you live in YYY, and you like ZZZ."

// Ask the user for data
let name = prompt("Enter your name:");
let city = prompt("What town do you live in?");
let hobby = prompt("What is your hobby?");

// Build and display the sentence
let message = "Your name is " + name + ", live in " + city + ", and you like it " + hobby + ".";
alert(message);
