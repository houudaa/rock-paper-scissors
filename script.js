const buttons = document.querySelectorAll("input");
const msg = document.querySelector('#msg-contain');
const playAgainBtn = document.querySelector('button');

let computerScore = 0, playerScore = 0;

buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        playRound(btn.value);
    })
})

function disableBtns() {
    buttons.forEach( btn => {
        btn.disabled = true;
    })
}

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    // getting a random index to get a random choice
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}



function playRound(playerSelection) {
    let result = 2, roundMsg = '';
    let computerSelection = getComputerChoice();
    
    // checking if its a won or lose
    if(playerSelection === 'Rock') { result = (computerSelection === 'Scissors') ? 1 : 0; }
    else if(playerSelection === 'Paper') { result = (computerSelection === 'Rock') ? 1 : 0; }
    else if(playerSelection === 'Scissors') { result = (computerSelection === 'Paper') ? 1 : 0; }

    if (result === 1) {
        playerScore++;
        roundMsg = `<p>You Won! ${playerSelection} beats ${computerSelection}</p><p>Player Score: ${playerScore}</p><p>Computer Score: ${computerScore}</p>`;
        if(playerScore === 5) {
            roundMsg += `<p>You won this game!</p>`;
            playAgainBtn.style.display = 'block';
            disableBtns();
        }
        
    }
    else if (result === 0) {
        computerScore++;
        roundMsg = `<p>You lost, ${playerSelection} is beaten by ${computerSelection}</p><p>Player Score: ${playerScore}<p><p>Computer Score: ${computerScore}</p>`;
        
        if(computerScore === 5) {
            roundMsg += `<br><p>You lost this game!</p>`;
            playAgainBtn.style.display = 'block';
            disableBtns();
        }
    }

    else {
        roundMsg = `<p>It's a tie, ${playerSelection} ties with ${computerSelection}</p>`;
    }
    
    msg.innerHTML = roundMsg;
}

playAgainBtn.addEventListener('click', () => {
    location.reload()
})
















// gameResultsMsgs.appendChild(playAgainBtn);

// playAgainBtn.addEventListener('click', () => {
//     gameResultsMsgs.innerHTML = '';
//     game();
// })



    // 5 rounds of the game
    // for(let i=0; i<5; i++)
    // {

    //     let playerSelection = prompt('Enter a Choice: ');

    //     let computerSelection = getComputerChoice();

    //     // converting the user choice to match the comparison 
    //     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    //     let result = playRound(playerSelection, computerSelection);

    //     if(result === 1)
    //     {
    //         console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
    //         playerScore++;
    //     }
    //     else if(result === 0)
    //     {
    //         console.log(`You lost, ${playerSelection} is beaten by ${computerSelection}`);
    //         computerScore++;
    //     }
    //     else
    //     {
    //         console.log(`It's a tie, ${playerSelection} ties with ${computerSelection}`)
    //     }
    
    // }

    // const rockBtn = document.querySelector('#rock-btn');
// const paperBtn = document.querySelector('#paper-btn');
// const scissorsBtn = document.querySelector('#scissors-btn');


// const roundMsg = document.createElement('p');
// const playerScoreMsg = document.createElement('p');
// const computerScoreMsg = document.createElement('p');
// const lineBreak = document.createElement('br');
// const finalMsg = document.createElement('p');
// const playAgainBtn = document.createElement('button');
// playAgainBtn.textContent = 'Play Again';