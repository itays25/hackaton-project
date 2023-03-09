import { useContext, useState } from "react";
import { Storage } from "../App";
import Graph from "../components/Graph";
import SmallVideos from "../components/SmallVideos";
import Popup from "../components/Popup ";
import AdminNavBar from "../components/AdminNavbar";
export default function Admin() {
  const { videoSrc } = useContext(Storage);
  // console.log("surce:", videoSrc);
  const [isOpen, setIsOpen] = useState(false);
  const [popupvideo, setpopupvideo] = useState();
  const [popupemotion, setpopupemotion] = useState();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-screen">
      <AdminNavBar></AdminNavBar>
      {/* sort by : <select name="sad" id=""> 
            <option value="">rating</option>
            <option value="">nothing</option>
            <option value="">klum</option>
            </select> */}
      <table className="w-5/6 ml-3  ">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2 ">Video </th>
            <th className="border border-gray-500 px-4 py-2">donor emotion</th>
            <th className="border border-gray-500 px-4 py-2">total votes</th>
            <th className="border border-gray-500 px-4 py-2">validation </th>
            <th className="border border-gray-500 px-4 py-2">quality votes</th>
            <th className="border border-gray-500 px-4 py-2">
              validation agree
            </th>
            <th className="border border-gray-500 px-4 py-2">status</th>
            <th className="border border-gray-500 px-4 py-2">
              inappropriate votes
            </th>
          </tr>
        </thead>
        <tbody>
          {videoSrc.map((item, index) => {
            const similar = item?.validation?.similiarAnswer
              ? item?.validation?.similiarAnswer
              : 0;
            const correct = item?.validation?.correctAnswer
              ? item?.validation?.correctAnswer
              : 0;
            const random = item?.validation?.randomAnswer
              ? item?.validation?.randomAnswer
              : 0;
            const sum = correct + random + similar;
            const amount = (correct / sum) * 100;
            const amount1 = (similar / sum) * 100;
            const amount2 = amount + amount1;
            return (
              <tr key={index} className="hover:bg-slate-400">
                <td className="border border-gray-500  hover:bg-slate-400 ">
                  <button
                    onClick={() => {
                      togglePopup();
                      setpopupvideo(item?.cloudinaryLink);
                      setpopupemotion(item?.emotion);
                    }}
                  >
                    <video
                      width="320"
                      height="240"
                    //   autoPlay
                    //   loop
                    //   muted
                      className="border-2 border-grey-500 "
                    >
                      <source
                        src={item?.cloudinaryLink}
                        type="video/mp4"
                      ></source>
                    </video>
                  </button>

                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {item?.emotion}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {" "}
                  {item?.votes}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {" "}
                  correct: {item?.validation?.correctAnswer} random:{" "}
                  {item?.validation?.randomAnswer} similar:{" "}
                  {item?.validation?.similiarAnswer}{" "}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {" "}
                  <Graph index={index}></Graph>
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  only coreect: {amount.toFixed(2)}% coreect+simillar:{" "}
                  {amount2.toFixed(2)}%
                </td>
                <td className="border border-gray-500 px-4 py-2"> </td>
                <td className="border border-gray-500 px-4 py-2">
                  {item?.isAppropriate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {isOpen && (
          <Popup
            title="My Popup"
            content={<SmallVideos 
              src={popupvideo} />}
            handleClose={togglePopup}
            emotion={popupemotion}
          />
        )}
      </div>
    </div>
  );
}
