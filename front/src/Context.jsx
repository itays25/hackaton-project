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
            .then(({ data }) => {
                setEmotionList(data);

                // getting list of emotions for random answers
                const list = []
                data?.map((spectrum) => (
                    spectrum.stock.map((emotion) => (
                        list.push(emotion.title)))))
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
        review,
        handleRating,
        allEmotions, setAllEmotions
    }
}