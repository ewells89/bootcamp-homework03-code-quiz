// Global variable declarations 

var timer = 60;
var startQuiz = document.getElementById("start");


// Question and Answers object

var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings","booleans","alerts","numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: ["quotes","curly brackets","parenthesis","square brackets"],
        correct: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        answers: ["number and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "curly brackets"
    },
    {
        question:  "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: ["JavaScript", "terminal/ bash", "for loops", "console log"],
        correct: "for loops"
    },
]


// Start Quiz Function
startQuiz.addEventListener("click", function (){
    console.log("The quiz has begun!");
    getQuestion();
    })



// Function to retrieve questions
function getQuestion(){
    console.log("First question!")

}

// Function to display answer
function getAnswer(){
    console.log ("The response will be displayed here!");

}


// setInterval(function countdown(){
//     for (var i = 60; i>0;i--);
//     timer--;
//     }, 1000);



