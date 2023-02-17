import { createContext, useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Cloudinary } from "@cloudinary/url-gen";
import { Routes, Route } from 'react-router-dom';
import Context from './Context';
import Donor from "./pages/Donor";
import Checker from "./pages/Checker";
import Enter from "./pages/Enter";


export const Storage = createContext()

function App() {
  const values = Context()
  return (
    <Storage.Provider value={values}>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        
          <Routes>
            <Route path="/" element={<Enter />}></Route>
            <Route path="/enter" element={<Enter />}></Route>
            <Route path="/donor" element={<Donor />}></Route>
            <Route path="/checker/:index" element={<Checker />}></Route>
          </Routes>
        
      </ThemeProvider>

    </Storage.Provider >

  );
}

export default App;
