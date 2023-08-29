// import ReactDOM from 'react-dom/client';
// import {
//   HashRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import App from './App';
// import Home from "./Routes/Home";
// import Videos from "./Routes/Videos";
// import Contact from "./Routes/Contact";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';


// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// root.render(

//   <HashRouter>

//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="home" element={<Home />} />
//         <Route path="/videos" element={<Videos />} />
//         <Route path="/contact" element={<Contact />} />

//       </Route>
//     </Routes>

//   </HashRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


