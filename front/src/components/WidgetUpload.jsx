import { useContext, useEffect, useRef } from "react"
import { Storage } from "../App"
import Button from 'react-bootstrap/Button';


const WidgetUpload = () => {
    const { setCloudinaryLink } = useContext(Storage)

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
        <div className="h-25 w-50 p-2  d-flex justify-content-center">
            <Button variant="info"  className="btn btn-primary h-100 w-100" onClick={() => widgetRef.current.open()}>
            upload your video
            </Button>
        </div>

    )
}
export default WidgetUpload