import { useNavigate } from "react-router-dom"

export default function Thankyou() {
  const navigate = useNavigate()
return  <div>
        <h1>thank you</h1>
    <div>lottie here</div>
    <button onClick={()=>navigate('../enter')}>finish</button>
    </div>
}