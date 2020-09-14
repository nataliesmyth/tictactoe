'use strict'

const gameLogic = require('./game_logic')
const getFormFields = require('./../../lib/get-form-fields.js')
const gameApi = require('./game-api')
const ui = require('./game-ui')

const onStartGame = function (event) {
  event.preventDefault()
  document.getElementById('board').classList.add('row', currentChoice)
  const form = event.target
  const data = getFormFields(form)
  gameApi.startGame(data)
    .then(gameUi.onStartGameSuccess)
    .catch(gameUi.onStartGameFailure)
}

const onGameHistory = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.gameHistory(data)
    .then(gameUi.onGameHistorySuccess)
    .catch(gameUi.onGameHistoryFailure)
}

const onSaveGame = function (event) {
  event.preventDefault()

  gameApi.saveGame(data)
    .then(gameUi.onSaveGameSuccess)
    .catch(gameUi.onSaveGameFailure)
}

module.export = {
  onStartGame: onStartGame,
  onGameHistory: onGameHistory,
  onSaveGame: onSaveGame
}
