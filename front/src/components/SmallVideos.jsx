import React, { useState, useRef, useContext } from 'react';
import { Storage } from '../App';

const SmallVideos = (props) => {
    // console.log("smallsrc:", props?.src);
    const { videoSrc } = useContext(Storage)
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };


    return (
        // <div className='d-flex justify-content-center flex-column align-items-center w-'>
            <video
                className='d-flex justify-content-center flex-column align-items-center p-1'
                onTimeUpdate={handleProgress}
                ref={videoRef}
                width="150px"
                height="auto"
                controls
                
            >
                <source
                    src={props?.src}
                    type="video/mp4"
                />
            </video>
        // </div>
    )
}

export default SmallVideos;