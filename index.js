function computerPlay() {
    pool = 3
    randomValue = Math.floor(Math.random()*pool)
    if (randomValue === 0) {
        move = 'rock'
    } else if(randomValue === 1) {
        move = 'paper'
    } else if(randomValue === 2) {
       move = 'scissors'
    }
    return move;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        result = `draw`

    // If player wins
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = `win`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = `win`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = `win`

    // If player loses
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        result = `lose`
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        result = `lose`
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        result = `lose`
    }
    
    return result
}

function game(playerSelection, computerSelection) {

        gamePlayed = playRound(playerSelection, computerSelection)
        if (gamePlayed === 'win') {
            msg = `You win! ${playerSelection} beats ${computerSelection}`

            printResult = document.createElement('h2');
            printResult.classList.add('result');
            printResult.textContent = msg
            
            scoreBoard.appendChild(printResult)
            
        } else if (gamePlayed === 'lose') {
            msg = `You lose! ${computerSelection} beats ${playerSelection}`

            printResult = document.createElement('h2');
            printResult.classList.add('result');
            printResult.textContent = msg
            
            scoreBoard.appendChild(printResult)
            
        } else if (gamePlayed === 'draw') {
            playerScore += 0.5
            computerScore += 0.5
            msg = `It's a draw! You both picked ${playerSelection}`

            printResult = document.createElement('h2');
            printResult.classList.add('result');
            printResult.textContent = msg

            scoreBoard.appendChild(printResult)
        }

    return gamePlayed

}

const body = document.querySelector('body');
body.style.cssText = 'display: flex; flex-direction: column; align-items: center'

const heading = document.createElement('h1');
heading.textContent = 'Welcome to the Thunder Dome';
body.appendChild(heading);

const scoreBoard = document.createElement('div');
scoreBoard.style.cssText = 'border: 1px solid black; padding: 10px; margin: 5px';
body.appendChild(scoreBoard);

playerScore = 0
computerScore = 0

const btns = document.querySelectorAll('button');
const jack = btns.forEach(button => button.addEventListener('click', function() {
    if (playerScore <= 5 && computerScore <= 5) {
        roundPlayed = game(this.classList.value, computerPlay())

    if (roundPlayed === 'win') {
        playerScore++
    } else if (roundPlayed === 'lose') {
        computerScore++
    } else if (roundPlayed === 'draw') {
        playerScore += 0.5
        computerScore+= 0.5
    }

    } else {
        if (playerScore > computerScore) {
            finalResult = `You win! Here are the scores --> You: ${playerScore}, Computer: ${computerScore}`
        } else if (playerScore == computerScore) {
            finalResult = `It's a draw! Here are the scores --> You: ${playerScore}, Computer: ${computerScore}`
        } else if (playerScore < computerScore) {
            finalResult = `You lose! Here are the scores --> You: ${playerScore}, Computer: ${computerScore}`
        } 
        finalScore = document.createElement('h1');
        finalScore.style.cssText = 'color: blue; font-weight: 900'
        finalScore.textContent = finalResult;
        scoreBoard.appendChild(finalScore)
    }
}))