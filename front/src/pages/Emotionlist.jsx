import { useContext } from "react";
import { Storage } from "../App";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import Animation from "../lotty/wanted.json"


export default function Emotionlist() {
  const { emotionList } = useContext(Storage);
  console.log(emotionList);
  return (
    <div className="z-0 w-full">
      <Lottie className="w-2/5 h-auto fixed right-10 bottom-7" animationData={Animation} loop={true} />

      <div className="w-1/2 z-0 mt-24 flex flex-col justify-center">
        <h3 className=" w-5/6 text-2xl text-center">
          This is the emotions
          <br />
          we are looking for:
        </h3>

        <div className="w-4/5 flex flex-col justify-center">
          {emotionList?.map((spectrum) =>
            spectrum?.stock.map((emotion) => {
              if (emotion.need === true) {
                return (
                  <p className="text-center p-2">
                    {console.log(emotion)}
                    {emotion.title}
                  </p>
                );
              }
            })
          )}
        </div>

      </div>

      <div className="w-2/5 z-40 sticky bottom-5 left-5 flex justify-end">
        <NavLink to={"/donor"} style={{ textDecoration: 'none' }}
          className="z-40 sticky bottom-5 left-12 bg-orange-400 rounded p-3">
          Upload video
        </NavLink>
      </div>

    </div>
  )
}