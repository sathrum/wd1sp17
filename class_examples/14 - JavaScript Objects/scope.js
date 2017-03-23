/*
 * Filename:    scope.js
 * Description: Examples of JavaScript Scope
 * Author:      Luke Sathrum
 */

// Global Variables
var one = 1;
var two = 2;

// Output our variables
console.log('--Outputting before function call--');
console.log(one);
console.log(two);
// Three is local so this would give us an error
// console.log(three);
// Four doesn't exist yet so this is an error as well
// console.log(four);
console.log('--END Outputting before function call--');

// Create a function
function f() {
  console.log('--Outputting from function--');
  // one is a local variable
  var one = 10;
  console.log(one);
  // Output the global variable
  console.log(two);
  // Change the global variable
  two = 20;
  // three is a local variable
  var three = 3;
  console.log(three);
  // four is a global variable
  four = 4;
  console.log(four);
  console.log('--END Outputting from function--');
}

// Calling our function
f();

// Output our variables
console.log('--Outputting after function call--');
console.log(one);
console.log(two);
// Three is local so this would give us an error
//console.log(three);
console.log(four);
console.log('--END Outputting after function call--');
