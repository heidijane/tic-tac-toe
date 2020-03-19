/*
    This creates an HTML representation of the tic-tac-toe game on the DOM using an array containing the game data
*/

const eventHub = document.querySelector("#container")

export const createGrid = (gameData) => {
    return `
        <div id="wrapper">
            <div id="grid">

                <div id="grid--a1">${gameData[0]}</div>
                <div id="grid--a2">${gameData[1]}</div>
                <div id="grid--a3">${gameData[2]}</div>

                <div id="grid--b1">${gameData[3]}</div>
                <div id="grid--b2">${gameData[4]}</div>
                <div id="grid--b3">${gameData[5]}</div>
    
                <div id="grid--c1">${gameData[6]}</div>
                <div id="grid--c2">${gameData[7]}</div>
                <div id="grid--c3">${gameData[8]}</div>

            </div>
            <div id="gameText">
                Player 1's Turn
            </div>
        </div>
    `
}

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id.startsWith('grid--')) {
        const [prefix, box] = clickEvent.target.id.split('--')
        const clickedSquare = box

        const updateGameData = new CustomEvent('gridSquareClicked', {
            detail: {
                box: clickedSquare
            }
        })

        eventHub.dispatchEvent(updateGameData)
    }
})