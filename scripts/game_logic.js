'use strict'

const gameUi = require('./game-ui')
const gameApi = require('./game-api')
const getFormFields = require('./../../lib/get-form-fields')
const store = require('./store')

// Game Functionality\
let currentChoice = 'X'
let boxEventIndex = null
let over = false
let data = {
  game: {
    cell: {
      index: boxEventIndex,
      value: currentChoice
    },
    over: over
  }
}

const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let gameBoard = ['', '', '', '', '', '', '', '', '']

const onClick = function (event) {
  event.preventDefault()
  $('#message').hide()
  $('#game-message').show()
  const box = event.target
  if ((over === false) && ($(box).text() !== 'x' && $(box).text() !== 'o')) {
    const boxEventIndex = $(box).attr('data-cell-index')

    gameBoard[boxEventIndex] = currentChoice
    $(box).text(currentChoice)

    const data = {
      game: {
        cell: {
          index: boxEventIndex,
          value: currentChoice
        },
        over: over
      }
    }

    whoWon()
    drawGame()
    switchChoice()
    if (over === false) {
      $('#game-message').text("It's " + currentChoice + "'s turn.")
    } else {
      $('#game-message').empty()
    }
    gameApi.saveGame(data)
    $(event.target).css('pointer-events', 'none')
  }
}
// Functions
function switchChoice () {
  if (currentChoice === 'X') {
    currentChoice = 'O'
  } else {
    currentChoice = 'X'
  }
}

const whoWon = function () {
  for (let i = 0; i < possibleWins.length; i++) {
    const winningArray = []
    const singleWin = possibleWins[i]
    winningArray.push(gameBoard[singleWin[0]])
    winningArray.push(gameBoard[singleWin[1]])
    winningArray.push(gameBoard[singleWin[2]])

    if (winningArray[0] === winningArray[1] && winningArray[1] === winningArray[2] && winningArray[0] !== '') {
      $('#game-winner').html(`The Winner is ${currentChoice}!`)
      over = true
    }
  }
}

const drawGame = function() {
  const draw = gameBoard.includes('')
  if (draw !== true && over === false) {
    over = true
    $('#game-message').hide()
    $('#game-winner').html('The Game is a Draw!')
  }
}


// API
const onStartGame = function (event) {
  event.preventDefault()
  over = false
  currentChoice = 'X'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').css('pointer-events', 'auto')
  gameApi.startGame(data)
    .then(gameUi.onStartGameSuccess)
    .catch(gameUi.onStartGameFailure)
}

const onGameHistory = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.gameHistory(data)
    .then(gameUi.onGameHistorySuccess)
    .catch(gameUi.onGameHistoryFailure)
}

const onSaveGame = function (event) {
  event.preventDefault()

  gameApi.saveGame(data)
    .then(gameUi.onSaveGameSuccess)
    .catch(gameUi.onSaveGameFailure)
}



module.exports = {
  onClick: onClick,
  onStartGame: onStartGame,
  onGameHistory: onGameHistory,
  onSaveGame: onSaveGame,

}
