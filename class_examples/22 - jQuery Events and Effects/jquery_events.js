/*
 * Filename:    jquery_events.js
 * Description: Examples of jQuery Events
 * Author:      Luke Sathrum
 */

// Get clicked text element
$clicked = $('#clicked');
 
// Add a click event on all <li>s
// Note this is ineffient since you are adding many event listeners
$('li').on('click', function() {
  $clicked.text($(this).text());
});

// Use delegation to add a single event listener
$('ul').on('mouseover', 'li', function() {
  $(this).addClass('highlight');
});

$('ul').on('mouseout', 'li', function() {
  $(this).removeClass('highlight');
});