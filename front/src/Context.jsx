import axios from "axios";
import { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";


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
    // const [cld, setCld] = useState(new Cloudinary({
    //     cloud: {
    //         cloudName: process.env.CLOUDINARY_cloudName,
    //         uploadPreset: process.env.CLOUDINARY_uploadPreset,
    //     }
    // }))

    useEffect(() => {
        axios.get('http://localhost:8639/video/allVideos')
            .then((response) => { setVideoSrc(response?.data) })
            .catch((error) => console.log("all videos:", error))

        axios.get('http://localhost:8639/emotion/allEmotions')
            .then(({ data }) => { setEmotionList(data); 
            })
            .catch(error => console.log("all emotions:", error))
    }, [])

    const answers = (videoNumber) => {
        const correctAnswer = videoSrc[videoNumber]?.feeling?.emotion && localStorage.setItem("correctAnswer", correctAnswer);

        // const wrongAnswer = () => {
        //     for (let index = 0; index < emotionList?.length; index++) {
        //         if (correctAnswer === emotionList[index]?._id) {
        //             const temp = [];
        //             emotionList[index]?.stock?.forEach(item => { temp?.push(item.title) });
        //             const temporary = temp?.filter(item => item !== correctAnswer);
        //             return random(temporary)
        //         }
        //     }
        // }
        // localStorage.setItem("wrongAnswer", wrongAnswer());

        // const list = []
        // emotionList?.map((spectrum) => (
        //     spectrum.stock.map((emotion) => (
        //         list.push(emotion.title)))))
        // list.filter(item => item !== correctAnswer && item !== wrongAnswer)
        // const first = random(list)
        // list.filter(item => item !== first)
        // const second = random(list)
        // localStorage.setItem("firstAnswer", first);
        // localStorage.setItem("secondAnswer", second)
    }

    const random = (array) => {
        const index = Math.floor(Math.random() * array?.length)
        const random = array[index]
        return random
    }

    const handleRating = () => {
        localStorage.getItem("inappropriate") && inappropriate();
        localStorage.getItem("quality") && localStorage.getItem("option") &&
            review({
                scale: localStorage.getItem("quality"),
                validation: localStorage.getItem("option")
            });

    }

    const review = (body) => {
        axios.put(`http://localhost:8639/rate/rateVideo/${videoSrc[title]._id}`, body)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    const inappropriate = () => {
        axios.put(`http://localhost:8639/rate/rateVideo/${videoSrc[title]._id}`)
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
        answers,
        handleRating,
        allEmotions, setAllEmotions
    }
}