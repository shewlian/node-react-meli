const express = require('express')
const QueryController = require('./controllers/QueryController')

const routes = express.Router()

routes.get('/api/items', QueryController.index)

module.exports = routes
