/*
 * Filename:    add_remove_arrays.js
 * Description: Examples of JavaScript Array Methods
 * Author:      Luke Sathrum
 */
"use strict";
// Create an Array
var days = ['Thurs'];

// Output the array variable
console.log(days);

// Add to the end and output the new length
console.log(days.push('Fri'));

// Output the new array
console.log(days);

// Add more to the end
days.push('Sat', 'Sun');

// Output the new array
console.log(days);

// Add to the beginning and output the new length
console.log(days.unshift('Wed'));

// Output the new array
console.log(days);

// Add more to the end
days.unshift('Mon', 'Tues');

// Output the new array
console.log(days);

// Remove and output the first day of the week
console.log(days.shift());

// Remove and output the last day of the week
console.log(days.pop());

// Output the array and it's size
console.log(days);
console.log(days.length);
