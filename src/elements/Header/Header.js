import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/attach">Marketplace</Link>
                        <Link className='nav-link' to="/wallet/2">Metaverse</Link>
                        <Link className='nav-link' to="/rewards">Whitepaper</Link>
                        <div className='nav-link'>
                            <Link to="/wallet"><img src={wallet_navbar} alt="wallet" /></Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
