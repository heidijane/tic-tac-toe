import { ShowGrid } from "./ShowGrid.js"
import { createNewGame } from "./GameData.js"
import { updateGrid } from "./UpdateGrid.js"

const gameData = createNewGame()
ShowGrid(gameData)
updateGrid(gameData)