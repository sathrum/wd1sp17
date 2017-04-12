/*
 * Filename:    event_delegation.js
 * Description: Examples of event delegation
 * Author:      Luke Sathrum
 */
"use strict";

// Get the parent of all of the <li>s
var elUL = document.getElementById('theUL');
// Add a click handler for the element
elUL.addEventListener('click', function(e) {
  // Output the target and current target...
  console.log('Current Target: ' + e.currentTarget.id);
  console.log('Target: ' + (e.target.id || e.target.textContent));
  // Run code for children
  if (e.target !== e.currentTarget) {
    e.target.style.backgroundColor = '#'+(Math.random().toString(16) + '0000000').slice(2, 8);
  } else {
    // Remove Color
    var first = e.target.firstChild;
    do {
      if (first.style)
        first.style.backgroundColor = 'transparent';
      first = first.nextSibling;
    } while (first);
  }
  // Stop further propagation
  e.stopPropagation();
});