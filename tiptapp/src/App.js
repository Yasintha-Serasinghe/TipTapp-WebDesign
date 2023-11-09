import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Ads from './Components/Ads';

import Review from './Components/Footer'
import Footer from './Components/Footer';
import Navbar from './Components/NavBar'










function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/c" element={<Ads/>} /> 
         <Route path="/a" element={<Review/>} /> 
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
