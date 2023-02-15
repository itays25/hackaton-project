import React, { useState, useRef, useContext } from 'react';
import { Storage } from '../App';

const VideoPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);
    const { link, videoSrc } = useContext(Storage)

    const togglePlay = () => {
        if (isPlaying) { videoRef.current.pause() }
        else { videoRef.current.play() }
        setIsPlaying(!isPlaying);
    };

    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };
    return (
        <div>
           {videoSrc[0]?.cloudinaryLink && <video
                onTimeUpdate={handleProgress}
                ref={videoRef}
                width="100%"
                height="100%"
                controls
            >
                <source
                    src={videoSrc[0]?.cloudinaryLink}
                    type="video/mp4" />
            </video>
            }
        </div>
    )
}

export default VideoPlayer;