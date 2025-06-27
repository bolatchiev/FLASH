import './Navigation.css';
import { NavLink } from 'react-router';

export default function Navigation() {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          `header_link ${isActive ? 'header_link--active' : ''}`
        }
      >
        Главная
      </NavLink>

      <NavLink
        to='../pages/Authpage/AuthPage'
        className={({ isActive }) =>
          `header_link ${isActive ? 'header_link--active' : ''}`
        }
      >
        Регистрация/Вход
      </NavLink>

      <NavLink
        to='/tasks'
        className={({ isActive }) =>
          `header_link ${isActive ? 'header_link--active' : ''}`
        }
      >
        Задачи
      </NavLink>
    </header>
  );
}