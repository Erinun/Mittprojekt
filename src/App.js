import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../legacy/Pages/Landingpage.js';
import ProcessPage from '../legacy/Pages/ProcessPage.js';
import MaterialPage from '../legacy/Pages/MaterialPage.js';
import KnowledgeSharing from '../legacy/Pages/KnowledgeSharing.js';
import Dashboard from '../legacy/Pages/Dashboard.js';
import Quiz from '../legacy/Pages/Quiz.js';
import AIPage from '../legacy/Pages/AIPage.js';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="site-header">
  <img src="/logga.png" alt="Västerås Stad Logotyp" className="logo" />
</header>


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/processer" element={<ProcessPage />} />
          <Route path="/material" element={<MaterialPage />} />
          <Route path="/kunskapsdelning" element={<KnowledgeSharing />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/kunskapsdelning/ai" element={<AIPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
