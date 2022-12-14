import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/presentation" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/boutique" element={<OurStore />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
