/*
 * Filename:    lab_10.js
 * Description: A simple quiz that uses arrays and functions
 * Author:      Luke Sathrum / YOUR NAME HERE
 */
"use strict";

// Create a score variable and set to 0



/* Create a function that outputs the questions in your array
 * You will probably want to write this function AFTER you write the rest of the code
 * Has a single parameter which is a question/answer array
 * In the function
 * -Use a prompt() to ask the question to the user
 * -To compare: if(result_of_prompt == question_answer)
 * -- If they get the question right increment the count and inform the user.
 *    Use the alert() function to inform the user
 * -- If they get the question wrong inform the user using alert()
 * -Use HTML to output the question, the user's answer, and the correct answer
 */

function askAnswer(question) {
  
  // 1) use prompt() to ask the question and store the result

  // 2) if (result_of prompt == question[1])
  //    use alert() to inform user they are correct
  //    Increment your score variable

  // 3) else
  //    use alert() to inform the user that they are incorrect

  // 4) document.write the question, user's answer, and correct answer.

}

// Create an array to store at least 5 questions. Each question should have a
// numeric answer.
// Since every question has an answer each item of the array will be another
// array with the first item being the question and the second item being the
// answer
var questions = [
                 ['QUESTION', 'ANSWER'],
                 ['QUESTION', 'ANSWER'],
                 ['QUESTION', 'ANSWER'],
                 ['QUESTION', 'ANSWER'],
                 ['QUESTION', 'ANSWER']
                ];

// Use the following loop to loop through each question
for (var i = 0; i < questions.length; i++) {
  
  // Call your askAnswer function and pass in an item of the array 
  // Each item in your array can be accessed via questions[i]
}

// Output to the user via HTML the number of questions they got right out of the
// total.
// Get the total using the .length property of the array

// USE document.write()
