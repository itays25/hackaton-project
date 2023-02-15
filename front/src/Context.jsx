import axios from "axios";
import { useEffect, useState } from "react";



export default function Context() {
    const [cloudinaryLink, setCloudinaryLink] = useState();
    const [emotion, setEmotion] = useState();
    const [videoSrc, setVideoSrc] = useState([]);
    const [counter, setCounter] = useState(0)
    const [link, setLink] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8639/allVIdeos')
            .then((response) => {
                setVideoSrc(response?.data)
            })
            .catch((error) => console.log(error))
    }, [])

    return {
        cloudinaryLink, setCloudinaryLink, emotion, setEmotion,
        videoSrc, setVideoSrc, link, setLink
    }
}