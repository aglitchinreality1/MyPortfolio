// Typing animation
const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');

const phrases = [
    "I'm an Innovator",
    "I'm a Web Developer", 
    "I'm an ML Engineer",
    "I'm a Top Rank Holder",
    "I'm an Author",
    "I'm a Tech Enthusiast"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at end of phrase
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Mobile Navigation Functionality
let isDropdownOpen = false;

function toggleMobileDropdown() {
    const dropdown = document.querySelector('.mobile-dropdown');
    const toggle = document.querySelector('.mobile-nav-toggle');
    const arrow = document.querySelector('.dropdown-arrow');
    
    isDropdownOpen = !isDropdownOpen;
    
    if (isDropdownOpen) {
        dropdown.classList.add('open');
        toggle.classList.add('active');
        arrow.classList.add('rotated');
    } else {
        dropdown.classList.remove('open');
        toggle.classList.remove('active');
        arrow.classList.remove('rotated');
    }
}

function closeMobileDropdown() {
    if (isDropdownOpen) {
        const dropdown = document.querySelector('.mobile-dropdown');
        const toggle = document.querySelector('.mobile-nav-toggle');
        const arrow = document.querySelector('.dropdown-arrow');
        
        dropdown.classList.remove('open');
        toggle.classList.remove('active');
        arrow.classList.remove('rotated');
        isDropdownOpen = false;
    }
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeText, 1000);

    // Mobile navigation event listeners
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileDropdown();
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav && !mobileNav.contains(e.target)) {
            closeMobileDropdown();
        }
    });
    
    // Prevent dropdown from closing when clicking inside it
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    if (mobileDropdown) {
        mobileDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Mobile navigation button clicks
    document.querySelectorAll('.mobile-nav-button').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.textContent.trim().toLowerCase().replace(' ', '-');
            console.log(`Navigate to: ${section}`);
            closeMobileDropdown();
            // Add your navigation logic here
        });
    });
});

// Smooth hover effects for navigation
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add click handlers for desktop navigation
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.textContent.trim().toLowerCase().replace(' ', '-');
        console.log(`Navigate to: ${section}`);
        // Add your navigation logic here
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.particle-container');
  const isDesktop = window.innerWidth > 768;
  const totalParticles = isDesktop ? 50 : 20;

  for (let i = 0; i < totalParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random position & size
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.bottom = '-' + (Math.random() * 20) + 'px'; // Start off-screen bottom
    const size = 4 + Math.random() * 6;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random animation speed & delay
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);
  }
});
