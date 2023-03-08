import { React, useContext } from 'react';
import { Storage } from '../App';
import { useParams } from "react-router-dom";


export default function Questioning() {
    const params = useParams();
    const { videoSrc, randomOptions, } = useContext(Storage)

    const qualitySave = (level) => {
        localStorage.setItem("quality", level)
    }

    function validSave(picked) {
        localStorage.setItem("option", picked)
    }

    return (
        <div>
            <div className='flex flex-col items-center p-1 pt-1'>
                <header className="text-center fs-2 p-1">Is it an appropriate video?</header>
<<<<<<< HEAD
                <Button onClick={() => localStorage.setItem('inappropriate', 1)}>NO</Button>
                <Button className=''>YES</Button>
=======
                <div class="inline-flex">
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() =>
    localStorage.setItem('inappropriate', 1)}>
  NO
  </button>
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
  YES
  </button>
</div>
>>>>>>> 5f8231de (reachadmin)
            </div>

            <div className='flex flex-col items-center px-2'>

                <div className="text-center  ">
                    <header className="text-center fs-2 ">
                        Rate the video quality
                    </header>
                    <p>(regardless of content)</p>
                </div>
<<<<<<< HEAD

                <Button onClick={() => qualitySave(1)}>1</Button>
                <Button onClick={() => qualitySave(2)}>2</Button>
                <Button onClick={() => qualitySave(3)}>3</Button>
                <Button onClick={() => qualitySave(4)}>4</Button>
                <Button onClick={() => qualitySave(5)}>5</Button>

=======
                <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => localSaveData(1)}>1</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() => localSaveData(2)}>2</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => localSaveData(3)}>3</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => localSaveData(4)}>4</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => localSaveData(5)}>5</button>
                </div>
>>>>>>> 5f8231de (reachadmin)
            </div>

                <header className="text-center fs-2">
                    How does the person feel?
                </header>
<<<<<<< HEAD
                <Button classname=" p-2 alerts opacity-75" onClick={() => validSave("correct")}>
                    {videoSrc[params.index]?.emotion}
                </Button>
                <Button classname=" p-2 alerts opacity-75 " onClick={() => validSave("random")}>
                    {randomOptions[1]}
                </Button>
                <Button classname=" p-2 alerts opacity-75 " onClick={() => validSave("random")}>
                    {randomOptions[0]}
                </Button>
                <Button classname=" p-2 alerts opacity-75" onClick={() => validSave("wrong")}>
                    WRONGG(ONE MORE FUNC)
                </Button>
=======
            <div className='emotion px-2 flex flex-row justify-center'>
                <button c class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" size="lg" key={'primary'} variant={'primary'}
                    onClick={() => setCorrect("correct")}>
                    {videoSrc[params.index]?.emotion}
                </button>
                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" size="lg" key={'success'} variant={'success'}
                    onClick={() => setCorrect("random")}>
                    {allEmotion[randomA]}
                </button>
                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" size="lg" key={'warning'} variant={'warning'}
                    onClick={() => setCorrect("random")}>
                    {allEmotion[randomA2]}
                </button>
                <button c class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" size="lg" key={'danger'} variant={'danger'}
                    onClick={() => setCorrect("random")}>
                    {allEmotion[randomA3]}
                </button>
>>>>>>> 5f8231de (reachadmin)

            </div>
        </div>
    )
}


