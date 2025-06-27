import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GeographyApi } from "../../entities/GeographyApi";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';
import { useParams } from "react-router";


export default function GamePage() {
    const { topic } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [status, setStatus] = useState(45);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function loadQuestions() {
        try {
            const data = await GeographyApi.getAll(topic);
            setQuestions(data.data);
        } catch (err) {
            setError(err.message);
        }
        }
        loadQuestions();
    }, [topic]);

    useEffect(() => {
    if (status === 0) {
        setStatus((status) => status + 45)
    }

    const timer = setInterval(() => {
        setStatus((status) => status - 1)
    }, 1000)

    // * очистка интервала
    return () => clearInterval(timer)
    }, [status])


    
    const handleAnswerClick = (answer) => {
        const currentQuestion = questions[currentIndex];
        if (answer === currentQuestion.rightAns) {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setStatus(45);
            }else{
                alert('Игра окончена!')
            }
        }else{
            alert('Неправильный ответ')
        }
    };
    
    if (error) return <div className="error-message">{error}</div>;
    if (questions.length === 0) return <div>Загрузка...</div>;
    
    const currentQuestion = questions[currentIndex];
    const answers = currentQuestion?.answer ? JSON.parse(currentQuestion.answer) : [];
    
    return (
        <div className="game-container">
        <ProgressBar animated now={status} max={45} />
        <Stack gap={3}>
            <h2>{currentQuestion?.question}</h2>
            {answers.map((answer, index) => (
            <button 
                key={index}
                className="answer-btn"
                onClick={() => handleAnswerClick(answer)}
            >
                {answer}
            </button>
            ))}
        </Stack>
        </div>
    );
}
