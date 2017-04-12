/*
 * Filename:    event_object.js
 * Description: Examples of the JavaScript event object
 * Author:      Luke Sathrum
 */
"use strict";

// Get all elements that are buttons
var items = document.getElementsByTagName('button');

// Add an event listener for each button
for (var i = 0; i < items.length; i++) {
    // Add click handler for capturing phase
    items[i].addEventListener("click", output);
}

// Output information about the event object
function output(eventObject) {
    console.log('We are working with the ' + eventObject.target.id + ' element.');
    console.log('The entire target property');
    console.log(eventObject.target);
    console.log('The entire eventObject');
    console.log(eventObject);
}