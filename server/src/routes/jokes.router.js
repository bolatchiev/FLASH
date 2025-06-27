const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');

// const validateGuess = require('../middlewares/validateGuess');

router.get('/', jokesController.getAll);

module.exports = router;
