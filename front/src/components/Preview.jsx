import axios from 'axios'
import { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Storage } from '../App'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom"



export default function Preview() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { cloudinaryLink, emotion, setEmotion, emotionList, allEmotion, } = useContext(Storage)
    const videoLink = localStorage.getItem('videoPreview')

    const back = () => {
        navigate('/donor');
        localStorage.removeItem('videoPreview')
    }

    function onSubmit(data) {
        axios.post("http://localhost:8639/addVideo",
            { cloudinaryLink: videoLink, emotion: data.emotion })
            .then((result) => {
                console.log("adding to mongo response:", result);
                if (result.status === 200) {
                    localStorage.removeItem('videoPreview');
                    navigate('/enter');
                }
            })
            .catch((error) => {
                console.log("fuuuck", error);
                alert(error.response.data.message)
            })
    }

    return (
        <div className='w-100 h=100'>
            {videoLink && <video src={videoLink} controls width="100%" height="auto" className='p-3' />}

            <Form className="h-50 w-100 d-flex justify-content-center flex-column align-items-center"
                onSubmit={handleSubmit(onSubmit)} >

                <Form.Select size="lg" name="emotion" className='m-2'
                    {...register("emotion", { required: true })}
                    defaultValue="default">

                    <option value="default" disabled>
                        -- select an option --
                    </option>

                    {allEmotion.map((item, index) =>
                        <option key={index} value={item}>
                            {item}
                        </option>
                    )}
                </Form.Select>

                <div className=' mt-5 w-100 d-flex align-items-center'>
                    <div className='  w-75 d-flex justify-content-between align-items-center'>
                        <Button onClick={() => back()} size="lg" className='h-75 me-2 px-3 opacity-50 my-2 rounded-pill' >
                            Back
                        </Button>
                        <Button size="lg" className=' w-100 px-3 p-3 my-2 rounded-pill' type='submit'>
                            Save
                        </Button>
                    </div>
                </div>

                {/* {cloudinaryLink && console.log(cloudinaryLink)} */}
            </Form>
        </div>
    )
}