const oceanRouter = require('express').Router()
const OceanController = require('../controllers/Ocean.controllers')


oceanRouter.get('/', OceanController.getAll)
oceanRouter.get('/:id', OceanController.getOne)


module.exports = oceanRouter