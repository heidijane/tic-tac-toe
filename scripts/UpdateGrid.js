import { updatePlayer, updateTurn, updateGridArray, getKey, checkWinStatus, endGame } from "./GameFunctions.js"

const eventHub = document.querySelector('#container')

export const updateGrid = (gameData) => {

    eventHub.addEventListener("gridSquareClicked", event => {
        //only allow click if game hasn't ended already
        if (gameData.gameOver === false) {
            const clickedSquare = event.detail.box
            const squareToUpdate = document.querySelector("#grid--" + clickedSquare)

            //make sure players can't click on the same square
            if (gameData.grid[getKey(clickedSquare)] === '') {

                let symbol = ''

                if (gameData.currentPlayer === 1) {
                    symbol = 'x'
                } else {
                    symbol = 'o'
                }

                squareToUpdate.innerHTML = `<span class="grid--${symbol}">${symbol}</span>`

                gameData.grid = updateGridArray(clickedSquare, gameData.grid, symbol)

                gameData.turn = updateTurn(gameData.turn)

                if (gameData.turn > 8) {
                    //game is tied, end game
                    endGame(gameData, 0)
                } else {
                    //check to see if anyone has won the game
                    if (checkWinStatus(gameData.grid)) {
                        endGame(gameData, gameData.currentPlayer)
                    } else {
                        gameData.currentPlayer = updatePlayer(gameData.currentPlayer)
                    }
                }

            }
        }
    })

}