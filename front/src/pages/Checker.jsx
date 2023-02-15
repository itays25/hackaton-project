import { useContext } from 'react'
import { Storage } from '../App'
import Questioning from '../components/Questioning';
import VideoPlayer from '../components/VideoPlayer'

export default function Checker() {
    const { videoSrc } = useContext(Storage)
    
    return (
            <div>
                <VideoPlayer />
                <Questioning />
            </div>
    )


}