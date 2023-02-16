import { React, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Storage } from '../App';
import { useParams } from "react-router-dom"





function AppropriateQuestion(props) {
    const navigate = useNavigate();
    const { link, videoSrc, setDelete, 
        setDelete2,setDelete3,setDelete4,setDelete5
        , allEmotion, setCorrect, setWrong } = useContext(Storage)
        const params = useParams();
        console.log(params);
        const isAppropriate = () => {
            axios.put(`http://localhost:8639/isappropriateVIdeo/${videoSrc[0]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        }

    
    const randomA= Math.floor(Math.random() * allEmotion.length)
    const randomA2= Math.floor(Math.random() * allEmotion.length)
    const randomA3= Math.floor(Math.random() * allEmotion.length)
    
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
                <button onClick={() => setDelete()}>1</button>
                <button onClick={() => setDelete2()}>2</button>
                <button onClick={() => setDelete3()}>3</button>
                <button onClick={() => setDelete4()}>4</button>
                <button onClick={() => setDelete5()}>5</button>
            </div>

            <div className='emotion'>
                <h1>how does the person feel?</h1>
                <button onClick={()=> setCorrect()}>{videoSrc[params.index]?.emotion}</button>
                <button onClick={()=> setWrong()}>{allEmotion[randomA]}</button>
                <button onClick={()=> setWrong()}>{allEmotion[randomA2]}</button>
                <button onClick={()=> setWrong()}>{allEmotion[randomA3]}</button>
            </div>


        </div>
    );
}

export default AppropriateQuestion;


         
        // const handleAnswer = () => {
            //     isAppropriate();
    //     console.log(videoSrc[0]._id);
    //     // navigate('/checker/quality');
    // }
    // function randomExcluded(min, max, excluded) {
    //     var n = Math.floor(Math.random() * (max-min) + min);
    //     console.log(randomA3);
    //     if (n == excluded) ;
    //     randomExcluded(0, allEmotion.length);
    // }
    // const randomA= randomExcluded(0, allEmotion.length);
    // const randomA3= randomExcluded(0, allEmotion.length, randomA);
    // const randomA2= randomExcluded(0, allEmotion.length, randomA3);