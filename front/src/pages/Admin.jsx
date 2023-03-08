import { useContext } from "react"
import { Storage } from "../App"
import SmallVideos from "../components/SmallVideos";


export default function Admin() {
    const { videoSrc } = useContext(Storage)
    console.log("surce:", videoSrc);
    return (
        
        <div className="w-full h-screen">
            sort by : <select name="sad" id=""> 
            <option value="">rating</option>
            <option value="">nothing</option>
            <option value="">klum</option>
            </select>
           <table className="w-5/6 ml-16  ">
                <thead >
                    <tr>
                        <th className="border border-gray-500 px-4 py-2 ">Video </th>
                        <th className="border border-gray-500 px-4 py-2">donor emotion</th>
                        <th className="border border-gray-500 px-4 py-2">inappropriate votes</th>
                        <th className="border border-gray-500 px-4 py-2">validation correct</th>
                        <th className="border border-gray-500 px-4 py-2">validation random</th>
                        <th className="border border-gray-500 px-4 py-2">validation similar(wrong)</th>
                        <th className="border border-gray-500 px-4 py-2">quality votes:1</th>
                        <th className="border border-gray-500 px-4 py-2">quality votes:2</th>
                        <th className="border border-gray-500 px-4 py-2">quality votes:3</th>
                        <th className="border border-gray-500 px-4 py-2">quality votes:4</th>
                        <th className="border border-gray-500 px-4 py-2">quality votes:5</th>
                    </tr>
                </thead>
                <tbody>
                    {videoSrc.map((item, index) => {
                        return (
                            <tr key={index} className="hover:bg-slate-400">
                                <td className="border border-gray-500  hover:bg-slate-400 ">
                                <SmallVideos src={item?.cloudinaryLink} /></td>
                                <td className="border border-gray-500 px-4 py-2">{item?.emotion}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.isAppropriate}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.validation?.correctAnswer}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.validation?.randomAnswer}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.validation?.similiarAnswer}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.quality?.[1]}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.quality?.[2]}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.quality?.[3]}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.quality?.[4]}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.quality?.[5]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div> 
     
    )
}