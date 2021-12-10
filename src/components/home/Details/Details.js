import { shroom_detail_1, shroom_detail_2, shroom_detail_3, shroom_detail_4 } from '../../../assets';
import ShroomDetail from './ShroomDetail';
import './Details.css';
import { useEffect, useState } from "react"

const shrooms = [
    {
        id: 1,
        text: "Each Shroom is a unique ERC721, with  randomised traits. The Gen0 Collection will only ever have 8,950 Shrooms!",
        image: shroom_detail_1,
        className: "shroom-gradient-1"
    },
    {
        id: 2,
        text: "Each Shroom is a unique ERC721, with  randomised traits. The Gen0 Collection will only ever have 8,950 Shrooms!",
        image: shroom_detail_2,
        className: "shroom-gradient-2"
    },
    {
        id: 3,
        text: "Each Shroom is a unique ERC721, with  randomised traits. The Gen0 Collection will only ever have 8,950 Shrooms!",
        image: shroom_detail_3,
        className: "shroom-gradient-3"
    },
    {
        id: 4,
        text: "Each Shroom is a unique ERC721, with  randomised traits. The Gen0 Collection will only ever have 8,950 Shrooms!",
        image: shroom_detail_4,
        className: "shroom-gradient-4"
    }
];

export default function Details() {
    const [gridMobile, setgridMobile] = useState(typeof window !== 'undefined' && window.matchMedia("(max-width: 820px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 820px)").addEventListener('change', e => {
            setgridMobile(e.matches);
        });
    }, [])

    return (
        <section id="details">
            {shrooms.map((shroom, index) => (
                <div className={`content ${shroom.className}`} key={index}>
                    <div className="custom_container">
                        <ShroomDetail id={index} text={shroom.text} image={shroom.image} gridMobile={gridMobile} />
                    </div>
                </div>
            ))}
        </section>
    )
}
