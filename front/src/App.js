import { createContext, useContext, useEffect, useState } from "react";
import './App.css';
import { Cloudinary } from "@cloudinary/url-gen";
import { Routes, Route } from 'react-router-dom';
import WidgetUpload from './components/WidgetUpload';
import Context from './Context';
import Donor from "./pages/Donor";
import Checker from "./pages/Checker";
import Enter from "./pages/Enter";
import QualityQuestion from "./components/QualityQuestion";
import EmotionQuestion from "./components/EmotionQuestion";


export const Storage = createContext()

function App() {
  const values = Context()
  return (
    <Storage.Provider value={values}>
      <div className="">
        <Routes>
          <Route path="/" element={<Enter />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/checker/:index" element={<Checker />}></Route>
          <Route path="/checker/quality" element={<QualityQuestion/>}></Route>
          <Route path="/checker/emotion" element={<EmotionQuestion/>}></Route>
        </Routes>
      </div>
    </Storage.Provider>

  );
}

export default App;
