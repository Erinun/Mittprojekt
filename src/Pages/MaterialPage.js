import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Materialpage.css';

function MaterialPage() {
  const [view, setView] = useState('');

  // Lista med grupper
  const groups = [
    { id: 1, name: 'Paket gruppen', text: 'Kalle, Test, Jonas, Gurra, Filip' },
    { id: 2, name: 'Chefs gruppen', text: 'Text för chefsgruppen...' },
    { id: 3, name: 'Grunden', text: 'Text för Grunden...' },
    { id: 4, name: 'Samrek skola', text: 'Text för Samrek skola...' },
    { id: 5, name: 'Samrek förskola', text: 'Text för Samrek förskola...' },
    { id: 6, name: 'Employer branding', text: 'Text för Employer branding...' },
  ];

  return (
    <div className="material-page">
      <header className="page-header">
        <Link to="/" className="back-button">Tillbaka</Link>
      </header>

      <h1>Välkommen, här hittar du följande information</h1>
      
      {/* Använder samma container-klass och knappklass som på andra sidor */}
      <div className="process-buttons-container">
        <button
          className="sub-step-button"
          onClick={() => setView('arbetsgrupper')}
        >
          Arbetsgrupper
        </button>
        <button
          className="sub-step-button"
          onClick={() => setView('material')}
        >
          Material
        </button>
      </div>

      {/* Visar arbetsgrupper om ”arbetsgrupper” är vald */}
      {view === 'arbetsgrupper' && (
        <section className="groups-section">
          <h2>Arbetsgrupper</h2>
          <p>Här hittar du information om vilka som arbetar i respektive process.</p>
          
          <div className="groups-container">
            {groups.map((group) => (
              <div className="group-card" key={group.id}>
                <h3>{group.name}</h3>
                <p>{group.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Visar material om ”material” är vald */}
      {view === 'material' && (
        <section className="resources-section">
          <h2>Resurser</h2>
          <ul>
            <li><a href="/mallar">Mallar</a></li>
            <li><a href="/rutiner">Rutiner</a></li>
            <li><a href="/policy">Policy</a></li>
            <li><a href="/lathundar">Lathundar</a></li>
          </ul>
        </section>
      )}
    </div>
  );
}

export default MaterialPage;
