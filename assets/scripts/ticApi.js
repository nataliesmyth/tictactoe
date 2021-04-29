'use strict'

const config = require('./config')
const ticStore = require('./ticStore')

const startGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + ticStore.user.token
    },
    data: {}
  })
}

const gameHistory = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + ticStore.user.token
    }
  })
}

const saveGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + ticStore.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + ticStore.user.token
    },
    data: data
  })
}

module.exports = {
  startGame,
  gameHistory,
  saveGame
}
