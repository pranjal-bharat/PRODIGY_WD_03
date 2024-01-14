const board = document.getElementById('board')
const boxes = document.getElementsByClassName('box')
const players = ['X', 'O']
let currentPlayer = players[0]
const msg = document.createElement('h2')
msg.textContent = `X's turn!`
msg.style.marginTop = '30px'
msg.style.textAlign='center'
board.after(msg)

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', () => {
        if(boxes[i].textContent !== ''){
            return
        }
        boxes[i].textContent = currentPlayer
        if(win(currentPlayer)) {
            msg.textContent=`Game over!  ${currentPlayer} wins! `
            return
        }
        if(tie()) {
            msg.textContent= `Game is tied!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        if(currentPlayer == players[0]) {
            msg.textContent= `X's turn!`
        } else {
            msg.textContent= `O's turn!`
        }     
    })   
}

function win(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(boxes[a].textContent === currentPlayer && boxes[b].textContent === currentPlayer && boxes[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}

function tie(){
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].textContent === '') {
            return false;
        }
    }
    return true
}

function restart() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = ""
    }
    msg.textContent=`X's turn!`
    currentPlayer = players[0]
}
