/*
 * Filename:    working_with_css.js
 * Description: Examples of jQuery functions that work with CSS
 * Author:      Luke Sathrum
 */

// Get the paragraph
$p = $('#modify');
// Setup our colors
var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
var color = 0;

$('#color').click(function() {
  // Change the paragraph's text color
  $p.css('color', colors[color++]);
  if (color == colors.length)
    color = 0;
});

$('#get-color').click(function() {
  // Get the text color
  alert($p.css('color'));
});

$('#get-width').click(function() {
  // Get the width of the paragraph
  alert($p.css('width'));
});

$('#increase-margin').click(function() {
  // Increase the margin-top by 10px
  $p.css('margin-top', '+=10');
});

$('#object').click(function() {
  // Create an object that holds CSS
  var styles = {'margin': '.5em',
                'padding': '.5em',
                'border': '2px solid #BEBEBE',
                'color': '#FFFFFF',
                'background': '#000000'
  };
  $('button').css(styles);
});