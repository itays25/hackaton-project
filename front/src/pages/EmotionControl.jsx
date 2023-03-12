

import AdminNavBar from "../components/AdminNavbar";
import { Storage } from "../App";
import { useContext } from "react";
export default function Statistics() {
  const { emotionListAdmin } = useContext(Storage);


console.log(emotionListAdmin);
  return (
    <div>
      <AdminNavBar></AdminNavBar>
      <div className="flex justify-center  mt-5">
        {emotionListAdmin?.map((item, index) => (
          <div key={index}>
            <h3 className="flex flex-col items-center border-4 w-44 ml-2 text-2xl">
              {emotionListAdmin[index]?.spectrum}
            </h3>
            {emotionListAdmin[index]?.stock.map((item, index) => (
              <ul key={index} class="list-disc list-inside">
                <li class="flex items-center p-2 border-4 w-44 ml-2 mr-2">
                 {item.need == true? (<input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-blue-500"
                  defaultChecked
                onClick={()=>item.need = false}
                />):
               (<input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-blue-500"
                onClick={()=>item.need = true}
                />)
            
            }
                  
                  <span class="ml-2 text-gray-700">{item.title}</span>
                  
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
      <button className="bg-blue-600 p-3 mt-2" onClick={()=>console.log(emotionListAdmin)}>save</button>
    </div>
  );
}
