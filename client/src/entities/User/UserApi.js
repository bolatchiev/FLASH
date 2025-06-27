const API_BASE_URL = 'http://localhost:3000/api';

export const UserApi = {
  // Регистрация пользователя
  async signUp(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Ошибка регистрации');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      throw error;
    }
  },

  // Вход пользователя
  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Ошибка входа');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при входе:', error);
      throw error;
    }
  },

  // Получение информации о пользователе
  async getUserInfo(token) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Ошибка получения данных пользователя');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
      throw error;
    }
  },

  // Выход пользователя
  async logout(token) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Ошибка выхода');
      }

      return true;
    } catch (error) {
      console.error('Ошибка при выходе:', error);
      throw error;
    }
  }
};
