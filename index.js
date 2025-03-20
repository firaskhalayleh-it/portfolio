// JavaScript for Portfolio Website

// Add translations object
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        
        // Hero Section
        heroGreeting: "Hello, I'm",
        heroRoles: [
            "System Administrator",
            "Software Engineer",
            "Flutter Developer",
            "Node.js Developer",
            "Cloud Infrastructure Specialist"
        ],
        heroDescription: "Specializing in mobile development, backend systems, and cloud infrastructure",
        heroBtn1: "View My Work",
        heroBtn2: "Contact Me",
        
        // About Section
        aboutTitle: "About Me",
        aboutText1: "As a System Administrator & Software Engineer with experience at Spinel Technology, I specialize in developing robust applications and managing complex system infrastructures. My expertise spans mobile development with Flutter, backend systems with Node.js, and database management across various platforms.",
        aboutText2: "I've successfully managed projects for clients like the National Insurance Company (NIC) and Istishari Arab Hospital (IAH), developing dynamic tools and integrating solutions that enhance operational efficiency.",
        aboutText3: "My approach combines technical expertise with creative problem-solving, focusing on delivering scalable and user-friendly solutions for complex business needs.",
        aboutExperience: "Experience",
        aboutExperienceText: "1 year at Spinel Technology",
        aboutEducation: "Education",
        aboutEducationText: "Computer Science Degree",
        aboutLanguages: "Languages",
        aboutLanguagesText: "Arabic (Native), English (Professional)",
        aboutLocation: "Location",
        aboutLocationText: "Palestine",
        
        // Skills Section
        skillsTitle: "My Skills",
        skillsMobile: "Mobile Development",
        skillsBackend: "Backend & Database",
        skillsSystem: "System & Cloud",
        skillsProgramming: "Programming & Tools",
        
        // Projects Section
        projectsTitle: "My Projects",
        projectsAll: "All",
        projectsMobile: "Mobile",
        projectsWeb: "Web",
        projectsBackend: "Backend",
        projectERPTitle: "Mobile ERP System",
        projectERPDesc: "Led the development of a comprehensive mobile ERP system at Spinel Technology, handling business logic, design integration, and ensuring seamless user experience.",
        projectEcommerceTitle: "Fantasize E-commerce",
        projectEcommerceDesc: "Graduation project featuring an e-commerce application built with Flutter, focusing on dynamic customization features for products and packages with high performance and scalability.",
        projectPOSTitle: "Advanced POS System",
        projectPOSDesc: "Developed a tablet-compatible POS and multi-standard accounting system using Flutter, Node.js, Python and PostgreSQL with advanced features like product key generation, QR codes, and transaction forecasting algorithms.",
        projectDetailsBtn: "Details",
        projectCodeBtn: "Code",
        
        // Contact Section
        contactTitle: "Get In Touch",
        contactInfoTitle: "Contact Information",
        contactInfoText: "Feel free to reach out to me for collaborations or inquiries about system administration, software development, or mobile applications.",
        contactFormTitle: "Send Me a Message",
        contactNamePlaceholder: "Your Name",
        contactEmailPlaceholder: "Your Email",
        contactSubjectPlaceholder: "Subject",
        contactMessagePlaceholder: "Your Message",
        contactSendBtn: "Send Message",
        
        // Footer
        footerRights: "All Rights Reserved.",
        
        // Language Switch
        switchToArabic: "عربي"
    },
    ar: {
        // Navigation
        navHome: "الرئيسية",
        navAbout: "عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navContact: "اتصل بي",
        
        // Hero Section
        heroGreeting: "مرحباً، أنا",
        heroRoles: [
            "مدير أنظمة معلومات",
            "مهندس برمجيات",
            "مطور تطبيقات فلاتر",
            "مطور خلفيات نود.جي إس",
            "خبير في البنية التحتية السحابية"
        ],
        heroDescription: "متخصص في تطوير تطبيقات الجوال وأنظمة الخلفية والبنية التحتية السحابية",
        heroBtn1: "عرض أعمالي",
        heroBtn2: "اتصل بي",
        
        // About Section
        aboutTitle: "نبذة عني",
        aboutText1: "كمدير أنظمة ومهندس برمجيات بخبرة في شركة Spinel Technology، أتخصص في تطوير تطبيقات قوية وإدارة بنى تحتية معقدة للأنظمة. تشمل خبرتي تطوير تطبيقات الجوال باستخدام Flutter، وأنظمة الخلفية باستخدام Node.js، وإدارة قواعد البيانات عبر منصات متعددة.",
        aboutText2: "نجحت في إدارة مشاريع لعملاء مثل شركة التأمين الوطنية (NIC) ومستشفى الاستشاري العربي (IAH)، حيث قمت بتطوير أدوات ديناميكية ودمج حلول تعزز كفاءة العمليات.",
        aboutText3: "يجمع نهجي بين الخبرة التقنية وحل المشكلات بطريقة إبداعية، مع التركيز على تقديم حلول قابلة للتطوير وسهلة الاستخدام للاحتياجات التجارية المعقدة.",
        aboutExperience: "الخبرة",
        aboutExperienceText: "سنة واحدة في Spinel Technology",
        aboutEducation: "التعليم",
        aboutEducationText: "شهادة في علوم الكمبيوتر",
        aboutLanguages: "اللغات",
        aboutLanguagesText: "العربية (اللغة الأم)، الإنجليزية (مستوى متقدم)",
        aboutLocation: "الموقع",
        aboutLocationText: "فلسطين",
        
        // Skills Section
        skillsTitle: "مهاراتي",
        skillsMobile: "تطوير تطبيقات الجوال",
        skillsBackend: "الخلفية وقواعد البيانات",
        skillsSystem: "الأنظمة والسحابة",
        skillsProgramming: "البرمجة والأدوات",
        
        // Projects Section
        projectsTitle: "مشاريعي",
        projectsAll: "الكل",
        projectsMobile: "الجوال",
        projectsWeb: "الويب",
        projectsBackend: "الخلفية",
        projectERPTitle: "نظام ERP للجوال",
        projectERPDesc: "قدت تطوير نظام ERP شامل للهواتف المحمولة في Spinel Technology، حيث تعاملت مع منطق الأعمال، ودمج التصميم، وضمان تجربة مستخدم سلسة.",
        projectEcommerceTitle: "منصة التجارة الإلكترونية Fantasize",
        projectEcommerceDesc: "مشروع تخرج يتضمن تطبيق تجارة إلكترونية مبني بواسطة Flutter، يركز على ميزات التخصيص الديناميكية للمنتجات والحزم مع أداء عالي وقابلية للتوسع.",
        projectPOSTitle: "نظام نقاط بيع متقدم",
        projectPOSDesc: "قمت بتطوير نظام نقاط بيع ومحاسبة متعدد المعايير متوافق مع الأجهزة اللوحية باستخدام Flutter وNode.js وPython وPostgreSQL مع ميزات متقدمة مثل إنشاء مفاتيح المنتجات ورموز QR وخوارزميات توقع المعاملات.",
        projectDetailsBtn: "التفاصيل",
        projectCodeBtn: "الكود",
        
        // Contact Section
        contactTitle: "تواصل معي",
        contactInfoTitle: "معلومات الاتصال",
        contactInfoText: "لا تتردد في التواصل معي للتعاون أو الاستفسارات حول إدارة الأنظمة، تطوير البرمجيات، أو تطبيقات الجوال.",
        contactFormTitle: "أرسل لي رسالة",
        contactNamePlaceholder: "الاسم",
        contactEmailPlaceholder: "البريد الإلكتروني",
        contactSubjectPlaceholder: "الموضوع",
        contactMessagePlaceholder: "رسالتك",
        contactSendBtn: "إرسال الرسالة",
        
        // Footer
        footerRights: "جميع الحقوق محفوظة.",
        
        // Language Switch
        switchToArabic: "English"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize semantic aria states for tab interface
    initAccessibility();
    
    // Initialize language based on browser settings
    initLanguageSystem();
    
    // Show loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Initialize everything after page is fully loaded
    window.addEventListener('load', function() {
        // Hide loading screen
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
        
        // Initialize custom cursor
        initCustomCursor();
        
        // Initialize 3D background for hero section
        initThreeJsBackground();
        
        // Initialize typed text effect
        initTypedText();
        
        // Initialize animations
        initAnimations();
        
        // Initialize theme switch
        initThemeSwitch();
        
        // Initialize tilt effect on project cards
        initTiltEffect();
        
        // Initialize project filters
        initProjectFilters();
        
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('nav a');
    
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add active class to navigation items based on scroll position
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
                } else {
                    document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
                }
            });
        });

        // Initialize skill bars animation
        animateSkillBars();
        
        // Initialize language toggle
        initLanguageToggle();
    });
});

