/*
 * Filename:    loops.js
 * Description: Example of JavaScript loops
 * Author:      Luke Sathrum
 */

// Declare Variables
var number, original_number;

// Prompt for a number
number = Number(prompt("How many iterations?")) || 5;

// Store the original
original_number = number;

// while statement
console.log("while statement");
while (number > 0) {
  console.log(number + " ");
  number--;
}

// Retrieve the original
number = original_number;
// do-while statement
console.log("do-while statement");
do {
  console.log(number + " ");
  number--;
} while (number > 0);

// for statement
console.log("for statement");
for (number = original_number; number > 0; number--) {
  console.log(number + " ");
}
