/*
 * Filename:    basic_branching.js
 * Description: Examples of JavaScript Branching Statements
 * Author:      Luke Sathrum
 */

// Declare a Variable
var answer;

// Ask the user a question
answer = confirm("Would you like to hear a riddle?");

if (answer === true) {
  answer = prompt('What digit is the most frequent between the numbers 1 and 1,000 (inclusive)?');
  if (answer == 1) {
    alert('Correct!');
  } else {
    alert('Incorrect!');
  }
} else {
  alert('OK then. Good day.');
}