// Add these improved initialization functions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize semantic aria states for tab interface
    initAccessibility();
    
    // ...existing code...
});

// Initialize accessibility features
function initAccessibility() {
    // Enhance tab navigation for project filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach((btn, index) => {
        // Add proper aria attributes
        btn.setAttribute('aria-controls', 'projects-grid');
        btn.setAttribute('id', `filter-tab-${index}`);
        
        btn.addEventListener('click', function() {
            // Update aria-selected state when clicking tabs
            filterBtns.forEach(b => b.setAttribute('aria-selected', 'false'));
            this.setAttribute('aria-selected', 'true');
            
            // Announce filter change to screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.className = 'sr-only';
            announcement.textContent = `Showing ${this.textContent} projects`;
            document.body.appendChild(announcement);
            
            // Remove announcement after screen reader has time to read it
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 3000);
        });
    });
    
    // Make sure contact links have proper aria labels
    document.querySelectorAll('.contact-item a').forEach(link => {
        if (link.getAttribute('href').includes('mailto:')) {
            link.setAttribute('aria-label', 'Send email to ' + link.textContent);
        } else if (link.getAttribute('href').includes('tel:')) {
            link.setAttribute('aria-label', 'Call ' + link.textContent);
        }
    });
}

// Custom cursor initialization
function initCustomCursor() {
    const cursorInner = document.querySelector('.cursor-inner');
    const cursorOuter = document.querySelector('.cursor-outer');
    
    if (!cursorInner || !cursorOuter) return;
    
    document.addEventListener('mousemove', function(e) {
        cursorInner.style.left = e.clientX + 'px';
        cursorInner.style.top = e.clientY + 'px';
        
        cursorOuter.style.left = e.clientX + 'px';
        cursorOuter.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursorInner.classList.add('cursor-hover');
            cursorOuter.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', function() {
            cursorInner.classList.remove('cursor-hover');
            cursorOuter.classList.remove('cursor-hover');
        });
    });
}

