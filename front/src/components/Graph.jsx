import { Bar } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Storage } from "../App";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend
);

Chart.register(ArcElement);


export default function Graph (props){
  const { videoSrc } = useContext(Storage)
 const index = props.index
  const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
          },
        },
      };
      const labels = [""];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "quality 1",
            data: [videoSrc[index]?.quality?.[1] , 0],
            backgroundColor: "green",
          },
          {
            label: "quality 2",
            data: [videoSrc[index]?.quality?.[2], 0],
            backgroundColor: "red",
          },
          {
            label: "quality 3",
            data: [videoSrc[index]?.quality?.[3], 0],
            backgroundColor: "yellow",
          },
          {
            label: "quality 4",
            data: [videoSrc[index]?.quality?.[4], 0],
            backgroundColor: "pink",
          },
          {
            label: "quality 5",
            data: [videoSrc[index]?.quality?.[5], 0],
            backgroundColor: "brown",
          },
        ],
      };
    
   return(
<div className="w-56 h-28"><Bar options={options} data={data} /></div>

   ) 
}