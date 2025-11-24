// Data
const departments = [
    { name: 'Web Development', icon: 'fa-code', color: '#CB6CE6', description: 'Building modern web applications' },
    { name: 'Mobile Development', icon: 'fa-mobile-alt', color: '#00F2EA', description: 'Creating innovative mobile apps' },
    { name: 'AI & Machine Learning', icon: 'fa-brain', color: '#6F4E9F', description: 'Exploring artificial intelligence' },
    { name: 'UI/UX Design', icon: 'fa-palette', color: '#FF004F', description: 'Crafting beautiful experiences' },
    { name: 'Data Science', icon: 'fa-chart-line', color: '#14AE5C', description: 'Analyzing and visualizing data' },
    { name: 'Cybersecurity', icon: 'fa-shield-alt', color: '#D11215', description: 'Protecting digital assets' },
    { name: 'Cloud Computing', icon: 'fa-cloud', color: '#0A66C2', description: 'Building scalable infrastructure' },
    { name: 'DevOps', icon: 'fa-server', color: '#09508F', description: 'Automating deployment pipelines' },
    { name: 'Blockchain', icon: 'fa-link', color: '#FFDD55', description: 'Decentralized technologies' },
    { name: 'IoT', icon: 'fa-microchip', color: '#00F2EA', description: 'Connecting the physical world' },
    { name: 'Game Development', icon: 'fa-gamepad', color: '#CB6CE6', description: 'Creating immersive experiences' },
    { name: 'Marketing', icon: 'fa-bullhorn', color: '#1877F2', description: 'Spreading the word' }
];

const leaders = [
    {
        name: 'Ahmed Hassan',
        role: 'Founder & CEO',
        image: 'https://i.pravatar.cc/300?img=12',
        bio: 'Visionary leader with 5+ years in tech',
        social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
        name: 'Sara Mohamed',
        role: 'Co-Founder & CTO',
        image: 'https://i.pravatar.cc/300?img=45',
        bio: 'Full-stack developer and tech enthusiast',
        social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
        name: 'Omar Khaled',
        role: 'Head of Operations',
        image: 'https://i.pravatar.cc/300?img=33',
        bio: 'Operations expert driving community growth',
        social: { linkedin: '#', twitter: '#', github: '#' }
    }
];

const teamMembers = [
    { name: 'Youssef Ali', role: 'Lead Developer', image: 'https://i.pravatar.cc/300?img=11', department: 'Web Development' },
    { name: 'Nour Ibrahim', role: 'UI/UX Designer', image: 'https://i.pravatar.cc/300?img=47', department: 'Design' },
    { name: 'Karim Samir', role: 'Data Scientist', image: 'https://i.pravatar.cc/300?img=13', department: 'Data Science' },
    { name: 'Layla Mahmoud', role: 'Mobile Developer', image: 'https://i.pravatar.cc/300?img=44', department: 'Mobile' },
    { name: 'Hassan Tarek', role: 'DevOps Engineer', image: 'https://i.pravatar.cc/300?img=15', department: 'DevOps' },
    { name: 'Mariam Youssef', role: 'Security Analyst', image: 'https://i.pravatar.cc/300?img=48', department: 'Cybersecurity' },
    { name: 'Amr Fathy', role: 'AI Researcher', image: 'https://i.pravatar.cc/300?img=14', department: 'AI/ML' },
    { name: 'Hana Mostafa', role: 'Marketing Lead', image: 'https://i.pravatar.cc/300?img=43', department: 'Marketing' }
];

const events = [
    {
        title: 'Tech Summit 2025',
        date: 'March 15, 2025',
        location: 'Delta Tech Hub',
        description: 'Annual technology summit featuring industry leaders and innovators',
        attendees: 500,
        type: 'Conference',
        color: '#CB6CE6'
    },
    {
        title: 'AI Hackathon',
        date: 'April 20-22, 2025',
        location: 'Innovation Center',
        description: '48-hour hackathon focused on AI and machine learning solutions',
        attendees: 200,
        type: 'Hackathon',
        color: '#00F2EA'
    },
    {
        title: 'Web Dev Workshop',
        date: 'May 10, 2025',
        location: 'TST Headquarters',
        description: 'Hands-on workshop covering modern web development frameworks',
        attendees: 100,
        type: 'Workshop',
        color: '#6F4E9F'
    },
    {
        title: 'Startup Pitch Night',
        date: 'June 5, 2025',
        location: 'Business Incubator',
        description: 'Showcase your startup ideas to investors and mentors',
        attendees: 150,
        type: 'Networking',
        color: '#14AE5C'
    },
    {
        title: 'Cybersecurity Bootcamp',
        date: 'July 12-14, 2025',
        location: 'Security Lab',
        description: 'Intensive bootcamp on ethical hacking and security best practices',
        attendees: 80,
        type: 'Bootcamp',
        color: '#D11215'
    },
    {
        title: 'Design Thinking Session',
        date: 'August 8, 2025',
        location: 'Creative Space',
        description: 'Interactive session on user-centered design principles',
        attendees: 120,
        type: 'Workshop',
        color: '#FF004F'
    }
];

const socialMedia = [
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://linkedin.com/company/tst-tech', gradient: 'gradient-linkedin' },
    { name: 'Facebook', icon: 'fa-facebook', url: 'https://facebook.com/tst.tech', color: '#1877F2' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com/tst.tech', gradient: 'gradient-instagram' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com/tst_tech', color: '#00F2EA' },
    { name: 'GitHub', icon: 'fa-github', url: 'https://github.com/tst-tech', color: '#FFFFFF' },
    { name: 'Telegram', icon: 'fa-telegram', url: 'https://t.me/tst_tech', gradient: 'gradient-telegram' },
    { name: 'YouTube', icon: 'fa-youtube', url: 'https://youtube.com/@tst-tech', color: '#FF004F' }
];

