import React from 'react';
import Cart from './components/Cart';
import Calender from './components/Calender';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
              
      <Router>
      <Routes>
        <Route exact path="/" element={<Calender />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    
  );
};

export default App;