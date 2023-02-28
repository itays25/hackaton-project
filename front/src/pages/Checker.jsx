import { useContext, useEffect, useState } from 'react'
import { Storage } from '../App'
import Questioning from '../components/Questioning';
import VideoPlayer from '../components/VideoPlayer'
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom"


export default function Checker() {
    const params = useParams();
    const [counter, setCounter] = useState(Number(params.index))
    const { videoSrc, setTitle, handleRating } = useContext(Storage)
    const navigate = useNavigate();
    setTitle(Number(params.index))

    function finishingFunc() {
        setCounter(counter + 1)
        setTitle(counter + 1)
        handleRating()
        localStorage.clear()

    }
    return (
        <div className='w-100 h-100% bg-white'>
            <Button onClick={() => navigate('/enter')} size="sm" className='px-3 opacity-50 mt-1 ms-1 h-2 rounded-pill'>
                Back
            </Button>
            <VideoPlayer counter={counter} setCounter={setCounter} />
            <Questioning counter={counter} setCounter={setCounter} />

            <div className='w-100 d-flex justify-content-center pt-4'>
                <Button className='rounded-pill h-100 w-75' size="lg" onClick={() => finishingFunc()}>
                    <a className='object-none text-light' href={`/checker/${counter}`}>
                        Finish servey
                    </a>
                </Button>
            </div>


        </div>
    )


}