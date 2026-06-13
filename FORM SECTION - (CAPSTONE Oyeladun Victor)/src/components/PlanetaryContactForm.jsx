import React, { useState } from 'react';
import SuccessModal from './SuccessModal';
import './newform.css'; // Make sure newform.css is in the same directory

export default function PlanetaryContactForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  // State for input tracking and errors
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    message: false
  });

  // Modal display states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Universal input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent typing past 100 chars for textarea
    if (name === 'message' && value.length > 100) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Dynamically clear error visual states when user starts typing
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  // Form Validation and submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const currentErrors = {
      fullName: formData.fullName.trim() === '',
      email: !emailRegex.test(formData.email.trim()),
      phone: formData.phone.trim() === '',
      message: formData.message.trim() === ''
    };

    setErrors(currentErrors);

    // Check if any error boolean evaluated to true
    const hasErrors = Object.values(currentErrors).some((error) => error);

    if (!hasErrors) {
      // Set the success message dynamically
      setModalMessage(`Thank you, ${formData.fullName.trim()}! Your inquiry has been successfully simulated locally.`);
      setIsModalOpen(true);

      // Reset Form State fields completely
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <h2>Have Questions About Planetary Science?</h2>
        <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.</p>
      </header>

      <form id="planetaryForm" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          
          {/* Full Name field */}
          <div className={`form-group ${errors.fullName ? 'invalid' : ''}`}>
            <label htmlFor="fullName">Full Name<span className="required">*</span></label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              placeholder="Full name" 
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
            <div className="error-message" id="nameError">Please enter your full name.</div>
          </div>

          {/* Email Field */}
          <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="example@example.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <div className="error-message" id="emailError">Please enter a valid email address.</div>
          </div>

          {/* Phone Field */}
          <div className={`form-group ${errors.phone ? 'invalid' : ''}`}>
            <label htmlFor="phone">Phone Number<span className="required">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Please enter a valid phone number." 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
            <div className="error-message" id="phoneError">Please enter a valid phone number.</div>
          </div>

          {/* Message Textarea Field */}
          <div className={`form-group ${errors.message ? 'invalid' : ''}`}>
            <label htmlFor="message">Message<span className="required">*</span></label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Enter your message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="character-counter">
              <span id="charCount">{formData.message.length}</span>/100 characters
            </div>
            <div className="error-message" id="messageError">Please enter a message.</div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit 
          <svg className="arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </form>

      {/* Render Modal Component conditionally and pass states via props */}
      <SuccessModal 
        isOpen={isModalOpen} 
        message={modalMessage} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;
