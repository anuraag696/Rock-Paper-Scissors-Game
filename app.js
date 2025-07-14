let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const comp = document.querySelector("#comp-choice");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score"); 


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const playGame = (userChoice) => {
    console.log("User Choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice:", compChoice);



    if(userChoice === compChoice) {
        console.log("It's a tie!");
        comp.innerText = `Computer's choice: ${compChoice}`;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
        msg.innerText = `It's a tie! Both chose ${userChoice}`;
    } else if((userChoice === "rock" && compChoice === "scissors") ||
              (userChoice === "paper" && compChoice === "rock") ||
              (userChoice === "scissors" && compChoice === "paper")) {
        userScore++;
        userScoreDisplay.innerText = `${userScore}`;
        compScoreDisplay.innerText = `${compScore}`;
        comp.innerText = `Computer's choice: ${compChoice}`;
        console.log("You win! Score - User:", userScore, "Computer:", compScore);
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {        compScore++;
        userScoreDisplay.innerText = `${userScore}`;
        compScoreDisplay.innerText = `${compScore}`;
        comp.innerText = `Computer's choice: ${compChoice}`;
        console.log("You lose! Score - User:", userScore, "Computer:", compScore);
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



choices.forEach((choice) => {   
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    });
});