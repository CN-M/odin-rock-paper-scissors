
const pool = 4

function computerPlay() {
    randomValue = Math.floor(Math.random()*numbers)
    if (randomValue === 1) {
        alert('Rock!')
    } else if(randomValue === 2) {
        alert('Paper!')
    } else if(randomValue === 3) {
        alert('Scissors!')
    }
}
