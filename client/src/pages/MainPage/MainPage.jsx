import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
import { GeographyApi } from "../../entities/GeographyApi";
import { useEffect } from "react";

export default function MainPage() {
  const [card, setCard] = useState([]);
  const [error, setError] = useState("");

  async function getCard() {
    try {
      const { statusCode, data, error } = await GeographyApi.getAll();
      if (error) {
        setError(error);
        return;
      }
      if (statusCode === 200) {
        setCard(data);
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

  return (
    <>
    <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>География</Card.Title>
            <Card.Text>Крута класна ауе</Card.Text>
            <Link to="/game">Играть</Link>
          </Card.Body>
        </Card>
    </div>
        <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Шутки</Card.Title>
            <Card.Text>Крута класна ауе</Card.Text>
            <Link to="/game">Играть</Link>
          </Card.Body>
        </Card>
    </div>
        <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Океан</Card.Title>
            <Card.Text>Крута класна ауе</Card.Text>
            <Link to="/game">Играть</Link>
          </Card.Body>
        </Card>
    </div>
    </>
  );
}
