const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');
const {getRandomJoke} = require("../controllers/jokes.controller");
// const validateGuess = require('../middlewares/validateGuess');

router.get('/', jokesController.getAllJokes);
router.get('/random', getRandomJoke);
router.post('/guess', /* validateGuess, */ jokesController.checkGuess);

module.exports = router;

