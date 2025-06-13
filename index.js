const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerChoiceDisplay = document.getElementById("player_c_disp");
const computerChoiceDisplay = document.getElementById("comp_c_disp");

let result = document.getElementById("result");
let playersScore = document.getElementById("player_s");
let computersScore = document.getElementById("comp_s");

//count variables 
let playersChoice = null;
let computersChoice = null;
let pScore = 0;
let cScore = 0;


//Get computers choice
let computersChoiceFunc = function(){
    let randNumb = Math.ceil(Math.random() * 3);
    if (randNumb == 1) {
        computersChoice = "rock";
    }
    else if(randNumb == 2){
        computersChoice = "paper";
    }
    else{
        computersChoice = "scissor";
    }
}

//Compute the result
function roundResult(playersChoice, computersChoice){

        if(playersChoice == "rock" && computersChoice == "paper" || playersChoice== "paper" && computersChoice == "scissor" || playersChoice== "scissor" && computersChoice == "rock")
        {
            result.textContent = `Computer wins!!🙁
            Play Again!!`;
            cScore++;
        }

        else if(playersChoice == computersChoice){
            result.textContent = `It was a tie!!
            Play Again!!`;
        }

        else{
            result.textContent = `You Win🎉✨
            Play Again!!`
            pScore++;
        }
}

//respond to button clicks

//rock
rock.addEventListener("click", function(){
    playersChoice = "rock";
    playerChoiceDisplay.textContent = `Players Choice: ${playersChoice}`;

    computersChoiceFunc();
    computerChoiceDisplay.textContent = `Computers Choice: ${computersChoice}`;

    roundResult(playersChoice, computersChoice);
    playersScore.textContent = `Players Score: ${pScore}`;
    computersScore.textContent = `Computers Score: ${cScore}`;
});

//paper
paper.addEventListener("click", function(){
    playersChoice = "paper";
    playerChoiceDisplay.textContent = `Players Choice: ${playersChoice}`;

    computersChoiceFunc();
    computerChoiceDisplay.textContent = `Computers Choice: ${computersChoice}`;

    roundResult(playersChoice, computersChoice);
    playersScore.textContent = `Players Socre: ${pScore}`;
    computersScore.textContent = `Computers Score: ${cScore}`;
    
});

// scissors
scissor.addEventListener("click", function(){
    playersChoice = "scissor";
    playerChoiceDisplay.textContent = `Players Choice: ${playersChoice}`;

    computersChoiceFunc();
    computerChoiceDisplay.textContent = `Computers Choice: ${computersChoice}`;

    roundResult(playersChoice, computersChoice);
    playersScore.textContent = `Players Socre: ${pScore}`;
    computersScore.textContent = `Computers Score: ${cScore}`;

});