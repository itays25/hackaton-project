import axios from 'axios'
import { useContext } from 'react'
import { Storage } from '../App'



export default function YourEmotion() {

    const { cloudinaryLink, setCloudinaryLink, emotion, setEmotion,
        emotionList, allEmotion } = useContext(Storage)

    function save() {
        axios.post("http://localhost:8639/addVideo", { cloudinaryLink, emotion })
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }
    console.log(emotion);

    return (
        <form>
            {/* <input type="text" onChange={(e) => setEmotion(e.target.value)} /> */}
            <select name="emotion" onChange={(e) => setEmotion(e.target.value)}>
                {allEmotion.map((item, index)=> 
                    <option key={index} value={item}>{item}</option>
                ) }           
                 </select>
            <button onClick={() => save()}>
                Save
            </button>
            {cloudinaryLink && console.log(cloudinaryLink)}
        </form>
    )
}