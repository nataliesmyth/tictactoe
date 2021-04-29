'use strict'

const ticGame = require('./ticGame')
const ticStore = require('./ticStore')
const ticUi = require('./ticUi')
const config = require('./config')
const store = require('./store')

const startGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const gameHistory = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const saveGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + ticStore.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  startGame: startGame,
  gameHistory: gameHistory,
  saveGame: saveGame
}
