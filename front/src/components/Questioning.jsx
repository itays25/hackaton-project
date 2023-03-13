import { React, useContext, useEffect, useState } from "react";
import { Storage } from "../App";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Questioning(props) {
  const { videoSrc, randomOptions, emotionList, answers, loading } = useContext(Storage);
  const counter = props.counter
  const qualitySave = (level) => {
    localStorage.setItem("quality", level)
    localStorage.setItem("index",counter)
  }

  function validSave(picked) {
    localStorage.setItem("option", picked)
    localStorage.setItem("index",counter)

  }

  const [clickedL, setCclickedL] = useState(false);
  const [clickedR, setCclickedR] = useState(false);
  const [clicked, setClicked] = useState([false, false, false, false, false, false]);
  const [clicked2, setClicked2] = useState([false, false, false, false, false]);

  const buttonL = clickedL
    ? "bg-gray-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
    : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l";
  const buttonR = clickedR
    ? "bg-gray-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
    : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r";

  function handleClick(number) {
    const updatedClicked = [...clicked];
    for (let i = 0; i < updatedClicked.length; i++) {
      updatedClicked[i] = false;
    }
    updatedClicked[number] = !updatedClicked[number];
    setClicked(updatedClicked);
  }
  function handleClick2(params) {
    const updatedClicked = [...clicked2];
    for (let i = 0; i < updatedClicked.length; i++) {
      updatedClicked[i] = false;
    }
    updatedClicked[params] = !updatedClicked[params];
    setClicked2(updatedClicked);
  }
  function buttonclicked(param) {
    if (param == "L") {
      if (clickedL == false) {
        if (clickedR == true) {
          setCclickedR(false);
        }
        setCclickedL(true);
      }
      if (clickedL == true) {
        setCclickedL(false);
      }
    }
    if (param == "R") {
      if (clickedR == false) {
        if (clickedL == true) {
          setCclickedL(false);
        }
        setCclickedR(true);
      }
      if (clickedR == true) {
        setCclickedR(false);
      }
    }
  }
  const myOrder = props.myOrder


 const answeroption = ['correct',"random","random","wrong"]
 const localstorageoption = ["correctAnswer","firstRandom","secondRandom","wrongAnswer"]

  return (
    <div>
      {/* {loading ? "hi" : "ho"} */}
      <div className="flex flex-col items-center p-1 pt-1">
        <header className="text-center fs-2 p-1">
          Is it an appropriate video?
        </header>

        <div className="inline-flex">
          <button className={buttonL}
            onClick={() => {
              localStorage.setItem("inappropriate", 1);
              buttonclicked("L");
            }}>
            NO
          </button>

          <button className={buttonR}
            onClick={() => {
              localStorage.removeItem("inappropriate");
              buttonclicked("R");
            }}>
            YES
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center px-2">
        <div className="text-center  ">
          <header className="text-center fs-2 ">
            Rate the video quality
          </header>
          <p>(regardless of content)</p>
        </div>

        <div>
          {[1, 2, 3, 4, 5].map((number) => (
            <button onClick={() => { qualitySave(number); handleClick(number) }} key={number}
              className={clicked[number]
                ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"}>
              {number}
            </button>
          ))}
        </div>

      </div>

      <header className="text-center fs-2">
        How does the person feel?
      </header>
              
      <div className="emotion px-2 flex flex-row justify-center">
         {myOrder.map((index,none)=>(<button onClick={() => { validSave(answeroption[index]); handleClick2(index) }}
          className={clicked2[index]
            ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded m-2"}>
          {localStorage.getItem(localstorageoption[index])}
        </button>))}
      </div>
    </div>
  );
}
