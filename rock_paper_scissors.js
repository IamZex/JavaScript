function match(){
    
let gamesPlayed = 0
let points = 0
let playerPoints = points.toFixed(1)
let computerPoints = points.toFixed(1)

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const results = document.querySelector('.results')
const playerScore = document.querySelector('.playerPoints')
const computerScore = document.querySelector('.computerPoints')
const winner =document.querySelector('.winner')

function matchScore(){if (gamesPlayed >= 5){
    if (playerPoints > computerPoints){
        winner.textContent = ('You win!');
    }else if (playerPoints < computerPoints){
        winner.textContent = ('Computer Wins!');
    }else
        winner.textContent = ('Draw!');
}
};

function getRandomInt(max) {
return Math.random() * max;
};

const rock = button1.addEventListener('click',()=>{
    let playerChoice = 'rock'
    console.log(playerChoice);
    playRound(playerChoice);
});

const paper = button2.addEventListener('click',()=>{
    let playerChoice = "paper"
    console.log(playerChoice);
    playRound(playerChoice);
});

const scissors = button3.addEventListener('click',()=>{
    let playerChoice = "scissors"
    console.log(playerChoice);
    playRound(playerChoice);
});

function playRound(playerChoice){
    gamesPlayed++
    
    let computerChoice = Math.round(getRandomInt(3))

    function computerSelection(){
        
        if (computerChoice=== 3){ 
        return "paper"
        }
        else if (computerChoice=== 2){
        return "rock"
        }
        else {
        return "scissors"
        }
    };
let cC = computerSelection()
let pC = playerChoice

/* I want to see who wins here and announce the result */

function whoWon() {
    matchScore();
    console.log(cC);
    if (pC === cC){
        console.log('draw');
        return "Draw";
    }else if (pC === "rock"){
        if (cC === "paper"){
        console.log('You Lose');
        return "You lose";
        }
        else{
        console.log('You Win');
        return "You Win!";
        }
    }
    else if (pC === "paper"){
        if (cC === "scissors"){
            console.log('You Lose');
            return "You Lose";
        
        }else{
            console.log('You Win')
            return "You Win!";
        };
    }else if (pC === "scissors"){
        if (cC === "rock"){
            console.log('You Lose');
            return "You Lose"; 
    }else{
        console.log('You Win');
        return "You Win!";
    }
    
}
     
};
const result =whoWon();

function countWins() {
    if (result === 'Draw'){
        computerPoints = parseFloat(computerPoints) + .5
        playerPoints = parseFloat(playerPoints) + .5
    }else if (result ==="You Win!"){
        playerPoints++
    }else {
        computerPoints ++
    }
    results.textContent = ('Games Played'+' ' + gamesPlayed);
    playerScore.textContent = ('Your Score:'+' '+playerPoints);
    computerScore.textContent = ('Computer Score:'+' '+computerPoints);
};
countWins();
console.log(computerPoints);
console.log(playerPoints);
console.log('games' + ' '+gamesPlayed);
};
}
match();