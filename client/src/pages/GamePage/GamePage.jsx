import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GeographyApi } from "../../entities/GeographyApi";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';


export default function GamePage() {
    const [cards, setCards] = useState([]); 
    const [error, setError] = useState("");
    const [status, setStatus] = useState(45);
    const [currentCardIndex, setCurrentCardIndex] = useState(0); 
    
    async function getCard() {
        try {
        const { statusCode, data, error } = await GeographyApi.getAll();
        if (error) {
            setError(error);
            return;
        }
        if (statusCode === 200) {
            setCards(data);
            console.log(data);
        }
        } catch (error) {
        console.log(error);
        setError(error.message);
        }
    }
    useEffect(() => {
        getCard();
    }, []);

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

    const currentCard = cards[currentCardIndex]; 
    const answers = currentCard?.answer ? JSON.parse(currentCard.answer) : [];

    function handleClick(event, answer){
        if(answer === currentCard.rightAns){
            event.target.classList.add('correct')
            setCurrentCardIndex((prevIndex) => prevIndex + 1);
            setStatus(45)
        }else{
            console.log("Неправильно");
        }
    }

    return (
        <>
            {error && <div className="error">{error}</div>} 
            <div className="progressbar-container">
                <ProgressBar animated now={status} max={45} />
            </div>
            <Stack gap={3}>
                {currentCard && (
                    <>
                        <div className="p-2">{currentCard.question}</div>
                        {answers.map((el, index) => (
                            <div key={index} onClick={(event) => handleClick(event, el)} className="p-2">
                                {el}
                            </div>
                        ))}
                    </>
                )}
            </Stack>
        </>
    );
}
