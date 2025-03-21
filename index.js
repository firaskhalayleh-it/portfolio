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
    // Initialize language detection first - before anything else
    fixLanguageDetection();
    
    // Initialize semantic aria states for tab interface
    initAccessibility();
    
    // Initialize mobile menu - ensure this runs immediately
    initMobileMenu();
    
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
    
    // Apply theme based on saved preference or system preference without animation
    document.body.classList.add('theme-transition');
    
    if (savedTheme === 'light' || (savedTheme === null && !prefersDarkMode)) {
        document.body.classList.add('light-theme');
        themeSwitch.checked = true;
        updateMetaThemeColor('#f4f8ff'); // Updated light theme color
    } else {
        document.body.classList.remove('light-theme');
        updateMetaThemeColor('#0a0e17'); // Dark theme color
    }
    
    // Force reflow to apply the theme instantly
    void document.body.offsetHeight;
    
    // Remove transition blocker and apply proper transition state
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
        document.body.classList.add('theme-transition-complete');
    }, 50);
    
    // Prevent transitions on page load for controls panel
    const controlsPanel = document.querySelector('.controls-panel');
    if (controlsPanel) {
        controlsPanel.style.transition = 'none';
        // Force reflow
        void controlsPanel.offsetHeight;
        // Restore transitions
        setTimeout(() => {
            controlsPanel.style.transition = '';
        }, 100);
    }
    
    // Listen for theme toggle with improved transitions
    themeSwitch.addEventListener('change', function() {
        // Add transition-blocking class
        document.body.classList.add('theme-transition');
        
        // Fix controls panel stability during transition
        if (controlsPanel) {
            const height = controlsPanel.offsetHeight;
            controlsPanel.style.height = `${height}px`;
        }
        
        // Force reflow
        void document.body.offsetHeight;
        
        // Apply theme change
        if (this.checked) {
            // Apply light theme
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            updateMetaThemeColor('#f4f8ff');
            
            // Update canvas particles for light theme
            updateCanvasForLightTheme();
            
            // Update any other theme-specific elements
            updateThemeSpecificElements('light');
        } else {
            // Apply dark theme
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            updateMetaThemeColor('#0a0e17');
            
            // Update canvas particles for dark theme
            updateCanvasForDarkTheme();
            
            // Update any other theme-specific elements
            updateThemeSpecificElements('dark');
        }
        
        // Remove transition-blocking class and apply transition state
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
            document.body.classList.add('theme-transition-complete');
            
            // Reset controls panel dimensions after transition
            if (controlsPanel) {
                controlsPanel.style.height = '';
            }
            
            // Remove the transition class after animations complete
            setTimeout(() => {
                document.body.classList.remove('theme-transition-complete');
            }, 500);
        }, 50);
    });
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === null) {
            // Block transitions during automatic theme switch
            document.body.classList.add('theme-transition');
            
            // Force reflow
            void document.body.offsetHeight;
            
            if (e.matches) {
                document.body.classList.remove('light-theme');
                themeSwitch.checked = false;
                updateMetaThemeColor('#0a0e17');
                updateThemeSpecificElements('dark');
            } else {
                document.body.classList.add('light-theme');
                themeSwitch.checked = true;
                updateMetaThemeColor('#f4f8ff');
                updateThemeSpecificElements('light');
            }
            
            // Remove transition blocking and apply transition state
            setTimeout(() => {
                document.body.classList.remove('theme-transition');
                document.body.classList.add('theme-transition-complete');
                
                setTimeout(() => {
                    document.body.classList.remove('theme-transition-complete');
                }, 500);
            }, 50);
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
    
    // Update particle colors for light theme with enhanced colors
    for (let i = 0; i < colors.array.length; i += 3) {
        if (i % 6 === 0) {
            // Primary color (blue) - slightly deeper for better visibility
            colors.array[i] = 0.0;       // R
            colors.array[i + 1] = 0.32;  // G
            colors.array[i + 2] = 0.9;   // B - slightly reduced from 1.0
        } else {
            // Secondary color (pink) - slightly deeper
            colors.array[i] = 0.89;      // R - slightly reduced from 0.91
            colors.array[i + 1] = 0.0;   // G
            colors.array[i + 2] = 0.6;   // B - reduced from 0.8 for richer color
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

// Helper function to update any additional theme-specific elements
function updateThemeSpecificElements(theme) {
    // Update floating shapes color based on theme
    const floatingShapes = document.querySelectorAll('.floating-shape');
    if (floatingShapes.length > 0) {
        floatingShapes.forEach(shape => {
            // Apply reduced opacity for light theme shapes
            if (theme === 'light') {
                shape.style.opacity = '0.15';
            } else {
                shape.style.opacity = '0.2';
            }
        });
    }
    
    // Update grid patterns for better visibility in current theme
    const gridPatterns = document.querySelectorAll('.grid-pattern');
    if (gridPatterns.length > 0) {
        gridPatterns.forEach(grid => {
            if (theme === 'light') {
                grid.style.opacity = '0.1'; // Less visible in light theme
            } else {
                grid.style.opacity = '0.2';
            }
        });
    }
    
    // Update scroll indicators to match theme
    const scrollIndicators = document.querySelectorAll('.scroll-indicator');
    if (scrollIndicators.length > 0) {
        scrollIndicators.forEach(indicator => {
            if (theme === 'light') {
                indicator.style.opacity = '0.6'; // More visible in light theme
            } else {
                indicator.style.opacity = '0.8';
            }
        });
    }
    
    // Update section titles for better theme consistency
    document.querySelectorAll('.section-title').forEach(title => {
        if (theme === 'light') {
            title.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        } else {
            title.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
        }
    });
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
        langText.textContent = lang === 'en' ? translations.en.switchToArabic : translations[lang].switchToArabic;
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

// Fix language detection issues

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language detection first - before anything else
    fixLanguageDetection();
    
    // Initialize semantic aria states for tab interface
    initAccessibility();
    
    // Show loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Initialize everything after page is fully loaded
    window.addEventListener('load', function() {
        // ...existing code...
    });
});

// New improved language detection function
function fixLanguageDetection() {
    console.log('Starting language detection...');
    
    try {
        // Get browser language with better detection
        const browserLanguage = getBrowserLanguage();
        console.log('Detected browser language:', browserLanguage);
        
        // Check for saved language preference
        const savedLang = localStorage.getItem('language');
        console.log('Saved language preference:', savedLang);
        
        // Determine which language to use
        let initialLang;
        
        if (savedLang) {
            initialLang = savedLang;
            console.log('Using saved language preference:', initialLang);
        } else {
            // Only support English and Arabic for now
            initialLang = browserLanguage.startsWith('ar') ? 'ar' : 'en';
            console.log('Setting initial language to:', initialLang);
            
            // Save this preference
            localStorage.setItem('language', initialLang);
        }
        
        // Apply language immediately to prevent flashing
        applyLanguage(initialLang);
        
        // Set up language toggler
        setupLanguageToggle();
    } catch (error) {
        console.error('Error during language detection:', error);
        // Fallback to English
        applyLanguage('en');
    }
}

// Better browser language detection
function getBrowserLanguage() {
    const navLang = navigator.language || 
                  navigator.browserLanguage || 
                  navigator.userLanguage || 
                  'en';
    
    return navLang.toLowerCase();
}

// Apply language immediately without waiting for page load
function applyLanguage(lang) {
    console.log('Applying language:', lang);
    
    // Set HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Set font family based on language
    if (lang === 'ar') {
        document.body.style.fontFamily = "'Tajawal', 'Roboto', sans-serif";
    } else {
        document.body.style.fontFamily = "'Roboto', sans-serif";
    }
    
    // Update language toggle text (if element exists)
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'en' ? translations.en.switchToArabic : translations.ar.switchToArabic;
    }

    // Update language toggle icon (if element exists)
    const langIcon = document.getElementById('lang-icon');
    if (langIcon) {
        langIcon.className = `lang-indicator lang-${lang === 'en' ? 'ar' : 'en'}`;
    }
    
    // Store language for later use
    window.currentLanguage = lang;
}

// Set up language toggle with more robust implementation
function setupLanguageToggle() {
    const langBtn = document.getElementById('language-switch');
    if (!langBtn) {
        console.warn('Language switch button not found, skipping setup');
        return;
    }
    
    // Prevent text from overflowing
    const langText = langBtn.querySelector('.lang-text');
    if (langText) {
        // Ensure text is properly sized
        langText.style.maxWidth = '40px';
    }
    
    langBtn.addEventListener('click', function() {
        // Get current language
        const currentLang = document.documentElement.lang;
        console.log('Current language before toggle:', currentLang);
        
        // Toggle between English and Arabic
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        console.log('Switching to language:', newLang);
        
        // Freeze controls during transition to prevent height issues
        const controlsPanel = document.querySelector('.controls-panel');
        if (controlsPanel) {
            // Store current dimensions
            const height = controlsPanel.offsetHeight;
            const width = controlsPanel.offsetWidth;
            
            // Lock dimensions during transition
            controlsPanel.style.height = `${height}px`;
            controlsPanel.style.width = `${width}px`;
            controlsPanel.style.overflow = 'hidden';
        }
        
        // Add transition class to body
        document.body.classList.add('language-transition');
        
        // Delay the actual language change to allow for transition
        setTimeout(() => {
            // Apply the new language
            applyLanguage(newLang);
            
            // Save preference
            localStorage.setItem('language', newLang);
            
            // Update mobile menu text if visible
            updateMobileMenuText(newLang);
            
            // Update icon
            const langIcon = document.getElementById('lang-icon');
            if (langIcon) {
                langIcon.className = `lang-indicator lang-${newLang === 'en' ? 'ar' : 'en'}`;
                
                // Announce language change for screen readers
                const announcement = document.getElementById('language-announcement');
                if (announcement) {
                    announcement.textContent = `Language changed to ${newLang === 'en' ? 'English' : 'Arabic'}`;
                }
            }
            
            // Fix mobile-specific layout issues after language change
            fixMobileLayoutAfterLanguageChange(newLang);
            
            // Remove transition class and release dimensions
            setTimeout(() => {
                if (controlsPanel) {
                    controlsPanel.style.height = '';
                    controlsPanel.style.width = '';
                    controlsPanel.style.overflow = '';
                }
                
                document.body.classList.remove('language-transition');
                document.body.classList.add('language-transition-complete');
                
                // Clean up animation class
                setTimeout(() => {
                    document.body.classList.remove('language-transition-complete');
                }, 500);
            }, 300);
        }, 300);
    });
    
    // Add touch events support for better mobile experience
    if ('ontouchstart' in window) {
        langBtn.addEventListener('touchstart', function(e) {
            // Prevent any unwanted behavior
            e.preventDefault();
            // Trigger click
            this.click();
        }, { passive: false });
    }
}

// Ensure controls panel is properly initialized on mobile
window.addEventListener('resize', function() {
    // Reset any fixed dimensions on resize
    const controlsPanel = document.querySelector('.controls-panel');
    if (controlsPanel) {
        controlsPanel.style.height = '';
        controlsPanel.style.width = '';
    }
});

// Add mobile navigation functionality
function initMobileMenu() {
    console.log('Initializing mobile menu');
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    if (!menuToggle || !mobileNav || !overlay) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    // Toggle mobile menu when hamburger is clicked
    menuToggle.addEventListener('click', function(e) {
        console.log('Mobile menu toggle clicked');
        e.preventDefault(); // Prevent any default behavior
        
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Update ARIA attributes
        const isExpanded = mobileNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        // Get RTL status
        const isRTL = document.documentElement.dir === 'rtl';
        
        // Animate hamburger icon based on RTL status
        const spans = this.querySelectorAll('span');
        if (isExpanded) {
            if (isRTL) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-7px, -7px)';
            } else {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            }
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Stop event propagation to prevent document click handler from firing
        e.stopPropagation();
    });
    
    // Close mobile menu when overlay is clicked
    overlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        // Reset hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
    
    // Close mobile menu when a nav link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            
            // Reset hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
    
    // Add touch events support for better mobile experience
    if ('ontouchstart' in window) {
        menuToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        }, { passive: false });
        
        overlay.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        }, { passive: false });
    }
}

