'use strict'

const getFormFields = require('./../../lib/get-form-fields.js')
const ticApi = require('./ticApi')
const ticUi = require('./ticUi')
const ticGame = require('./ticGame')

const onStartGame = function (event) {
  event.preventDefault()
  document.getElementById('board').classList.add('row', currentChoice)
  const form = event.target
  const data = getFormFields(form)
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

module.export = {
  onStartGame,
  onGameHistory,
  onSaveGame
}
