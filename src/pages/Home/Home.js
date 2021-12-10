import Details from '../../components/home/Details/Details';
import Front from '../../components/home/Front/Front';
import Header from '../../elements/Header/Header';
import Roadmap from '../../components/home/Roadmap/Roadmap';
import Team from '../../components/home/Team/Team';
import Video from '../../components/home/Video/Video';
import { discord } from '../../assets'
import Footer from '../../components/home/Footer/Footer';

import './Home.css';

export default function Home() {
    return (
        <div id="home">
            <img className="discord_tag" src={discord} alt="discord contact" />
            <Header />
            <Front />
            <Video />
            <Details />
            <Roadmap />
            <Team />
            <Footer />
        </div>
    )
}
