document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Clear form
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form handling
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log('Subscription:', {
        name: formData.get('name'),
        email: formData.get('email')
    });
    this.reset();
    alert('Thank you for subscribing!');
});

// Feature animations for AI Device (17 features)
const featureAnimations = {
    'Real-time Emotional Monitoring': {
        icon: 'fa-brain',
        animation: 'pulse',
        description: 'Tracks user emotions and behaviors through voice analysis, facial recognition, and interaction patterns to provide timely support.'
    },
    'Advanced Neural Processing': {
        icon: 'fa-network-wired',
        animation: 'fade-up',
        description: 'Utilizes deep learning algorithms to process and understand complex emotional patterns and mental states in real-time.'
    },
    'Behavioral Pattern Recognition': {
        icon: 'fa-chart-line',
        animation: 'slide-right',
        description: 'Identifies and analyzes behavioral patterns to predict potential mental health challenges before they escalate.'
    },
    'Adaptive Response System': {
        icon: 'fa-robot',
        animation: 'bounce',
        description: 'Automatically adjusts therapeutic approaches based on user responses and progress over time.'
    },
    'Secure Data Encryption': {
        icon: 'fa-shield-halved',
        animation: 'fade-in',
        description: 'Enterprise-level encryption ensures all personal health data remains private and secure.'
    },
    'Continuous Learning Engine': {
        icon: 'fa-gears',
        animation: 'rotate',
        description: 'Self-improving AI system that evolves with each interaction to provide better mental health support.'
    },
    'Crisis Prevention Protocol': {
        icon: 'fa-heart-pulse',
        animation: 'shake',
        description: 'Proactive monitoring system that identifies and responds to potential crisis situations before they occur.'
    },
    'Multi-modal Analysis': {
        icon: 'fa-layer-group',
        animation: 'spin',
        description: 'Combines voice, text, and behavioral data for comprehensive mental health assessment.'
    },
    'Personalized Intervention': {
        icon: 'fa-user-shield',
        animation: 'glow',
        description: 'Tailored therapeutic responses based on individual user profiles and historical data.'
    },
    'Sleep Pattern Analysis': {
        icon: 'fa-moon',
        animation: 'pulse',
        description: 'Monitors and analyzes sleep patterns to improve mental well-being through better rest.'
    },
    'Social Interaction Tracking': {
        icon: 'fa-users',
        animation: 'fade-up',
        description: 'Monitors social engagement patterns to identify isolation risks and encourage healthy interactions.'
    },
    'Cognitive Performance Metrics': {
        icon: 'fa-brain-circuit',
        animation: 'rotate',
        description: 'Measures and tracks cognitive function to identify potential areas for improvement.'
    },
    'Environmental Impact Analysis': {
        icon: 'fa-tree',
        animation: 'bounce',
        description: 'Evaluates environmental factors affecting mental health and provides optimization suggestions.'
    },
    'Medication Adherence Monitoring': {
        icon: 'fa-pills',
        animation: 'shake',
        description: 'Tracks medication schedules and provides smart reminders for better treatment compliance.'
    },
    'Stress Level Monitoring': {
        icon: 'fa-gauge-high',
        animation: 'pulse',
        description: 'Continuous monitoring of stress levels with real-time interventions when needed.'
    },
    'Voice Pattern Analysis': {
        icon: 'fa-microphone',
        animation: 'fade-up',
        description: 'Advanced voice analysis to detect emotional states and mental health indicators.'
    },
    'Physical Activity Correlation': {
        icon: 'fa-person-walking',
        animation: 'slide-right',
        description: 'Correlates physical activity with mental well-being for holistic health insights.'
    }
};

// App feature animations (11 features)
const appFeatureAnimations = {
    'Smart Mood Tracking': {
        icon: 'fa-face-smile',
        animation: 'pulse',
        description: 'Advanced mood tracking with AI-powered insights and personalized recommendations.'
    },
    'Interactive Therapy Sessions': {
        icon: 'fa-comments',
        animation: 'slide-up',
        description: 'Engage in dynamic therapy sessions with our AI system, available 24/7 for support.'
    },
    'Progress Analytics': {
        icon: 'fa-chart-pie',
        animation: 'fade-in',
        description: 'Detailed analytics and progress tracking with visual representations of your mental health journey.'
    },
    'Mindfulness Exercises': {
        icon: 'fa-peace',
        animation: 'bounce',
        description: 'Guided meditation and mindfulness exercises tailored to your current emotional state.'
    },
    'Community Support Network': {
        icon: 'fa-users-rays',
        animation: 'rotate',
        description: 'Connect with peers and professionals in a secure, moderated environment.'
    },
    'Emergency Response System': {
        icon: 'fa-phone-volume',
        animation: 'fade-up',
        description: 'Immediate access to crisis support and professional help when needed.'
    },
    'Goal Setting & Tracking': {
        icon: 'fa-bullseye',
        animation: 'pulse',
        description: 'Set and track personal mental health goals with AI-guided milestone achievements.'
    },
    'Journal & Mood Diary': {
        icon: 'fa-book-open',
        animation: 'slide-right',
        description: 'Digital journaling with emotion analysis and pattern recognition.'
    },
    'Wellness Challenges': {
        icon: 'fa-trophy',
        animation: 'bounce',
        description: 'Engaging daily challenges to promote mental health and personal growth.'
    },
    'Resource Library': {
        icon: 'fa-library',
        animation: 'fade-in',
        description: 'Comprehensive collection of mental health resources and educational materials.'
    },
    'Customizable Notifications': {
        icon: 'fa-bell',
        animation: 'shake',
        description: 'Smart, personalized reminders and notifications for maintaining mental wellness routines.'
    }
};

