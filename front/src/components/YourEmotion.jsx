import axios from 'axios'
import { useContext } from 'react'
import { Storage } from '../App'



export default function YourEmotion() {

    const { cloudinaryLink, setCloudinaryLink, emotion, setEmotion } = useContext(Storage)

    function save() {
        axios.post("http://localhost:8639/addVideo", { cloudinaryLink, emotion })
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }

    return (
        <form>
            <input type="text" onChange={(e) => setEmotion(e.target.value)} />
            <button onClick={() => save()}>
                Save
            </button>
            {cloudinaryLink && console.log(cloudinaryLink)}
        </form>
    )
}