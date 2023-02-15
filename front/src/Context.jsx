import { useState } from "react";



export default function Context() {
    const [cloudinaryLink, setCloudinaryLink] = useState();
    const [emotion, setEmotion] = useState();
    const [emotionList, setEmotionList] = useState({
        happiness: ['friendly', 'happy', 'proud', 'joy'],
        sadness: ['sad', 'ashamed', 'depressed', 'ashamed'],
        scary: ['afraid', 'nervous', 'terrified'],
        tenderness: ['kind', 'worry', 'symphatic', 'loving', 'interested'],
        loathing: ['bored', 'disgusted', 'unfriendly'],
        amazement: ['surprised', 'confused', 'excited', 'stressed'],

    });

    return {
        cloudinaryLink, setCloudinaryLink, emotion, setEmotion
    }
}