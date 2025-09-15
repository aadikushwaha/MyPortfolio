const express = require('express')
const Router = express.Router()
const indexController = require('../Controller/indexController')
Router.post('/', indexController.register)
// Router.post('/test',indexController.test)

module.exports = Router