/*
 * Filename:    parameters.js
 * Description: Examples of JavaScript Function Parameters
 * Author:      Luke Sathrum
 */
"use strict";

// Create a function
function print(tag, message) {
  console.log('<' + tag + '>' + message + '</' + tag + '>');
} 

// Calling the function
print('p', 'Hello World!');
