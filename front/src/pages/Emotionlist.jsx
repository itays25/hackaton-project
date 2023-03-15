import { useContext } from "react";
import { Storage } from "../App";
import { NavLink } from "react-router-dom";
export default function Emotionlist() {
    const { emotionList } = useContext(Storage);
    console.log(emotionList);
    return(
       <div> <p>
      
        {emotionList?.map((spectrum) =>
          spectrum?.stock.map((emotion) => {
            if (emotion.need === true) {
              return (
                <p>
                  {console.log(emotion)}
                  {emotion.title}
                </p>
              );
            }
          })
        )}
      </p>
      <NavLink to={"/donor"} style={{ textDecoration: 'none' }} >
      Upload video
      </NavLink></div>
    )
}