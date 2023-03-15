import AdminNavBar from "../components/AdminNavbar"
import { useContext } from "react";
export default function EmotionControl(params) {

    return(
        <div>   { localStorage.getItem('adpas') == '0987' ?   (
            <div><AdminNavBar/>
          statistic control</div>
          ): (<div>
        login at admin page  
          </div>)
       }
        </div>
    )
}