// a function to get the computer choice againt the player randomly
function getComputerChoice() {
    
    // a list of the choices
    const options = ['Rock', 'Paper', 'Scissors'];

    // getting a random index to get a random choice
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// a function that takes player & computer selection and return the result
function playRound(playerSelection, computerSelection) {
    
    let result;

    // checking if its a won, lose, or a tie using using booleans so it return 1 for winning, 0 for losing, and otherwise its a tie
    if(playerSelection === 'Rock') { result = (computerSelection === 'Scissors') ? 1 : 0; }
    else if(playerSelection === 'Paper') { result = (computerSelection === 'Rock') ? 1 : 0; }
    else if(playerSelection === 'Scissors') { result = (computerSelection === 'Paper') ? 1 : 0; }

    // if it's a tie return a value differ than 0 or 1 to check indicate tieness in the game
    return (computerSelection === playerSelection ? 2 :  result);

}


// Main function of the game
function game() {

    // two variables to store the player and computer score to check the final winner
    let computerScore = 0, playerScore = 0;

    // Making a 5 rounds of the game
    for(let i=0; i<5; i++)
    {

        // asking the user to enter a choice 
        let playerSelection = prompt('Enter a Choice: ');

        // Calling the getCompterChoice() function to get the computer choice randomly
        let computerSelection = getComputerChoice();

        // converting the user choice to match the comparison 
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        // calling the playRound function and storing the returned result
        let result = playRound(playerSelection, computerSelection);

        // checking the round winner, printing the round result, and updating the score
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

    // Checking the final winner of the game after 5 rounds
    if(playerScore > computerScore) { console.log('You won this game!'); }
    else if(computerScore > playerScore) { console.log('You lost this game.'); }
    else { console.log('This is game is a Tie.'); }
}

game();

