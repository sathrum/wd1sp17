/*
 * Filename:    arrays.js
 * Description: Examples of JavaScript Arrays
 * Author:      Luke Sathrum
 */
"use strict";
// Create an Array
var days = ['Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat',
            'Sun'];
// Create an Empty Array
var playlist = [];

// Output the array variables
console.log(days);
console.log(playlist);

// Output Thursday
console.log(days[3]);

// Change to full name
days[3] = 'Thursday';

// Output Thursday
console.log(days[3]);

// Output the length of the array
console.log(days.length);

// Output the last item in the array
console.log(days[days.length - 1]);