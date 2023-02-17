import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {AppropriateQuestion} from "./components/AppropriateQuestion";

export default function Context() {
    const params = useParams();
    const [title, setTitle] = useState(0);

    console.log(params.index);
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

console.log('hello',videoSrc[title]?._id);
    // axios commands for checker
    const voteVideo = () => {
        axios.put(`http://localhost:8639/addVIdeo/${videoSrc[title]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
console.log(title);
    const isAppropriate = () => {
        axios.put(`http://localhost:8639/isappropriateVIdeo/${videoSrc[title]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality1 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[title]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality2 = () => {
        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[title]._id}/2`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality3 = () => {

        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[title]._id}/3`)

            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality4 = () => {

        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[title]._id}/4`)

            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const quality5 = () => {

        axios.put(`http://localhost:8639/rateVIdeo/${videoSrc[title]._id}/5`)

            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const correctEmotion = () => {
        axios.put(`http://localhost:8639/answerVIdeo/${videoSrc[title]._id}/correct`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const randomEmotion = () => {
        axios.put(`http://localhost:8639/answerVIdeo/${videoSrc[title]._id}/random`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
   
    const handleAppropriate = () => {
        isAppropriate();
        // navigate('/checker/quality');
    }
   
    const handleRating = () => {
        voteVideo();
        localStorage.getItem("isAppropriate") && isAppropriate();
        localStorage.getItem("quality") && quality1();
        localStorage.getItem("quality2") && quality2();
        localStorage.getItem("quality3") && quality3();
        localStorage.getItem("quality4") && quality4();
        localStorage.getItem("quality5") && quality5();
        localStorage.getItem("wrongAnswer") && randomEmotion();
        localStorage.getItem("correctAnswer") && correctEmotion();
    }
    function setDelete() {
        localStorage.setItem("quality", 1);
        localStorage.removeItem("quality2");
        localStorage.removeItem("quality3");
        localStorage.removeItem("quality4");
        localStorage.removeItem("quality5");
    }
    function setDelete2() {
        localStorage.setItem("quality2", 1);
        localStorage.removeItem("quality");
        localStorage.removeItem("quality3");
        localStorage.removeItem("quality4");
        localStorage.removeItem("quality5");
    }
    function setDelete3() {
        localStorage.setItem("quality3", 1);
        localStorage.removeItem("quality2");
        localStorage.removeItem("quality");
        localStorage.removeItem("quality4");
        localStorage.removeItem("quality5");
    }
    function setDelete4() {
        localStorage.setItem("quality4", 1);
        localStorage.removeItem("quality2");
        localStorage.removeItem("quality3");
        localStorage.removeItem("quality");
        localStorage.removeItem("quality5");
    }
    function setDelete5() {
        localStorage.setItem("quality5", 1);
        localStorage.removeItem("quality2");
        localStorage.removeItem("quality3");
        localStorage.removeItem("quality4");
        localStorage.removeItem("quality");
    }

    function setCorrect() {
        localStorage.setItem("correctAnswer", 1);
        localStorage.removeItem("wrongAnswer");
    }
    function setWrong() {
        localStorage.setItem("wrongAnswer", 1);
        localStorage.removeItem("correctAnswer");
    }
   

    useEffect(() => {
        axios.get('http://localhost:8639/allVIdeos')
            .then((response) => {
                setVideoSrc(response?.data)
                console.log("1:",response?.data);
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

        handleRating,
        allEmotion, setTitle, title,
        setDelete, setDelete2, setDelete3, setDelete4, setDelete5,
        setCorrect, setWrong
         

    }
}