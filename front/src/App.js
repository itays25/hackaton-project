import { createContext, useContext, useEffect, useState } from "react";
import './App.css';
import { Cloudinary } from "@cloudinary/url-gen";
import PlayerControl from './components/Player';
import { Routes, Route } from 'react-router-dom';
import WidgetUpload from './components/WidgetUpload';
import Context from './Context';


export const Storage = createContext()

function App() {
  const values = Context()

  return (
    <div className="">
      <Route>
        <Routes path="/" element={<WidgetUpload/>}/>
        <Routes path="/donor" element={<Donor/>}/>
        <Routes path="/checker" element={<Checker/>}/>
      </Route>
    </div>
  );
}

export default App;
