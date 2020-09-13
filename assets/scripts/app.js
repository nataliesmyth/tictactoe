'use strict'

const authEvents = require('./auth/events')
const ticGame = require('./ticGame')

$(() => {
  $('#tic-game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
})