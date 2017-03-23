/*
 * Filename:    switch.js
 * Description: Example of JavaScript Switch Statements
 * Author:      Luke Sathrum
 */

// Get today's date
var date = new Date(), day;
// Switch off the date to get the day's name
switch (date.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
// Display the day's name
console.log(day);

// You can combine cases
// Output if it's an even day or an odd day
switch (date.getDay()) {
  case 0:
  case 2:
  case 4:
  case 6:
    console.log('Even Day');
    break;
  case 1:
  case 3:
  case 5:
    console.log('Odd Day');
    break;
}

// Hacky way to get boolean logic
switch (true) {
  case date.getDay() % 2 == 0:
    console.log('Hacky Even Day');
    break;
  case date.getDay() % 2 == 1:
    console.log('Hacky Odd Day');
    break;
}

