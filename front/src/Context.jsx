import axios from "axios";
import { useEffect, useState } from "react";
import { CloudConfig, Cloudinary } from "@cloudinary/url-gen";
import { useLocation, useParams } from "react-router-dom";


export default function Context() {
    const [title, setTitle] = useState(0);
    const [cloudinaryLink, setCloudinaryLink] = useState();
    const [emotion, setEmotion] = useState();
    const [videoSrc, setVideoSrc] = useState([]);
    const [videoPreview, setVideoPreview] = useState()
    const [correct, setCorrect] = useState()
    const [wrong, setWrong] = useState()
    const [emotionList, setEmotionList] = useState([]);
    const [randomOptions, setRandomOptions] = useState([]);
    const [allEmotions, setAllEmotions] = useState([]);
    const [emotionListAdmin, setemotionListAdmin] = useState([]);
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let correct = 0;
                let id;
                try {
                    const { data: videos } = await axios.get('http://localhost:8639/video/allVideos')
                    setVideoSrc(videos)
                    if (pathname.split('/')[2] >= 0) {
                        const correctAnswer = videos[pathname.split('/')[2]].feeling.emotion
                        id = videos[pathname.split('/')[2]].feeling.spectrum
                        correct = correctAnswer
                        localStorage.setItem("correctAnswer", correctAnswer);
                    }
                } catch (err) {
                    console.log("failed to fetch videos : ", err.message)
                }

                try {
                    const { data: emotions } = await axios.get('http://localhost:8639/emotion/allEmotions')
                    setEmotionList(emotions);
                    const spectrum = emotions.filter((emotion) => emotion._id === id)
                    let arrayForWrong = []
                    spectrum.forEach((emotion) => emotion.stock.forEach((feeling) => arrayForWrong.push(feeling.title)))
                    arrayForWrong.filter((feeling) => feeling !== correct)
                    const randomIndexWrAns = Math.floor(Math.random() * arrayForWrong.length)
                    const wrongAnswer = arrayForWrong[randomIndexWrAns]
                    localStorage.setItem("wrongAnswer", wrongAnswer);

                    const randomEmotions = emotions.filter((emotion) => emotion._id !== id)
                    let arr = []
                    randomEmotions.forEach(element => {
                        (element.stock.forEach(stock => arr.push(stock.title)))
                    });
                    const randomIndexRandAns = Math.floor(Math.random() * arr.length)
                    const firstRandom = arr[randomIndexRandAns]
                    const arr2 = arr.filter(item => item != firstRandom)
                    const secondRandom = arr2[randomIndexRandAns]
                   
                    localStorage.setItem("firstRandom", firstRandom);
                    localStorage.setItem("secondRandom", secondRandom);
                    setLoading(false)

                } catch (err) {
                    console.log("failed to fetch emotions : ", err.message)
                }
            } catch (err) {
                console.log("fetch data error : ", err.message)
            }
        }
        fetchData()
    }, [])



    const random = (array) => {
        const index = Math.floor(Math.random() * array.length)
        const random = array[index]
        return random
    }

    const handleRating = () => {
        localStorage.getItem("inappropriate") && inappropriate();
        localStorage.getItem("quality") && localStorage.getItem("option") && 
        review({
                scale: localStorage.getItem("quality"),
                option: localStorage.getItem("option")
            });

    }
    const review = (body) => {
        axios.put(`http://localhost:8639/rate/rateVideo/${videoSrc[title]._id}`, body)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    const inappropriate = () => {
        axios.post(`http://localhost:8639/rate/rateVideo/${videoSrc[title]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    return {
        // cld, setCld,
        cloudinaryLink, setCloudinaryLink,
        emotion, setEmotion,
        videoSrc, setVideoSrc,
        emotionList, setEmotionList,
        videoPreview, setVideoPreview,
        randomOptions, setRandomOptions,
        title, setTitle,
        correct, setCorrect,
        wrong, setWrong,
        review,
        handleRating,
        allEmotions, setAllEmotions
    }
}