// Improved language switching with better mobile support
function setupLanguageToggle() {
    const langBtn = document.getElementById('language-switch');
    if (!langBtn) {
        console.warn('Language switch button not found, skipping setup');
        return;
    }
    
    // Prevent text from overflowing
    const langText = langBtn.querySelector('.lang-text');
    if (langText) {
        // Ensure text is properly sized
        langText.style.maxWidth = '40px';
    }
    
    langBtn.addEventListener('click', function() {
        // Get current language
        const currentLang = document.documentElement.lang;
        console.log('Current language before toggle:', currentLang);
        
        // Toggle between English and Arabic
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        console.log('Switching to language:', newLang);
        
        // Check if we're also in a theme transition
        const isInThemeTransition = document.body.classList.contains('theme-transition');
        
        // If not in theme transition, add transition blocking class
        if (!isInThemeTransition) {
            document.body.classList.add('theme-transition');
        }
        
        // Freeze controls during transition to prevent height issues
        const controlsPanel = document.querySelector('.controls-panel');
        if (controlsPanel) {
            // Store current dimensions
            const height = controlsPanel.offsetHeight;
            const width = controlsPanel.offsetWidth;
            
            // Lock dimensions during transition
            controlsPanel.style.height = `${height}px`;
            controlsPanel.style.width = `${width}px`;
            controlsPanel.style.overflow = 'hidden';
        }
        
        // Force reflow to apply transition blocking
        void document.body.offsetHeight;
        
        // Apply language change
        applyLanguage(newLang);
        localStorage.setItem('language', newLang);
        
        // Update language-specific UI
        updateMobileMenuText(newLang);
        updateLanguageAnnouncement(newLang);
        
        // Fix mobile-specific layout issues after language change
        fixMobileLayoutAfterLanguageChange(newLang);
        
        // Remove transition blocking and apply transition state
        setTimeout(() => {
            // Release dimensions on controls panel
            if (controlsPanel) {
                controlsPanel.style.height = '';
                controlsPanel.style.width = '';
                controlsPanel.style.overflow = '';
            }
            
            // If we weren't already in a theme transition, handle transition classes
            if (!isInThemeTransition) {
                document.body.classList.remove('theme-transition');
                document.body.classList.add('theme-transition-complete');
                
                // Clean up transition class
                setTimeout(() => {
                    document.body.classList.remove('theme-transition-complete');
                }, 500);
            }
        }, 100);
    });
    
    // ... existing touch event handling code ...
}

