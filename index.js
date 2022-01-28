function computerPlay() {
    pool = 3
    randomValue = Math.floor(Math.random()*pool)
    if (randomValue === 0) {
        move = 'rock'
    } else if(randomValue === 1) {
        move = 'paper'
    } else if(randomValue === 2) {
       move = 'scissors'
    } else {
        move = 'Invalid choice!'
    }
    return move;
}

function playRound(playerChoice, computerSelection) {
    playerSelection = playerChoice.toLowerCase()
    if (playerSelection == computerSelection) {
        result = `It's a draw! You both picked ${playerSelection}`
    // If player wins
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = `You win! ${playerSelection} beats ${computerSelection}`

    // If player loses
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        result = `Something went wrong. Yours:${playerSelection}, Computer:${computerSelection}.`
    }

    return result;
}

function game() {
    playerScore = 0
    computerScore = 0
    for (let i = 0; i < 5; i++) {
        playerMove = prompt("What's your move?")
        computerMove = computerPlay()
        thing = playRound(playerMove, computerMove)
        if (thing.slice(0, 7) === 'You win') {
            playerScore++
            console.log(`You win! ${playerMove} beats ${computerMove}`)
        } else if (thing.slice(0, 8) === 'You lose') {
            computerScore++
            console.log(`You lose! ${computerMove} beats ${playerMove}`)
        } else {
            console.log(`It's a draw! You both picked ${playerMove}`)
            playerScore += 0.5
            computerScore += 0.5
        }
    } 

    if (playerScore > computerScore) {
        finalResult = `You win!  Here are the scores --> You: ${playerScore}, Computer: ${computerScore}`
    } else if (playerScore == computerScore) {
        finalResult = `It's a draw!  Here are the scores --> You: ${playerScore}, Computer: ${computerScore}`
    } else if (playerScore < computerScore) {
        finalResult = `You lose! Here are the scores --> You: ${playerScore}, Computer: ${computerScore}`
    }
    
    return finalResult

}