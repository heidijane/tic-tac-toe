/*
    This creates an HTML representation of the tic-tac-toe game on the DOM using an array containing the game data
*/

const eventHub = document.querySelector("#container")

export const createGrid = (gameData) => {

    return `
        <div id="wrapper">
            <table id="grid">

                <tr>    
                    <td id="grid--a1" class="pointer">${gameData[0]}</td>
                    <td id="grid--a2" class="pointer">${gameData[1]}</td>
                    <td id="grid--a3" class="pointer">${gameData[2]}</td>
                </tr>

                <tr>
                    <td id="grid--b1" class="pointer">${gameData[3]}</td>
                    <td id="grid--b2" class="pointer">${gameData[4]}</td>
                    <td id="grid--b3" class="pointer">${gameData[5]}</td>
                </tr>
    
                <tr>
                    <td id="grid--c1" class="pointer">${gameData[6]}</td>
                    <td id="grid--c2" class="pointer">${gameData[7]}</td>
                    <td id="grid--c3" class="pointer">${gameData[8]}</td>
                </tr>

            </table>
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