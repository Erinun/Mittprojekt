import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landingpage.js';
import ProcessPage from './Pages/ProcessPage.js';
import MaterialPage from './Pages/MaterialPage.js';
import './App.css';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="site-header">
          <img src="vasteras stad_logotyp.png" alt="Logotyp" className="logo" />
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/processer" element={<ProcessPage />} />
          <Route path="/material" element={<MaterialPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
