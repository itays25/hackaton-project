<<<<<<< HEAD
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

=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> b49f4e4 (backend basic functions)
  );
}

export default App;
