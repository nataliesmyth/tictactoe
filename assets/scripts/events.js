'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./store')

$(() => {
  authEvents.addHandlers()

  const winningCombos = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [0, 3, 6], 
      [1, 4, 7],
      [2, 4, 6],
      [3, 4, 5],
      [2, 5, 8],
      [6, 7, 8]      
      ]
let win
let board
let turn = 'X'

const squares = Array.from(document.querySelectorAll('#board div'))

document.getElementById('board').addEventListener('click', handleTurn)
const messages = document.querySelector('h3')
document.getElementById('reset-button').addEventListener('click', init)

// game functions
function getWinner () {
  let winner = null
  winingCombos.forEach(function(combo, index) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    })
    return winner ? winner : board.includes('') ? null : 'T'
}

function handleTurn () {
  const playerX = squares.findIndex(function(square) {
    return square === event.target
  })
  board[playerX] = turn
  turn = turn === 'X' ? 'O' : 'X'
  win = getWinner()
  render()
}

function init() {
  board = [
  '', '', '',
  '', '', '',
  '', '', ''
  ]
  render()
}

function render () {
  board.forEach(function(mark, index) {
// this moves the value of the board item into the squares[playerX]
  squares[index].textContent = mark
  })
  messages.textContent = win === 'T' ? `It's a tie!!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`
}

init()

// User Auth FNs
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // $('#message-B').empty()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers,
  onSignOut,
  onSignUp,
  onSignIn,
  onChangePassword
}})