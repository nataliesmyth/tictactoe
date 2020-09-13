'user strict'

const getFormFields = require('../../lib/get-form-fields')
const ticApi = require('./ticApi')
const ticUi = require('./ticUi')

const onStartGame = function (event) {
    event.preventDefault()
    document.getElementById('board').classList.add('row', currentChoice)
    const form = event.target
    const data = getFormFields(form)
    ticApi.onStartGame(data)
        .then(ticUi.startGameSuccess)
        .catch(ticUi.startGameFailure)
}

module.export = {
    onStartGame
}