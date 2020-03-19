//creates a new game object filled with game data
export const createNewGame = () => {
    const gameData = {
        gameOver: false,
        gameWinner: 0,
        currentPlayer: 1,
        turn: 0,
        grid: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ]
    }

    return gameData
}