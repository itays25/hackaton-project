import axios from "axios"
import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Storage } from "../App"
import AppropriateQuestion from "./AppropriateQuestion"


export default function Questioning(props) {
    const { counter, setCounter } = useContext(Storage)
    // console.log(props.videoData)
    const navigate = useNavigate();

    const nextVideo = () => {
        props.setCounter(props.counter + 1);
    }

    return (
        <div>
            <AppropriateQuestion/>
        </div>
    )
}