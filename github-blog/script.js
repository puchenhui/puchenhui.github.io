// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Simple animation for elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add a simple click handler for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Prevent click if the user clicked on a link inside the card
        if (e.target.tagName === 'A') return;
        
        // You could add more functionality here, like expanding the card
        console.log('Project card clicked:', this.querySelector('h3').textContent);
    });
});

// Add current year to footer automatically
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.current-year');
    if (!yearSpan) {
        const footer = document.querySelector('.footer p');
        if (footer) {
            const currentYear = new Date().getFullYear();
            footer.innerHTML = `&copy; ${currentYear} Your Name. All rights reserved.`;
        }
    }
});