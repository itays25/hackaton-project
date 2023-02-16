import {React, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Storage } from '../App';



function AppropriateQuestion(props) {
    const navigate = useNavigate();
    const { link, videoSrc, handleAnswer2,handleAppropriate, handleAnswer
        ,handleAnswer3,handleAnswer4,handleAnswer5 } = useContext(Storage)

    const isAppropriate = () => {
        axios.put(`http://localhost:8639/isappropriateVIdeo/${videoSrc[0]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    // const handleAnswer = () => {
    //     isAppropriate();
    //     console.log(videoSrc[0]._id);
    //     // navigate('/checker/quality');
    // }
    return (
        <div>
            {/* need to add local storage to save answer and handle only on submit */}
            <div className='appropriate'>
            <h1>is it an appropriate video?</h1>
            <button>yes</button>
            <button onClick={handleAppropriate}>no</button>
            </div>

            {/* need to add local storage to the buttons and handle answer(number)
            based on it */}
            <div className='quality'>
            <h1>rate the video qulity(regardless of content)</h1>
            <button onClick={handleAnswer}>1</button>
            <button onClick={handleAnswer2}>2</button>
            <button onClick={handleAnswer3}>3</button>
            <button onClick={handleAnswer4}>4</button>
            <button onClick={handleAnswer5}>5</button>
            </div>

            {/* <div className='emotion'>
            <h1>is the video qulity high(regardless of content)</h1>
            <button>yes</button>
            <button onClick={handleAnswer}>no</button>
            </div> */}
        </div>
    );
}

export default AppropriateQuestion;