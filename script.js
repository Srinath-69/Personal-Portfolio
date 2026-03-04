// ==================== EMAILJS SETUP ====================
emailjs.init("_nwyQedsqMiTnudTj");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const btn = this.querySelector("button");
    const original = btn.innerHTML;
    btn.innerHTML = "SENDING TRANSMISSION...";
    btn.disabled = true;

    emailjs.sendForm("service_dwlgkct", "template_sng6f2t", this)
        .then(() => {
            launchConfetti();
            btn.innerHTML = "✅ MESSAGE SENT SUCCESSFULLY!";
            btn.style.background = "linear-gradient(to right, #86efac, #a3e7bb)";
            setTimeout(() => {
                this.reset();
                btn.innerHTML = original;
                btn.style.background = "";
                btn.disabled = false;
            }, 3000);
        })
        .catch(() => {
            btn.innerHTML = "❌ FAILED – TRY AGAIN";
            setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 2000);
        });
});

// ==================== PARTICLE CANVAS ====================
let canvas, ctx, particles = [], mouse = { x: 0, y: 0 };
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() {
        ctx.fillStyle = 'rgba(165, 243, 252, 0.9)';
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
}
function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < 130) {
                ctx.strokeStyle = `rgba(165,243,252,${1-distance/130})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}
function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animateCanvas);
}
function initCanvas() {
    canvas = document.getElementById('hero-canvas');
    ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener('resize', resize);
    for (let i = 0; i < 180; i++) particles.push(new Particle());
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    animateCanvas();
}

// ==================== PROJECTS DATA ====================
const projects = [
    { id:1, title:"House Price Prediction Tool", category:"ui", tech:"PYTHON • SCIKIT-LEARN • FLASK", desc:"Built using regression models with optimized accuracy and deployed through an interactive UI.", image:"assets/images/id-1.png", github:"https://github.com/Srinath-69/House-Price-Prediction-Tool-2026", live:"https://house-price-prediction-tool-2026.onrender.com/" },
    { id:2, title:"Student Registration Dashboard", category:"web", tech:"DJANGO • HTML • CSS • SQLITE", desc:"Designed with authentication, CRUD operations, and admin-level controls.", image:"assets/images/id-2.png", github:"https://github.com/Srinath-69/Student-Registration-Dashboard", live:"https://srinath-69.github.io/Student-Registration-Dashboard/" },
    { id:3, title:"Smart Attendance Tracker", category:"interactive", tech:"PYTHON • OPENCV • FACE RECOGNITION", desc:"Detects and logs attendance automatically with real-time face detection.", image:"assets/images/id-3.png", github:"https://github.com/Srinath-69/Smart-Attendace-Tracker", live:"https://srinath-69.github.io/Smart-Attendace-Tracker/" }
];

function renderProjects(filtered) {
    const container = document.getElementById('projects-grid');
    container.innerHTML = '';
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card glass rounded-3xl overflow-hidden cursor-pointer';
        card.innerHTML = `
            <img src="${p.image}" class="w-full h-60 object-cover">
            <div class="p-8">
                <div class="uppercase text-xs tracking-widest text-cyan-400 mb-2">${p.tech}</div>
                <div class="text-2xl font-semibold mb-3">${p.title}</div>
                <div class="text-gray-400 text-sm line-clamp-3">${p.desc}</div>
            </div>
        `;
        card.onclick = () => showProjectModal(p);
        container.appendChild(card);
    });
}
function filterProjects(cat) {
    document.querySelectorAll('#project-filters button').forEach(b => b.classList.remove('active-filter','border-cyan-400'));
    event.target.classList.add('active-filter','border-cyan-400');
    let filtered = projects;
    if (cat !== 'all') filtered = projects.filter(p => p.category === cat);
    renderProjects(filtered);
}
function showProjectModal(p) {
    document.getElementById('modal-image').innerHTML = `<img src="${p.image}" class="w-full h-full object-cover">`;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-tech').textContent = p.tech;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-github').href = p.github;
    document.getElementById('modal-live').href = p.live;
    document.getElementById('project-modal').classList.remove('hidden');
    document.getElementById('project-modal').classList.add('flex');
}
function closeModal() {
    const m = document.getElementById('project-modal');
    m.classList.add('hidden'); m.classList.remove('flex');
}

// ==================== ROCKET ANIMATIONS ====================
function launchRocketAndScroll() {
    const btn = document.getElementById('explore-btn');
    btn.style.transition = 'all 0.8s cubic-bezier(0.4,0,0.2,1)';
    btn.style.transform = 'translateY(-160px) rotate(-18deg) scale(0.9)';
    btn.style.opacity = '0.5';
    setTimeout(() => {
        btn.style.transition = 'all 1.4s cubic-bezier(0.34,1.56,0.64,1)';
        btn.style.transform = 'translateY(0) rotate(0) scale(1)';
        btn.style.opacity = '1';
        smoothScrollTo('projects');
    }, 750);
}
function launchResumeRocket(el) {
    el.style.transition = 'all 0.6s ease';
    el.style.transform = 'translateY(-80px) rotate(-25deg)';
    setTimeout(() => { el.style.transition = 'all 1s cubic-bezier(0.34,1.56,0.64,1)'; el.style.transform = 'translateY(0) rotate(0)'; }, 800);
}

// ==================== OTHER FUNCTIONS ====================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');
    menu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
}
function smoothScrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function animateSkill(el) {
    const bar = el.querySelector('.skill-bar');
    bar.style.width = '0%';
    setTimeout(() => bar.style.width = bar.parentElement.nextElementSibling ? '95%' : bar.style.width, 100);
}
function launchConfetti() {
    const colors = ['#67e8f9','#c084fc','#a5f3fc'];
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.style.cssText = `position:fixed;z-index:99999;left:${Math.random()*100}vw;top:-10px;width:10px;height:10px;background:${colors[Math.floor(Math.random()*colors.length)]};opacity:${Math.random()+0.5};transform:rotate(${Math.random()*360}deg)`;
            document.body.appendChild(c);
            let y = -20;
            const fall = setInterval(() => {
                y += 12 + Math.random()*8;
                c.style.top = y + 'px';
                c.style.left = parseFloat(c.style.left) + (Math.random()*3-1.5) + 'vw';
                if (y > window.innerHeight) { clearInterval(fall); c.remove(); }
            }, 16);
        }, i*3);
    }
}
function updateVisitorCount() {
    let count = localStorage.getItem('visitorCount') || 2487;
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-count').textContent = count;
}
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}
function initProgressBar() {
    const bar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        bar.style.width = scrollPercent + '%';
    });
}
function hidePreloader() {
    const pre = document.getElementById('preloader');
    pre.style.opacity = '0';
    setTimeout(() => pre.remove(), 800);
}
function initializePortfolio() {
    initCanvas();
    renderProjects(projects);
    updateVisitorCount();
    initCustomCursor();
    initProgressBar();
    hidePreloader();
    document.addEventListener('keydown', e => { if (e.key.toLowerCase() === 'r') launchRocketAndScroll(); });
    console.log('%c🚀 PORTFOLIO READY – YOU ARE WINNING!', 'color:#67e8f9;font-size:16px');
}

window.onload = initializePortfolio;