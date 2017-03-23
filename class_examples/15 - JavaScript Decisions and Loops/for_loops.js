/*
 * Filename:    for_loops.js
 * Description: Example of JavaScript for loops
 * Author:      Luke Sathrum
 */

// Declare An Object
var car = {
  make: "Honda",
  model: "Accord",
  year: 1990,
  horsepower: 2.5
};

// Log the entire object
console.log(car);

// Loop through each property/value combo using a for...in loop
for (let property in car) {
  console.log(property + ": " + car[property])
}

// Declare an Array
var greeting = ['H', 'e', 'l', 'l', 'o', ' ', 'w' , 'o', 'r', 'l', 'd', '!'];

// Log the entire array
console.log(greeting);

// Loop through the array using a for...of loop
var combined = '';
for (let element of greeting) {
  combined += element;
}

console.log(combined);


