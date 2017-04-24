/*
 * Filename:    jquery_boxes.js
 * Description: Working with jQuery and CSS Box Model
 * Author:      Luke Sathrum
 */

// Set <h1> widths
$('h1').width('50%');

// Set <li> heights
$('li').height('2em');

// Add handler for box methods
$('body *').not('table *, table').on('click', function(e) {
  if(e.target === e.currentTarget) {
    e.stopPropagation();
    $t = $(this);
    $('#height').text($t.height() + 'px');
    $('#innerHeight').text($t.innerHeight() + 'px');
    $('#outerHeight').text($t.outerHeight() + 'px');
    $('#outerHeightTrue').text($t.outerHeight(true) + 'px');
    $('#width').text($t.width() + 'px');
    $('#innerWidth').text($t.innerWidth() + 'px');
    $('#outerWidth').text($t.outerWidth() + 'px');
    $('#outerWidthTrue').text($t.outerWidth(true) + 'px');
  }
});