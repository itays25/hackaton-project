import { useContext, useState } from "react";
import { Storage } from "../App";
import Graph from "../components/Graph";
import SmallVideos from "../components/SmallVideos";
import Popup from "../components/Popup ";
import AdminNavBar from "../components/AdminNavbar";
import axios from "axios";
export default function Admin() {
  const { videoSrc } = useContext(Storage);

  const window = "flex justify-center items-center border border-gray-800 p-6 rounded-lg w-40 h-14"
  const [isOpen, setIsOpen] = useState(false);
  const [popupvideo, setpopupvideo] = useState();
  const [popupemotion, setpopupemotion] = useState();
  const [status, setStatus] = useState("");
  const [toEdit, setToEdit] = useState(`${window} invisible`)
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  
  function updatestatus(videoId, status) {
    axios
      .put(`http://localhost:8639/video/changeStatus/${videoId}`, {
        status: status,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full h-screen">
      <AdminNavBar />
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
            const similar = item?.validation?.similiar
              ? item?.validation?.similiar
              : 0;
            const correct = item?.validation?.correct
              ? item?.validation?.correct
              : 0;
            const random = item?.validation?.random
              ? item?.validation?.random
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
                    }}>
                    <video
                      width="320"
                      height="240"
                      //   autoPlay
                      //   loop
                      //   muted
                      className="border-2 border-grey-500 ">
                      <source
                        src={item?.cloudinaryLink}
                        type="video/mp4"
                      ></source>
                    </video>
                  </button>
                </td>

                <td className="border border-gray-500 px-4 py-2">
                  {item?.feeling.emotion}
                </td>

                <td className="border border-gray-500 px-4 py-2">
                  {" "}
                  {item?.votes}
                </td>

                <td className="border border-gray-500 px-4 py-2">
                  {" "}
                  correct: {item?.validation?.correct} random:{" "}
                  {item?.validation?.random} similar:{" "}
                  {item?.validation?.similiar}{" "}
                </td>

                <td className="border border-gray-500 px-4 py-2">
                  {" "}
                  <Graph index={index} />
                </td>

                <td className="border border-gray-500 px-4 py-2">
                  only coreect: {amount.toFixed(2)}% coreect+simillar:{" "}
                  {amount2.toFixed(2)}%
                </td>

                <td className="border border-gray-500 px-4 py-2">
                  <p>
                    {item.status}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                      className="opacity-50" onClick={() => setToEdit(`${window} visible`)}>
                      <path fillRule="evenodd" clipRule="evenodd" fill="#000000" d="M14.2322 5.76777C15.2085 4.79146 16.7915 4.79146 17.7678 5.76777L18.4749 6.47487C19.4512 7.45118 19.4512 9.0341 18.4749 10.0104L10.3431 18.1421L7.10051 18.1421C6.54822 18.1421 6.1005 17.6944 6.10051 17.1421L6.10051 13.8995L14.2322 5.76777ZM16.3536 7.18198L17.0607 7.88909C17.2559 8.08435 17.2559 8.40093 17.0607 8.59619L16 9.65685L14.5858 8.24264L15.6464 7.18198C15.8417 6.98672 16.1583 6.98672 16.3536 7.18198ZM14.5858 11.0711L9.51472 16.1421L8.10051 16.1421L8.10051 14.7279L13.1716 9.65685L14.5858 11.0711Z" />
                    </svg>
                  </p>

                  {console.log(item)}
                  <div className={toEdit}>
                    <select defaultValue={""} id="" className="w-32 h-9"
                      onChange={(e) => updatestatus(item._id,e.target.value)}>
                      <option value="In 1st check">In 1st check</option>
                      <option value="In 2nd check">In 2nd check</option>
                      <option value="Validated">Validated</option>
                      <option value="Unclear Emotion">Unclear Emotion</option>
                      <option value="Banned">Banned</option>
                    </select>
                  </div>


                </td>

                <td className="border border-gray-500 px-4 py-2">
                  {item?.inappropriate}
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        {isOpen && (
          <Popup content={<SmallVideos
            autoplay muted
            src={popupvideo} />}
            handleClose={togglePopup}
            emotion={popupemotion}
            title="My Popup" />
        )}
      </div>
    </div>
  );
}
