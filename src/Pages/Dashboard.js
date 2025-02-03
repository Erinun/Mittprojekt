import React, { useState } from 'react';
import { FaNewspaper, FaClock, FaTasks, FaFileAlt, FaExclamationTriangle } from 'react-icons/fa';
import './Dashboard.css';

function Dashboard() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleNews, setVisibleNews] = useState(2); // Visa 2 nyheter först

  // Statistik för dashboard
  const stats = [
    { id: 1, title: 'Pågående projekt', value: 8, details: 'Här kan du skriva mer info...', icon: <FaTasks /> },
    { id: 2, title: 'Nya dokument', value: 3, details: 'Nya policys uppladdade...', icon: <FaFileAlt /> },
    { id: 3, title: 'Kommande deadlines', value: 2, details: 'Deadline för projekt X...', icon: <FaExclamationTriangle /> },
  ];

  // Nyhetslista
  const [news] = useState([
    { id: 1, title: 'Nya rutiner', date: '2025-02-10', text: 'Vi har implementerat nya rutiner för anställningar. Läs mer här...' },
    { id: 2, title: 'Policy uppdaterad', date: '2025-02-08', text: 'Vår rekryteringspolicy har uppdaterats. Viktiga ändringar finns i dokumentarkivet.' },
    { id: 3, title: 'Ny rekrytering', date: '2025-02-05', text: 'Vi söker nu fler talanger till vårt team. Läs mer här...' },
    { id: 4, title: 'Möte för HR-strategi', date: '2025-02-01', text: 'HR-avdelningen håller en strategisk genomgång nästa vecka.' },
  ]);

  const loadMore = () => {
    setVisibleNews((prevVisible) => prevVisible + 2); // Ladda 2 fler nyheter åt gången
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      {/* Statistik-korten */}
      <div className="dashboard-cards">
        {stats.map((item) => (
          <div
            key={item.id}
            className="dashboard-card"
            onClick={() => setExpandedCard(item.id === expandedCard ? null : item.id)}
          >
            <h3>{item.icon} {item.value}</h3>
            <p>{item.title}</p>

            {/* Om kortet är klickat, visa detaljer */}
            {expandedCard === item.id && (
              <div className="card-details">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Nyhetskort-layout */}
      <div className="dashboard-news">
        <h3>Senaste Nyheter</h3>
        <div className="news-cards">
          {news.slice(0, visibleNews).map((item) => (
            <div key={item.id} className="news-card">
              <h4><FaNewspaper /> {item.title}</h4>
              <p className="news-date"><FaClock /> {item.date}</p>
              <p>{item.text}</p>
              <button className="news-button">Läs mer</button>
            </div>
          ))}
        </div>

        {/* Ladda fler-knapp visas om det finns fler nyheter */}
        {visibleNews < news.length && (
          <button className="news-load-more" onClick={loadMore}>
            Ladda fler
          </button>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
