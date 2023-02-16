import axios from "axios";
import { useEffect, useState } from "react";



export default function Context() {
    const [cloudinaryLink, setCloudinaryLink] = useState();
    const [emotion, setEmotion] = useState();
    const [videoSrc, setVideoSrc] = useState([]);
    const [emotionList, setEmotionList] = useState({
        happiness: ['friendly', 'happy', 'proud', 'joy'],
        sadness: ['sad', 'ashamed', 'depressed', 'ashamed'],
        scary: ['afraid', 'nervous', 'terrified'],
        tenderness: ['kind', 'worry', 'symphatic', 'loving', 'interested'],
        loathing: ['bored', 'disgusted', 'unfriendly'],
        amazement: ['surprised', 'confused', 'excited', 'stressed'],
    });
    const allEmotion = emotionList.happiness.concat(emotionList.sadness.concat(emotionList.scary.concat(emotionList.tenderness.concat(emotionList.loathing.concat(emotionList.amazement)))))


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
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}/3`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality4 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}/4`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality5 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[0]._id}/5`)
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
    const handleRating = () => {
        localStorage.getItem("isAppropriate") && isAppropriate();
        localStorage.getItem("quality") && quality1();
        localStorage.getItem("quality2") && quality2();
        localStorage.getItem("quality3") && quality3();
        localStorage.getItem("quality4") && quality4();
        localStorage.getItem("quality5") && quality5();


    }


    useEffect(() => {
        axios.get('http://localhost:8639/allVIdeos')
            .then((response) => {
                setVideoSrc(response?.data)
            })
            .catch((error) => console.log(error))
    }, [])
    console.log(videoSrc);

    return {
        cloudinaryLink,
        setCloudinaryLink,
        emotion,
        setEmotion,
        videoSrc,
        setVideoSrc,
        emotionList,
        setEmotionList,
        handleAppropriate,
        handleAnswer,
        handleAnswer2, handleAnswer3, handleAnswer4, handleAnswer5,
        allEmotion,
        handleRating

    }
}