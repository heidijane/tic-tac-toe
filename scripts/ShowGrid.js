import { createGrid } from "./Grid.js"

const eventHub = document.querySelector("#container")

export const ShowGrid = (gameData) => {
    eventHub.innerHTML = createGrid(gameData.grid)
}