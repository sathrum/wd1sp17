/*
 * Filename:    event_listener_parameters.js
 * Description: Example of using arguments/parameters with event listeners
 * Author:      Luke Sathrum
 */
"use strict";

// Get all buttons
var items = document.getElementsByTagName('button');

// Add an event listener for each button
for (var i = 0; i < items.length; i++) {
    // Add click handler
    items[i].addEventListener("click", function() {
      outputStats(this.id, this.className);
    });
}

// Output the current element
function outputStats(theID, theClass) {
    if (theID)
      console.log('The id is: ' + theID);
    if (theClass)
      console.log('The class is: ' + theClass);
}