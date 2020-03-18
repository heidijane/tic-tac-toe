//creates a new game object filled with game data
export const createNewGame = () => {
    const gameData = {
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