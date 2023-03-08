import { useContext } from "react"
import { Storage } from "../App"
import Graph from "../components/Graph";
import SmallVideos from "../components/SmallVideos";


export default function Admin() {
    const { videoSrc } = useContext(Storage)
    // console.log("surce:", videoSrc);
    return (
        
        <div className="w-full h-screen">
            {/* sort by : <select name="sad" id=""> 
            <option value="">rating</option>
            <option value="">nothing</option>
            <option value="">klum</option>
            </select> */}
           <table className="w-5/6 ml-3  ">
                <thead >
                    <tr>
                        <th className="border border-gray-500 px-4 py-2 ">Video </th>
                        <th className="border border-gray-500 px-4 py-2">donor emotion</th>
                        <th className="border border-gray-500 px-4 py-2">total votes</th>
                        <th className="border border-gray-500 px-4 py-2">inappropriate votes</th>
                        <th className="border border-gray-500 px-4 py-2">validation </th>
                        <th className="border border-gray-500 px-4 py-2">quality votes</th>
                        <th className="border border-gray-500 px-4 py-2">validation agree</th>
                        <th className="border border-gray-500 px-4 py-2">status</th>
               
                    </tr>
                </thead>
                <tbody>
                    {videoSrc.map((item, index) => {
                    
                    const similar =  (item?.validation?.similiarAnswer) ? item?.validation?.similiarAnswer : 0
                    const correct =  (item?.validation?.correctAnswer) ? item?.validation?.correctAnswer : 0
                    const random =  (item?.validation?.randomAnswer) ? item?.validation?.randomAnswer : 0       
                      const sum = correct + random + similar
                       const amount = (correct/sum)*100
                       const amount1 = (similar/sum)*100
                       const amount2 = (amount+amount1)
                       return (
                            <tr key={index} className="hover:bg-slate-400">
                                <td className="border border-gray-500  hover:bg-slate-400 ">
                                <SmallVideos src={item?.cloudinaryLink} /></td>
                                <td className="border border-gray-500 px-4 py-2">{item?.emotion}</td>
                                <td className="border border-gray-500 px-4 py-2"> {item?.votes}</td>
                                <td className="border border-gray-500 px-4 py-2">{item?.isAppropriate}</td>
                                <td className="border border-gray-500 px-4 py-2"> correct: {item?.validation?.correctAnswer} random: {item?.validation?.randomAnswer} similar: {item?.validation?.similiarAnswer} </td>      
                                <td className="border border-gray-500 px-4 py-2"> <Graph index={index}></Graph></td>
                                <td className="border border-gray-500 px-4 py-2"> 
                                
                               only coreect: {amount.toFixed(2)}%
                               coreect+simillar: {amount2.toFixed(2)}%
                                 </td>
                                <td className="border border-gray-500 px-4 py-2"> </td>
                        
                            </tr>
                        )
                    })}
                </tbody>
            </table>
           <div > </div>
            </div> 
     
    )
}