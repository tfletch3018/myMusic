import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Routes/Home";
import Videos from "./Routes/Videos";
import Contact from "./Routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <HashRouter>

      <Navbar />

      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Outlet />
    </HashRouter>
  )
}

export default App;