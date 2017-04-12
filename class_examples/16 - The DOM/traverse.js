/*
 * Filename:    traverse.js
 * Description: Examples of traversing the DOM
 * Author:      Luke Sathrum
 */
"use strict";

// Get the <ol>
var elOL = document.getElementsByTagName('ol')[0];

// Set the CSS of the first child
alert('Setting first child to be red');
elOL.firstChild.style.color = 'red';

// Set the CSS of the last child
alert('Setting last child to be green');
elOL.lastChild.style.color = 'green';

// The previous sibling of <ol> is <h1>
alert('Setting previous sibling to be small caps');
elOL.previousSibling.style.fontVariant = 'small-caps';

// Setting the parent background <body>
alert('Setting parent background');
elOL.parentNode.style.backgroundColor = 'gray';

// Working w/ TextNode Problems
elOL = document.getElementsByTagName('ol')[1];

// Get the next node (on IE 10- it's an element node, everything else it's a text node)
console.log(elOL.firstChild);
console.log(elOL.firstElementChild);
