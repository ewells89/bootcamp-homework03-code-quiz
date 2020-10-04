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
        correct: "quotes"
    },
    {
        question:  "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
        correct: "console log"
    },
]


// EVENT LISTENERS


// Listen for Quiz Start
start.addEventListener("click", 
    function (){
        console.log("The quiz has begun!");
        getContent();
    }
)


// FUNCTIONS


// Function to retrieve questions
function getContent(){
    // console.log("First question!")
    
    // Clear the content from the previous element
    quizBox.style.display = "none";

    // Create Div wrapper for question and answers
    var questionDiv = document.createElement("div")
    questionDiv.setAttribute("id","quizBox")
    document.body.append(questionDiv);

    // Generate the text to display for the question
    var next = document.createElement("h2");
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

    // Event Listener for Choice Buttons
    questionDiv.addEventListener("click",
        function(event){
            if(event.target.matches("button")){
                console.log("You picked the next question!");
                // console.log(currentQuestion);
                
                getAnswer();
                // Function to get and display answer
                function getAnswer(){
                    questionDiv.style.display = "none";

                    console.log ("The response will be displayed here!");
                    var userAnswer = event.target.textContent;
                    var correctAnswer = quizQuestions[currentQuestion].correct;
                        console.log(correctAnswer);


                    if(userAnswer === correctAnswer){
                        var messageCorrect = document.createElement("p");
                        var hr = document.createElement("hr");
                        
                        messageCorrect.setAttribute("id","answer");
                        messageCorrect.textContent= "Correct!";
                        questionDiv.append(hr);
                        questionDiv.append(messageCorrect);

                    } else{
                        var messageIncorrect = document.createElement("p");
                        var hr = document.createElement("hr");

                        messageIncorrect.setAttribute("id","answer");
                        messageIncorrect.textContent= "Incorrect! The correct answer was " + correctAnswer +".";
                        questionDiv.append(hr);
                        questionDiv.append(messageIncorrect);

                    }
                    
                    currentQuestion++;
                    getContent();
                }
            }
        }

    )

    if(currentQuestion > quizQuestions.length){
        console.log("this is the end!")
    }

}




// setInterval(function countdown(){
//     for (var i = 60; i>0;i--);
//     timer--;
//     }, 1000);



