/*
 * Filename:    updating_text_and_html.js
 * Description: Examples of updating text and html
 * Author:      Luke Sathrum
 */
"use strict";

// Get the JavaScript Output Paragraph
var elOutput = document.getElementById('javascript_output');

// Get the <ol>
var elOL = document.getElementsByTagName('ol')[0];

// Output the text contents
elOutput.textContent = 'The <ol>.textContent contains: ' + elOL.textContent;
elOutput.innerHTML += '<br />The &lt;ol&gt;.innerHTML contains: ' + escapeHTML(elOL.innerHTML);


// To output element tags in plaintext
function escapeHTML (unsafe_str) {
return unsafe_str
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/\"/g, '&quot;')
.replace(/\'/g, '&#39;'); // '&apos;' is not valid HTML 4
}