// Add animation classes to features
function initializeFeatures() {
    const aiFeatures = document.querySelector('#ai-features .features-grid');
    const appFeatures = document.querySelector('#app-features .features-grid');

    // Generate AI Device Features
    Object.entries(featureAnimations).forEach(([title, details]) => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <i class="fas ${details.icon} animated-icon ${details.animation}"></i>
            <h3>${title}</h3>
            <p>${getFeatureDescription(title)}</p>
        `;
        aiFeatures.appendChild(featureCard);
    });

    // Generate App Features
    Object.entries(appFeatureAnimations).forEach(([title, details]) => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <i class="fas ${details.icon} animated-icon ${details.animation}"></i>
            <h3>${title}</h3>
            <p>${getFeatureDescription(title)}</p>
        `;
        appFeatures.appendChild(featureCard);
    });
}

// Update the getFeatureDescription function
function getFeatureDescription(title) {
    const allFeatures = { ...featureAnimations, ...appFeatureAnimations };
    return allFeatures[title]?.description || 'Feature description coming soon.';
}

// Intersection Observer for animation triggers
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Add this function to randomize circle positions
function randomizeCirclePositions() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        const circle = card.querySelector('::before');
        // Move circles higher up so they're partially outside the card
        const randomTop = Math.floor(Math.random() * 300) - 300; // Increased negative value to move higher
        const randomLeft = Math.floor(Math.random() * 300) - 150;
        const randomSize = Math.floor(Math.random() * (120 - 80) + 80);

        card.style.setProperty('--circle-top', `${randomTop}px`);
        card.style.setProperty('--circle-left', `${randomLeft}px`);
        card.style.setProperty('--circle-size', `${randomSize}px`);
    });
}

// Update the CSS for the circle positioning
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .feature-card::before {
            top: var(--circle-top, -20px);
            left: var(--circle-left, -20px);
            width: var(--circle-size, 100px);
            height: var(--circle-size, 100px);
        }
    </style>
