import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-black">
      
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    
    </div>
  );
}

export default App;