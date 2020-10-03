// Global variable declarations 

var timer = 60;
var start = document.getElementById("start");
var quizBox = document.getElementById("quizBox");

var currentQuestion = 0;

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
        answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
        correct: "for loops"
    },
]


// Start Quiz Function
start.addEventListener("click", function (){
    console.log("The quiz has begun!");
    getContent();
    })



// Function to retrieve questions
function getContent(){
    console.log("First question!")
    
        // Clear the content from the previous element
        quizBox.style.display = "none";

        // Create Div wrapper for question and answers
        var questionDiv = document.createElement("div")
        questionDiv.setAttribute("id","quizBox")
        document.body.append(questionDiv);

            // questionDiv.style.display = "none";

        // Generate the text to display for the question
        var next = document.createElement("h2");
        // next.setAttribute("id", "quizBox");
        next.textContent = quizQuestions[currentQuestion].question;
        questionDiv.appendChild(next);
        
        // Generate the buttons with the possible answers for the question
        for(var i=0; i < quizQuestions[currentQuestion].answers.length; i++){
            var answerParagraph = document.createElement("p");
            questionDiv.appendChild(answerParagraph);

            var answerButton = document.createElement("button");
            answerButton.setAttribute("type", "button");
            answerButton.setAttribute("class", "btn");
            answerButton.setAttribute("id", "choices");
            answerButton.textContent = quizQuestions[currentQuestion].answers[i];
            answerParagraph.append(answerButton);
        }


        
    }


// Function to display answer
function getAnswer(){
    console.log ("The response will be displayed here!");

}


// setInterval(function countdown(){
//     for (var i = 60; i>0;i--);
//     timer--;
//     }, 1000);



