/*
 * Filename:    working_with_classes.js
 * Description: Examples of jQuery functions that work with classes
 * Author:      Luke Sathrum
 */

$('#add').click(function() {
  // Add the red and green classes to ALL paragraphs
  $('p').addClass('red green');
});

$('#remove').click(function() {
  // Remove the green class from ALL paragraphs
  $('p').removeClass('green');
});

$('#toggle').click(function() {
  // Toggle (on/off) the hide class from ALL paragraphs
  $('p').toggleClass('hide');
});