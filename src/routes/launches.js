const routes = require('express').Router()
const launchesController = require('../controllers/launches')

routes.get('/futuros', launchesController.getUpcoming)
routes.get('/passados', launchesController.getPast)
routes.get('/proximo', launchesController.getNext)
routes.get('/ultimo', launchesController.getLatest)

module.exports = routes