`);

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    randomizeCirclePositions();
    initializeFeatures();
});

// Update the hover effect to match the new positioning
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const randomTop = Math.floor(Math.random() * 300) - 300; // Keep consistent with the initial positioning
        const randomLeft = Math.floor(Math.random() * 300) - 150;
        card.style.setProperty('--circle-top', `${randomTop}px`);
        card.style.setProperty('--circle-left', `${randomLeft}px`);
    });
});

// Smooth scroll and transition handling
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const features = document.querySelector('.features');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Handle hero section transition
    if (scrollPosition > windowHeight * 0.2) {
        hero.classList.add('scrolling');
    } else {
        hero.classList.remove('scrolling');
    }
    
    // Handle features section appearance
    const featuresTop = features.offsetTop;
    if (scrollPosition + windowHeight > featuresTop) {
        features.classList.add('visible');
    }
});

// Optional: Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add intersection observer for features section
const featuresObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        }
    });
}, {
    threshold: 0.1
});

document.querySelector('.features').style.transform = 'translateY(20px)';
document.querySelector('.features').style.opacity = '0';
featuresObserver.observe(document.querySelector('.features'));

// Theme switcher
function initThemeSwitch() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggle.checked = currentTheme === 'dark';

    toggle.addEventListener('change', () => {
        const theme = toggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', initThemeSwitch);

// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const startNowBtn = document.getElementById('startNowBtn');
    const popup = document.getElementById('startNowPopup');
    const closePopup = document.getElementById('closePopup');
    const popupForm = document.querySelector('.popup-form');

    // Open popup
    startNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    });

    // Close popup
    closePopup.addEventListener('click', function() {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close popup when clicking outside
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle form submission
    popupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            interest: document.getElementById('interest').value
        };

        // Here you can add your form submission logic
        console.log('Form submitted:', formData);
        
        // Show success message (you can customize this)
        alert('Thank you for your interest! We will get back to you soon.');
        
        // Close popup
        popup.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form
        popupForm.reset();
    });
});

// Account Creation Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const startNowBtn = document.getElementById('startNowBtn');
    const accountPopup = document.getElementById('accountPopup');
    const homeButton = document.getElementById('homeButton');
    const signInButtons = document.querySelectorAll('.sign-in-button');
    const signInLink = document.querySelector('.signin-link a');
    const createAccountLink = document.querySelector('.create-account-link a');
    
    // Modal state tracking
    let isLoginView = false;

    // Function to toggle between login and signup views
    function toggleAuthView() {
        const authTitle = document.querySelector('.account-popup-header h2');
        const authButtons = document.querySelector('.account-buttons');
        const authForm = document.querySelector('.auth-form');
        const signinLinkContainer = document.querySelector('.signin-link');
        const createAccountLinkContainer = document.querySelector('.create-account-link');
        
        isLoginView = !isLoginView;
        
        if (isLoginView) {
            // Switch to login view
            authTitle.textContent = 'Sign in to your account';
            authButtons.style.display = 'none';
            authForm.style.display = 'flex';
            document.getElementById('auth-submit-btn').textContent = 'Sign In';
            signinLinkContainer.style.display = 'none';
            createAccountLinkContainer.style.display = 'block';
        } else {
            // Switch to signup view
            authTitle.textContent = 'Create new account';
            authButtons.style.display = 'flex';
            authForm.style.display = 'none';
            signinLinkContainer.style.display = 'block';
            createAccountLinkContainer.style.display = 'none';
        }
    }

    // Function to show auth popup
    function showAuthPopup(defaultToLogin = false) {
        if (accountPopup) {
            accountPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // If we should show login view by default
            if (defaultToLogin && !isLoginView) {
                toggleAuthView();
            }
        }
    }
    
    // Handle sign-in button clicks (in the header)
    if (signInButtons) {
        signInButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showAuthPopup(true); // Show popup with login view
            });
        });
    }

    if (startNowBtn && accountPopup && homeButton) {
        // Open account creation popup
        startNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showAuthPopup(false); // Show popup with signup view
        });

        // Close popup and return to main page
        homeButton.addEventListener('click', function() {
            accountPopup.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close popup when clicking outside
        accountPopup.addEventListener('click', function(e) {
            if (e.target === accountPopup) {
                accountPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Handle Google sign-up
        const googleBtn = document.querySelector('.google-btn');
        if (googleBtn) {
            googleBtn.addEventListener('click', function() {
                // Add your Google sign-up logic here
                console.log('Google sign-up clicked');
                alert('Google sign-up functionality would connect to Google OAuth in a production environment');
            });
        }

        // Handle Apple sign-up
        const appleBtn = document.querySelector('.apple-btn');
        if (appleBtn) {
            appleBtn.addEventListener('click', function() {
                // Add your Apple sign-up logic here
                console.log('Apple sign-up clicked');
                alert('Apple sign-up functionality would connect to Apple OAuth in a production environment');
            });
        }

        // Handle sign-in link
        if (signInLink) {
            signInLink.addEventListener('click', function(e) {
                e.preventDefault();
                toggleAuthView();
            });
        }
        
        // Handle create account link
        if (createAccountLink) {
            createAccountLink.addEventListener('click', function(e) {
                e.preventDefault();
                toggleAuthView();
            });
        }
        
        // Handle form submission
        const authForm = document.getElementById('auth-form');
        if (authForm) {
            authForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('auth-email').value;
                const password = document.getElementById('auth-password').value;
                
                if (!email || !password) {
                    alert('Please fill in all fields');
                    return;
                }
                
                if (isLoginView) {
                    // Login logic
                    console.log('Login attempt:', email);
                    
                    // For demo purposes, simulate a successful login
                    const userData = {
                        email: email,
                        name: email.split('@')[0], // Extract username from email
                        isLoggedIn: true
                    };
                    
                    // Store in session storage for persistence
                    sessionStorage.setItem('user', JSON.stringify(userData));
                    
                    // Update UI
                    updateUserStatusUI();
                    
                    // Close popup
                    accountPopup.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    alert(`Welcome back, ${userData.name}!`);
                } else {
                    // Registration would happen here
                    alert('Registration functionality would create a new account in a production environment');
                }
            });
        }
    }
    
    // Function to update UI based on login status
    function updateUserStatusUI() {
        const userDataString = sessionStorage.getItem('user');
        const signInButtons = document.querySelectorAll('.sign-in-button');
        
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            
            signInButtons.forEach(button => {
                button.textContent = `Hello, ${userData.name}`;
                button.classList.add('logged-in');
                
                // Change click behavior for logged in users
                button.removeEventListener('click', null);
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (confirm('Do you want to log out?')) {
                        sessionStorage.removeItem('user');
                        updateUserStatusUI();
                    }
                });
            });
        } else {
            signInButtons.forEach(button => {
                button.textContent = 'Sign In';
                button.classList.remove('logged-in');
            });
        }
    }
    
    // Check user status on page load
    updateUserStatusUI();
});

// Remove old popup functionality
const oldPopup = document.getElementById('startNowPopup');
if (oldPopup) {
    oldPopup.remove();
} 