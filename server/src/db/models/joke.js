'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Joke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Joke.init(
      {
        question: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        answer: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        rightAnswer: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Joke',
        tableName: 'Jokes',
      }
  );
  return Joke;
};

// роуты временно пропишу здесь, чтобы не нарушать архитектуру
//
const express = require('express');
const { Joke } = require('../db/models');
const router = express.Router();

// получить все
router.get('/', async (req, res) => {
  const jokes = await Joke.findAll();
  res.json(jokes);
});

// 10 случайных
router.get('/random', async (req, res) => {
  const jokes = await Joke.findAll({ order: sequelize.random(), limit: 10 });
  res.json(jokes);
});

// проверка
router.post('/guess', async (req, res) => {
  const { cardId, userAnswer } = req.body;

  const joke = await Joke.findByPk(cardId);
  if (!joke) return res.status(404).json({ message: 'Joke not found' });

  const correct =
      joke.rightAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase();

  res.json({
    correct,
    correctAnswer: joke.rightAnswer,
  });
});


module.exports = router;


// сюда пока jsx

import { useEffect, useState } from 'react';

export default function JokeGame() {
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    fetch('/api/jokes/random')
        .then((res) => res.json())
        .then((data) => setCards(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/jokes/guess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cardId: cards[current].id,
        userAnswer,
      }),
    });
    const result = await res.json();
    setFeedback(result);
  };

  const handleNext = () => {
    setFeedback(null);
    setUserAnswer('');
    setCurrent((prev) => prev + 1);
  };

  if (!cards.length) return <p>Loading cards...</p>;
  if (current >= cards.length) return <p>🎉 Done!</p>;

  return (
      <div>
        <h2>Question {current + 1}</h2>
        <p>{cards[current].question}</p>

        {!feedback ? (
            <form onSubmit={handleSubmit}>
              <input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Your answer"
              />
              <button type="submit">Submit</button>
            </form>
        ) : (
            <div>
              <p>{feedback.correct ? '✅ Correct!' : '❌ Incorrect.'}</p>
              {!feedback.correct && (
                  <p>Right answer: {feedback.correctAnswer}</p>
              )}
              <button onClick={handleNext}>Next</button>
            </div>
        )}
      </div>
  );
}

