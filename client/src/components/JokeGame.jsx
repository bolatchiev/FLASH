
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

