import { LottiePlayer } from "lottie-react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react";
import Thanks from '../lotty/realThanks.json'

export default function Thankyou() {
  const navigate = useNavigate()
  return (
    <div className=" h-screen flex flex-col items-center justify-evenly">
      <Lottie
        animationData={Thanks}
        loop={true}
        className="w-1/3 mt-6"
      />
      <div className="text-3xl h-1/4 flex flex-col justify-center items-center">
        <h1 className=" p-2">
          Thank you for your help!!!
        </h1>
        <p className=" p-2">
          Now your video are going to checking
          </p>
        <button onClick={() => navigate('../enter')}
          className="bg-orange-400 rounded w-1/3  p-2 mt-1">
          Finish
        </button>
      </div>

    </div>)
}