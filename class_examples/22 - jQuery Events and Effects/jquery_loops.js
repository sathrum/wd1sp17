/*
 * Filename:    jquery_loops.js
 * Description: Examples of jQuery Loops
 * Author:      Luke Sathrum
 */

$('#add-info').on('click', function() {
  // Loop through <li>s
  // You can pass the index of the element into the function
  $('#fruit li').each(function(index){  
    // Create odd/even text
    var text;
    if (index % 2 === 0)
      text = ' <em>Odd</em>';
    else
      text = ' <em>Even</em>';
    // Add odd/even text to the element
    $(this).append(text);
  });
});

// Add a highlight to all odd <li>s for each <ul>
// Incorrect way
//$('ul li:even').addClass('highlight');

// Correct using .each
$('ul').each(function(){
  $(this).find('li:even').addClass('highlight');
});