import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";


export default function Context() {
    const params = useParams();
    const [title, setTitle] = useState(0);

    const [cloudinaryLink, setCloudinaryLink] = useState();
    const [emotion, setEmotion] = useState();
    const [videoSrc, setVideoSrc] = useState([]);
    const [videoPreview, setVideoPreview] = useState()
    const [cld, setCld] = useState(new Cloudinary({
        cloud: {
            cloudName: process.env.CLOUDINARY_cloudName,
            uploadPreset: process.env.CLOUDINARY_uploadPreset,
        }
    }))

    const [emotionList, setEmotionList] = useState({
        happiness: ['friendly', 'happy', 'proud', 'joy'],
        sadness: ['sad', 'ashamed', 'depressed', 'ashamed'],
        scary: ['afraid', 'nervous', 'terrified'],
        tenderness: ['kind', 'worry', 'symphatic', 'loving', 'interested'],
        loathing: ['bored', 'disgusted', 'unfriendly'],
        amazement: ['surprised', 'confused', 'excited', 'stressed'],
    });

    useEffect(() => {
        axios.get('http://localhost:8639/video/allVIdeos')
            .then((response) => { setVideoSrc(response?.data) })
            .catch((error) => console.log(error))
    }, [])

    const allEmotion = emotionList.happiness.concat(
        emotionList.sadness
            .concat(emotionList.scary
                .concat(emotionList.tenderness
                    .concat(emotionList.loathing
                        .concat(emotionList.amazement))))
    )

    const inappropriate = () => {
        axios.put(`http://localhost:8639/rate/rateVideo/${videoSrc[title]._id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    const review = (level) => {
        const scale = level
        axios.put(`http://localhost:8639/rate/rateVideo/${videoSrc[title]._id}`, scale)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    const handleRating = () => {
        localStorage.getItem("inappropriate") && inappropriate();
        review(localStorage.getItem("quality"));
        localStorage.getItem("wrongAnswer") && randomEmotion();
        localStorage.getItem("correctAnswer") && correctEmotion();
    }

    const emotionAnswer = () => {
        axios.put(`http://localhost:8639/answerVIdeo/${videoSrc[title]._id}/random`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    function setCorrect(x) {
        x=="correct" ? localStorage.setItem("correctAnswer", 1)
            : localStorage.setItem("wrongAnswer", 1);
    }



    return {
        cloudinaryLink, setCloudinaryLink,
        emotion, setEmotion,
        videoSrc, setVideoSrc,
        emotionList, setEmotionList,
        videoPreview, setVideoPreview,
        review,
        handleRating,
        allEmotion,
        setCorrect, setWrong,
        cld, setCld
    }
}