// JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
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
    });
});

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
