import React, { useState, useRef, useContext, useEffect } from 'react';
import { Storage } from '../App';
import { useParams } from "react-router-dom"


const VideoPlayer = (props) => {
    const params = useParams();
    const { videoSrc, setTitle, title, handleRating } = useContext(Storage)
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const [counter, setCounter] = useState(Number(params.index));
    function getIndex(){
        setCounter(counter + 1)
        setTitle(counter)
    }
    console.log(title);
    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };

    function finishingFunc() {
        setCounter(counter + 1)
        handleRating()
        localStorage.clear()

    }


    return (
        <div>
            {
                videoSrc[counter]?.cloudinaryLink &&
                <video
                    onTimeUpdate={handleProgress}
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    controls
                >
                    <source
                        src={videoSrc[counter]?.cloudinaryLink}
                        type="video/mp4" />
                </video>
            }
            <div className='object-none'>
                <div className='object-none' onClick={() => getIndex()}>
                    <a className='object-none' href={`/checker/${counter}`}>
                        Finish servey
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;