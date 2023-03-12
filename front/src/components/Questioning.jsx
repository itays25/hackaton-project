import { React, useContext, useEffect, useState } from "react";
import { Storage } from "../App";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Questioning() {
  // const params = useParams();
  const { videoSrc, randomOptions, emotionList, answers,loading } = useContext(Storage);

  // useEffect(() => {
  //   answers(params.index);
  // }, [])

  const answer = (option) => {
    localStorage.getItem(`${option}Answer`) && localStorage.getItem(`${option}Answer`)

  }

  // console.log(localStorage.getItem(`wrongAnswer`));

  const qualitySave = (level) => {
    localStorage.setItem("quality", level)
  }

  function validSave(picked) {
    localStorage.setItem("option", picked)
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
    // console.log(clicked);
  }
  function handleClick2(params) {
    const updatedClicked = [...clicked2];
    for (let i = 0; i < updatedClicked.length; i++) {
      updatedClicked[i] = false;
    }
    updatedClicked[params] = !updatedClicked[params];
    setClicked2(updatedClicked);
    //  console.log(clicked2);
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


  return (
    <div>
      {loading ? "hi" : "ho"}
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
            <button onClick={() => { qualitySave(number) ;  handleClick(number) }} key={number}
              className={clicked[number]
                ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                : "bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
              {number}
            </button>
          ))}
        </div>

      </div>

      <header className="text-center fs-2">
        How does the person feel?
      </header>
                
      <div className="emotion px-2 flex flex-row justify-center">
        <button onClick={() => { validSave("correct"); handleClick2(0) }}
          className={clicked2[0]
            ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}>
          {localStorage.getItem("correctAnswer")}
        </button>

        <button onClick={() => { validSave("random"); handleClick2(1) }}
          className={clicked2[1]
            ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}>
          {localStorage.getItem("firstRandom")}
        </button>

        <button onClick={() => { validSave("wrong"); handleClick2(3) }}
          className={clicked2[3]
            ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}>
          {localStorage.getItem("wrongAnswer")}
        </button>

        <button onClick={() => { validSave("random"); handleClick2(2) }}
          className={clicked2[2]
            ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}>
          {localStorage.getItem("secondRandom")}
        </button>

      </div>
    </div>
  );
}
