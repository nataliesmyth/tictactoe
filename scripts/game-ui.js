'use strict'

const gameStore = require('./game-store')
const store = require('./store')
const gameLogic = require('./game_logic')

const onStartGameSuccess = function (response) {
  gameStore.game = response.game
  $('#message').text('Good Luck, Have Fun ' + store.user.email)
  $('#game-message').html('X Goes First')
  $('.container').show()
  $('#sign-out-button').show()
  $('#change-password-form').hide()
  $('#save-game').show()
  $('.box').empty()
  $('#game-winner').empty()
  $('#game-message').show()
  $('#game-history1').empty()
  $('#game-history2').empty()
  $('#game-history').hide()
}
const onStartGameFailure = function () {
  $('#game-message').text('Unable to Start Game, Try Again.')
}

const onGameHistorySuccess = function (data) {
  $('#game-history1').text('Here is your game history ' + store.user.email)
  $('#game-history2').text('You have played ' + data.games.length + ' game(s) ')
}

const onGameHistoryFailure = function () {
  $('#game-message').text('Failed to load game history, try again.')
}
const onSaveGameSuccess = function (response) {
  $('#game-message').show()
  $('#game-message').text('You have successfully saved your game ' + store.user.email)
}
const onSaveGameFailure = function () {
  $('#game-message').text('Unable to Save Game, Try Again.')
}

const onWinningGame = function (currentChoice) {
  $('#message').text(currentChoice, ' is the winner!!!!!')
}

module.exports = {
  onStartGameSuccess: onStartGameSuccess,
  onStartGameFailure: onStartGameFailure,
  onGameHistorySuccess: onGameHistorySuccess,
  onGameHistoryFailure: onGameHistoryFailure,
  onSaveGameSuccess: onSaveGameSuccess,
  onSaveGameFailure: onSaveGameFailure,
  onWinningGame: onWinningGame
}
