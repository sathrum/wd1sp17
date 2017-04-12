/*
 * Filename:    more_event_object.js
 * Description: Examples of the JavaScript event object
 * Author:      Luke Sathrum
 */
"use strict";

// Add click handler on window capturing
window.addEventListener('click', function() {
  console.log('Capturing down');
}, true);

// Add click handler on window bubbling
window.addEventListener('click', function() {
  console.log('Bubbling up');
}, false);

// Add click handler on button
// Prevent event propagation
var elButton = document.getElementById('buttonOne');
elButton.addEventListener('click', function(e) {
  // Prevent propagation
  e.stopPropagation();
  console.log('Clicked buttonOne');
});

// Prevent the default of an anchor
var elAnchor = document.getElementById('anchorOne');
elAnchor.addEventListener('click', function(e) {
  // Prevent Default
  e.preventDefault();
  console.log('We were supposed to go to Google...');
});

// Get Elements for Mouse Position Information
var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

// Function to update mouse position information
function showPosition(event) {
  sx.value = event.screenX;
  sy.value = event.screenY;
  px.value = event.pageX;
  py.value = event.pageY;
  cx.value = event.clientX;
  cy.value = event.clientY;
}
// Get the body
var elBody = document.getElementsByTagName('body')[0];
// Add handler to update mouse position on mouse move
elBody.addEventListener('mousemove', showPosition);

// Get elements for key press
var kc = document.getElementById('kc');
var akc = document.getElementById('akc');

// Add handler to get key press
elBody.addEventListener('keypress', function(event) {
  kc.value = String.fromCharCode(event.which);
  akc.value = event.which;
});
