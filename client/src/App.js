import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Learn from './pages/Learn';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
