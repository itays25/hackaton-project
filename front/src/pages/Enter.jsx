import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Emotion from "../lotty/Emotion1.json"
import Lottie from "lottie-react";
import { useContext, useEffect, useRef, useState } from "react"
import { Storage } from "../App"


const Enter = () => {
    const { setCloudinaryLink } = useContext(Storage)
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    return (
        <div className="h-100 w-100 d-flex justify-content-center flex-column align-content-around ">
            <Lottie animationData={Emotion} loop={true} className="w-50 h-auto " />
            <NavLink to={"/donor"} style={{ textDecoration: 'none' }}
                onClick={() => widgetRef.current.open()}>
                <Card
                    bg={"primary".toLowerCase()}
                    key={"primary"}
                    text={"primary".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 w-75 p-5 m-5 rounded-pill">
                    <Card.Title className='fs-2'>
                        DONOR
                    </Card.Title>
                </Card>
            </NavLink>
            <NavLink to={"/checker/0"} style={{ textDecoration: 'none' }}>
                <Card
                    bg={"danger".toLowerCase()}
                    key={"danger"}
                    text={"danger".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 w-75 p-5 m-5 rounded-pill">
                    <Card.Title className='fs-2' >
                        CHECKER
                    </Card.Title>
                </Card>
            </NavLink>
        </div>
    )
}
export default Enter