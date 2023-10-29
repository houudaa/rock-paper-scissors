function getComputerChoice() {
    
    const options = ['Rock', 'Paper', 'Scissors'];

    // getting a random index to get a random choice
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    let result;

    // checking if its a won or lose
    if(playerSelection === 'Rock') { result = (computerSelection === 'Scissors') ? 1 : 0; }
    else if(playerSelection === 'Paper') { result = (computerSelection === 'Rock') ? 1 : 0; }
    else if(playerSelection === 'Scissors') { result = (computerSelection === 'Paper') ? 1 : 0; }

    // to check if its a tie return 2 rather than 0 or 1 
    return (computerSelection === playerSelection ? 2 :  result);

}


function game() {

    let computerScore = 0, playerScore = 0;

    // 5 rounds of the game
    for(let i=0; i<5; i++)
    {

        let playerSelection = prompt('Enter a Choice: ');

        let computerSelection = getComputerChoice();

        // converting the user choice to match the comparison 
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        let result = playRound(playerSelection, computerSelection);

        if(result === 1)
        {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
        else if(result === 0)
        {
            console.log(`You lost, ${playerSelection} is beaten by ${computerSelection}`);
            computerScore++;
        }
        else
        {
            console.log(`It's a tie, ${playerSelection} ties with ${computerSelection}`)
        }
    
    }

    if(playerScore > computerScore) { console.log('You won this game!'); }

    else if(playerScore < computerScore) { console.log('You lost this game.'); }

    else { console.log('This is game is a Tie.'); }
}

game();

