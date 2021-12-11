import { Container } from "react-bootstrap";
import './Footer.css';

export default function Footer() {
    return (
        <footer id="home_footer">
            <Container>
                <div className="social_icons">
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://medium.com/"><i className="fab fa-medium-m"></i></a>
                </div>
            </Container>
        </footer>
    )
}
