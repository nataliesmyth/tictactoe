'use strict'
const store = require('./../store')
// const ticGame = require('./../ticGame')

const onSignUpSuccess = function (response) {
  $('#message').text('You have successfully signed up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('You have successfully signed in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password').trigger('reset')
  $('#sign-out-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#game-message').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#start-game-button').show()
  $('#game-history').show()
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed, please try again')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password').trigger('reset')
  $('#sign-out-form').trigger('reset')
  $('#sign-in-form').show()
  $('#change-password').hide()
}
const onChangePasswordSuccess = function (response) {
  $('#message').text('You have successfully changed your password ' + store.user.email)
  $('#change-password').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-out-form').trigger('reset')
  $('#sign-in-form').hide()
}
const onChangePasswordFailure = function () {
  $('#message').text('Failed to change password, try again please.')
  $('#change-password').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-out-form').trigger('reset')
}
const onSignOutSuccess = function (response) {
  $('#message').show()
  $('#message').text('You have successfully signed out ' + store.user.email)
  $('#sign-out-form').trigger('reset')
  $('#change-password').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#change-password').show()
  $('.container').hide()
  $('#sign-out                        ').hide()
  $('#sign-out                        ').hide()
  $('#save-game').hide()
  $('#change-password').hide()
  $('#start-game-button').hide()
  $('#game-history').hide()
  $('#game-winner').empty()
  $('#game-message').empty()
}
const onSignOutFailure = function () {
  $('#message').text('Failed to sign out, try again')
  $('#sign-out-form').trigger('reset')
  $('#change-password').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
