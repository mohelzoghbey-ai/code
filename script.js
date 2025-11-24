// Fake Data
const leaders = [
    {
        name: "Ahmed Hassan",
        role: "Founder & CEO",
        image: "https://i.pravatar.cc/300?img=12",
        bio: "Visionary leader with 5+ years in tech entrepreneurship",
        social: {
            linkedin: "https://linkedin.com/in/ahmed-hassan",
            twitter: "https://twitter.com/ahmedhassan"
        }
    },
    {
        name: "Sara Mohamed",
        role: "Chief Technology Officer",
        image: "https://i.pravatar.cc/300?img=45",
        bio: "Expert in software architecture and cloud solutions",
        social: {
            linkedin: "https://linkedin.com/in/sara-mohamed",
            twitter: "https://twitter.com/saramohamed"
        }
    },
    {
        name: "Omar Khalil",
        role: "Head of Operations",
        image: "https://i.pravatar.cc/300?img=33",
        bio: "Passionate about building tech communities",
        social: {
            linkedin: "https://linkedin.com/in/omar-khalil",
            twitter: "https://twitter.com/omarkhalil"
        }
    }
];

const teamMembers = [
    {
        name: "Layla Ahmed",
        role: "UI/UX Designer",
        department: "Design",
        image: "https://i.pravatar.cc/300?img=47"
    },
    {
        name: "Youssef Ibrahim",
        role: "Full Stack Developer",
        department: "Software Development",
        image: "https://i.pravatar.cc/300?img=15"
    },
    {
        name: "Nour Elsayed",
        role: "AI Engineer",
        department: "AI & ML",
        image: "https://i.pravatar.cc/300?img=32"
    },
    {
        name: "Karim Mostafa",
        role: "Security Specialist",
        department: "Cybersecurity",
        image: "https://i.pravatar.cc/300?img=51"
    },
    {
        name: "Menna Tarek",
        role: "Mobile Developer",
        department: "Mobile Development",
        image: "https://i.pravatar.cc/300?img=23"
    },
    {
        name: "Hassan Ali",
        role: "Cloud Architect",
        department: "Cloud Computing",
        image: "https://i.pravatar.cc/300?img=68"
    },
    {
        name: "Farida Nabil",
        role: "Data Scientist",
        department: "Data Science",
        image: "https://i.pravatar.cc/300?img=29"
    },
    {
        name: "Mahmoud Samir",
        role: "Marketing Manager",
        department: "Digital Marketing",
        image: "https://i.pravatar.cc/300?img=56"
    }
];

const events = [
    {
        title: "AI & Machine Learning Workshop",
        date: "December 15, 2024",
        time: "2:00 PM - 6:00 PM",
        location: "Delta Tech Hub",
        description: "Learn the fundamentals of AI and build your first machine learning model.",
        attendees: 150,
        category: "Workshop"
    },
    {
        title: "Tech Startup Pitch Night",
        date: "December 22, 2024",
        time: "6:00 PM - 9:00 PM",
        location: "Innovation Center",
        description: "Watch aspiring entrepreneurs pitch their tech startup ideas to investors.",
        attendees: 200,
        category: "Networking"
    },
    {
        title: "Cybersecurity Bootcamp",
        date: "January 5, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "TST Headquarters",
        description: "Intensive bootcamp covering ethical hacking and security best practices.",
        attendees: 100,
        category: "Bootcamp"
    },
    {
        title: "Mobile App Development Hackathon",
        date: "January 12, 2025",
        time: "9:00 AM - 9:00 PM",
        location: "Delta University",
        description: "24-hour hackathon to build innovative mobile applications.",
        attendees: 180,
        category: "Hackathon"
    },
    {
        title: "Cloud Computing Seminar",
        date: "January 20, 2025",
        time: "3:00 PM - 6:00 PM",
        location: "Virtual Event",
        description: "Explore cloud technologies and learn about AWS, Azure, and GCP.",
        attendees: 250,
        category: "Seminar"
    },
    {
        title: "UI/UX Design Masterclass",
        date: "February 1, 2025",
        time: "1:00 PM - 5:00 PM",
        location: "Design Studio",
        description: "Master the art of creating beautiful and intuitive user interfaces.",
        attendees: 120,
        category: "Masterclass"
    }
];

