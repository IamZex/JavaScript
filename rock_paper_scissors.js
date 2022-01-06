let gamesPlayed = 0
let points = 0.
points = points.toFixed(1)

function rock_paper_scissors(){ 
    for (gamesPlayed=0; gamesPlayed < 6;gamesPlayed++ ){
        computerPlay()
    };
};
function computerPlay(){

function getRandomInt(max) {
return Math.random() * max;
};

/* I want the player to choose an imput here
*/
let playerChoice = prompt("Rock Paper Scissors?").toLowerCase()

if (playerChoice === "rock"){
    alert("You chose Rock");
}else if (playerChoice === "paper"){
    alert("You chose Paper");
}else if (playerChoice === "scissors"){
    alert("You chose Scissors");
}else{alert("What?")};

/*here I want the computer to choose*/
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
let cC =computerSelection()
let pC = playerChoice

/* I want to see who wins here and announce the result */

function whoWon() {
    if (pC === cC){
        return "Draw"
    }else if (pC === "rock"){
        if (cC === "paper"){
        return "You lose"
        }else return "You Win!"
    }else if (pC === "paper"){
        if (cC === "scissors"){
        return "You Lose"
        }else return "You Win!"
    }else if (pC === "scissors"){
        if (cC === "rock"){
        return "You Lose"};
    }else return "You Win!"
};
    const result =whoWon();

    function countWins() {
        if (result === 'Draw'){
           points = parseFloat(points) + .5
        }else if (result ==="You Win!"){
           points++
        }else {return points}
    };




console.log(result);
countWins();
console.log('gamesPlayed'+' ' + gamesPlayed)
console.log('points' +' ' +points)

};
rock_paper_scissors();

