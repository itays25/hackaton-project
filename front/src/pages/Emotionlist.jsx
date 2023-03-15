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
      <Lottie className="w-2/5 h-auto fixed right-24 bottom-17" animationData={Animation} loop={true} />

      <div className="w-1/2 z-0 mt-24 ml-14 flex flex-col content-end ">
        <h3 className=" w-full text-2xl text-center mt-7">
          This is the emotions
          <br />
          we are looking for:
        </h3>

        <div className="w-full flex flex-col justify-center">
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

      <div className="w-2/5 z-40 sticky bottom-5 right-5 flex ">
        <NavLink to={"/donor"} style={{ textDecoration: 'none' }}
          className="z-40 sticky bottom-5 left-12 bg-orange-400 rounded p-3">
          Upload video
        </NavLink>
      </div>

    </div>
  )
}