import React from 'react';
import './OrgChart.css';

function OrgChart({ title }) {
  return (
    <div className="org-chart">
      {/* Testtext för att kontrollera att title skickas korrekt */}
      <p>Test: {title}</p>
      
      {/* Primär rubrik inramad med cirkel */}
      <div className="org-header">
        <span className="header-circle">{title}</span>
      </div>

      {/* Nedåtriktad pil från rubriken */}
      <div className="down-arrow">
        <svg width="50" height="50">
          <line x1="25" y1="0" x2="25" y2="40" stroke="black" strokeWidth="2" />
          <polygon points="15,40 35,40 25,50" fill="black" />
        </svg>
      </div>

      {/* Förgrenad pilstruktur */}
      <div className="branch-container">
        <div className="branch left">
          {/* Tre pilar åt vänster */}
          <div className="arrow">
            <svg width="50" height="50">
              <line x1="50" y1="25" x2="10" y2="25" stroke="black" strokeWidth="2" />
              <polygon points="10,15 10,35 0,25" fill="black" />
            </svg>
          </div>
          <div className="arrow">
            <svg width="50" height="50">
              <line x1="50" y1="25" x2="10" y2="25" stroke="black" strokeWidth="2" />
              <polygon points="10,15 10,35 0,25" fill="black" />
            </svg>
          </div>
          <div className="arrow">
            <svg width="50" height="50">
              <line x1="50" y1="25" x2="10" y2="25" stroke="black" strokeWidth="2" />
              <polygon points="10,15 10,35 0,25" fill="black" />
            </svg>
          </div>
        </div>
        <div className="branch right">
          {/* Tre pilar åt höger */}
          <div className="arrow">
            <svg width="50" height="50">
              <line x1="0" y1="25" x2="40" y2="25" stroke="black" strokeWidth="2" />
              <polygon points="40,15 40,35 50,25" fill="black" />
            </svg>
          </div>
          <div className="arrow">
            <svg width="50" height="50">
              <line x1="0" y1="25" x2="40" y2="25" stroke="black" strokeWidth="2" />
              <polygon points="40,15 40,35 50,25" fill="black" />
            </svg>
          </div>
          <div className="arrow">
            <svg width="50" height="50">
              <line x1="0" y1="25" x2="40" y2="25" stroke="black" strokeWidth="2" />
              <polygon points="40,15 40,35 50,25" fill="black" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrgChart;
