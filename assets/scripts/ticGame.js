'use strict'

const ticUi = require('./ticUi')
const ticApi = require('./ticApi')
const getFormFields = require('./../../lib/get-form-fields')
// const store = require('./store')

// Game Functionality
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
    ticApi.saveGame(data)
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
  $('.container').show()
  event.preventDefault()
  over = false
  currentChoice = 'X'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').css('pointer-events', 'auto')
  ticApi.startGame(data)
    .then(ticUi.onStartGameSuccess)
    .catch(ticUi.onStartGameFailure)
}

const onGameHistory = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  ticApi.gameHistory(data)
    .then(ticUi.onGameHistorySuccess)
    .catch(ticUi.onGameHistoryFailure)
}

const onSaveGame = function (event) {
  event.preventDefault()

  ticApi.saveGame(data)
    .then(ticUi.onSaveGameSuccess)
    .catch(ticUi.onSaveGameFailure)
}

// End Game

module.exports = {
  onClick,
  onStartGame,
  onGameHistory,
  onSaveGame
}