// Helper function to announce language changes to screen readers
function updateLanguageAnnouncement(lang) {
    const langIcon = document.getElementById('lang-icon');
    if (langIcon) {
        langIcon.className = `lang-indicator lang-${lang === 'en' ? 'ar' : 'en'}`;
        
        // Announce language change for screen readers
        const announcement = document.getElementById('language-announcement');
        if (announcement) {
            announcement.textContent = `Language changed to ${lang === 'en' ? 'English' : 'Arabic'}`;
        }
    }
}

// Fix mobile layout issues after language change
function fixMobileLayoutAfterLanguageChange(lang) {
    if (window.innerWidth <= 768) {
        // Force mobile layout recalculation
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
            // Force reflow
            void section.offsetHeight;
            section.style.display = '';
        });
        
        // Force RTL items to refresh direction
        const rtlSensitiveItems = document.querySelectorAll('.typed-text, .hero-content, .about-text, .project-info, .form-group');
        rtlSensitiveItems.forEach(item => {
            if (lang === 'ar') {
                item.style.textAlign = 'right';
                item.style.direction = 'rtl';
            } else {
                item.style.textAlign = '';
                item.style.direction = '';
            }
        });
        
        // Fix specifically the typed text in mobile RTL
        const typedText = document.querySelector('.typed-text');
        if (typedText) {
            if (lang === 'ar') {
                if (window.innerWidth <= 480) {
                    typedText.style.textAlign = 'center';
                } else {
                    typedText.style.textAlign = 'right';
                }
            } else {
                if (window.innerWidth <= 480) {
                    typedText.style.textAlign = 'center';
                } else {
                    typedText.style.textAlign = 'left';
                }
            }
        }
    }
}

// Enhance animations for RTL support
function resetAnimations() {
    // Reset any active animations
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach(el => {
        el.classList.remove('animate-in');
        void el.offsetWidth; // Force reflow
        el.classList.add('animate-in');
    });
    
    // Ensure RTL animations are correct
    const isRTL = document.documentElement.dir === 'rtl';
    const heroContentItems = document.querySelectorAll('.hero-content > *');
    
    heroContentItems.forEach(item => {
        if (isRTL) {
            // Apply RTL-specific animation offsets
            item.style.transformOrigin = 'right center';
        } else {
            // Reset to default LTR animations
            item.style.transformOrigin = '';
        }
    });
    
    // Fix RTL-specific issues on small screens
    if (isRTL && window.innerWidth <= 768) {
        // Center align text on very small screens
        if (window.innerWidth <= 480) {
            document.querySelectorAll('.hero-content h2, .hero-content p, .typed-text').forEach(el => {
                el.style.textAlign = 'center';
            });
        }
    }
}
