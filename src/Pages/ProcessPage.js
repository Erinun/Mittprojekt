import { useState } from 'react';
import { Link } from 'react-router-dom';
import RecruitmentFlow from '../RecruitmentFlow';
import './Processpage.css';

function ProcessPage() {
  const [selectedProcess, setSelectedProcess] = useState(null);

  const handleProcessClick = (processName) => {
    setSelectedProcess(processName);
  };

  return (
    <div className="process-page">
      {/* Header med Tillbaka-knapp */}
      <header className="page-header">
        <Link to="/" className="back-button">Tillbaka</Link>
      </header>

      <h2>Rekryteringsprocesser</h2>
      <p>Välj en process att utforska nedan.</p>
      <div className="process-buttons-container">
        <button
          className="sub-step-button"
          onClick={() => handleProcessClick('rekryteringspaket')}
        >
          Rekryteringspaket
        </button>
        <button
          className="sub-step-button"
          onClick={() => handleProcessClick('chef')}
        >
          Chef
        </button>
        <button
          className="sub-step-button"
          onClick={() => handleProcessClick('grunden')}
        >
          Grunden
        </button>
        <button
          className="sub-step-button"
          onClick={() => handleProcessClick('samrekrytering-grundskola')}
        >
          Samrekrytering grundskola
        </button>
        <button
          className="sub-step-button"
          onClick={() => handleProcessClick('samrekrytering-förskola')}
        >
          Samrekrytering förskola
        </button>
        <button
          className="sub-step-button"
          onClick={() => handleProcessClick('försteförskolelärare')}
        >
          Försteförskolelärare
        </button>
      </div>
      
      {selectedProcess === 'rekryteringspaket' ? (
        <RecruitmentFlow process={selectedProcess} />
      ) : selectedProcess ? (
        <div>
          <p>Processen "{selectedProcess}" är inte implementerad ännu.</p>
        </div>
      ) : null}
    </div>
  );
}

export default ProcessPage;
