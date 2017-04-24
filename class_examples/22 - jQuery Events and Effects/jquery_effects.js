/*
 * Filename:    jquery_effects.js
 * Description: Examples of jQuery Effects
 * Author:      Luke Sathrum
 */

// Hide the <li>s
$lis = $('li');
$lis.hide();

// Fade in the <li>s
$lis.each(function(index) {
  $(this).delay(700 * index).fadeIn(700);
});
 
// Add a slide toggle on the text of the <li>s
$('ul').on('click', 'li', function(e) {
  e.preventDefault();
  $(this).find('span').slideToggle();
});
 