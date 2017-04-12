/*
 * Filename:    dom_manipulation.js
 * Description: Examples of manipulating the DOM
 * Author:      Luke Sathrum
 */
"use strict";

// Get all even items
var elEvens = document.getElementsByClassName('even');

// Get the parent of an even item
var elEvenParent = elEvens[0].parentNode;

// Loop through our Node List and remove each node
alert('Removing all .even list items');
// Store the original length as it'll get updated as we delete...
var origLength = elEvens.length;
for (var i = 0; i < origLength; i++) {
  // Every time we delete everything shifts down so we always delete at 0
  elEvenParent.removeChild(elEvens[0]);
}

// Add more to our list
// Get the item
var add = prompt('Add an item to the list');
// Create the item
var newItem = document.createElement('li');
// Add the text node to the new element
newItem.appendChild(document.createTextNode(add));
// Add it to the end of our list
var elOL = document.getElementsByTagName('ol')[0];
elOL.appendChild(newItem);

// Add another item to the list, this time an UNSAFE way
// Get the item
add = prompt('Add an item to the list');
// Create the item
var newItem = document.createElement('li');
// Add the text node to the new element
newItem.innerHTML = add;
// Add it to the end of our list
elOL.appendChild(newItem);
