import { useState } from "react";
import WidgetUpload from "../components/WidgetUpload";
import Image2 from '../lotty/uploading.json'
import Image3 from '../images/monkey.png'
import logo from '../images/logo.png'
import Lottie from "lottie-react";
import uploadLotty from "../lotty/uploadDoc.json"

export default function Donor() {
    const [acceptterms, setacceptterms] = useState(false)
    // console.log(acceptterms);

    return (
        <div className="h-screen w-screen d-flex align-items-center justify-evenly bg--50 ">


                <Lottie animationData={uploadLotty} loop={true} className="w-5/12 h-auto  " />

            <div className="w-1/3">

                <div className=" ">
                    <h1 className="font-sans text-3xl ">
                        upload video:
                    </h1>
                    <p>step 1 : choose video to upload</p>
                    <p>step 2 : accept uplaoding </p>
                    <p>step 3 : choose video to upload</p>
                </div>

                <div>
                    by uploading video you
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        accept terms :
                    </a>
                    <input type="checkbox" onClick={() => setacceptterms(!acceptterms)} />
                </div>


                <div className="">
                    <WidgetUpload accept={acceptterms} />
                </div>

            </div>
        </div>
    )
}