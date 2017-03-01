/*
 * Filename:    return.js
 * Description: Examples of JavaScript Function Parameters and Return
 * Author:      Luke Sathrum
 */
"use strict";

// Create a function
function calculateTotal(quantity, price, tax) {
  var total = quantity * price * (1 + tax);
  var formattedTotal = total.toFixed(2);
  return formattedTotal;
}

// Calling the function
var saleTotal = calculateTotal(2, 16.95, .075);
console.log('Total cost is: $' + saleTotal);

// Calling without storing
console.log('Total cost is: $' + calculateTotal(5, 1.95, .075));
