import { useState } from "react";
import WidgetUpload from "../components/WidgetUpload";
import Image2 from '../lotty/arrowdown.json'
import Lottie from "lottie-react";
export default function Donor() {
const [acceptterms,setacceptterms] = useState(false)
console.log(acceptterms);
    return (
        <div className="min-h-screen w-100 d-flex justify-content-center align-items-center bg-indigo-50 ">
          <Lottie animationData={Image2} loop={true} className="w-96 h-auto " /> 
            <div>
           <div className="mr-32">  <h1 className="font-sans text-3xl">upload video :</h1> <br />
            <p>step 1 : choose video to upload</p>
            <p>step 2 : accept uplaoding </p>
            <p>step 3 : choose video to upload</p>
            </div>
                <div> by uploading video you <a href="http://" target="_blank" rel="noopener noreferrer"> accept terms :</a>  <input type="checkbox" onClick={()=>setacceptterms(!acceptterms)} /></div> 
                <WidgetUpload accept={acceptterms}/> 
            </div>
        </div>
    )
}