import React from 'react';
import { Link } from 'react-router-dom';
import './KnowledgeSharing.css';

function KnowledgeSharing() {
  return (
    <div className="knowledge-container">
      {/* Tillbaka-knapp */}
      <header className="page-header">
        <Link to="/" className="back-button">Tillbaka</Link>
      </header>

      <h1>Kunskapsdelning</h1>
      <p>Välj det område du vill fördjupa dig i.</p>

      {/* Kategoriknappar */}
      <div className="knowledge-buttons">
        <Link to="/kunskapsdelning/ai">
          <button className="sub-step-button">🤖 AI i rekrytering</button>
        </Link>
        <Link to="/kunskapsdelning/sjalvledarskap">
          <button className="sub-step-button">💡 Självledarskap</button>
        </Link>
        <Link to="/kunskapsdelning/rekryteringsmetoder">
          <button className="sub-step-button">📌 Rekryteringsmetoder</button>
        </Link>
      </div>

      {/* Quiz-sektion */}
      <div className="quiz-section">
        <h2>📝 Testa din kunskap</h2>
        <p>Delta i vårt interaktiva quiz och utmana dig själv!</p>
        <Link to="/quiz">
          <button className="quiz-button">Starta Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default KnowledgeSharing;
