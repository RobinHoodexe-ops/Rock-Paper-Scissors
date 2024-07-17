

const options = ["rock", "paper", "scissors"];



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


console.log(compChoice);