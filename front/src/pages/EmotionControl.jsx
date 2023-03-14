import AdminNavBar from "../components/AdminNavbar";
import { Storage } from "../App";
import { useContext, useState } from "react";
import axios from "axios";

export default function Statistics() {
  const { emotionList } = useContext(Storage);
  const [spectrum, setSpectrum] = useState("")
  const [emotion, setEmotion] = useState("")

  function deleteEmotion(spectrumId, emotionId) {
    console.log(typeof(spectrumId))
    console.log(typeof(emotionId))
    axios.post('http://localhost:8639/emotion/deleteEmotion',
      {
        spectrumId: spectrumId,
        emotionId: emotionId
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  const createNewSpectrum = () => {
    const body = {
      spectrum: spectrum,
      color: "grey",
      stock: [
        {
          title: emotion,
          content: []
        }
      ]
    }
    axios.post('http://localhost:8639/emotion/createSpectrum', body)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  function changeNeed(spectrumID,need,index) {
    axios
      .post(`http://localhost:8639/emotion/changeNeed/${spectrumID}`, {
        need: need,
        index: index
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }


  return (
    <div className="w-screen">
      <AdminNavBar />

      <div className="flex w-screen " style={{ "flexWrap": "wrap" }} >

        <div className="p-3">
          <div className="p-3 flex justify-center justify-evenly items-center border border-gray-800 flex-col rounded-lg w-fit ">
            <h3 className="flex flex-col items-center   ml-2 text-2xl">
              Add one more:
            </h3>
            <input type="text" placeholder="Create new spectrum..." className="p-2 m-1 border border-gray-800 rounded"
              onChange={(e) => setSpectrum(e.target.value)} />
            <input type="text" placeholder="Ad an emotion to your spectrum..." className="p-2 m-1 border border-gray-800 rounded"
              onChange={(e) => setEmotion(e.target.value)} />
            <button className="border border-gray-800 rounded p-2 m-2 bg-orange-500"
              onClick={() => createNewSpectrum()}>
              Create
            </button>
          </div>
        </div>


        {emotionList?.map((item, index) => (
          <div className="h-auto">
            <div key={index} className="p-3 h-auto">
              <h3 className="flex flex-col items-center border-4 w-56 ml-2 text-2xl rounded">
                {emotionList[index]?.spectrum}
              </h3>

              {emotionList[index]?.stock.map((item, i) => (

                <ul key={index} className="list-disc list-inside rounded">
                  <li className="flex items-center justify-between p-2 border-2 w-56 ml-2 mr-2 rounded">

                    <div className="flex items-center">
                    {item?.need == true ? (
                        <input
                          type="checkbox"
                          class="form-checkbox h-4 w-5 text-blue-500"
                          defaultChecked
                          onClick={() => changeNeed(emotionList[index]._id,false,i)}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          class="form-checkbox h-5 w-5 text-blue-500"
                          onClick={() => changeNeed(emotionList[index]._id,true,i)}
                        />
                      )}

                      <span className="ml-2 text-gray-700">
                        {item.title}
                      </span>
                    </div>


                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none"
                        className="opacity-30 " >
                        <path fillRule="evenodd" clipRule="evenodd" fill="#000000" d="M14.2322 5.76777C15.2085 4.79146 16.7915 4.79146 17.7678 5.76777L18.4749 6.47487C19.4512 7.45118 19.4512 9.0341 18.4749 10.0104L10.3431 18.1421L7.10051 18.1421C6.54822 18.1421 6.1005 17.6944 6.10051 17.1421L6.10051 13.8995L14.2322 5.76777ZM16.3536 7.18198L17.0607 7.88909C17.2559 8.08435 17.2559 8.40093 17.0607 8.59619L16 9.65685L14.5858 8.24264L15.6464 7.18198C15.8417 6.98672 16.1583 6.98672 16.3536 7.18198ZM14.5858 11.0711L9.51472 16.1421L8.10051 16.1421L8.10051 14.7279L13.1716 9.65685L14.5858 11.0711Z" />
                      </svg>
{console.log(emotionList)}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                        onClick={() => deleteEmotion(emotionList[index]?._id, item._id)}
                        className="opacity-30 " >
                        <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2" />
                        <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2" />
                      </svg>

                    </div>

                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="bg-blue-600 p-2 mt-2 rounded text-lg" onClick={() => console.log(emotionList)}>save</button>
    </div>
  );
}
