import { Card, Col, Container, Row } from "react-bootstrap";
import { team_member_1, team_member_2, team_member_3, team_member_4, team_member_5 } from "../../../assets";
import './Team.css';

const cards = [
    {
        id: 1,
        name: "Lady mushi",
        image: team_member_1,
    },
    {
        id: 2,
        name: "shroom",
        image: team_member_2,
    },
    {
        id: 3,
        name: "prat",
        image: team_member_3,
    },
    {
        id: 4,
        name: "xMarn",
        image: team_member_4,
    },
    {
        id: 5,
        name: "rusted bandit",
        image: team_member_5,
    }
]

export default function Team() {
    return (
        <section id="team">
            <Container>
                <h1 className="title pb-5 text-center fw-bold">Team</h1>
                <Row xs={1} md={3} lg={5} className="g-4">
                    {cards.map((card, id) => (
                        <Col key={id}>
                            <Card>
                                <Card.Img variant="top" src={card.image} />
                                <Card.Body>
                                    <Card.Title className="text-center text-capitalize fw-bold">{card.name}</Card.Title>
                                    <Card.Text className="text-center fw-bold">
                                        Art Director
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
