import WidgetUpload from "../components/WidgetUpload";
// import YourEmotion from "../components/YourEmotion";

export default function Donor() {
    return (
        <div className="Аh-100 w-100 d-flex justify-content-center align-items-center ">
            <div className="h-75 w-75 d-flex flex-column justify-content-around align-items-center">
                <WidgetUpload />
                {/* <YourEmotion /> */}
            </div>
        </div>
    )
}