import axios from "axios";
import { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";


export default function Context() {
    const [title, setTitle] = useState(0);
    const [cloudinaryLink, setCloudinaryLink] = useState();
    const [emotion, setEmotion] = useState();
    const [videoSrc, setVideoSrc] = useState([]);
    const [videoPreview, setVideoPreview] = useState()
    const [emotionList, setEmotionList] = useState([]);
    const [randomOptions, setRandomOptions] = useState([]);
    const [cld, setCld] = useState(new Cloudinary({
        cloud: {
            cloudName: process.env.CLOUDINARY_cloudName,
            uploadPreset: process.env.CLOUDINARY_uploadPreset,
        }
    }))

    useEffect(() => {
        axios.get('http://localhost:8639/video/allVideos')
            .then((response) => { setVideoSrc(response?.data) })
            .catch((error) => console.log("all videos:", error))

        axios.get('http://localhost:8639/emotion/allEmotions')
            .then((response) => {
                setEmotionList(response?.data);
                const list = response?.data;
                const firtsIndex = Math.floor(Math.random() * list?.length)
                const firstRandomAnswer = list[firtsIndex]
                const temp = list.filter((item) => item !== firstRandomAnswer)
                const secondIndex = Math.floor(Math.random() * temp?.length)
                const secondRandomAnswer = list[secondIndex]
                setRandomOptions([firstRandomAnswer, secondRandomAnswer]);
            })
            .catch(error => console.log("all emotions:", error))

    }, [])

    const handleRating = () => {
        localStorage.getItem("inappropriate") && inappropriate();
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


    // const emotionAnswer = () => {
    //     axios.put(`http://localhost:8639/answerVIdeo/${videoSrc[title]._id}/random`)
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error))
    // }

    return {
        cld, setCld,
        cloudinaryLink, setCloudinaryLink,
        emotion, setEmotion,
        videoSrc, setVideoSrc,
        emotionList, setEmotionList,
        videoPreview, setVideoPreview,
        randomOptions, setRandomOptions,
        title, setTitle,
        review,
        handleRating,
    }
}