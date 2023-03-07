import { React, useContext } from 'react';
import { Storage } from '../App';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./appropriateQuestion.css"


export default function Questioning() {
    const params = useParams();
    const { videoSrc, allEmotion, setCorrect } = useContext(Storage)

    const localSaveData = (level) => {
        localStorage.setItem("quality", level)
    }

    const randomA = Math.floor(Math.random() * allEmotion.length)
    const randomA2 = Math.floor(Math.random() * allEmotion.length)
    const randomA3 = Math.floor(Math.random() * allEmotion.length)

    return (
        <div>
            <div className='appropriate p-1 pt-1'>
                <header className="text-center fs-2 p-1">Is it an appropriate video?</header>
                <Button variant="danger" onClick={() =>
                    localStorage.setItem('inappropriate', 1)}>NO</Button>

                <Button variant="success" className=''>YES</Button>
            </div>

            <div className='quality px-2'>

                <div className="text-center  ">
                    <header className="text-center fs-2 ">
                        Rate the video quality
                    </header>
                    <p>(regardless of content)</p>
                </div>

                <Button variant="danger" onClick={() => localSaveData(1)}>1</Button>
                <Button variant="warning" onClick={() => localSaveData(2)}>2</Button>
                <Button variant="info" onClick={() => localSaveData(3)}>3</Button>
                <Button variant="primary" onClick={() => localSaveData(4)}>4</Button>
                <Button variant="success" onClick={() => localSaveData(5)}>5</Button>

            </div>

            <div className='emotion px-2'>
                <header className="text-center fs-2">
                    How does the person feel?
                </header>
                <Button classname=" p-2 alerts opacity-75" size="lg" key={'primary'} variant={'primary'}
                    onClick={() => setCorrect("correct")}>
                    {videoSrc[params.index]?.emotion}
                </Button>
                <Button classname=" p-2 alerts opacity-75 " size="lg" key={'success'} variant={'success'}
                    onClick={() => setCorrect("random")}>
                    {allEmotion[randomA]}
                </Button>
                <Button classname=" p-2 alerts opacity-75 " size="lg" key={'warning'} variant={'warning'}
                    onClick={() => setCorrect("random")}>
                    {allEmotion[randomA2]}
                </Button>
                <Button classname=" p-2 alerts opacity-75" size="lg" key={'danger'} variant={'danger'}
                    onClick={() => setCorrect("random")}>
                    {allEmotion[randomA3]}
                </Button>

            </div>


        </div>
    )
}


