import { startGame } from "./CreateNewGame.js"

const eventHub = document.querySelector('#container')

export const createNewGameButton = () => {
    return `
        <div><button id="newGameButton">Start New Game</button></div>
    `
}

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id == "newGameButton") {
        startGame()
    }
})