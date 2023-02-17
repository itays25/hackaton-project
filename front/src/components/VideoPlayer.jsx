import React, { useState, useRef, useContext, useEffect } from 'react';
import { Storage } from '../App';
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';



const VideoPlayer = (props) => {
    const params = useParams();
    const { videoSrc, setTitle, handleRating } = useContext(Storage)
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const [counter, setCounter] = useState(Number(params.index));
    setTitle(Number(params.index))
    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };

    function finishingFunc() {
        setCounter(counter + 1)
        setTitle(counter + 1)
        handleRating()
        localStorage.clear()

    }


    return (
        <div className='d-flex justify-content-center flex-column align-items-center pt-1'>
            {
                videoSrc[counter]?.cloudinaryLink &&
                <video
                    className='d-flex justify-content-center flex-column align-items-center p-1'
                    onTimeUpdate={handleProgress}
                    ref={videoRef}
                    width="95%"
                    height="auto"
                    controls
                >
                    <source
                        src={videoSrc[counter]?.cloudinaryLink}
                        type="video/mp4"
                    />
                </video>
            }
            <div className='position-fixed bottom-0 '>
                <Button className='rounded-pill' size="lg" onClick={() => finishingFunc()}>
                    <a className='object-none text-light' href={`/checker/${counter}`}>
                        Finish servey
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default VideoPlayer;