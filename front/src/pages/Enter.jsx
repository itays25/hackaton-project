import { NavLink } from 'react-router-dom';
import Emotion from "../lotty/enter.json"
import Lottie from "lottie-react";
import { useContext, useEffect, useRef, useState } from "react"
import { Storage } from "../App"
import { color } from '@cloudinary/url-gen/qualifiers/background';


const Enter = () => {
    const { setCloudinaryLink } = useContext(Storage)
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    return (
        <div className="w-full h-screen flex flex-row justify-evenly items-center sm:py-24  " >
            <Lottie className="w-1/3 h-auto " animationData={Emotion} loop={true} />

            <div className='h-full w-1/4  flex flex-col justify-center'>
                <h3 className='text-4xl pb-4'>
                    Be a Star
                </h3>

                <p className='text-2xl'>
                    Our stars help us teach children with autism about emotions, by sending images, video and voices depicting diverse ways of emotion expression
                </p>
                <div className='w-auto flex justify-center mt-3'>
                    <button className="bg-blue-500 p-3 hover:bg-blue-700 text-white font-bold px-5 rounded-full">
                        <NavLink to={"/emotionlist"} style={{ textDecoration: 'none' }} onClick={() => widgetRef.current.open()}>
                            Star
                        </NavLink>
                    </button>
                </div>
            </div>

            <div className=' h-full w-1/4 flex flex-col justify-center'>
                <h3 className='text-4xl pb-4'>
                    Be an Evaluator
                </h3>

                <p className='text-2xl'>
                    Evaluators help us teach children with autism about emotions, by evaluating and validating the media we collect, making sure it is appropriate and clearly expressed before using it in our program
                </p>

                <div className=' flex justify-center mt-3'>
                    <button className="bg-blue-500 p-3 hover:bg-blue-700 text-white font-bold px-5 rounded-full flex justify-end">
                        <NavLink to={"/checker/0"} className='caret-lime-900'>
                            Evaluator
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Enter