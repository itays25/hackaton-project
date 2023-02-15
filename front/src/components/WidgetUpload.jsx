import { useEffect, useRef } from "react"

const WidgetUpload = () => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dsgdoguhb',
            uploadPreset: "gbpggwot"
        }, function (error, result) {
            console.log(error, result);
        })

    }, [])
    return (
        <button onClick={() => widgetRef.current.open()}>
            upload
        </button>
    )
}
export default WidgetUpl