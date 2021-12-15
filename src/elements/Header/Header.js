import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import wallet_navbar from '../../assets/wallet_navbar.png';
import { ThemeContext } from '../../ThemeContext';
import './Header.css';

export default function Header({ title }) {
    const theme = useContext(ThemeContext);

    return (
        <Navbar collapseOnSelect expand="lg" id="header" className={`${title ? 'navbar-custom-2' : 'navbar-custom'} ${theme.state.darkMode ? 'dark' : 'light'}`}>
            <Container>
                <Navbar.Brand className="header_title fw-bold text-uppercase">{title && title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavLink className='nav-link' to="/" activeClassName="active">Home</NavLink>
                        <Link className='nav-link' to="/">Marketplace</Link>
                        <Link className='nav-link' to="/">Metaverse</Link>
                        <Link className='nav-link' to="/">Whitepaper</Link>
                        <NavLink to="/wallet" className="nav-link" activeClassName="active"><img src={wallet_navbar} alt="wallet" /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
