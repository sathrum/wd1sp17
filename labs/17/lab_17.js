/*
 * Filename:    lab_17.js
 * Description: FILL IN
 * Author:      Luke Sathrum / FILL IN
 */

// A function to shuffle an array
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
