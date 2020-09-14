'use strict'

const authEvents = require('./auth/events')

$(() => {
  $('#tic-game').hide()
  $('#sign-out').hide()
  $('#start-game').hide()
  $('#save-game').hide()
  $('#change-password').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
})
