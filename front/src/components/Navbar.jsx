import { useState } from "react";
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div style={{display:"flex"}} className="w-screen border-b-2 " >
            <a href="http://emotiplay.com/"><img src={logo} className=" w-64 p-2" /></a>
       
            <button className="ml-60 pl-1 pr-1 hover:border-x-2" onClick={()=> navigate('../enter')}>  HOME </button>
            <button className="ml-8 pl-1 pr-1 hover:border-x-2" onClick={()=> navigate('../emotionlist')}>  DONOR </button>
            <button className="ml-8 pl-1 pr-1 hover:border-x-2" onClick={()=> navigate('../checker/0')}>  CHECKER </button>
            <button className="ml-8 pl-1 pr-1 hover:border-x-2" onClick={()=>window.open('https://www.emotiplay.com', '_blank')}>  ABOUT US </button>
            <button className="ml-8 pl-1 pr-1 hover:border-x-2" onClick={()=>window.open('http://emotiplay.com/contact-us/', '_blank')}> CONTACT US </button>
        </div>
    )
}