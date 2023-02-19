import { NavLink, useNavigate } from "react-router-dom"
import { React, useContext } from 'react';
import axios from 'axios';
import { Storage } from '../App';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./appropriateQuestion.css"


export default function Questioning(props) {
    const navigate = useNavigate();
    const params = useParams();
    const { link, videoSrc, setDelete, setDelete2, setDelete3, setDelete4, setDelete5,
        allEmotion, setCorrect, setWrong, counter, setCounter } = useContext(Storage)

        const randomA = Math.floor(Math.random() * allEmotion.length)
        const randomA2 = Math.floor(Math.random() * allEmotion.length)
        const randomA3 = Math.floor(Math.random() * allEmotion.length)

    const isAppropriate = () => {
        axios.put(`http://localhost:8639/isappropriateVIdeo/${videoSrc[0]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    const nextVideo = () => {
        props.setCounter(props.counter + 1);
    }

    return (
        <div>
            <div className='appropriate p-1 pt-1'>
                <header className="text-center fs-2 p-1">Is it an appropriate video?</header>
                <ButtonGroup size="lg" className="mb-2  opacity-75 d-flex justify-content-center p-1 px-3 align-items-center">
                    <Button variant="danger" onClick={() =>
                        localStorage.setItem('isAppropriate', "1")}>
                        NO
                    </Button>
                    <Button variant="success" className=''>YES</Button>
                </ButtonGroup>
            </div>

            <div className='quality px-2'>
                <div className="text-center  ">
                    <header className="text-center fs-2 ">
                        Rate the video qulity
                    </header>
                    <p>(regardless of content)</p>
                </div>
                <ButtonGroup size="lg" className="mb-2 opacity-75 d-flex justify-content-center align-items-center">
                    <Button variant="danger" onClick={() => setDelete()}>
                        1
                    </Button>
                    <Button variant="warning" onClick={() => setDelete2()}>
                        2
                    </Button>
                    <Button variant="info" onClick={() => setDelete3()}>
                        3
                    </Button>
                    <Button variant="primary" onClick={() => setDelete4()}>
                        4
                    </Button>
                    <Button variant="success" onClick={() => setDelete5()}>
                        5
                    </Button>
                </ButtonGroup>

            </div>

            <div className='emotion px-2'>
                <header className="text-center fs-2">
                    How does the person feel?
                </header>
                <ButtonGroup size="lg" className="mb-2 opacity-75 d-flex justify-content-center align-items-center">
                    <Button classname=" p-2 alerts opacity-75" size="lg" key={'primary'} variant={'primary'} onClick={() => setCorrect()}>
                        {videoSrc[params.index]?.emotion}
                    </Button>
                    <Button classname=" p-2 alerts opacity-75 " size="lg" key={'success'} variant={'success'} onClick={() => setWrong()}>
                        {allEmotion[randomA]}
                    </Button>
                </ButtonGroup>
                <ButtonGroup size="lg" className="mb-2 opacity-75 d-flex justify-content-center align-items-center">
                    <Button classname=" p-2 alerts opacity-75 " size="lg" key={'warning'} variant={'warning'} onClick={() => setWrong()}>
                        {allEmotion[randomA2]}
                    </Button>
                    <Button classname=" p-2 alerts opacity-75" size="lg" key={'danger'} variant={'danger'} onClick={() => setWrong()}>
                        {allEmotion[randomA3]}
                    </Button>
                </ButtonGroup>

            </div>


        </div>
    )
}



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