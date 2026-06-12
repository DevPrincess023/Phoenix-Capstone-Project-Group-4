import React from 'react';

export default function SuccessModal({ isOpen, message, onClose }) {
  
  // Close the overlay modal if a user clicks directly on the background backdrop wrapper
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className="modal-box">
        <div className="modal-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a52b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3>Submission Successful!</h3>
        <p id="modalMessage">{message}</p>
        <button onClick={onClose} className="modal-btn">Close</button>
      </div>
    </div>
  );
}