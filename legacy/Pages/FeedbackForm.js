import React from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  return (
    <div className="feedback-form-container">
      <h2>Lämna ditt förslag</h2>
      <div style={{ width: '100%', minHeight: '600px' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeipLBaCbA_YbWZ7faUTtBXb8gO5yd83RMXFxn0mnUNloNRzA/viewform?embedded=true"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Feedback Form"
        >
          Läs in...
        </iframe>
      </div>
    </div>
  );
}

export default FeedbackForm;
