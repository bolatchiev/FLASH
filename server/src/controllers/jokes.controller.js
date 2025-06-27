const { Joke, sequelize } = require('../db/models');

exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};

exports.getRandomJoke = async (req, res) => {
    try {
        const [joke] = await Joke.findAll({
            order: sequelize.random(),
            limit: 1,
        });

        if (!joke) return res.status(404).json({ message: 'No jokes found' });

        res.json(joke);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.checkGuess = async (req, res) => {
    const { cardId, userAnswer } = req.body;

    const joke = await Joke.findByPk(cardId);
    if (!joke) return res.status(404).json({ message: 'Joke not found' });

    const correct =
        joke.rightAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase();

    res.json({
        correct,
        correctAnswer: joke.rightAnswer,
    });
};
