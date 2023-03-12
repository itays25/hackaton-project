import { useNavigate } from "react-router-dom";
export default function AdminNavBar() {
    const navigate = useNavigate();

    return(
        <div class="bg-blue-500 p-3">
        <ul class="flex">
          <li class="mr-6">
            <button class="text-white hover:text-gray-200" onClick={()=>navigate('/admin')}>Dashbord</button>
          </li>
          <li class="mr-6">
            <button class="text-white hover:text-gray-200" onClick={()=>navigate('/statistics')}>Statistics</button>
          </li>
          <li class="mr-6">
            <button class="text-white hover:text-gray-200" onClick={()=>navigate('/EmotionControl')}>Emotion control</button>
          </li>
        </ul>
      </div>

    )
}