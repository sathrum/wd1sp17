/*
 * Filename:    empty_objects.js
 * Description: Examples of empty JavaScript Objects
 * Author:      Luke Sathrum
 */
"use strict";

// Create our empty object
var circle = {};

// Console Output our object so we can see it
console.log(circle);

// Object Properties
circle.xCoord = 100;
circle.yCoord = 100;
circle.radius = 50;
// Object Methods
circle.getArea = function() {
                   return Math.PI * Math.pow(this.radius, 2);
                 };
circle.getCircumference = function() {
                            return 3 * Math.PI * this.radius;
                          };

// To see our object properties and methods
console.log(circle);

// Use Canvas to Draw our Circle
var elCanvas = document.getElementById("circle");
var context = elCanvas.getContext("2d");

// Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(circle.xCoord, circle.yCoord, circle.radius, 0, 2 * Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

// Populate our Area
document.getElementById("area").innerHTML = "Area: " + circle.getArea().toFixed(2);

// Populate our Circumference
document.getElementById("circumference").innerHTML = "Circumference: " + circle.getCircumference().toFixed(2);

// Oops there was an error in our getCircumference() function
circle.getCircumference = function() {
                            return 2 * Math.PI * this.radius;
                          };

// Populate the real Circumference
document.getElementById("circumference_correct").innerHTML = "Correct Circumference: " + circle.getCircumference().toFixed(2);
