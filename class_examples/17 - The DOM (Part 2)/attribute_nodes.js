/*
 * Filename:    finding_elements.js
 * Description: Examples of finding and changing attributes
 * Author:      Luke Sathrum
 */
"use strict";

// Get the <h1>
var elH1 = document.getElementsByTagName('h1')[0];

// Set the ID of the h1
alert('Changing ID of <h1> to black');
elH1.id = 'black';

// Get all even items
var elEvens = document.getElementsByClassName('even');
// Loop through our Node List and add the hide class
alert('Hiding the evens');
for (var i = 0; i < elEvens.length; i++) {
  elEvens[i].className = 'even hide';
}

// Check if it has an attribute and alert us if exists
var elInput = document.getElementsByTagName('input')[0];

if (elInput.hasAttribute('value')) {
  alert('The value of the value attribute is: ' + elInput.getAttribute('value'));
}

// Remove the disabled attribute
elInput.removeAttribute('disabled');

// Change the default value
elInput.setAttribute('value', 'No Longer Disabled');
