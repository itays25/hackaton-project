import { useContext, useEffect, useState } from 'react'
import { Storage } from '../App'
import Questioning from '../components/Questioning';
import VideoPlayer from '../components/VideoPlayer'

export default function Checker() {
    const [counter, setCounter] = useState(0)
    const { videoSrc, } = useContext(Storage)

    return (
        <div>
            <VideoPlayer counter={counter} setCounter={setCounter} />
            <Questioning counter={counter} setCounter={setCounter} />
        </div>
    )


}