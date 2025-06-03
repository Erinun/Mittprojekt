import React from 'react';
import { Link } from 'react-router-dom';
import './KnowledgeSharing.css';

function AIPage() {
  return (
    <div className="knowledge-container">
      {/* Tillbaka-knapp */}
      <header className="page-header">
        <Link to="/kunskapsdelning" className="back-button">Tillbaka</Link>
      </header>

      <h1>AI i Rekrytering</h1>
      <p>Utforska hur AI används i rekryteringsprocessen för att förbättra effektivitet och minska bias.</p>

      {/* Videosektion */}
      <section className="video-section">
        <h2>🎥 Introduktion till AI i rekrytering</h2>
        <iframe
          width="400"
          height="250"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="AI Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* AI Sammanfattning */}
      <section className="ai-summary">
        <h2>🤖 AI:s roll i rekrytering</h2>
        <p>AI används idag för att:</p>
        <ul>
          <li>Analysera CV och matcha kandidater snabbare.</li>
          <li>Minska bias genom att använda objektiva kriterier.</li>
          <li>Automatisera screening och intervjuflöden.</li>
        </ul>
      </section>

      {/* Resurser */}
      <section className="ai-resources">
        <h2>📚 Rekommenderade resurser</h2>
        <ul>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">AI i HR – LinkedIn artikel</a></li>
          <li><a href="https://hbr.org" target="_blank" rel="noopener noreferrer">Hur AI förändrar rekrytering – HBR</a></li>
        </ul>
      </section>
    </div>
  );
}

export default AIPage;
