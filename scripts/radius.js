// Ask the user for the radius to calculate the area of ​​a circle. Find the formula for calculating the area of ​​a circle and the value of PI (to 4 decimal places)

// Ask the user for the radius
let radius = parseFloat(prompt("Enter the radio of the circle:"));

// PI value with 4 decimal places
let PI = 3.1416;

// Calculate the area of ​​the circle: A = π * r²
let area = PI * Math.pow(radius, 2);

console.log("The area of ​​the circle: ", Math.PI*radius**2); // Calculates and displays the area of ​​a circle to the console

// Build and display the sentence
let message = "By one " + radius + ",the area is " + area + ".";
alert(message);
