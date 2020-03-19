import { ShowGrid } from "./ShowGrid.js"
import { createNewGame } from "./GameData.js"
import { updateGrid } from "./UpdateGrid.js"

export const startGame = () => {
    const gameData = createNewGame()
    ShowGrid(gameData)
    updateGrid(gameData)
}