// Enhanced theme switch functionality
function initThemeSwitch() {
    const themeSwitch = document.getElementById('theme-switch');
    
    if (!themeSwitch) return;
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme based on saved preference or system preference
    if (savedTheme === 'light' || (savedTheme === null && !prefersDarkMode)) {
        document.body.classList.add('light-theme');
        themeSwitch.checked = true;
        updateMetaThemeColor('#f0f5ff'); // Light theme color
    } else {
        updateMetaThemeColor('#0a0e17'); // Dark theme color
    }
    
    // Listen for theme toggle
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            // Apply light theme with transition
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            updateMetaThemeColor('#f0f5ff');
            
            // Update canvas particles for light theme
            updateCanvasForLightTheme();
        } else {
            // Apply dark theme with transition
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            updateMetaThemeColor('#0a0e17');
            
            // Update canvas particles for dark theme
            updateCanvasForDarkTheme();
        }
    });
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === null) {
            if (e.matches) {
                document.body.classList.remove('light-theme');
                themeSwitch.checked = false;
                updateMetaThemeColor('#0a0e17');
            } else {
                document.body.classList.add('light-theme');
                themeSwitch.checked = true;
                updateMetaThemeColor('#f0f5ff');
            }
        }
    });
}

// Update meta theme color for browser UI
function updateMetaThemeColor(color) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.content = color;
}

// Update Three.js canvas for light theme
function updateCanvasForLightTheme() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas || !window.particleSystem) return;
    
    // Get the current particle system
    const particles = window.particleSystem;
    const geometry = particles.geometry;
    const colors = geometry.attributes.color;
    
    // Update particle colors for light theme
    for (let i = 0; i < colors.array.length; i += 3) {
        if (i % 6 === 0) {
            // Primary color (blue)
            colors.array[i] = 0.0;       // R
            colors.array[i + 1] = 0.35;  // G
            colors.array[i + 2] = 1.0;   // B
        } else {
            // Secondary color (pink)
            colors.array[i] = 0.91;      // R
            colors.array[i + 1] = 0.0;   // G
            colors.array[i + 2] = 0.8;   // B
        }
    }
    
    colors.needsUpdate = true;
}

