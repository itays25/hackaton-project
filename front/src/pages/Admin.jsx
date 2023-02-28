import { useContext } from "react"
import { Storage } from "../App"
import Table from 'react-bootstrap/Table';
import SmallVideos from "../components/SmallVideos";


export default function Admin() {
    const { videoSrc } = useContext(Storage)
    console.log("surce:", videoSrc);
    return (

        <div>
            <Table striped bordered size="sm" hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>donor emotion</th>
                        <th>inappropriate votes</th>
                        <th>validation correct</th>
                        <th>validation random</th>
                        <th>validation similar(wrong)</th>
                        <th>quality 1</th>
                        <th>quality 2</th>
                        <th>quality 3</th>
                        <th>quality 4</th>
                        <th>quality 5</th>
                    </tr>
                </thead>
                <tbody>

                    {videoSrc.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td><SmallVideos src={item?.cloudinaryLink} /></td>
                                <td>{item?.emotion}</td>
                                <td>{item?.isAppropriate}</td>
                                <td>{item?.validation?.correctAnswer}</td>
                                <td>{item?.validation?.randomAnswer}</td>
                                <td>{item?.validation?.similiarAnswer}</td>
                                <td>{item?.quality?.[1]}</td>
                                <td>{item?.quality?.[2]}</td>
                                <td>{item?.quality?.[3]}</td>
                                <td>{item?.quality?.[4]}</td>
                                <td>{item?.quality?.[5]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div >
    )
}