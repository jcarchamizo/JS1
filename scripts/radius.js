// Ask the user for the radius to calculate the area of ​​a circle. Find the formula for calculating the area of ​​a circle and the value of PI (to 4 decimal places)

// Ask the user for the radius
let radio = parseFloat(prompt("Introduce el radio del círculo:"));

// Validar que el valor ingresado sea un número positivo
if (isNaN(radio) || radio <= 0) {
  alert("Por favor, introduce un número válido y positivo.");
} else {
  // Valor de PI con 4 decimales
  const PI = 3.1416;

  // Calcular el área del círculo: A = π * r²
  let area = PI * Math.pow(radio, 2);

  // Mostrar el resultado
  alert("El área del círculo es: " + area.toFixed(4));