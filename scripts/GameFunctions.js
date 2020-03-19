//updates the total number of clicks
export const updateTurn = (turn) => {
    return (turn + 1)
}

//switches from player 1 to player 2
export const updatePlayer = (player) => {
    let currentPlayer = ""
    const gameTextContainer = document.querySelector("#gameText")

    if (player == 1) {
        currentPlayer = 2
    } else {
        currentPlayer = 1
    }

    gameTextContainer.innerHTML = `Player ${currentPlayer}'s Turn`

    return currentPlayer
}

//matches the grid array key with a clicked square in the format of a1, c3, etc.
export const getKey = (square) => {
    switch (square) {
        case "a1":
            return 0
            break;
        case "a2":
            return 1
            break;
        case "a3":
            return 2
            break;
        case "b1":
            return 3
            break;
        case "b2":
            return 4
            break;
        case "b3":
            return 5
            break;
        case "c1":
            return 6
            break;
        case "c2":
            return 7
            break;
        case "c3":
            return 8
            break;
    }
}

//updates the array containing the grid data
export const updateGridArray = (clickedSquare, grid, symbol) => {

    grid[getKey(clickedSquare)] = symbol

    return grid
}

//checks to see if one of the players won the game
export const checkWinStatus = (grid) => {
    const a1 = grid[0]
    const a2 = grid[1]
    const a3 = grid[2]
    const b1 = grid[3]
    const b2 = grid[4]
    const b3 = grid[5]
    const c1 = grid[6]
    const c2 = grid[7]
    const c3 = grid[8]

    //horizontal wins
    if (a1 === a2 && a2 === a3 && a1 !== '') {
        return true
    }

    if (b1 === b2 && b2 === b3 && b1 !== '') {
        return true
    }

    if (c1 === c2 && c2 === c3 && c1 !== '') {
        return true
    }

    //vertical wins
    if (a1 === b1 && b1 === c1 && a1 !== '') {
        return true
    }

    if (a2 === b2 && b2 === c2 && a2 !== '') {
        return true
    }

    if (a3 === b3 && b3 === c3 && a3 !== '') {
        return true
    }

    //diagonal wins
    if (a1 === b2 && b2 === c3 && a1 !== '') {
        return true
    }

    if (c1 === b2 && b2 === a3 && c1 !== '') {
        return true
    }

}

//ends game and shows alert message letting user know who wins
export const endGame = (gameData, winner) => {
    const gameTextContainer = document.querySelector("#gameText")
    gameData.gameOver = true;

    if (winner === 0) {
        gameTextContainer.innerHTML = `It's a tie...`
    } else {
        gameTextContainer.innerHTML = `Player ${winner} Wins!`
    }

}