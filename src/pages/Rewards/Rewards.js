import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './Rewards.css';
import Header from "../../elements/Header/Header";
import { asset_1, asset_2, asset_3, asset_4, card_icon, card_icon_2 } from "../../assets";
import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";

const cards = [
    {
        id: 1,
        name: "SPOR Yield: 3599.00001",
        image: asset_1,
        icon: card_icon,
        color: 'orange'
    },
    {
        id: 2,
        name: "3D Shroom",
        image: asset_2,
        icon: card_icon_2,
        color: 'green'
    },
    {
        id: 3,
        name: "Hat #999",
        image: asset_3,
        icon: card_icon,
        color: 'purple'
    },
    {
        id: 4,
        name: "Glasses 009",
        image: asset_4,
        icon: card_icon_2,
        color: 'blue'
    },

]

export default function Rewards() {
    const theme = useContext(ThemeContext);
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <section id="rewards" className={theme.state.darkMode ? 'dark' : 'light'}>
            {modal ? <div className='custom_modal_layer'>
                <div className="custom_modal">
                    <div className="modal_bottom text-center">
                        <div className="circles">
                            <div className="circle">
                                <div>1</div>
                                <h5 className="text-center text-capitalize">Approve <br />weth</h5>
                            </div>
                            <div className="circle">
                                <div>2</div>
                                <h5 className="text-capitalize text-center">Confirm <br /> Mint</h5>
                            </div>
                        </div>
                        <div className="spinner"></div>
                        <div className="btns">
                            <Button className="bg-danger">Approve</Button>
                            <Button onClick={closeModal}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div> : ''}
            <Header title="shroombits" />
            <h4 className='text-center fw-bold top_title py-3 mb-3'><b>Rewards</b> &nbsp;&nbsp;&nbsp;&nbsp;<span className='fw-normal h5'>Shrooms#0000</span></h4>
            <Container>
                <div className="content">
                    <div className="row justify-content-center mt-5 left-col">
                        <div className="col-lg-8">
                            <h4 className='text-capitalize'>Available Rewards</h4>
                            <div className="cards">
                                <Row xs={1} sm={2} className="g-4">
                                    {cards.map((card, id) => (
                                        <Col key={id}>
                                            <Card>
                                                <Card.Title className="text-center">{card.name}</Card.Title>
                                                <Card.Img variant="top" src={card.image} />
                                                <Card.Body>
                                                    <Button className={`${card.color}`} onClick={handleModal}>
                                                        Claim now
                                                    </Button>
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
