import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';
import FeedbackButton from './FeedbackButton.js';
import Dashboard from './Dashboard.js';  // ✅ Lägg tillbaka importen

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Välkommen till rekryteringsenhetens digitala hemsida</h1>
      <p>Här hittar du information om våra rekryteringsprocesser, mallar, rutiner, policy och lathundar.</p>

      <nav>
        <Link to="/processer">
          <button className="sub-step-button">Rekryteringsprocesser</button>
        </Link>
        <Link to="/material">
          <button className="sub-step-button">Arbetsgrupper & Material</button>
        </Link>
        <Link to="/kunskapsdelning">
  <button className="sub-step-button">Kunskapsdelning</button>
</Link>
      </nav>

      {/* Lägg tillbaka Dashboard-komponenten här */}
      <Dashboard />

      {/* Feedback-knappen längst ner till vänster */}
      <FeedbackButton />
    </div>
  );
}

export default LandingPage;
