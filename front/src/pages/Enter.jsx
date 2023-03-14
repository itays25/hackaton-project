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
                    be a donor
                </h3>
                <p className='mt-6 mb-6'>
                    type her tjoasjdjs sd j kjads hdsa jkadsh adskjdsa type her tjoasjdjs sd j kjads hdsa jkadsh adskjdsa adh dskjsdahjds akjsda sdhjsd kjadshdsjsdah
                </p>
                <div className='w-auto flex justify-end '>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <NavLink to={"/donor"} style={{ textDecoration: 'none' }} onClick={() => widgetRef.current.open()}>
                            DONOR
                        </NavLink>
                    </button>
                </div>
            </div>
            <div className='ml-6 max-w-xs'>
                <h3 className='text-4xl'>
                    check others videos
                </h3>
                <p className='mt-6 mb-6'>
                    type her tjoasjdjs sd j kjads hdsa jkadsh adskjdsa type her tjoasjdjs sd j kjads hdsa jkadsh adskjdsa adh dskjsdahjds akjsda sdhjsd kjadshdsjsdah
                </p>
                <div className='w-auto flex justify-end  '>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-end">
                        <NavLink to={"/checker/0"} className='caret-lime-900'>
                            CHEKER
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Enter