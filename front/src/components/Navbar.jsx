import { useState } from "react";
import logo from '../images/logo.png'

export default function Navbar() {

    return (
        <div style={{display:"flex"}} className="w-screen border-b-2 " >
            <img src={logo} alt="" className=" w-64 p-2" />
       
            <button className="ml-60 pl-1 pr-1 hover:border-x-2">  HOME </button>
            <button className="ml-8 pl-1 pr-1 hover:border-x-2">  DONOR </button>
            <button className="ml-8 pl-1 pr-1 hover:border-x-2">  CHECKER </button>
            <button className="ml-8 pl-1 pr-1 hover:border-x-2">  ABOUT US </button>
        </div>
    )
}