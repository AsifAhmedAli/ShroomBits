import { Button, Container } from "react-bootstrap";
import front_shrooms from "../../../assets/front_shrooms.png";
import './Front.css';

export default function Front() {
    return (
        <section id="front">
            <Container>
                <div className="content">
                    <h1 className="top_title text-uppercase my-4">
                        <span>shroom</span>
                        <span>bits</span>
                    </h1>
                    <img src={front_shrooms} alt="shrooms" />
                    <h2 className="cute_title text-capitalize"><span>cute cross chain</span> <span>nfts</span></h2>
                    <h3 className="sold">1482/1500 of Season 1 Shrooms are sold out!</h3>
                    <div className="front_btns">
                        <Button>Mint gen0 shrooms</Button>
                        <Button>launch metaverse</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
