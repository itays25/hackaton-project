import { React, useContext } from 'react';
import { Storage } from '../App';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./appropriateQuestion.css"


export default function Questioning() {
    const params = useParams();
    const { videoSrc, randomOptions, } = useContext(Storage)

    const qualitySave = (level) => {
        localStorage.setItem("quality", level)
    }

    function validSave(picked) {
        localStorage.setItem("option", picked)
    }

    return (
        <div>
            <div className='appropriate p-1 pt-1'>
                <header className="text-center fs-2 p-1">Is it an appropriate video?</header>
                <Button onClick={() => localStorage.setItem('inappropriate', 1)}>NO</Button>
                <Button className=''>YES</Button>
            </div>

            <div className='quality px-2'>

                <div className="text-center  ">
                    <header className="text-center fs-2 ">
                        Rate the video quality
                    </header>
                    <p>(regardless of content)</p>
                </div>

                <Button onClick={() => qualitySave(1)}>1</Button>
                <Button onClick={() => qualitySave(2)}>2</Button>
                <Button onClick={() => qualitySave(3)}>3</Button>
                <Button onClick={() => qualitySave(4)}>4</Button>
                <Button onClick={() => qualitySave(5)}>5</Button>

            </div>

            <div className='emotion px-2'>
                <header className="text-center fs-2">
                    How does the person feel?
                </header>
                <Button classname=" p-2 alerts opacity-75" onClick={() => validSave("correct")}>
                    {videoSrc[params.index]?.emotion}
                </Button>
                <Button classname=" p-2 alerts opacity-75 " onClick={() => validSave("random")}>
                    {randomOptions[1]}
                </Button>
                <Button classname=" p-2 alerts opacity-75 " onClick={() => validSave("random")}>
                    {randomOptions[0]}
                </Button>
                <Button classname=" p-2 alerts opacity-75" onClick={() => validSave("wrong")}>
                    WRONGG(ONE MORE FUNC)
                </Button>

            </div>
        </div>
    )
}


