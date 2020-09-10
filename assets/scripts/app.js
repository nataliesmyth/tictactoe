'use strict'

const authEvents = require('./events.js')

// JQUERY EVENT LISTENERS
$(() => {
  // User Authentication
  $('#change-password').hide()
  $('sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Game Authentication
  $('#new-game').on('click', authEvents.onNewGame)
})