// Update Three.js canvas for dark theme
function updateCanvasForDarkTheme() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas || !window.particleSystem) return;
    
    // Get the current particle system
    const particles = window.particleSystem;
    const geometry = particles.geometry;
    const colors = geometry.attributes.color;
    
    // Update particle colors for dark theme
    for (let i = 0; i < colors.array.length; i += 3) {
        if (i % 6 === 0) {
            // Primary color (cyan)
            colors.array[i] = 0.059;     // R
            colors.array[i + 1] = 0.878; // G
            colors.array[i + 2] = 1.0;   // B
        } else {
            // Secondary color (magenta)
            colors.array[i] = 1.0;       // R
            colors.array[i + 1] = 0.0;   // G
            colors.array[i + 2] = 0.902; // B
        }
    }
    
    colors.needsUpdate = true;
}

// Enhanced Three.js background with particles
function initThreeJsBackground() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    let scene, camera, renderer, particles;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function init() {
        // Create scene
        scene = new THREE.Scene();
        
        // Create camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 1000;
        
        // Create renderer
        renderer = new THREE.WebGLRenderer({ 
            canvas: canvas,
            antialias: true,
            alpha: true 
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        // Create particles
        const particleCount = 1500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        // Check current theme
        const isLightTheme = document.body.classList.contains('light-theme');
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            // Position
            positions[i] = (Math.random() - 0.5) * 2000;
            positions[i + 1] = (Math.random() - 0.5) * 2000;
            positions[i + 2] = (Math.random() - 0.5) * 2000;
            
            // Color based on current theme
            if (i % 6 === 0) {
                if (isLightTheme) {
                    // Primary color (blue)
                    colors[i] = 0.0;       // R
                    colors[i + 1] = 0.35;  // G
                    colors[i + 2] = 1.0;   // B
                } else {
                    // Primary color (cyan)
                    colors[i] = 0.059;     // R
                    colors[i + 1] = 0.878; // G
                    colors[i + 2] = 1.0;   // B
                }
            } else {
                if (isLightTheme) {
                    // Secondary color (pink)
                    colors[i] = 0.91;      // R
                    colors[i + 1] = 0.0;   // G
                    colors[i + 2] = 0.8;   // B
                } else {
                    // Secondary color (magenta)
                    colors[i] = 1.0;       // R
                    colors[i + 1] = 0.0;   // G
                    colors[i + 2] = 0.902; // B
                }
            }
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 4,
            vertexColors: true,
            transparent: true,
            opacity: 0.7
        });
        
        particles = new THREE.Points(geometry, material);
        scene.add(particles);
        
        // Store particle system globally for theme updates
        window.particleSystem = particles;
        
        // Event listeners
        document.addEventListener('mousemove', onDocumentMouseMove);
        window.addEventListener('resize', onWindowResize);
    }
    
    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) * 0.05;
        mouseY = (event.clientY - windowHalfY) * 0.05;
    }
    
    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    function animate() {
        requestAnimationFrame(animate);
        
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
        
        // Adjust based on mouse position
        particles.rotation.x += (mouseY * 0.0001);
        particles.rotation.y += (mouseX * 0.0001);
        
        renderer.render(scene, camera);
    }
    
    try {
        init();
        animate();
    } catch(error) {
        console.error('3D background initialization failed:', error);
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            // Set fallback background based on current theme
            const isLightTheme = document.body.classList.contains('light-theme');
            if (isLightTheme) {
                heroSection.style.background = 'linear-gradient(135deg, #f0f5ff 0%, #e5eeff 100%)';
            } else {
                heroSection.style.background = 'linear-gradient(135deg, #0a0e17 0%, #050812 100%)';
            }
        }
    }
}

// Initialize typed text effect
function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    
    if (!typedElement) return;
    
    const roles = [
        'System Administrator',
        'Software Engineer',
        'Flutter Developer',
        'Node.js Developer',
        'Cloud Infrastructure Specialist'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 150;
    
    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeDelay = 50;
        } else {
            typedElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeDelay = 150;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeDelay = 1500; // Pause at complete word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeDelay = 500; // Pause before typing next word
        }
        
        setTimeout(typeEffect, typeDelay);
    }
    
    // Start typing effect
    setTimeout(typeEffect, 1000);
}

// Initialize tilt effect on project cards
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card');
    
    if (window.innerWidth > 768) {
        VanillaTilt.init(cards, {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.2,
            perspective: 1000,
            scale: 1.05
        });
    }
}

