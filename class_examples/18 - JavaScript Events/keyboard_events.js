/*
 * Filename:    keyboard_events.js
 * Description: Examples of keyboard events
 * Author:      Luke Sathrum
 */
"use strict";

// Get the output element
var elOutput = document.getElementById('output');

// Handle keypress event
window.addEventListener('keypress', function() {
  if (elOutput.textContent === 'Key Up!')
    elOutput.innerHTML = '<li>Key Pressed!</li>';
  else
    elOutput.innerHTML += '<li>Key Pressed!</li>';
});

// Handle keydown event
window.addEventListener('keydown', function() {
    if (elOutput.textContent === 'Key Up!')
    elOutput.innerHTML = '<li>Key Down!</li>';
  else
    elOutput.innerHTML += '<li>Key Down!</li>';
});

// Handle keyup event
var timer;
window.addEventListener('keyup', function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      elOutput.innerHTML = '<li>Key Up!</li>';
    }, 500);
});
