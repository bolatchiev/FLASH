import { NavLink } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Выбор темы игры</NavLink>
                </Nav>
                <Nav className="ml-auto">
                    <NavLink to="/authPage" className="nav-link">Регистрация / Вход</NavLink>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default Navigation;