import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/Home'; 
import About from './Views/About';
import Portfolio from './Views/Portfolio';
import Contact from './Views/Contact';
// import NavBar from './Shared/NavBar';



const AppRouter = () => 
{
    return (
      <Router>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    );
  };
  
export default AppRouter;