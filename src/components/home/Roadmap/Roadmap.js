import { Container } from "react-bootstrap";
import { map } from '../../../assets';
import './Roadmap.css';

export default function Roadmap() {
    return (
        <section id="roadmap">
            <Container>
                <div className="content">
                    <h1 className="title text-capitalize text-center fw-bold">Sales Roadmap</h1>
                    <div className="roadmap-image">
                        <img src={map} alt="roadmap" width="100%" height="100%" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
