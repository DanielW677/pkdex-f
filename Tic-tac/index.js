let gameState = {
    gameBoard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    player1: 'nameOfPlayer1',
    player2: 'nameOfPlayer2'
}
const gridDiv = document.getElementById("fullGrid");

function ticTacToe() {
    for (let numOfRowsMade = 0; numOfRowsMade < gameState.gameBoard.length; numOfRowsMade++) {
        let newRowElement = document.createElement("div");
        newRowElement.classList.add("gridItem");
        let currentJSRow = gameState.gameBoard[numOfRowsMade]; 

        for (let numOfCellsMade = 0; numOfCellsMade < currentJSRow.length; numOfCellsMade++) {
            let newCellElement = document.createElement("div");
            newCellElement.classList.add("gridItem"); 

            if (currentJSRow[numOfCellsMade] != null) {
                newCellElement.textContent = currentJSRow[numOfCellsMade]; 
            } else {
                newCellElement.textContent = "empty"
            }

            newRowElement.appendChild(newCellElement)
        }

            gridDiv.appendChild(newRowElement); 
    }
};




document.addEventListener('DOMContentLoaded', ticTacToe)

