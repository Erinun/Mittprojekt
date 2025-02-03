import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landingpage.js';
import ProcessPage from './Pages/ProcessPage.js';
import MaterialPage from './Pages/MaterialPage.js';
import KnowledgeSharing from './Pages/KnowledgeSharing.js';
import Dashboard from './Pages/Dashboard.js';
import Quiz from './Pages/Quiz.js';
import AIPage from './Pages/AIPage.js';
import './App.css';

<img src="/logga.png" alt="Logotyp" className="logo" />


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
