import { useContext, useEffect, useState } from 'react'
import { Storage } from '../App'
import Questioning from '../components/Questioning';
import VideoPlayer from '../components/VideoPlayer'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios';


export default function Checker() {
    const params = useParams();
    const { videoSrc} = useContext(Storage)
    const [counter, setCounter] = useState(Number(params.index))
    const navigate = useNavigate();
    // setTitle(Number(params.index))

    function finishingFunc() {
        handleRating()
        setCounter(counter + 1)
    }
    
    const handleRating = () => {
        localStorage.getItem("inappropriate") && inappropriate();
        localStorage.getItem("quality") && localStorage.getItem("option") &&
            review({
                scale: parseInt(localStorage.getItem("quality")),
                option: localStorage.getItem("option")
            });
        localStorage.clear()
    }

    const review = (body) => {
        axios.put(`http://localhost:8639/rate/rateVideo/${videoSrc[counter]?._id}`, body)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    const inappropriate = () => {
        axios.post(`http://localhost:8639/rate/rateVideo/${videoSrc[counter]?._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }



    return (
        <div className='w-full h-full flex flex-row justify-center bg-indigo-50'>
            <div className='w-1/6 flex justify-center items-center'>
                <button size="sm" className=' bg-slate-500 rounded-full p-12 '
                    onClick={() => { navigate('/enter'); localStorage.clear() }} >
                    Exit
                </button>
            </div>

            <div className='w-3/6 p-8 '>
                <VideoPlayer counter={counter} setCounter={setCounter} />
                <Questioning counter={counter} setCounter={setCounter} />
            </div>

            <div className='w-1/6 flex justify-center items-center  '>
                <a className='object-none text-light bg-slate-500 rounded-full p-12 '
                    href={`/checker/${counter}`}
                    onClick={() => finishingFunc()}>
                    next
                </a>
            </div>
        </div>
    )
}