// Initialize project filters
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length === 0) return;
    
    // Add data attributes to project cards
    projectCards[0].dataset.category = 'mobile web';
    projectCards[1].dataset.category = 'mobile web';
    projectCards[2].dataset.category = 'mobile backend';
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Set active class
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 200);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
}

// Initialize animations
function initAnimations() {
    // Hero section animations
    const heroElements = [
        '.hero-content h2',
        '.hero-content h3',
        '.hero-content p',
        '.cta-buttons',
        '.profile-frame'
    ];
    
    heroElements.forEach((element, index) => {
        const delay = 0.3 + (index * 0.2);
        const xOffset = element === '.profile-frame' ? 100 : 0;
        const yOffset = element === '.profile-frame' ? 0 : 50;
        
        const el = document.querySelector(element);
        if (el) {
            el.style.opacity = '0';
            setTimeout(() => {
                el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
                el.style.opacity = '1';
                el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
                setTimeout(() => {
                    el.style.transform = 'translate(0, 0)';
                }, 50);
            }, delay * 1000);
        }
    });
    
    // Adding hover effects for buttons and cards
    addHoverEffects();
    
    // Adding intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe section titles and content
    document.querySelectorAll('.section-title, .glass-card, .skill-item, .project-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Scroll animations with GSAP ScrollTrigger (if available)
    if (window.ScrollTrigger) {
        // Float effect for section backgrounds
        gsap.to('.floating-shape', {
            y: 30,
            duration: 4,
            ease: "power1.inOut",
            stagger: 0.5,
            repeat: -1,
            yoyo: true
        });
        
        // Reveal animations for sections
        const sections = document.querySelectorAll('section:not(.hero)');
        
        sections.forEach(section => {
            // Section title animation
            gsap.from(section.querySelector('.section-title'), {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 50%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
            
            // Content animation
            const content = section.querySelector('.glass-card') || section.querySelector('.skills-container') || section.querySelector('.projects-grid');
            
            if (content) {
                gsap.from(content, {
                    scrollTrigger: {
                        trigger: content,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    delay: 0.3
                });
            }
        });
    } else {
        // Fallback to simpler animations if GSAP ScrollTrigger is not available
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        // Observe section titles and content
        document.querySelectorAll('.section-title, .glass-card, .skill-item, .project-card').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
}

// Add hover effects for interactive elements
function addHoverEffects() {
    // Glow effect on buttons hover
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            if (this.classList.contains('primary-btn')) {
                this.style.boxShadow = '0 0 25px var(--primary-glow)';
            } else if (this.classList.contains('secondary-btn')) {
                this.style.boxShadow = '0 0 25px var(--primary-glow)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            if (this.classList.contains('primary-btn')) {
                this.style.boxShadow = '0 0 15px var(--primary-glow)';
            } else if (this.classList.contains('secondary-btn')) {
                this.style.boxShadow = '0 0 15px var(--primary-glow)';
            }
        });
    });
    
    // Magnetic effect on skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 15;
            const moveY = (y - centerY) / 15;
            
            this.style.transform = `translateY(-5px) perspective(600px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) perspective(600px) rotateX(0deg) rotateY(0deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
}

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill all required fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just log and show a success message
        console.log({
            name,
            email,
            subject,
            message
        });
        
        // Clear form and show success message
        contactForm.reset();
        alert('Your message has been sent successfully!');
    });
}

// Add project filter functionality if there are multiple project categories
const setupProjectFilters = () => {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.classList.contains(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
};

// Animation on scroll for skill bars
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if (skillBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.5, 0.1, 1)';
                        bar.style.width = width;
                    }, 200);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.2 });
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
};

// Helper function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Improved language system initialization
function initLanguageSystem() {
    // Get browser language (first 2 characters - language code)
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.substring(0, 2).toLowerCase();
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('language');
    
    // Determine which language to use (saved preference or browser language)
    let initialLang;
    
    if (savedLang) {
        // Use saved preference if available
        initialLang = savedLang;
    } else {
        // Use browser language if supported, otherwise default to English
        initialLang = (langCode === 'ar') ? 'ar' : 'en';
        // Save this preference
        localStorage.setItem('language', initialLang);
    }
    
    // Set the initial language
    setLanguage(initialLang);
    
    // Initialize language toggle button
    initLanguageToggle();
}

// Improved language toggle functionality
function initLanguageToggle() {
    const langBtn = document.getElementById('language-switch');
    const langIcon = document.getElementById('lang-icon');
    const langText = document.querySelector('.lang-text');
    
    if (!langBtn || !langIcon) return;
    
    // Get current language
    const currentLang = document.documentElement.lang || 'en';
    
    // Set up language icon and text based on current language
    langIcon.className = `lang-indicator lang-${currentLang === 'en' ? 'ar' : 'en'}`;
    if (langText) {
        langText.textContent = currentLang === 'en' ? translations.en.switchToArabic : translations.ar.switchToArabic;
    }
    
    // Listen for language toggle
    langBtn.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        
        // Add a smooth transition when switching languages
        document.body.style.opacity = '0.7';
        
        setTimeout(() => {
            setLanguage(newLang);
            localStorage.setItem('language', newLang);
            
            // Update icon to show the language you'll switch to next time
            langIcon.className = `lang-indicator lang-${newLang === 'en' ? 'ar' : 'en'}`;
            
            // Restore opacity after language is set
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        }, 300);
    });
}

// Completely revised setLanguage function to fix language issues
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    
    // Validate language code
    if (lang !== 'en' && lang !== 'ar') {
        console.error('Invalid language code:', lang);
        lang = 'en'; // Fallback to English
    }
    
    // Set HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Set appropriate font-family
    document.body.style.fontFamily = lang === 'ar' 
        ? "'Tajawal', 'Roboto', sans-serif"
        : "'Roboto', sans-serif";
    
    // Update language toggle button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'en' ? translations.en.switchToArabic : translations.ar.switchToArabic;
    }
    
    // Update all content with translated text
    updateNavigation(lang);
    updateHeroSection(lang);
    updateAboutSection(lang);
    updateSkillsSection(lang);
    updateProjectsSection(lang);
    updateContactSection(lang);
    updateFooter(lang);
    
    // Fix typing effect animation for the current language
    resetTypingAnimation(lang);
    
    // Fix animations and effects that might be affected by language change
    resetAnimations();
}

// New function to properly update the about section
function updateAboutSection(lang) {
    const aboutTitle = document.querySelector('#about .section-title');
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    const aboutDetailTitles = document.querySelectorAll('.detail-item h3');
    const aboutDetailTexts = document.querySelectorAll('.detail-item p');
    
    if (aboutTitle) {
        aboutTitle.textContent = translations[lang].aboutTitle;
    }
    
    if (aboutParagraphs.length >= 3) {
        aboutParagraphs[0].textContent = translations[lang].aboutText1;
        aboutParagraphs[1].textContent = translations[lang].aboutText2;
        aboutParagraphs[2].textContent = translations[lang].aboutText3;
    }
    
    if (aboutDetailTitles.length >= 4 && aboutDetailTexts.length >= 4) {
        // Experience
        aboutDetailTitles[0].textContent = translations[lang].aboutExperience;
        aboutDetailTexts[0].textContent = translations[lang].aboutExperienceText;
        
        // Education
        aboutDetailTitles[1].textContent = translations[lang].aboutEducation;
        aboutDetailTexts[1].textContent = translations[lang].aboutEducationText;
        
        // Languages
        aboutDetailTitles[2].textContent = translations[lang].aboutLanguages;
        aboutDetailTexts[2].textContent = translations[lang].aboutLanguagesText;
        
        // Location
        aboutDetailTitles[3].textContent = translations[lang].aboutLocation;
        aboutDetailTexts[3].textContent = translations[lang].aboutLocationText;
    }
}

// New function to update skills section
function updateSkillsSection(lang) {
    const skillsTitle = document.querySelector('#skills .section-title');
    const skillCategoryTitles = document.querySelectorAll('.skill-category h3');
    
    if (skillsTitle) {
        skillsTitle.textContent = translations[lang].skillsTitle;
    }
    
    if (skillCategoryTitles.length >= 4) {
        skillCategoryTitles[0].textContent = translations[lang].skillsMobile;
        skillCategoryTitles[1].textContent = translations[lang].skillsBackend;
        skillCategoryTitles[2].textContent = translations[lang].skillsSystem;
        skillCategoryTitles[3].textContent = translations[lang].skillsProgramming;
    }
}

// New function to update projects section
function updateProjectsSection(lang) {
    const projectsTitle = document.querySelector('#projects .section-title');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectsTitle) {
        projectsTitle.textContent = translations[lang].projectsTitle;
    }
    
    // Update filter buttons
    if (filterBtns.length >= 4) {
        filterBtns[0].querySelector('span').textContent = translations[lang].projectsAll;
        filterBtns[1].querySelector('span').textContent = translations[lang].projectsMobile;
        filterBtns[2].querySelector('span').textContent = translations[lang].projectsWeb;
        filterBtns[3].querySelector('span').textContent = translations[lang].projectsBackend;
    }
    
    // Update project cards
    projectCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        const links = card.querySelectorAll('.small-btn');
        
        if (index === 0) {
            // Mobile ERP System
            if (title) title.textContent = translations[lang].projectERPTitle;
            if (desc) desc.textContent = translations[lang].projectERPDesc;
        } else if (index === 1) {
            // E-commerce
            if (title) title.textContent = translations[lang].projectEcommerceTitle;
            if (desc) desc.textContent = translations[lang].projectEcommerceDesc;
        } else if (index === 2) {
            // POS System
            if (title) title.textContent = translations[lang].projectPOSTitle;
            if (desc) desc.textContent = translations[lang].projectPOSDesc;
        }
        
        // Update buttons
        if (links.length >= 2) {
            links[0].innerHTML = `<i class="fas fa-globe" aria-hidden="true"></i> ${translations[lang].projectDetailsBtn}`;
            links[1].innerHTML = `<i class="fab fa-github" aria-hidden="true"></i> ${translations[lang].projectCodeBtn}`;
        }
    });
}

// Improved function to fix typing animation for different languages
function resetTypingAnimation(lang) {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    // Clear existing text and animation
    typedElement.textContent = '';
    if (window.typingTimeout) {
        clearTimeout(window.typingTimeout);
    }
    
    // Reset typing variables
    window.typedRoles = translations[lang].heroRoles;
    window.roleIndex = 0;
    window.charIndex = 0;
    window.isDeleting = false;
    window.typeDelay = 150;
    
    // Start typing animation with the new language
    setTimeout(() => {
        typeEffect();
    }, 800);
}

// Modified typing effect to handle RTL languages better
function typeEffect() {
    if (!window.typedRoles) return;
    
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const currentRole = window.typedRoles[window.roleIndex];
    const isRTL = document.documentElement.dir === 'rtl';
    
    if (window.isDeleting) {
        typedElement.textContent = currentRole.substring(0, window.charIndex - 1);
        window.charIndex--;
        window.typeDelay = 50;
    } else {
        typedElement.textContent = currentRole.substring(0, window.charIndex + 1);
        window.charIndex++;
        window.typeDelay = 150;
    }
    
    // Apply appropriate text alignment for the language direction
    typedElement.style.textAlign = isRTL ? 'right' : 'left';
    
    if (!window.isDeleting && window.charIndex === currentRole.length) {
        window.isDeleting = true;
        window.typeDelay = 1500; // Pause at complete word
    } else if (window.isDeleting && window.charIndex === 0) {
        window.isDeleting = false;
        window.roleIndex = (window.roleIndex + 1) % window.typedRoles.length;
        window.typeDelay = 500; // Pause before typing next word
    }
    
    // Store the timeout ID to allow clearing on language change
    window.typingTimeout = setTimeout(typeEffect, window.typeDelay);
}

// Update navigation items with translated text
function updateNavigation(lang) {
    const homeLink = document.querySelector('nav a[href="#home"]');
    const aboutLink = document.querySelector('nav a[href="#about"]');
    const skillsLink = document.querySelector('nav a[href="#skills"]');
    const projectsLink = document.querySelector('nav a[href="#projects"]');
    const contactLink = document.querySelector('nav a[href="#contact"]');
    
    if (homeLink) homeLink.textContent = translations[lang].navHome;
    if (aboutLink) aboutLink.textContent = translations[lang].navAbout;
    if (skillsLink) skillsLink.textContent = translations[lang].navSkills;
    if (projectsLink) projectsLink.textContent = translations[lang].navProjects;
    if (contactLink) contactLink.textContent = translations[lang].navContact;
}

// Update hero section with translated text
function updateHeroSection(lang) {
    const heroGreeting = document.querySelector('.hero-content h2');
    const heroDesc = document.querySelector('.hero-content p');
    const viewWorkBtn = document.querySelector('.hero-content .primary-btn');
    const contactBtn = document.querySelector('.hero-content .secondary-btn');
    
    if (heroGreeting) {
        const nameSpan = heroGreeting.querySelector('.highlight');
        const name = nameSpan ? nameSpan.textContent : 'Firas Khalayleh';
        heroGreeting.innerHTML = `${translations[lang].heroGreeting} <span class="highlight">${name}</span>`;
    }
    
    if (heroDesc) heroDesc.textContent = translations[lang].heroDescription;
    if (viewWorkBtn) viewWorkBtn.textContent = translations[lang].heroBtn1;
    if (contactBtn) contactBtn.textContent = translations[lang].heroBtn2;
    
    // Update global roles array for typed text
    window.typedRoles = translations[lang].heroRoles;
}

// Reinitialize typed text effect with new language
function reinitializeTypedText(lang) {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length >= 3) {
        // First project - ERP
        const title1 = projectCards[0].querySelector('h3');
        const desc1 = projectCards[0].querySelector('p');
        const btns1 = projectCards[0].querySelectorAll('.small-btn');
        
        if (title1) title1.textContent = translations[lang].projectERPTitle;
        if (desc1) desc1.textContent = translations[lang].projectERPDesc;
        if (btns1.length >= 2) {
            btns1[0].innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].projectDetailsBtn}`;
            btns1[1].innerHTML = `<i class="fab fa-github"></i> ${translations[lang].projectCodeBtn}`;
        }
        
        // Second project - E-commerce
        const title2 = projectCards[1].querySelector('h3');
        const desc2 = projectCards[1].querySelector('p');
        const btns2 = projectCards[1].querySelectorAll('.small-btn');
        
        if (title2) title2.textContent = translations[lang].projectEcommerceTitle;
        if (desc2) desc2.textContent = translations[lang].projectEcommerceDesc;
        if (btns2.length >= 2) {
            btns2[0].innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].projectDetailsBtn}`;
            btns2[1].innerHTML = `<i class="fab fa-github"></i> ${translations[lang].projectCodeBtn}`;
        }
        
        // Third project - POS
        const title3 = projectCards[2].querySelector('h3');
        const desc3 = projectCards[2].querySelector('p');
        const btns3 = projectCards[2].querySelectorAll('.small-btn');
        
        if (title3) title3.textContent = translations[lang].projectPOSTitle;
        if (desc3) desc3.textContent = translations[lang].projectPOSDesc;
        if (btns3.length >= 2) {
            btns3[0].innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].projectDetailsBtn}`;
            btns3[1].innerHTML = `<i class="fab fa-github"></i> ${translations[lang].projectCodeBtn}`;
        }
    }
}

