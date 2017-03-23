/*
 * Filename:    arrays_and_objects.js
 * Description: Examples of JavaScript Ararys and Objects
 * Author:      Luke Sathrum
 */
"use strict";

// An array of car information
// Each car is it's own object (Make, Model, Year, Mileage);
var cars = [{make: 'Honda', model: 'Accord', year: 2015, mileage: 0},
            {make: 'Honda', model: 'Accord', year: 1990, mileage: 250000},
            {make: 'Ford', model: 'F150', year: 1999, mileage: 150000},
            {make: 'VW', model: 'Passat', year: 2005, mileage: 100000}
           ];

// Output to console
console.log(cars);
// Output the first object
console.log(cars[0]);
// Output the year of the first car
console.log(cars[0].year);

// An object that contains an array
// A simple shopping list
var list = {store: 'Winco',
            completed: false,
            list: ['apples', 'bannans', 'bread']
           };
           
// Output our object
console.log(list);
// Output our array
console.log(list.list);
// Output the third item in our array
console.log(list.list[2]);
