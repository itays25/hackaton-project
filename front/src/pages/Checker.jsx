import { useContext, useEffect, useState } from 'react'
import { Storage } from '../App'
import Questioning from '../components/Questioning';
import VideoPlayer from '../components/VideoPlayer'
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom"


export default function Checker() {
    const [counter, setCounter] = useState(0)
    const { videoSrc } = useContext(Storage)
    const navigate = useNavigate();


    return (
        <div className='w-100 h-100'>
            <VideoPlayer counter={counter} setCounter={setCounter} />
            <Questioning counter={counter} setCounter={setCounter} />
            <Button onClick={() => navigate('/enter')} size="lg" className='px-3 opacity-50 my-2 rounded-pill'>
                Back
            </Button>
        </div>
    )


}