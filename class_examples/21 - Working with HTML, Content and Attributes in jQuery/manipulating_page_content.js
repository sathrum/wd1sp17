/*
 * Filename:    manipulating_page_content.js
 * Description: Manipulating page content with jQuery
 * Author:      Luke Sathrum
 */

// Store <li>s in variables
var $orig = $('#original li');
var $html = $('#updated_via_html li');
var $text = $('#updated_via_text li');

// Output the HTML to the console
console.log('Original HTML: ' + $orig.html());

console.log('Original Text' + $orig.text());

$('#update_html').click(function() {
  // This will change ALL list items selected
  $html.html('<b>A new List Item</b>');
});

$('#update_text').click(function() {
  // This will change ALL list items selected, but will escape special characters
  $text.text('<b>A new list item</b>');
});

$('#add_index').click(function() {
  // You can use a function to update html
  $('li').html(function(index, oldHTML){
    return index + ': ' + oldHTML;
  });
});

$('#prepend').click(function() {
  // Add a <li> to the beginning of the list using a string
  $('#original').prepend('<li>Front</li>');
});

$('#append').click(function() {
  // Add a <li> to the beginning of the list using a jQuery object
  $append = $('<li>');
  $append.css('color', 'red');
  $append.text('End');
  $('#original').append($append);
});

$('#remove_text').click(function() {
  // Remove the text <ul>
  $('#updated_via_text').remove();
  // Remove the buttons and <h1>
  $(this).prev().prev().remove();
  $(this).prev().remove();
  $(this).remove();
});

$('#replace_html').click(function() {
  var $html = $('#updated_via_html').replaceWith('<p>&lt;ul&gt; was here!</p>');
});
