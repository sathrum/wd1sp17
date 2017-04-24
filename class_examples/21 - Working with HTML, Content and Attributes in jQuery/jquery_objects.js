/*
 * Filename:    jquery_objects.js
 * Description: Examples of Chaining and Implicit Iteration
 * Author:      Luke Sathrum
 */

// Hide all odd <li>s
$('#hide-lis').click(function() {
  // Implicitly iterate over the selection and either show/hide odd <li>s
  $('li:odd').toggle();
});

// Function Chaining. Good form is to put each function call on it's own line
// Creates an element, adds a class, adds a css property, hides it, makes it the
// first element inside <body> and slowly fades in, all with one statement.
$('<h1>Chaining and Implicit Iteration</h1>').addClass('title')
                                             .css('color', 'red')
                                             .hide()
                                             .prependTo($('body'))
                                             .fadeIn(4000);