// Update contact section with translated text
function updateContactSection(lang) {
    const contactTitle = document.querySelector('#contact .section-title');
    const contactInfoTitle = document.querySelector('.contact-info h3');
    const contactInfoText = document.querySelector('.contact-info > p');
    const contactFormTitle = document.querySelector('.contact-form h3');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const subjectInput = document.querySelector('#subject');
    const messageInput = document.querySelector('#message');
    const sendBtn = document.querySelector('.contact-form .primary-btn');
    
    if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;
    if (contactInfoTitle) contactInfoTitle.textContent = translations[lang].contactInfoTitle;
    if (contactInfoText) contactInfoText.textContent = translations[lang].contactInfoText;
    if (contactFormTitle) contactFormTitle.textContent = translations[lang].contactFormTitle;
    
    if (nameInput) nameInput.placeholder = translations[lang].contactNamePlaceholder;
    if (emailInput) emailInput.placeholder = translations[lang].contactEmailPlaceholder;
    if (subjectInput) subjectInput.placeholder = translations[lang].contactSubjectPlaceholder;
    if (messageInput) messageInput.placeholder = translations[lang].contactMessagePlaceholder;
    
    if (sendBtn) sendBtn.textContent = translations[lang].contactSendBtn;
}

// Update footer with translated text
function updateFooter(lang) {
    const copyright = document.querySelector('.footer-content p');
    if (copyright) {
        const year = new Date().getFullYear();
        copyright.textContent = `© ${year} My Portfolio. ${translations[lang].footerRights}`;
    }
    
    // Footer navigation links - reuse the navigation translation
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 5) {
        footerLinks[0].textContent = translations[lang].navHome;
        footerLinks[1].textContent = translations[lang].navAbout;
        footerLinks[2].textContent = translations[lang].navSkills;
        footerLinks[3].textContent = translations[lang].navProjects;
        footerLinks[4].textContent = translations[lang].navContact;
    }
}
