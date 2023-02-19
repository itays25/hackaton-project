import axios from 'axios'
import { useContext } from 'react'
import { Storage } from '../App'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom"



export default function YourEmotion() {
    const navigate = useNavigate();
    const { cloudinaryLink, setCloudinaryLink, emotion, setEmotion,
        emotionList, allEmotion } = useContext(Storage)

    function save() {
        axios.post("http://localhost:8639/addVideo", { cloudinaryLink, emotion })
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }
    console.log(emotion);

    return (
        <form className="h-50 w-100 d-flex justify-content-center flex-column align-items-center
        ">
            <Form.Select size="lg" name="emotion" className='m-2'
                onChange={(e) => setEmotion(e.target.value)} >
                {allEmotion.map((item, index) =>
                    <option key={index} value={item}>{item}</option>
                )}
            </Form.Select>
            <div className=' mt-5 w-100 d-flex align-items-center'>
                <div className='  w-75 d-flex justify-content-between align-items-center'>
                    <Button onClick={() => navigate('/enter')} size="lg" className='h-75 me-2 px-3 opacity-50 my-2 rounded-pill' >
                        Back
                    </Button>
                    <Button onClick={() => save()} size="lg" className=' w-100 px-3 p-3 my-2 rounded-pill'>
                        Save
                    </Button>
                </div>
            </div>

            {cloudinaryLink && console.log(cloudinaryLink)}
        </form>
    )
}