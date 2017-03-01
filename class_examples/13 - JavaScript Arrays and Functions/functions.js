/*
 * Filename:    functions.js
 * Description: Examples of JavaScript Functions
 * Author:      Luke Sathrum
 */
"use strict";

// Create a function
function printToday() {
  var today = new Date();
  console.log(today.toDateString());
}

// Output countdown
for (var i = 10; i > 0; i--) {
  console.log(i);
}

// Calling the function
printToday();
