var totalhighscore = document.querySelector("#highscores");
var clearscores = document.querySelector("#clear");

clearscores.addEventListener("click", deleteItems);

function deleteItems() {
    localStorage.clear();
    totalhighscore.innerHTML = "";
  }
  

function displayHighscores() {
    // Get the existing highscores from local storage
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    console.log(highscores);
     
    // Clear any existing highscores from the list
    totalhighscore.innerHTML = "";

    // Add a list item for each highscore
    for (let i = 0; i < highscores.length; i++) {
        let highscore = highscores[i];
        let li = document.createElement("li");
        li.textContent = highscore.initials + " - " + highscore.wins;
        totalhighscore.appendChild(li);
    }
}

displayHighscores();


