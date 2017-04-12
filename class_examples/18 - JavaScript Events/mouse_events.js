/*
 * Filename:    mouse_events.js
 * Description: Examples of mouse events
 * Author:      Luke Sathrum
 */
"use strict";

// Get the element to run the dblclick event on
var elDblClick = document.getElementById('double_click');
elDblClick.addEventListener('dblclick', function() {
  alert('You double clicked!!!');
});


// Get the element to run the click event on
var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
var color = 0;
var elClick = document.getElementById('click');
elClick.addEventListener('click', function() {
  elClick.style.backgroundColor = colors[color++];
  if (color == colors.length)
    color = 0;
});

// Get the elements to run mousedown and mouseup on
var elMouseUpDown = document.getElementById('mouseupdown');
var elMouseDown = document.getElementById('mousedown');
var elMouseUp = document.getElementById('mouseup');
var colorDown = 3;
var colorUp = 1;
elMouseUpDown.addEventListener('mousedown', function() {
  elMouseDown.style.backgroundColor = colors[colorDown++];
  if (colorDown == colors.length)
    colorDown = 0;
});

elMouseUpDown.addEventListener('mouseup', function() {
  elMouseUp.style.backgroundColor = colors[colorUp++];
  if (colorUp == colors.length)
    colorUp = 0;
});

// Get the element to run mousein and mouseout on
var elMouseOverOut = document.getElementById('mouseoverout');

elMouseOverOut.addEventListener('mouseover', function() {
  elMouseOverOut.style.fontWeight = 'bold';
  elMouseOverOut.style.fontStyle = 'normal';
});

elMouseOverOut.addEventListener('mouseout', function() {
  elMouseOverOut.style.fontWeight = 'normal';
  elMouseOverOut.style.fontStyle = 'italic';
});

// Get the element to run mousemove
var elMouseMove = document.getElementById('mousemove');
var timer;
function mouseStopped(){
    elMouseMove.innerHTML = "Mouse stopped";
}

window.addEventListener('mousemove', function() {
    elMouseMove.innerHTML = "Mouse moving";
    clearTimeout(timer);
    timer = setTimeout(mouseStopped, 100);
});
