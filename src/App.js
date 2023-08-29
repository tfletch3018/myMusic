// import { Outlet, Link } from "react-router-dom";
// import myMusicPic from "../src/images/myMusicPic.ico";
// import "./index.css";



// function App() {
//   return (

//     <div>

//       <nav>
//         <Link to="/"><img src={myMusicPic} id="logo" alt="" /></Link> {" "}
//         <Link to="/home">myMusic</Link>
//         <Link to="/videos">myVideos</Link>
//         <Link to="/contact">letsLinkUp</Link>
//       </nav>

//       <Outlet />
//     </div>
//   );
// }

// export default App;

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