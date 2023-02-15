import React, { useState, useRef } from 'react';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

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
            <video
                onTimeUpdate={handleProgress}
                ref={videoRef}
                width="100%"
                height="100%"
                controls
            >
                <source
                    src="https://res.cloudinary.com/dsgdoguhb/video/upload/v1676457406/h18c0hx3gvttead44eeo.mp4"
                    type="video/mp4" />
            </video>
        </div>
    )
}

export default Player;