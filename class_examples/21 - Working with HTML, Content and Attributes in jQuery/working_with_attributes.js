/*
 * Filename:    working_with_attributes.js
 * Description: Examples of jQuery functions that work with attributes
 * Author:      Luke Sathrum
 */

// Get the paragraph
$p = $('#modify');

$('#title').click(function() {
  // Add a title attribute. If it exists it REPLACES what is there
  $p.attr('title', 'This is a title');
});

$('#get-title').click(function() {
  // Get the text color
  alert($p.attr('title'));
});

$('#remove-title').click(function() {
  // Get the width of the paragraph
  $p.removeAttr('title');
  alert('removed');
});
