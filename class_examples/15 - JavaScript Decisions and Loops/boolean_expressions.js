/*
 * Filename:    boolean_expressions.js
 * Description: Examples of JavaScript Boolean Expressions
 * Author:      Luke Sathrum
 */

// Comparison Operators
// Equality
console.log('1 == 1:    ' + (1 == 1));
console.log('1 === 1:   ' + (1 === 1));
console.log('1 == \'1\':  ' + (1 == '1'));
console.log('1 === \'1\': ' + (1 === '1'));
// Greater / Less
console.log('1 < 1:     ' + (1 < 1));
console.log('1 <= 1:    ' + (1 <= 1));

// Some nice things to know
var a1 = [1], a2 = [1];
console.log('a1 == a2:  ' + (a1 == a2));
console.log('a1 === a2: ' + (a1 === a2));

var o1 = {key: 'value'}, o2 = {key: 'value'};
console.log('o1 == o2:  ' + (o1 == o2));
console.log('o1 === o2: ' + (o1 === o2));

// Array values are not copied
a1 = a2;
console.log(a1);
console.log(a2);
a1[0] = 10;
console.log(a1);
console.log(a2);
console.log('a1 == a2:  ' + (a1 == a2));
console.log('a1 === a2: ' + (a1 === a2));

// Object properties are not copied
o1 = o2;
console.log(o1);
console.log(o2);
o1.key = 'new value';
console.log(o1);
console.log(o2);
console.log('o1 == o2:  ' + (o1 == o2));
console.log('o1 === o2: ' + (o1 === o2));

// Truth Tables
// &&
console.log('true && true:   ' + (true && true));
console.log('true && false:  ' + (true && false));
console.log('false && true:  ' + (false && true));
console.log('false && false: ' + (false && false));

// ||
console.log('true || true:   ' + (true || true));
console.log('true || false:  ' + (true || false));
console.log('false || true:  ' + (false || true));
console.log('false || false: ' + (false || false));

// !
console.log('!true:          ' + (!true));
console.log('!false:         ' + (!false));
