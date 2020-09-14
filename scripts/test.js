function gameFinish () { // determines when the game should be over
  for (let i = 0; i < winningCombos.length; i++) { // loops through my winning combos array
    const checkWin = winningCombos[i] // putting all iterations of my winning combos array into a var
    let search1 = gameBoard[checkWin[0]] // crosschecking all possibilites of the winning combos array against the gameBoard possibilites
    let search2 = gameBoard[checkWin[1]]
    let search3 = gameBoard[checkWin[2]]


    if (search1 === search2 && search2 === search3 && search1 !== '') {
      currentGameOver = true
    }

    if (currentGameOver === true) { // if this scenario is true
      $('#message1').text(currentPlayer + ' wins!')
      activeGame = false // the game is actually over
    }

    let currentGameTied = !gameBoard.includes('')
    if (currentGameTied === true && activeGame === true) {
      $('#message1').text('The Game has been tied! Play again!')
      activeGame = false
    }
  }
  whosTurn()
}
