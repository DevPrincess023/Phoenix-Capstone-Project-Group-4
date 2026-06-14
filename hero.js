document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');

  if (navbar) {
    // Add solid background to navbar when scrolling down (Premium Glassmorphism Effect)
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(2, 6, 23, 0.85)';
        navbar.style.backdropFilter = 'blur(12px)';
        navbar.style.webkitBackdropFilter = 'blur(12px)';
        navbar.style.borderBottom = '1px solid rgba(51, 65, 85, 0.5)';
        navbar.style.padding = '1rem 0';
      } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.webkitBackdropFilter = 'none';
        navbar.style.borderBottom = 'none';
        navbar.style.padding = '1.5rem 0';
      }
    });
  }
});
