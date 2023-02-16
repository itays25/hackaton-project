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

    const [emotionList, setEmotionList] = useState({
        happiness: ['friendly', 'happy', 'proud', 'joy'],
        sadness: ['sad', 'ashamed', 'depressed', 'ashamed'],
        scary: ['afraid', 'nervous', 'terrified'],
        tenderness: ['kind', 'worry', 'symphatic', 'loving', 'interested'],
        loathing: ['bored', 'disgusted', 'unfriendly'],
        amazement: ['surprised', 'confused', 'excited', 'stressed'],

    });

    // axios commands for checker

    const isAppropriate = () => {
        axios.put(`http://localhost:8639/isappropriateVIdeo/${videoSrc[0]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality1 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality2 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}/2`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality3 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}/2`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality4 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}/2`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality5 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}/2`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const handleAppropriate = () => {
        isAppropriate();
        // navigate('/checker/quality');
    }
    const handleAnswer = () => {
        quality2();
    }
    const handleAnswer2 = () => {
        quality2();
    }
    const handleAnswer3 = () => {
        quality3();
    }
    const handleAnswer4 = () => {
        quality4();
    }
    const handleAnswer5 = () => {
        quality5();
    }

    return {
        cloudinaryLink, setCloudinaryLink, emotion, setEmotion,
        videoSrc, setVideoSrc, link, setLink, 
        handleAppropriate,handleAnswer,handleAnswer2,handleAnswer3,handleAnswer4,handleAnswer5
         
    }
}