// Populate Departments
function populateDepartments() {
    const grid = document.getElementById('departmentsGrid');
    departments.forEach((dept, index) => {
        const card = document.createElement('div');
        card.className = 'team-card p-6 rounded-xl card-hover scroll-reveal department-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="department-icon text-4xl mb-4" style="color: ${dept.color}">
                <i class="fas ${dept.icon}"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">${dept.name}</h3>
            <p class="text-gray-400 text-sm">${dept.description}</p>
        `;
        grid.appendChild(card);
    });
}

// Populate Leaders
function populateLeaders() {
    const grid = document.getElementById('leadersGrid');
    leaders.forEach((leader, index) => {
        const card = document.createElement('div');
        card.className = 'team-card p-6 rounded-xl card-hover scroll-reveal';
        card.style.animationDelay = `${index * 0.2}s`;
        card.innerHTML = `
            <div class="relative mb-4">
                <img src="${leader.image}" alt="${leader.name}" class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-light border-opacity-30">
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-light to-cyan px-4 py-1 rounded-full text-xs font-semibold">
                    ${leader.role}
                </div>
            </div>
            <h3 class="font-bold text-xl text-center mt-6 mb-2">${leader.name}</h3>
            <p class="text-gray-400 text-sm text-center mb-4">${leader.bio}</p>
            <div class="flex justify-center space-x-3">
                <a href="${leader.social.linkedin}" class="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                    <i class="fab fa-linkedin text-sm"></i>
                </a>
                <a href="${leader.social.twitter}" class="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                    <i class="fab fa-twitter text-sm"></i>
                </a>
                <a href="${leader.social.github}" class="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                    <i class="fab fa-github text-sm"></i>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Populate Team Members
function populateTeam() {
    const grid = document.getElementById('teamGrid');
    teamMembers.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'team-card p-4 rounded-xl card-hover scroll-reveal';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-cyan border-opacity-30">
            <h3 class="font-semibold text-center mb-1">${member.name}</h3>
            <p class="text-gray-400 text-sm text-center mb-1">${member.role}</p>
            <p class="text-purple-light text-xs text-center">${member.department}</p>
        `;
        grid.appendChild(card);
    });
}

// Populate Events
function populateEvents() {
    const grid = document.getElementById('eventsGrid');
    events.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'team-card p-6 rounded-xl card-hover scroll-reveal';
        card.style.animationDelay = `${index * 0.15}s`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold" style="background: ${event.color}20; color: ${event.color}">
                    ${event.type}
                </span>
                <span class="text-gray-400 text-sm">
                    <i class="fas fa-users mr-1"></i>${event.attendees}
                </span>
            </div>
            <h3 class="font-bold text-xl mb-2">${event.title}</h3>
            <p class="text-gray-400 text-sm mb-4">${event.description}</p>
            <div class="space-y-2 text-sm">
                <div class="flex items-center text-gray-400">
                    <i class="fas fa-calendar mr-2" style="color: ${event.color}"></i>
                    ${event.date}
                </div>
                <div class="flex items-center text-gray-400">
                    <i class="fas fa-map-marker-alt mr-2" style="color: ${event.color}"></i>
                    ${event.location}
                </div>
            </div>
            <button class="mt-4 w-full btn-secondary px-4 py-2 rounded-lg font-semibold text-sm" onclick="registerEvent('${event.title}')">
                Register Now
            </button>
        `;
        grid.appendChild(card);
    });
}

// Populate Social Media
function populateSocialMedia() {
    const container = document.getElementById('socialLinks');
    socialMedia.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.className = `w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 ${social.gradient || ''}`;
        if (!social.gradient) {
            link.style.background = social.color + '20';
            link.style.color = social.color;
        }
        link.innerHTML = `<i class="fab ${social.icon} text-xl"></i>`;
        container.appendChild(link);
    });
}

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
}

// Smooth Scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Event Registration
function registerEvent(eventTitle) {
    alert(`Thank you for your interest in ${eventTitle}! Registration form will open soon.`);
}

// Join Form
function openJoinForm() {
    alert('Join form will open soon! Stay tuned for updates.');
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Particle Animation (Optional Enhancement)
function createParticles() {
    const hero = document.querySelector('#home');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? '#CB6CE6' : '#00F2EA'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// Typing Animation for Hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.team-card .text-4xl');

    counters.forEach(counter => {
        const target = counter.textContent;
        const isNumber = !isNaN(parseInt(target));

        if (isNumber) {
            const finalValue = parseInt(target);
            let current = 0;
            const increment = finalValue / 50;

            const updateCounter = () => {
                if (current < finalValue) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Populate content
    populateDepartments();
    populateLeaders();
    populateTeam();
    populateEvents();
    populateSocialMedia();

    // Add event listeners
    window.addEventListener('scroll', () => {
        revealOnScroll();
        handleNavbarScroll();
    });

    // Initial reveal check
    revealOnScroll();

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                document.getElementById('mobileMenu').classList.add('hidden');
            }
        });
    });

    // Optional: Create particles for enhanced visual effect
    // createParticles();

    // Animate counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounters();
            }
        });
    });

    const statsSection = document.querySelector('#about');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add cursor trail effect (optional)
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const diffX = mouseX - cursorX;
    const diffY = mouseY - cursorY;

    cursorX += diffX * 0.1;
    cursorY += diffY * 0.1;

    requestAnimationFrame(animateCursor);
}

// Uncomment to enable cursor animation
// animateCursor();
