import React, { useState } from "react";

const SignUpForm = ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    if (onSignUp) {
      onSignUp({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-group">
        <label htmlFor="signup-name">Имя:</label>
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
          placeholder="Введите ваше имя"
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-email">Email:</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
          placeholder="Введите ваш email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-password">Пароль:</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
          placeholder="Введите пароль"
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-confirm-password">Подтвердите пароль:</label>
        <input
          id="signup-confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="form-input"
          placeholder="Подтвердите пароль"
        />
      </div>
      <button type="submit" className="form-button">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default SignUpForm; 