/*
 * Filename:    form_events.js
 * Description: Examples of form events
 * Author:      Luke Sathrum
 */
"use strict";

// Get the form element
var elForm = document.getElementById('my_form');
elForm.addEventListener('submit', function(e) {
    // Prevent the form from submitting
    e.preventDefault();
});

// Setup focus and blur
function setColor(el, status) {
  if (status)
    el.style.border = '5px solid #FF0000';
  else
    el.style.border = '5px solid #000000';
}

var elBorders = document.getElementsByClassName('border');
for (var i = 0; i < elBorders.length; i++) {
  elBorders[i].addEventListener('focus', function() {
    setColor(this, true);
  });
  elBorders[i].addEventListener('blur', function() {
    setColor(this, false);
  });
}

// Setup change
var elStarWars = document.getElementsByClassName('sw');
var elStarWarsOther = document.getElementById('sw_o');
for (var i = 0; i < elStarWars.length; i++) {
  elStarWars[i].addEventListener('change', function(e) {
    if(this.value === 'o') {
      elStarWarsOther.style.display = 'inline';
      elStarWarsOther.removeAttribute('disabled');
    } else {
      elStarWarsOther.style.display = 'none';
      elStarWarsOther.value = '';
      elStarWarsOther.setAttribute('disabled', 'disabled');
    }
  });
}

// Setup cut/copy/paste/select
var elMsg = document.getElementById('msg');
elMsg.addEventListener('cut', function(e) {
  alert('Text Cut!');
});
elMsg.addEventListener('copy', function(e) {
  alert('Text Copied!');
});
elMsg.addEventListener('paste', function(e) {
  alert('Text Pasted!');
});
elMsg.addEventListener('select', function(e) {
  alert('Text Selected!');
});
