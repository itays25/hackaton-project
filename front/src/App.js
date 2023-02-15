import { createContext, useContext, useEffect, useState } from "react";
import './App.css';
import { Cloudinary } from "@cloudinary/url-gen";
import { Routes, Route } from 'react-router-dom';
import WidgetUpload from './components/WidgetUpload';
import Context from './Context';
import Donor from "./pages/Donor";
import Checker from "./pages/Checker";
import Enter from "./pages/Enter";


export const Storage = createContext()

function App() {
  const values = Context()
  return (
    <Storage.Provider value={values}>
      <div className="">
        <Routes>
          <Route path="/" element={<Enter />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/checker" element={<Checker />}></Route>
        </Routes>
      </div>
    </Storage.Provider>

  );
}

export default App;
