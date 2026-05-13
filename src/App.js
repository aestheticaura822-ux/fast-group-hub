import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Websites from './pages/Websites';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WebsiteDetail from './pages/WebsiteDetail';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/website/:id" element={<WebsiteDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;