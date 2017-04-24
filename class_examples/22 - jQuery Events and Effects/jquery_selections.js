/*
 * Filename:    jquery_selections.js
 * Description: Working with jQuery Selections
 * Author:      Luke Sathrum
 */

// Highlight Even <li>s and <h1>s
$('li:odd').add('h1')
       .addClass('highlight');
       
// Use .filter
$('li').filter('.highlight')
       .css('font-weight', 'bold');

// Use .not       
$('body *').not('.highlight')
           .not('ul')
           .css('font-style', 'italic');

// Use .has
$('body').has('.highlight')
         .width('200');