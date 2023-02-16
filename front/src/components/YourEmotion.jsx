import axios from 'axios'
import { useContext } from 'react'
import { Storage } from '../App'
import Form from 'react-bootstrap/Form';




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
        <form className="h-auto w-100 d-flex justify-content-center"
        >
            <Form.Select size="lg" name="emotion"
                onChange={(e) => setEmotion(e.target.value)} >
                {allEmotion.map((item, index) =>
                    <option key={index} value={item}>{item}</option>
                )}
            </Form.Select>



            <button onClick={() => save()}>
                Save
            </button>
            {cloudinaryLink && console.log(cloudinaryLink)}
        </form>
    )
}