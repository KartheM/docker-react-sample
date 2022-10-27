import React from 'react';
import {  Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router, 
    Routes, 
    Route
  } from 'react-router-dom';
  
const Header= () =>{
  return (
//   <div>
//     <li>
//       <Link to="/">Zone 1</Link>
//     </li>
//     <li>
//       <Link to="/cats">Zone 2</Link>
//     </li>
//     <li>
//       <Link to="/sheeps">Zone 3</Link>
//     </li>
//   </div>
<div>
{/* <Navbar /> */}
   <Router>
dasdasd
     <Routes>
       <Route path="/"/>
       <Route path="/experiences"/>
     </Routes>

   </Router>
   </div>
  );
}
export default Header;