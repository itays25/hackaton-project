import { useState } from "react";



export default function Context() {
    const [cloudinaryLink, setCloudinaryLink] = useState();
    const [emotion, setEmotion] = useState();

    return {
        cloudinaryLink, setCloudinaryLink, emotion, setEmotion
    }
}