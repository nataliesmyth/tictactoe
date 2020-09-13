'use strict'

const store = require('./store')

const onStartGameSuccess = function (response) {
  store.game = response.game
  $('#message').text('Have fun!')
  $('#game-message').html('X Goes First')
  $('.container').show()
  $('#sign-out-button').show()
  $('#change-password-form').hide()
  $('#save-game').show()
  $('.box').empty()
  $('#game-winner').empty()
  $('#game-message').show()
}
const onStartGameFailure = function () {
  $('#game-message').text('Unable to Start Game, Try Again.')
}

module.export = {
    onStartGameSuccess,
    onStartGameFailure
}