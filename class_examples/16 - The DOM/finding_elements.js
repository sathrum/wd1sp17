/*
 * Filename:    finding_elements.js
 * Description: Examples of selecting elements from the DOM
 * Author:      Luke Sathrum
 */
"use strict";

// Get the JavaScript Output Paragraph
var elOutput = document.getElementById('javascript_output');


// Get the title
var elTitle = document.getElementById('title');
// Add to our output
elOutput.textContent = 'The title is: ' + elTitle.textContent;

// Get all even items
var elEvens = document.getElementsByClassName('even');
// Loop through our Node List and add to our output
elOutput.textContent += '\n\nEven Items:';
for (var i = 0; i < elEvens.length; i++) {
  elOutput.textContent += '\n' + elEvens[i].textContent;
}

// Get all nodes in the DOM
var elAll = document.querySelectorAll('*');
// Output how many elements are in the DOM
console.log('There are ' + elAll.length + ' elements in the DOM');

