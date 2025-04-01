import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import { Outlet } from 'react-router-dom';
import Canvas from "./components/Canvas"
import Home from "./Routes/Home";
import Videos from "./Routes/Videos";
import Contact from "./Routes/Contact";
import Tales from "./Routes/Tales";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <HashRouter>

      <Canvas />

      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/home/talesAsOldAsTime" element={<Tales />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Outlet />
    </HashRouter>
  )
}

export default App;