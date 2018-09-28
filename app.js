//pulls .cells from HTML
let cells = document.querySelectorAll('.cell');

//pulls body from HTML
let body = document.querySelector('#body');

//pulls result id
let result = document.querySelector('#result')

//adds click event to cells and calls function cellClicked
cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

//adds click event to body
body.addEventListener("click", resetCheck);

//counts clicks after game is over
let counter = 0;

//counts number of turns
let turnCounter = 0;

//keeps track of each player's actions
let playerX = [];
let playerO = [];

//checks if Player X won
function checkPlayerX(possibleWinningSet) {
    //return possibleWinningSet.every(i => playerX.includes(i))
    return possibleWinningSet.every(function(i){
        if (playerX.includes(i)) {
            return true;
        }
    })
}

//checks if Player O won
function checkPlayerO(possibleWinningSet) {
    return possibleWinningSet.every(function(i){
        if (playerO.includes(i)) {
            return true;
        }
    })
}

//winning combos
const winCombosArray = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], ["1", "5", "9"], ["3", "5", "7"]];

function cellClicked(e) {
    //checking whether cell has been clicked already
    if (e.target.textContent === "") {
        //adds either X or O in cell
        if (turnCounter % 2 === 0) {
            playerX.push(e.target.id);
            e.target.textContent = "X";
        } else {
            playerO.push(e.target.id);
            e.target.textContent = "O";
        }
        turnCounter ++;
    } 
    // check Player X win, Player O win, Draw
    if (winCombosArray.some(checkPlayerX)) {
        result.textContent = "Player X wins!";
        //isGameOver = true;
        //gameOver();   
        ++counter;   
    } else if (winCombosArray.some(checkPlayerO)) {
        result.textContent = "Player O wins!";
        //isGameOver = true;
        //gameOver();
        ++counter;
    } else if (turnCounter === 9) {
        result.textContent = "It's a draw!";
        //isGameOver = true;
        //gameOver();
        ++counter;
    }
}

//reset board
function resetCheck() {
    if (counter >1) {
        playerX = [];
        playerO = [];
        turnCounter = 0;
        counter = 0;
        result.textContent = "";
        cells.forEach(function(i) {
            i.textContent = "";
        });
    }
}

