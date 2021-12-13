import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { asset_1, asset_2, asset_3, asset_4, asset_5, card_icon, card_icon_2 } from '../../assets';
import './Attachment.css';
import Header from '../../elements/Header/Header';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

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

export default function Attachment() {
    const theme = useContext(ThemeContext);

    return (
        <section id="attachment" className={theme.state.darkMode ? `dark` : `light`}>
            <Header title="shroombits" />
            <h4 className='text-center fw-bold top_title py-3 mb-3'>Attaching Assets Tool &nbsp;&nbsp;&nbsp;&nbsp;<span className='fw-normal h5'>Shrooms#0000</span></h4>
            <Container>
                <div className="content">
                    <div className="row justify-content-between mt-5 left-col">
                        <div className="col-lg-8">
                            <div className='left_col_top'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Type &nbsp;
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search this blog" />
                                    <div class="input-group-append">
                                        <button class="btn" type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="cards">
                                <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
                                    {cards.map((card, id) => (
                                        <Col key={id}>
                                            <Card>
                                                <Card.Img variant="top" src={card.image} />
                                                <Card.Body>
                                                    <h6>Asset #000</h6>
                                                    <div>
                                                        <Button>
                                                            Attach
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                        <div className="col-lg-4 right-col order-sm-last order-first mb-4">
                            <div className='preview'>
                                <div className='right-col-img'>
                                    <img src={asset_1} alt="shroom" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}
