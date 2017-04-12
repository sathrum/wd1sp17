/*
 * Filename:    event_propagation.js
 * Description: Examples of event propagation
 * Author:      Luke Sathrum
 */
"use strict";

// Get all elements with item class
var items = document.getElementsByClassName('item');

// Add an event listener for each item
for (var i = 0; i < items.length; i++) {
    // Add click handler for capturing phase
    items[i].addEventListener("click", output, true);

    // Add click handler for bubbling phase
    items[i].addEventListener("click", output, false);
}

// Output the current element
function output() {
    console.log(this.id);
}