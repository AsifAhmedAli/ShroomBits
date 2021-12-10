import './Video.css';
import { video_thumbnail } from '../../../assets';

export default function Video() {
    return (
        <div id="front_video">
            <div className="content">
                <video controls poster={video_thumbnail}>
                    <source src="https://shroombits.io/videos/Haunted_Shrooms.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
