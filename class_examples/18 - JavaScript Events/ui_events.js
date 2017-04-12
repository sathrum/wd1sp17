/*
 * Filename:    ui_events.js
 * Description: Examples of UI events
 * Author:      Luke Sathrum
 */
"use strict";

window.addEventListener('load', function() {
    alert('Page has loaded!!!');
});

// Get the element to run scroll
var elScroll = document.getElementById('scroll');
var timer;
function scrollStopped(){
    elScroll.innerHTML = "Not Scrolling";
}

window.addEventListener('scroll', function() {
    elScroll.innerHTML = "Scrolling";
    clearTimeout(timer);
    timer = setTimeout(scrollStopped, 100);
});

// Get the element to run resize
var elResize = document.getElementById('resize');
var timer2;
function resizeStopped(){
    elResize.innerHTML = "Not Resizing";
}

window.addEventListener('resize', function() {
    elResize.innerHTML = "Resizing";
    clearTimeout(timer2);
    timer = setTimeout(resizeStopped, 1000);
});
