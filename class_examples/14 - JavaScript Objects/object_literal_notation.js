/*
 * Filename:    object_literal_notation.js
 * Description: Examples of JavaScript Object Literal Notation
 * Author:      Luke Sathrum
 */
"use strict";

// Create our object literal to help draw a circle using Canvas
var circle = {
  // Object Properties
  xCoord: 100,
  yCoord: 100,
  radius: 50,
  // Object Methods
  getArea: function() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
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