import React from 'react';
import { Link } from 'react-router-dom';
import './KnowledgeSharing.css';

function SelfLeadership() {
  return (
    <div className="knowledge-container">
      <header className="page-header">
        <Link to="/kunskapsdelning" className="back-button">Tillbaka</Link>
      </header>

      <h1>Självledarskap</h1>
      <p>Fördjupa dig i hur du kan utveckla självledarskap i arbetslivet.</p>
    </div>
  );
}

export default SelfLeadership;
