const geographyRouter = require('express').Router()
const GeographyController = require('../controllers/Geography.controller')

geographyRouter.get('/:topic', GeographyController.getAll)

module.exports = geographyRouter