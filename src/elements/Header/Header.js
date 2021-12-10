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
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#market">Marketplace</Nav.Link>
                        <Nav.Link href="#metaverse">Metaverse</Nav.Link>
                        <Nav.Link href="#whitepaper">Whitepaper</Nav.Link>
                        <div className='nav-link'>
                            <Link to="/"><img src={wallet_navbar} alt="wallet" /></Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
