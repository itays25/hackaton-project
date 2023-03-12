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
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(true);
    // const [cld, setCld] = useState(new Cloudinary({
    //     cloud: {
    //         cloudName: process.env.CLOUDINARY_cloudName,
    //         uploadPreset: process.env.CLOUDINARY_uploadPreset,
    //     }
    // }))

    useEffect(() => {
        const x = 1
        const y = "1"

        console.log(x == y);
        const fetchData = async () => {
            try {
                const { data: videos } = await axios.get('http://localhost:8639/video/allVideos')
                let correct = 0;
                let id;
                setVideoSrc(videos)

                if (pathname) {
                    const correctAnswer = videos[pathname.split('/')[2]].feeling.emotion
                    id = videos[pathname.split('/')[2]].feeling.spectrum
                    correct = correctAnswer
                    localStorage.setItem("correctAnswer", correctAnswer);
                }
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
                console.log(firstRandom);
                console.log(secondRandom);
                localStorage.setItem("firstRandom", firstRandom);
                localStorage.setItem("secondRandom", secondRandom);
                setLoading(false)


            } catch (err) {
                console.log("fetch data error", err.message)
            }
        }
        fetchData()
    }, [])

    const answers = () => {


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
        const index = Math.floor(Math.random() * array.length)
        const random = array[index]
        return random
    }

    const handleRating = () => {
        localStorage.getItem("quality") &&
            localStorage.getItem("option") &&
            // inappr() &&
            review({
                scale: localStorage.getItem("quality"),
                validation: localStorage.getItem("option"),
                // inappropriate: inappr()
            });

    }
    // const inappr = () => {
    //     if (localStorage.getItem("inappropriate")) { return 1 } else { return 0 }
    // }

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
        allEmotions, setAllEmotions,
        loading, setLoading
    }
}