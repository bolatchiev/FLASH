import React from 'react';
import './Navigation.css';

export default function Navigation({ currentPage, showAuthButtons = true, onLogout, onPageChange, user }) {
  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <header className='header'>
      <div className="header-container">
        <div className="header-left">
          <button
            onClick={() => handlePageChange('main')}
            className={`header_link ${currentPage === 'main' ? 'header_link--active' : ''}`}
          >
            Главная
          </button>
        </div>
        
        <div className="header-right">
          {showAuthButtons && (
            <button
              onClick={() => handlePageChange('auth')}
              className={`header_link ${currentPage === 'auth' ? 'header_link--active' : ''}`}
            >
              Регистрация/Вход
            </button>
          )}

          {user && (
            <div className="header-user">
              <span>Привет, {user.name || user.email}!</span>
              <button onClick={handleLogout} className="logout-button">
                Выйти
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}