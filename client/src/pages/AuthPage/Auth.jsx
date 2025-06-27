import React, { useState } from 'react';
import LoginForm from '../../form/LoginForm/LoginForm';
import SignUpForm from '../../form/SignUpForm/SignUpForm';
import Navigation from '../../widgets/Navigation/Naigation';
import Footer from '../../widgets/Footer/Footer';
import { UserApi } from '../../entities/User/UserApi';
import './Auth.css';

const AuthPage = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (credentials) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await UserApi.login(credentials);
      console.log('Успешный вход:', response);
   
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
     
      if (onLoginSuccess) {
        onLoginSuccess(response);
      }
    } catch (error) {
      setError('Ошибка входа. Проверьте email и пароль.');
      console.error('Ошибка входа:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (userData) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await UserApi.signUp(userData);
      console.log('Успешная регистрация:', response);
      alert('Регистрация успешна! Теперь вы можете войти.');
      setIsLogin(true);
    } catch (error) {
      setError('Ошибка регистрации. Возможно, пользователь с таким email уже существует.');
      console.error('Ошибка регистрации:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className="auth-page">
      <Navigation 
        currentPage="auth"
        showAuthButtons={false}
      />
      
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1>{isLogin ? 'Вход в систему' : 'Регистрация'}</h1>
              <p>{isLogin ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            <div className="auth-form-container">
              {isLogin ? (
                <LoginForm onLogin={handleLogin} />
              ) : (
                <SignUpForm onSignUp={handleSignUp} />
              )}
            </div>
            
            <div className="auth-toggle">
            </div>
            
            {loading && (
              <div className="loading-indicator">
                Загрузка...
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthPage;
