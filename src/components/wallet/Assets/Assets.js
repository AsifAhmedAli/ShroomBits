import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { asset_1, asset_2, asset_3, asset_4, asset_5, card_icon, card_icon_2 } from "../../../assets";
import { ThemeContext } from "../../../ThemeContext";
import './Assets.css';
import { Link } from "react-router-dom";

const cards = [
    {
        id: 1,
        name: "Lady mushi",
        image: asset_1,
        icon: card_icon,
    },
    {
        id: 2,
        name: "shroom",
        image: asset_2,
        icon: card_icon_2,
    },
    {
        id: 3,
        name: "prat",
        image: asset_3,
        icon: card_icon,
    },
    {
        id: 4,
        name: "xMarn",
        image: asset_4,
        icon: card_icon_2,
    },
    {
        id: 15,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },
    {
        id: 25,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },
    {
        id: 55,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },
    {
        id: 52,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },
    {
        id: 61,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },
    {
        id: 7,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },
    {
        id: 8,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },
    {
        id: 9,
        name: "rusted bandit",
        image: asset_5,
        icon: card_icon_2,
    },

]

export default function Assets() {
    const theme = useContext(ThemeContext);
    return (
        <section id="assets" className={`${theme.state.darkMode ? 'dark' : 'light'}`}>
            <div className="content">
                <h3 className="title my-5 text-capitalize">Trending Assets</h3>
                <div className="cards">
                    <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-5">
                        {cards.map((card, id) => (
                            <Col key={id}>
                                <Link to={`/wallet/asset/2`}>
                                    <Card>
                                        <Card.Img variant="top" src={card.image} />
                                        <Card.Body>
                                            <h5>Asset #000</h5>
                                            <div>
                                                <img src={card.icon} alt="not found" />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </section>
    )
}
