import { React, useContext, useState } from "react";
import { Storage } from "../App";
import { useParams } from "react-router-dom";

export default function Questioning() {
  const params = useParams();
  const { videoSrc, allEmotion, setCorrect } = useContext(Storage);
  const [clickedL, setCclickedL] = useState(false);
  const [clickedR, setCclickedR] = useState(false);
  const [clicked, setClicked] = useState([false,false,false,false,false,false]);
  const [clicked2, setClicked2] = useState([false,false,false,false,false]);
  const buttonL = clickedL
    ? "bg-gray-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
    : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l";
  const buttonR = clickedR
    ? "bg-gray-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
    : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r";
  
  const localSaveData = (level) => {
    localStorage.setItem("quality", level);
  };

  const randomA = Math.floor(Math.random() * allEmotion.length);
  const randomA2 = Math.floor(Math.random() * allEmotion.length);
  const randomA3 = Math.floor(Math.random() * allEmotion.length);
  function handleClick(number) {
    const updatedClicked = [...clicked];
   for (let i = 0; i < updatedClicked.length; i++) {
       updatedClicked[i] = false;
   }
    updatedClicked[number] = !updatedClicked[number]; 
    setClicked(updatedClicked);
    console.log(clicked);
  }
  function handleClick2(params) {
    const updatedClicked = [...clicked2];
    for (let i = 0; i < updatedClicked.length; i++) {
        updatedClicked[i] = false;
    }
     updatedClicked[params] = !updatedClicked[params]; 
     setClicked2(updatedClicked);
     console.log(clicked2);
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
      <div className="flex flex-col items-center p-1 pt-1">
        <header className="text-center fs-2 p-1">
          Is it an appropriate video?
        </header>
        <div class="inline-flex">
          <button
            class={buttonL}
            onClick={() => {
              localStorage.setItem("inappropriate", 1);
              buttonclicked("L");
            }}
          >
            NO
          </button>
          <button
            class={buttonR}
            onClick={() => {
              localStorage.removeItem("inappropriate");
              buttonclicked("R");
            }}
          >
            YES
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center px-2">
        <div className="text-center  ">
          <header className="text-center fs-2 ">Rate the video quality</header>
          <p>(regardless of content)</p>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((number) => (
            <button class={ clicked[number]
                ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                : "bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={() => {localSaveData(number); handleClick(number)}} key={number}> {number} </button>
          ))}   
        </div>
      </div>

      <header className="text-center fs-2">How does the person feel?</header>
      <div className="emotion px-2 flex flex-row justify-center">
        <button
          c
          class= { clicked2[0] ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}
          size="lg"
          key={"primary"}
          variant={"primary"}
          onClick={() => {setCorrect("correct"); handleClick2(0)}}
        >
          {videoSrc[params.index]?.emotion}
        </button>
        <button
          class={ clicked2[1] ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}
          size="lg"
          key={"success"}
          variant={"success"}
          onClick={() => {setCorrect("random") ; handleClick2(1)}}
        >
          {allEmotion[randomA]}
        </button>
        <button
          class={ clicked2[2] ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}
          size="lg"
          key={"warning"}
          variant={"warning"}
          onClick={() => {setCorrect("random") ; handleClick2(2)}}
        >
          {allEmotion[randomA2]}
        </button>
        <button
          c
          class={ clicked2[3] ? "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"}
          size="lg"
          key={"danger"}
          variant={"danger"}
          onClick={() => {setCorrect("random") ; handleClick2(3)}}
        >
          {allEmotion[randomA3]}
        </button>
      </div>
    </div>
  );
}
