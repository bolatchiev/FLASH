import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";

export default function MainPage() {

  return (
    <div className="main-container">
      <Card className="theme-card">
        <Card.Body>
          <Card.Title>География</Card.Title>
          <Card.Text>Проверьте свои знания в географии</Card.Text>
          <Link to="/game/geography" className="play-btn">Играть</Link>
        </Card.Body>
      </Card>
      <Card className="theme-card">
        <Card.Body>
          <Card.Title>Шутки</Card.Title>
          <Card.Text>Отгадайте шутки и анекдоты</Card.Text>
          <Link to="/game/joke" className="play-btn">Играть</Link>
        </Card.Body>
      </Card>
      <Card className="theme-card">
        <Card.Body>
          <Card.Title>Океан</Card.Title>
          <Card.Text>Вопросы о морях и океанах</Card.Text>
          <Link to="/game/ocean" className="play-btn">Играть</Link>
        </Card.Body>
      </Card>
    </div>

  );
}
