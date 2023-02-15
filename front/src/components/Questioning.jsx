import axios from "axios"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Storage } from "../App"

export default function Questioning(props) {
    const { counter, setCounter } = useContext(Storage)
    console.log(props.videoData)
    const incInappr = () => {
        axios.put("http://localhost:8639/incInappr/")
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }
    
    return (
        <div>
            <h2>
                "Is there inappropriate content?"
            </h2>
            <button onClick={incInappr()}>
                YES
            </button>
        </div>
    )
}