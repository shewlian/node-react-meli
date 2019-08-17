const express = require('express')
const QueryController = require('./controllers/QueryController')
const IdController = require('./controllers/IdController')

const routes = express.Router()

routes.get('/api/items', QueryController.index)
routes.get('/api/items/:productId', IdController.index)

module.exports = routes
