/*
 * Filename:    jquery_selectors.js
 * Description: Examples of jQuery Selectors
 * Author:      Luke Sathrum
 */

// Get our output paragraph
var $output = $('#output');

// Add horizontal class to Top-Level Items
function horizontal() {
  $('#selected-plays > li').delay(2000).addClass('horizontal');
  $output.append('<p>Added Horizontal Class</p>');
}

// Use negation pseudo-class to get all <li>s that don't have horizontal class and add a sub-level class
function notHorizontal() {
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');
  $output.append('<p>Added Sub-Level Class</p>');
}

// Use attribute selectors and wildcards to add mailto class
function mailto() {
  $('a[href^="mailto:"]').addClass('mailto');
  $output.append('<p>Added MailTo Class</p>');
}

function pdflink() {
  $('a[href$=".pdf"]').addClass('pdflink');
  $output.append('<p>Added PDFLink Class</p>');
}

// jQuery also has custom selectors not based on CSS
// Let's select ALL elements that contain 'M' in them and add a highlight class
function containsM() {
  $('li li:contains(M)').addClass('highlight');
  $output.append('<p>Added Highlight Class</p>');
}
window.setTimeout(horizontal, 2000);
window.setTimeout(notHorizontal, 4000);
window.setTimeout(mailto, 6000);
window.setTimeout(pdflink, 8000);
window.setTimeout(containsM, 10000);