// Smooth Scroll for Navigation Links
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

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with reveal class
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stat-card, .department-card');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// Render Leaders
function renderLeaders() {
    const container = document.getElementById('leadersContainer');
    container.innerHTML = leaders.map((leader, index) => `
        <div class="team-card bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-purple-500 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 reveal" style="animation-delay: ${index * 0.1}s">
            <div class="relative mb-6">
                <img src="${leader.image}" alt="${leader.name}" class="w-32 h-32 rounded-full mx-auto border-4 border-purple-500/50 object-cover">
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-xs font-bold">
                    Leader
                </div>
            </div>
            <h3 class="text-2xl font-bold text-center mb-2">${leader.name}</h3>
            <p class="text-purple-400 text-center font-semibold mb-3">${leader.role}</p>
            <p class="text-gray-300 text-center text-sm mb-4">${leader.bio}</p>
            <div class="flex justify-center space-x-3">
                <a href="${leader.social.linkedin}" class="w-10 h-10 bg-purple-900/30 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 transition-all transform hover:scale-110">
                    <span class="text-sm">in</span>
                </a>
                <a href="${leader.social.twitter}" class="w-10 h-10 bg-purple-900/30 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 transition-all transform hover:scale-110">
                    <span class="text-sm">𝕏</span>
                </a>
            </div>
        </div>
    `).join('');

    // Re-observe new elements
    const newElements = container.querySelectorAll('.reveal');
    newElements.forEach(el => observer.observe(el));
}

// Render Team Members
function renderTeamMembers() {
    const container = document.getElementById('teamContainer');
    container.innerHTML = teamMembers.map((member, index) => `
        <div class="team-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 reveal" style="animation-delay: ${index * 0.1}s">
            <img src="${member.image}" alt="${member.name}" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500/30 object-cover">
            <h3 class="text-xl font-bold text-center mb-1">${member.name}</h3>
            <p class="text-purple-400 text-center text-sm font-semibold mb-1">${member.role}</p>
            <p class="text-gray-400 text-center text-xs">${member.department}</p>
        </div>
    `).join('');

    // Re-observe new elements
    const newElements = container.querySelectorAll('.reveal');
    newElements.forEach(el => observer.observe(el));
}

// Render Events
function renderEvents() {
    const container = document.getElementById('eventsContainer');
    const categoryColors = {
        'Workshop': 'purple',
        'Networking': 'pink',
        'Bootcamp': 'blue',
        'Hackathon': 'green',
        'Seminar': 'yellow',
        'Masterclass': 'red'
    };

    container.innerHTML = events.map((event, index) => {
        const color = categoryColors[event.category] || 'purple';
        return `
            <div class="event-card bg-gradient-to-br from-${color}-900/30 to-${color}-800/20 p-6 rounded-2xl border border-${color}-500/30 backdrop-blur-sm hover:border-${color}-500 hover:shadow-xl hover:shadow-${color}-500/20 reveal" style="animation-delay: ${index * 0.1}s">
                <div class="flex justify-between items-start mb-4">
                    <span class="bg-${color}-500/20 text-${color}-400 px-3 py-1 rounded-full text-xs font-bold border border-${color}-500/30">
                        ${event.category}
                    </span>
                    <span class="text-gray-400 text-sm">👥 ${event.attendees}</span>
                </div>
                <h3 class="text-2xl font-bold mb-3 text-${color}-400">${event.title}</h3>
                <p class="text-gray-300 mb-4 text-sm">${event.description}</p>
                <div class="space-y-2 text-sm text-gray-400">
                    <div class="flex items-center">
                        <span class="mr-2">📅</span>
                        <span>${event.date}</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">🕐</span>
                        <span>${event.time}</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">📍</span>
                        <span>${event.location}</span>
                    </div>
                </div>
                <button class="mt-6 w-full bg-gradient-to-r from-${color}-600 to-${color}-700 px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-${color}-500/30 transition-all transform hover:scale-105">
                    Register Now
                </button>
            </div>
        `;
    }).join('');

    // Re-observe new elements
    const newElements = container.querySelectorAll('.reveal');
    newElements.forEach(el => observer.observe(el));
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Create success message
    const form = e.target;
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-green-500/20 border border-green-500/50 text-green-400 px-6 py-4 rounded-lg mt-4 text-center font-semibold';
    successMessage.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
    
    form.appendChild(successMessage);
    form.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
});

// Join Button Click Handler
document.getElementById('joinBtn').addEventListener('click', () => {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Parallax Effect on Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Create Floating Particles
function createParticles() {
    const hero = document.querySelector('#home');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = Math.random() * 3 + 3 + 's';
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
}

// Initialize on Page Load
window.addEventListener('DOMContentLoaded', () => {
    renderLeaders();
    renderTeamMembers();
    renderEvents();
    createParticles();
    
    // Add stagger animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeIn 1.5s ease-out forwards';
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Observe stat cards and animate counters when visible
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const numberElement = entry.target.querySelector('.text-4xl');
            const text = numberElement.textContent;
            const number = parseInt(text.replace('+', ''));
            
            animateCounter(numberElement, number);
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

// Observe all stat cards
document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => statObserver.observe(card));
});
