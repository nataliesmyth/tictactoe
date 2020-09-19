'use strict'

const authEvents = require('./auth/events')
const ticGame = require('./ticGame')


$(() => {
  $('.container').hide()
  $('#sign-out').hide()
  $('#save-game').hide()
  $('#change-password').hide()
  $('#start-game-button').hide()
  $('#game-history').hide()

  // User Auth
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // Game Auth
  $('#start-game-button').on('click', ticGame.onStartGame)
  $('#game-history').on('click', ticGame.onGameHistory)
  $('#save-game').on('click', ticGame.onSaveGame)
  $('.box').on('click', ticGame.onClick)
})
