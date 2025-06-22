// Typing animation
const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');

const phrases = [
    "I'm an Innovator",
    "I'm a Web Developer", 
    "I'm an ML Engineer",
    "I'm a Top Rank Holder",
    "I'm an Inventor",
    "I'm a Visionary",
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

let manMoved = false;

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

document.querySelectorAll('.b').forEach((button, index) => {
    button.addEventListener('click', function () {
        const targetId = `s${index % 7}`;
        const targetSection = document.getElementById(targetId);
        const man = document.getElementById('man');
        const controls = document.getElementById('controls'); 
        const loc = document.getElementById('loc'); 
        closeMobileDropdown();

        if (controls && loc) {
            controls.style.visibility = 'hidden';
            controls.style.opacity = '0';
            loc.style.visibility = 'hidden';
            loc.style.opacity = '0';
        }

        if (targetSection) {
            const performScroll = () => {
                requestAnimationFrame(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

                setTimeout(() => {
                    if (man && targetId !== 's6') {
                        man.style.transition = 'transform 0.5s ease';
                        man.style.transform = 'translateX(-11vw)';
                        manMoved = true;

                        if (controls) {
                            setTimeout(() => {
                                controls.style.visibility = 'visible';
                                controls.style.opacity = '1';
                                loc.style.visibility = 'visible';
                                loc.style.opacity = '1';
                            }, 500);
                        }
                    }
                }, 1000);
            };

            if (manMoved && man) {
                man.style.transition = 'transform 0.5s ease';
                man.style.transform = 'translateX(0)';
                manMoved = false;

                setTimeout(() => {
                    performScroll();
                }, 500);
            } else {
                performScroll();
            }
        } else {
            console.warn(`Section ${targetId} not found`);
        }
    });
});



// Detect manual scrolling and reset "man"
let lastScrollTop = window.scrollY;
window.addEventListener('scroll', () => {
    const man = document.getElementById('man');
    const currentScroll = window.scrollY; 
    if (controls) {
            controls.style.visibility = 'hidden';
            controls.style.opacity = '0';
            loc.style.visibility = 'hidden';
            loc.style.opacity = '0';
        }

    if (manMoved && Math.abs(currentScroll - lastScrollTop) > 10) {
        if (man) {
            man.style.transition = 'transform 0.5s ease';
            man.style.transform = 'translateX(0)';
            manMoved = false;
        }
    }

    lastScrollTop = currentScroll;
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
    particle.style.bottom = '-' + (Math.random() * 20) + 'px';
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



document.getElementById("go").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// function setupBidirectionalAutoScroll(className) {
//   const elements = document.querySelectorAll(`.${className}`);

//   elements.forEach(el => {
//     let autoScrollActive = true;
//     let scrollTimeout;
//     let userInteracting = false;

//     const startAutoScroll = () => {
//       autoScrollActive = true;
//       let scrollingDown = true;

//       const scrollLoop = async () => {
//         while (autoScrollActive) {
//           if (scrollingDown) {
//             if (el.scrollTop + el.clientHeight < el.scrollHeight - 1) {
//               el.scrollTop += 1;
//             } else {
//               scrollingDown = false;
//               await new Promise(res => setTimeout(res, 500));
//             }
//           } else {
//             if (el.scrollTop > 0) {
//               el.scrollTop -= 1;
//             } else {
//               scrollingDown = true;
//               await new Promise(res => setTimeout(res, 500));
//             }
//           }
//           await new Promise(res => setTimeout(res, 20));
//         }
//       };

//       scrollLoop();
//     };

//     const stopAutoScroll = () => {
//       autoScrollActive = false;
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         startAutoScroll();
//       }, 1000); 
//     };

//     el.addEventListener('scroll', () => {
//       if (!userInteracting) {
//         userInteracting = true;
//         stopAutoScroll();
//       }
//     });

//     startAutoScroll();
//   });
// }

// setupBidirectionalAutoScroll('his');
// setupBidirectionalAutoScroll('resume');
// setupBidirectionalAutoScroll('skill-list');

function setupHorizontalAutoScroll(className) {
  const containers = document.querySelectorAll(`.${className}`);

  containers.forEach(container => {
    let autoScrollActive = true;
    let scrollTimeout;
    let scrollIndex = 0;

    const items = Array.from(container.children);
    const totalItems = items.length;

    const startAutoScroll = () => {
      autoScrollActive = true;

      const scrollLoop = async () => {
        while (autoScrollActive) {
          const itemWidth = items[0].offsetWidth;
          container.scrollTo({
            left: scrollIndex * itemWidth,
            behavior: 'smooth'
          });

          scrollIndex = (scrollIndex + 1) % totalItems;
          await new Promise(res => setTimeout(res, 5000));
        }
      };

      scrollLoop();
    };

    const stopAutoScroll = () => {
      autoScrollActive = false;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        startAutoScroll();
      }, 2000);
    };

    container.addEventListener('scroll', () => {
      stopAutoScroll();
    });

    startAutoScroll();
  });
}



setupHorizontalAutoScroll('achcontent');

setupHorizontalAutoScroll('expcont');

setInterval(() => {
  const button = document.getElementById('pright');
  if (button) {
    button.click();
  }
}, 7000);
