document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('planetaryForm');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    // Modal Elements
    const successModal = document.getElementById('successModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Live Character Counter
    messageInput.addEventListener('input', () => {
        charCount.textContent = messageInput.value.length;
    });

    // Close Modal Event
    closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
    });

    // Close Modal if user clicks background overlay
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });

    // Form Submission Handling (Frontend-Only Version)
    form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let isFormValid = true;

    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Validation Rules
    if (nameInput.value.trim() === '') { showError(nameInput); isFormValid = false; } else { clearError(nameInput); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) { showError(emailInput); isFormValid = false; } else { clearError(emailInput); }
    if (phoneInput.value.trim() === '') { showError(phoneInput); isFormValid = false; } else { clearError(phoneInput); }
    if (messageInput.value.trim() === '') { showError(messageInput); isFormValid = false; } else { clearError(messageInput); }

    // If the form is valid, show the pop-up immediately!
    if (isFormValid) {
        // Set a custom local message
        modalMessage.textContent = `Thank you, ${nameInput.value.trim()}! Your inquiry has been successfully simulated locally.`;
        
        // Open Pop-up
        successModal.classList.add('active');
        
        // Reset Form fields
        form.reset();
        charCount.textContent = '0';
    }
});

    function showError(inputElement) { inputElement.parentElement.classList.add('invalid'); }
    function clearError(inputElement) { inputElement.parentElement.classList.remove('invalid'); }
});