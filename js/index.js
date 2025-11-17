const navLinks = document.getElementById('navLinks');

function toggleNav() {
    navLinks.classList.toggle('active');
}

function closeNav() {
    navLinks.classList.remove('active');
}

// Close nav when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.mobile-toggle');
    
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        closeNav();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handler with EmailJS
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    const statusDiv = document.getElementById('formStatus');
    const submitButton = e.target.querySelector('button[type="submit"]');
    
    // Disable submit button and show loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    try {
        // Using EmailJS service to send email
        // You need to sign up at https://www.emailjs.com/ and get your credentials
        // For now, using mailto as fallback with status message
        
        const mailtoLink = `mailto:skaftab984@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent('Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message)}`;
        
        // Open mailto link
        window.location.href = mailtoLink;
        
        // Show success message
        statusDiv.style.display = 'block';
        statusDiv.style.background = 'rgba(78, 205, 196, 0.2)';
        statusDiv.style.border = '2px solid var(--secondary)';
        statusDiv.style.color = 'var(--secondary)';
        statusDiv.innerHTML = `
            <i class="fas fa-check-circle"></i> 
            <strong>Message sent to skaftab984@gmail.com!</strong><br>
            <small>I'll try to respond if your message makes sense 😊<br>Usually reply within 24-48 hours.</small>
        `;
        
        // Reset form
        this.reset();
        
        // Hide message after 8 seconds
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 8000);
        
    } catch (error) {
        // Show error message
        statusDiv.style.display = 'block';
        statusDiv.style.background = 'rgba(255, 107, 107, 0.2)';
        statusDiv.style.border = '2px solid var(--primary)';
        statusDiv.style.color = 'var(--primary)';
        statusDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i> 
            <strong>Oops! Something went wrong.</strong><br>
            <small>Please try again or email me directly at skaftab984@gmail.com</small>
        `;
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards
document.querySelectorAll('.skill-box, .project-card, .about-card').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing effect
const typingText = document.querySelector('.typing-effect');
if (typingText) {
    const words = [
        'build scalable backends',
        'develop microservices', 
        'integrate payment systems',
        'write clean APIs'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// Fun console message
console.log('%c👋 Hey there, fellow developer!', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #4ecdc4; font-size: 14px;');
console.log('%c🚀 https://github.com/AftabQuadri', 'color: #ffe66d; font-size: 14px;');
