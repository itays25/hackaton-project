import { useState } from "react";
import logo from '../images/logo.png'

export default function Navbar() {

    return (
        <div style={{display:"flex"}} className="flex justify-evenly shadow-md" 
        >

            <img src={logo} alt="" className=" w-64 p-2" />

            <button>
                HOME
            </button>

        </div>
    )
}