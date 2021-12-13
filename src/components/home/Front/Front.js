import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import front_shrooms from "../../../assets/front_shrooms.png";
import './Front.css';
import Modals from "./Modals";

export default function Front() {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [counter, setCounter] = useState(1);

    const changeModal = () => {
        setModal(!modal);
        setModal2(!modal2);
    }

    const counterIncrement = () => {
        setCounter(counter + 1);
    }

    const counterDecrement = () => {
        setCounter(counter - 1);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <section id="front">
            <Modals modal={modal}
                setModal={setModal}
                modal2={modal2}
                setModal2={setModal2}
                counterIncrement={counterIncrement}
                counterDecrement={counterDecrement}
                counter={counter}
                changeModal={changeModal}
                submitHandler={submitHandler}
            />

            <Container>
                <div className="content">
                    <h1 className="top_title text-uppercase my-4">
                        <span>shroom</span>
                        <span>bits</span>
                    </h1>
                    <img src={front_shrooms}
                        alt="shrooms" />
                    <h2 className="cute_title text-capitalize"><span>cute cross chain</span> <span>nfts</span></h2>
                    <h3 className="sold">1482/1500 of Season 1 Shrooms are sold out!</h3>
                    <div className="front_btns">
                        <Button onClick={() => setModal(true)}>Mint gen0 shrooms</Button>
                        <Button>launch metaverse</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
