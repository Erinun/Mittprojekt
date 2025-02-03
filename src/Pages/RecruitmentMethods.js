import React from 'react';
import { Link } from 'react-router-dom';
import './KnowledgeSharing.css';

function RecruitmentMethods() {
  return (
    <div className="knowledge-container">
      <header className="page-header">
        <Link to="/kunskapsdelning" className="back-button">Tillbaka</Link>
      </header>

      <h1>Rekryteringsmetoder</h1>
      <p>Här kan du lära dig mer om olika metoder för rekrytering.</p>
    </div>
  );
}

export default RecruitmentMethods;
