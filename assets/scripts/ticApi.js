'use strict'

const store = require('./store')
const config = require('./config')

const onStartGame = function (data) {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: {}
    })
  }

module.export = {
    onStartGame
}