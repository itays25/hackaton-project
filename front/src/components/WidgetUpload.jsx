import { useContext, useEffect, useRef } from "react"
import { Storage } from "../App"

const WidgetUpload = () => {
    const {setCloudinaryLink}=useContext(Storage)
    
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dsgdoguhb',
            uploadPreset: "gbpggwot"
        }, (error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("hereeee", result.info.url);
            }
            if (result.info.url) {
                setCloudinaryLink(result.info.url);
            }
        })
    }, [])
    return (
        <button className="w-10 bg" onClick={() => widgetRef.current.open()}>
            upload
        </button>
    )
}
export default WidgetUpload