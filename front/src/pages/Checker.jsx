import { useContext, useEffect, useState } from 'react'
import { Storage } from '../App'
import Questioning from '../components/Questioning';
import VideoPlayer from '../components/VideoPlayer'
import { useParams } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom"


export default function Checker() {
    const params = useParams();
    const [counter, setCounter] = useState(Number(params.index))
    const { videoSrc, setTitle, handleRating } = useContext(Storage)
    const navigate = useNavigate();
    // setTitle(Number(params.index))

    function finishingFunc() {
        setCounter(counter + 1)
        handleRating()
        localStorage.clear()
    }
    return (
        <div className='w-full h-full flex flex-row justify-center bg-indigo-50'>
           <div className='w-1/6 flex justify-center items-center'>
             <button onClick={() => navigate('/enter')} size="sm" className=' bg-slate-500 rounded-full p-12 ' >
                Exit
            </button></div>
           <div className='w-3/6 p-8 '> <VideoPlayer  counter={counter} setCounter={setCounter} />
            <Questioning counter={counter} setCounter={setCounter} /></div>
            <div className='w-1/6 flex justify-center items-center  '>
                <button className=' bg-slate-500 rounded-full p-12 ' size="lg" onClick={() => finishingFunc()}>
                    <a className='object-none text-light' href={`/checker/${counter}`}>next</a>
                </button>
            </div>
        </div>
    )
}