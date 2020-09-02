'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const config = require('./config')
const store = require('./store')
// const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// const getFormFields = require('..../lib/get-form-fields.js')

// jQuery method (runs code after HTML)
// event listeners go here
$(() => {
  $('#create-user').on('submit', function (event) {
    event.preventDefault()
  
    const form = event.target
    const userData = getFormFields(form)
    console.log(userData) // returned JavaScript object
  })
  // authEvents.addHandlers()
})
