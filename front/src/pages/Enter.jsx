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
        <div className="relative isolate  flex lg:flex-row bg--50 w-full h-auto py-16 sm:py-24 flex-col " >
            <Lottie className="w-96 h-auto ml-14" animationData={Emotion} loop={true} />
            <div className='ml-6 max-w-xs'>
                <h3 className='text-4xl'>
                Be a Star
                </h3>
                <p className='mt-6 mb-6'>
                Our stars help us teach children with autism about emotions, by sending images, video and voices depicting diverse ways of emotion expression                </p>
                <div className='w-auto flex justify-end '>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <NavLink to={"/emotionlist"} style={{ textDecoration: 'none' }} onClick={() => widgetRef.current.open()}>
                        Star
                        </NavLink>
                    </button>
                </div>
            </div>
            <div className='ml-6 max-w-xs'>
                <h3 className='text-4xl'>
                Be an Evaluator

                </h3>
                <p className='mt-6 mb-6'>
                Evaluators help us teach children with autism about emotions, by evaluating and validating the media we collect, making sure it is appropriate and clearly expressed before using it in our program
                </p>
                <div className='w-auto flex justify-end  '>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-end">
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