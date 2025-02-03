import React, { useState } from 'react';
import './FeedbackButton.css';

function FeedbackButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Knapp för att öppna formuläret */}
      <button className="feedback-button" onClick={() => setShowForm(true)}>
        Lämna förslag
      </button>

      {/* Modal som visas vid klick */}
      {showForm && (
        <div className="feedback-modal">
          <div className="feedback-modal-content">
            <button className="close-button" onClick={() => setShowForm(false)}>
              Stäng
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeipLBaCbA_YbWZ7faUTtBXb8gO5yd83RMXFxn0mnUNloNRzA/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              title="Feedback Form"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default FeedbackButton;
