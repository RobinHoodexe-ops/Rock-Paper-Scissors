

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


function getRandomChoice(){
    
    let choice = Math.random();
    choice = Math.floor(choice * 10 ); 
    if(choice >= 3){
        return getRandomChoice(choice);
    }
    return choice;
}



    function getComputerChoice(getRandomChoice,options)
{   
     choice = getRandomChoice();
     
    return options[choice];
}


let compChoice = getComputerChoice(getRandomChoice,options);

 function getHumanChoice(){

    let hChoice =  prompt("rock,paper,scissors");
    return hChoice;
 }

 hChoice = getHumanChoice();

function playRound(humanChoice,computerChoice){

    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == computerChoice){
        return "its a tie";
    }
    if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        return "you lose";
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        return "you win";
    }
    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        return "you win";
    }
    if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        return "you lose";
    }
    
}

let game = playRound(hChoice,compChoice);


console.log(hChoice);
console.log(compChoice);



console.log(game);
console.log("your score",humanScore);
console.log("computer score",computerScore);