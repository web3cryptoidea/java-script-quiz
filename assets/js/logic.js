var totalres = document.querySelector("#final-score");

var startscr = document.querySelector("#start-screen");
var endscr = document.querySelector("#end-screen");
var submbtn = document.querySelector("#submit");
var questionscr = document.querySelector("questions");

// A variable to keep track of the current question
let currentQuestion = 0;

function showQuestion() {
  startscr.classList.add("hide"); 
  // questionscr.classList.remove("hide"); 
  // Get the current question object
  const q = questions[currentQuestion];
  console.log(typeof q);
  // Update the question text
  const questionEl = document.querySelector("#question-title");
  console.log(questionEl);
  questionEl.innerHTML = q.question;
  console.log((questionEl.innerHTML));

  // Update the choice button text

  const optionA = document.querySelector("#optionA");
  optionA.innerHTML = q.choices[0];
  const optionB = document.querySelector("#optionB");
  optionB.innerHTML = q.choices[1];
  const optionC = document.querySelector("#optionC");
  optionC.innerHTML = q.choices[2];
  const optionD = document.querySelector("#optionD");
  optionD.innerHTML = q.choices[3];
  console.log(optionA, optionB, optionC, optionD);
    
}
var wins = 0;

var secondsLeft = 160;

function checkAnswer(userInput) {

  // Get the current question object
  const q = questions[currentQuestion];
  console.log(q.answer);

  // Compare the user's input to the correct answer
  const result = document.querySelector("#result");
  if (userInput === q.answer) {
    result.innerHTML = "Correct!";
    wins++;
  } else {
    result.innerHTML = "Incorrect.";
    secondsLeft = secondsLeft - 10;
  }
  // Check if there are more questions
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    clearInterval(timerInterval);

    endscr.classList.remove("hide");
     
    // questionscr.classList.add("hidden");
    
    // result.innerHTML = "You have completed the quiz!";
     
    totalres.textContent = wins; 
    console.log(totalres.textContent);
    // + " correct answers out of " + questions.length;
     
  }
 }

// Show the first question

var startQuiz = document.querySelector("#start");

startQuiz.addEventListener("click", showQuestion);
 
var timeLeft = document.querySelector("#time");

console.log(typeof secondsLeft);
var timerInterval;
startQuiz.addEventListener("click", setTime);

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("Time finished");
      }
    }, 1000);
}
   

function storeHighscore(initials, wins) {
  localStorage.setItem("initials", initials);
  console.log(initials);
  localStorage.setItem("wins", wins);
  console.log(wins);
  // Get the existing highscores from local storage
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Add the new highscore
  highscores.push({ initials: initials, "wins": wins });

  // Store the updated highscores in local storage
  localStorage.setItem("highscores", JSON.stringify(highscores));
};

submbtn.addEventListener("click", function(event) {
  event.preventDefault();
  let initials = document.getElementById("initials").value;
  storeHighscore(initials, wins);
  window.location.href="highscores.html";
});

  


 
