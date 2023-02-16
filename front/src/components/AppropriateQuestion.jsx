import { React, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Storage } from '../App';



function AppropriateQuestion(props) {
    const navigate = useNavigate();
    const { link, videoSrc, handleAnswer2, handleAppropriate, handleAnswer
        , handleAnswer3, handleAnswer4, handleAnswer5 } = useContext(Storage)

    return (
        <div>
            <div className='appropriate'>
                <h1>is it an appropriate video?</h1>
                <button>yes</button>
                <button onClick={() =>
                    localStorage.setItem('isAppropriate', "1")
                }>no</button>
            </div>


            <div className='quality'>
                <h1>rate the video qulity(regardless of content)</h1>
                <button onClick={() => localStorage.setItem("quality", 1)}>1</button>
                <button onClick={() => localStorage.setItem("quality2", 1)}>2</button>
                <button onClick={() => localStorage.setItem("quality3", 1)}>3</button>
                <button onClick={() => localStorage.setItem("quality4", 1)}>4</button>
                <button onClick={() => localStorage.setItem("quality5", 1)}>5</button>
            </div>

        </div >
    );
}

export default AppropriateQuestion;