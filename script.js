// Team Data
const leaders = [
    {
        name: "Ahmed Ezz Eldin Qataria",
        role: "Leader of the Social Media Team",
        image: "https://i.pravatar.cc/300?img=11",
        bio: "Creative Flutter developer, graphic designer, and Linux system administrator who combines innovation and leadership.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Ranim Eissa",
        role: "Vice Leader of the Social Team",
        image: "https://i.pravatar.cc/300?img=5",
        bio: "Passionate Front-End Developer and UI/UX Designer who blends creativity and logic to craft inspiring digital experiences.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Khaled Abo Khalefa",
        role: "Leader of the Communication Committee",
        image: "https://i.pravatar.cc/300?img=3",
        bio: "Skilled in communication and problem-solving, always striving to create strong connections and effective teamwork.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Sana Elada",
        role: "Vice Leader of the Learning Team",
        image: "https://i.pravatar.cc/300?img=9",
        bio: "A Flutter mobile app developer and front-end developer who creates smooth, efficient, and user-focused digital experiences.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    }
];

const hrMembers = [
    {
        name: "Mariam Nabhan Ezzat",
        role: "Member of the HR Team",
        image: "https://i.pravatar.cc/300?img=20",
        bio: "Skilled in communication, strong presentation, and administrative abilities to support effective human resources management.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Zainab Mamdouh Soliman",
        role: "Vice Head of the HR Team",
        image: "https://i.pravatar.cc/300?img=24",
        bio: "Skilled in data management, HR data analysis, and effective communication. Dedicated to building strong and efficient teams.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Rahma Rezk",
        role: "Member of the HR Team",
        image: "https://i.pravatar.cc/300?img=28",
        bio: "Skilled in Microsoft tools, social communication and analysis, and data analysis using Python to support effective human resources.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Rokia Elgendy",
        role: "Member of the HR Team",
        image: "https://i.pravatar.cc/300?img=32",
        bio: "Skilled in front-end development, Microsoft tools, and HR fundamentals, with strong problem-solving and teamwork abilities.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    }
];

const members = [
    {
        name: "Mostafa Ahmed Ghazal",
        role: "Head of Social Media and Editing",
        image: "https://i.pravatar.cc/300?img=53",
        bio: "Skilled as a Video Editor, Creative Planner, and Marketing Specialist to produce engaging and effective content.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Mohammed Khalaf",
        role: "Member of the Social Media Team",
        image: "https://i.pravatar.cc/300?img=59",
        bio: "Skilled in digital marketing, project management, and graphic design, blending creativity with strategy.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Rahma Elshenawy",
        role: "Member of the Learning Team",
        image: "https://i.pravatar.cc/300?img=42",
        bio: "Skilled in writing, public speaking, social interaction, and leadership to deliver effective and engaging outcomes.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Nouran Elbadry",
        role: "Member of the Programming Team",
        image: "https://i.pravatar.cc/300?img=45",
        bio: "Front-end developer skilled in Microsoft tools and Canva who uses coding and design to build smart solutions.",
        social: { linkedin: "#", facebook: "#", instagram: "#" }
    }
];

// Render Function
function renderTeamSection(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map((member, index) => `
        <div class="team-card-white p-6 flex flex-col h-full reveal" style="animation-delay: ${index * 0.1}s">
            <div class="mb-4 relative">
                <img src="${member.image}" alt="${member.name}" class="w-full h-64 object-cover rounded-lg shadow-md">
                <div class="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold shadow-sm">
                    ${member.name.split(' ')[0]}
                </div>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">${member.name}</h3>
            <p class="text-xs text-[#E31E24] font-bold mb-3 uppercase tracking-wide">${member.role}</p>
            <p class="text-gray-500 text-xs leading-relaxed mb-4 flex-grow">${member.bio}</p>
            
            <div class="flex space-x-3 mt-auto pt-4 border-t border-gray-100">
                <a href="${member.social.linkedin}" class="text-[#0077b5] hover:scale-110 transition-transform"><i class="fab fa-linkedin text-xl"></i></a>
                <a href="${member.social.facebook}" class="text-[#1877f2] hover:scale-110 transition-transform"><i class="fab fa-facebook text-xl"></i></a>
                <a href="${member.social.instagram}" class="text-[#E1306C] hover:scale-110 transition-transform"><i class="fab fa-instagram text-xl"></i></a>
            </div>
        </div>
    `).join('');
}

// Smooth Scroll
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

// Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTeamSection(leaders, 'leadersContainer');
    renderTeamSection(hrMembers, 'hrContainer');
    renderTeamSection(members, 'membersContainer');

    // Observe elements
    const revealElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .reveal');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
