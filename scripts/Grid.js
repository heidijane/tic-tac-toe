/*
    This creates an HTML representation of the tic-tac-toe game on the DOM using an array containing the game data
*/

export const createGrid = (gameData) => {
    return `
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
    `
}