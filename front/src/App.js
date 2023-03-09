import { createContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route } from 'react-router-dom';
import Context from './Context';
import Donor from "./pages/Donor";
import Checker from "./pages/Checker";
import Enter from "./pages/Enter";
import Admin from "./pages/Admin";
import Preview from "./pages/Preview";
import ContactUs from "./pages/Email";

export const Storage = createContext()

function App() {
  const values = Context()
  return (
    <Storage.Provider value={values}>
      
        <Routes>
          <Route path="/" element={<ContactUs/>}></Route>
          <Route path="/enter" element={<Enter />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/preview" element={<Preview />}></Route>
          <Route path="/checker/:index" element={<Checker />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>

  

    </Storage.Provider >

  );
}

export default App;
