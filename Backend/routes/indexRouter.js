var express = require('express')
var Router =  express.Router()
var indexController  = require('../Controller/indexController')
// Router.get('/about',indexController.about)
// Router.get ('/',indexController.index)
Router.post('/',indexController.register)

module.exports = Router