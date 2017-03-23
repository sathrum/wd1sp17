/*
 * Filename:    class_syntax.js
 * Description: Examples of JavaScript Class Syntax
 * Author:      Luke Sathrum
 */
"use strict";

// Create our object template, using class syntax
class Circle {
  constructor(xCoord, yCoord, radius, color) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
    this.color = color;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  // No need to understand how the drawCircle function works!
  drawCircle() {
     // Create a canvas element
    var elCanvas = document.createElement("canvas");
    // Set the height/width of element
    elCanvas.height = 2 * this.yCoord;
    elCanvas.width = 2 * this.xCoord;
    // Setup the circle using Canvas
    var context = elCanvas.getContext("2d");
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.xCoord, this.yCoord, this.radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = "black";
    // Return the canvas element
    return elCanvas;
  }
  // No need to understand how the getStats function works!
  getStats() {
    // Create a list to store circle statistics
    var elStats = document.createElement('ul');
    elStats.innerHTML = "<li>Radius: " + this.radius.toFixed(2) + 
                        "</li><li>Circumference: " + this.getCircumference().toFixed(2) +  
                        "</li><li>Area: " + this.getArea().toFixed(2) + "</li>";
    // Return the list
    return elStats;
  }
  // No need to understand how the addCircleToBody function works!
  addCircleToBody() {
    // Add the elements to the end of body
    document.body.appendChild(this.drawCircle());
    document.body.appendChild(this.getStats());
  }
}

// Now that our class is definied, let's create circles!

// Create a circle
var circle1 = new Circle(100, 100, 50, 'red');
console.log(circle1);
// Add the circle
circle1.addCircleToBody();
// Create another circle
var circle2 = new Circle(300, 300, 150, 'yellow');
// Add the circle
circle2.addCircleToBody();
