// ==================== MAIN APPLICATION ====================
// This file handles all the interactive functionality

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    onReady() {
        this.applyThemeColors();
        this.populateContent();
        this.initLoader();
        this.init3DBackground();
        this.initCursor();
        this.initNavigation();
        this.initThemeToggle();
        this.initTypingAnimation();
        this.initScrollAnimations();
        this.initTestimonialSlider();
        this.initProjectFilter();
        this.initVlogFilter();
        this.initVideoModal();
        this.initContactForm();
        this.initBackToTop();
        this.initParallax();
        this.init3DTiltEffect();
    }

    // ==================== APPLY THEME COLORS ====================
    applyThemeColors() {
        const root = document.documentElement;
        root.style.setProperty('--primary', CONFIG.theme.primaryColor);
        root.style.setProperty('--secondary', CONFIG.theme.secondaryColor);
        root.style.setProperty('--accent', CONFIG.theme.accentColor);
        root.style.setProperty('--tertiary', CONFIG.theme.tertiaryColor);
        root.style.setProperty('--bg-dark', CONFIG.theme.darkBg);
        root.style.setProperty('--bg-light', CONFIG.theme.lightBg);

        if (CONFIG.theme.defaultMode === 'light') {
            document.body.classList.add('light-mode');
        }

        // Set favicon
        if (CONFIG.meta.favicon) {
            const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
            favicon.rel = 'icon';
            favicon.href = CONFIG.meta.favicon;
            document.head.appendChild(favicon);
        }
    }

    // ==================== POPULATE CONTENT ====================
    populateContent() {
        // Meta
        document.title = CONFIG.meta.siteTitle;
        document.querySelector('meta[name="description"]')?.setAttribute('content', CONFIG.meta.description);
        document.querySelector('meta[name="keywords"]')?.setAttribute('content', CONFIG.meta.keywords);

        // Navigation
        this.populateNavigation();

        // Hero
        this.populateHero();

        // About
        this.populateAbout();

        // Skills
        this.populateSkills();

        // Services
        this.populateServices();

        // Projects
        this.populateProjects();

        // Vlogs
        this.populateVlogs();

        // Timeline
        this.populateTimeline();

        // Achievements
        this.populateAchievements();

        // Testimonials
        this.populateTestimonials();

        // Contact
        this.populateContact();

        // Footer
        this.populateFooter();
    }

    populateNavigation() {
        const navLogo = document.getElementById('nav-logo');
        const navLinks = document.getElementById('nav-links');

        if (navLogo) navLogo.textContent = CONFIG.meta.logo;

        if (navLinks) {
            navLinks.innerHTML = CONFIG.navigation.map(item => `
                <li>
                    <a href="${item.href}" class="${item.href === '#home' ? 'active' : ''}">
                        <i class="${item.icon}"></i>
                        ${item.name}
                    </a>
                </li>
            `).join('');
        }
    }

    populateHero() {
        const elements = {
            greeting: document.getElementById('hero-greeting'),
            name: document.getElementById('hero-name'),
            tagline: document.getElementById('hero-tagline'),
            resumeBtn: document.getElementById('resume-btn'),
            socialLinks: document.getElementById('social-links')
        };

        if (elements.greeting) elements.greeting.textContent = CONFIG.hero.greeting;
        if (elements.name) {
            elements.name.textContent = CONFIG.hero.name;
            elements.name.setAttribute('data-text', CONFIG.hero.name);
        }
        if (elements.tagline) elements.tagline.textContent = CONFIG.hero.tagline;
        if (elements.resumeBtn) {
            elements.resumeBtn.href = CONFIG.hero.resumeLink;
            elements.resumeBtn.innerHTML = `<i class="fas fa-download"></i> ${CONFIG.hero.resumeText}`;
        }

        if (elements.socialLinks) {
            elements.socialLinks.innerHTML = CONFIG.socials.map(social => `
                <a href="${social.url}" class="social-link" target="_blank" rel="noopener" title="${social.name}">
                    <i class="${social.icon}"></i>
                </a>
            `).join('');
        }
    }

    populateAbout() {
        const avatar = document.getElementById('about-avatar');
        const subtitle = document.getElementById('about-subtitle');
        const bio = document.getElementById('about-bio');
        const bioExtended = document.getElementById('about-bio-extended');
        const funFacts = document.getElementById('fun-facts');
        const highlights = document.getElementById('about-highlights');

        if (avatar) avatar.src = CONFIG.about.avatar;
        if (subtitle) subtitle.textContent = CONFIG.about.subtitle;
        if (bio) bio.textContent = CONFIG.about.bio;
        if (bioExtended) bioExtended.textContent = CONFIG.about.bioExtended;

        if (funFacts) {
            funFacts.innerHTML = CONFIG.about.funFacts.map(fact => `
                <span class="fun-fact">${fact}</span>
            `).join('');
        }

        if (highlights) {
            highlights.innerHTML = CONFIG.about.highlights.map(h => `
                <div class="highlight-item">
                    <div class="highlight-icon"><i class="${h.icon}"></i></div>
                    <div class="highlight-number" data-target="${parseInt(h.number)}">${h.number}</div>
                    <div class="highlight-label">${h.label}</div>
                </div>
            `).join('');
        }
    }

    populateSkills() {
        const container = document.getElementById('skills-categories');
        if (!container) return;

        container.innerHTML = CONFIG.skills.categories.map(category => `
            <div class="skill-category">
                <div class="category-header">
                    <div class="category-icon"><i class="${category.icon}"></i></div>
                    <h3 class="category-title">${category.name}</h3>
                </div>
                <div class="skills-grid">
                    ${category.skills.map(skill => `
                        <div class="skill-item" data-percentage="${skill.percentage}">
                            <div class="skill-circle">
                                <svg width="100" height="100">
                                    <circle class="bg" cx="50" cy="50" r="45"></circle>
                                    <circle class="progress" cx="50" cy="50" r="45" 
                                        style="stroke: ${skill.color}"></circle>
                                </svg>
                                <i class="${skill.icon} skill-icon-center" style="color: ${skill.color}"></i>
                                <span class="skill-percentage">${skill.percentage}%</span>
                            </div>
                            <div class="skill-name">${skill.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    populateServices() {
        const container = document.getElementById('services-grid');
        if (!container) return;

        container.innerHTML = CONFIG.services.map(service => `
            <div class="service-card">
                <div class="service-icon"><i class="${service.icon}"></i></div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
                <ul class="service-features">
                    ${service.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    populateProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = CONFIG.projects.map(project => `
            <div class="project-card ${project.featured ? 'featured' : ''}" data-category="${project.category}">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.liveUrl}" class="project-link live" target="_blank" rel="noopener">
                                <i class="fas fa-external-link-alt"></i> Live
                            </a>
                            <a href="${project.codeUrl}" class="project-link code" target="_blank" rel="noopener">
                                <i class="fab fa-github"></i> Code
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">
                        ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    populateVlogs() {
        const container = document.getElementById('vlogs-grid');
        const blogContainer = document.getElementById('blog-grid');

        if (container) {
            container.innerHTML = CONFIG.vlogs.map(vlog => `
                <div class="vlog-card" data-category="${vlog.category}">
                    <div class="vlog-thumbnail">
                        <img src="${vlog.thumbnail}" alt="${vlog.title}" loading="lazy">
                        <div class="vlog-play-btn" data-video="${vlog.embedId}">
                            <i class="fas fa-play"></i>
                        </div>
                        <span class="vlog-duration">${vlog.duration}</span>
                        <span class="vlog-category-tag">${vlog.category}</span>
                    </div>
                    <div class="vlog-content">
                        <h3 class="vlog-title">${vlog.title}</h3>
                        <p class="vlog-desc">${vlog.description}</p>
                        <div class="vlog-meta">
                            <span><i class="fas fa-eye"></i> ${vlog.views} views</span>
                            <span><i class="fas fa-clock"></i> ${vlog.date}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        if (blogContainer) {
            blogContainer.innerHTML = CONFIG.blogPosts.map(post => `
                <a href="${post.url}" class="blog-card">
                    <div class="blog-image">
                        <img src="${post.image}" alt="${post.title}" loading="lazy">
                    </div>
                    <div class="blog-content">
                        <span class="blog-category">${post.category}</span>
                        <h4 class="blog-title">${post.title}</h4>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <div class="blog-meta">
                            <span>${post.date}</span>
                            <span>${post.readTime}</span>
                        </div>
                    </div>
                </a>
            `).join('');
        }
    }

    populateTimeline() {
        const container = document.getElementById('timeline-container');
        if (!container) return;

        container.innerHTML = CONFIG.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-date">${item.period}</div>
                    <h3 class="timeline-title">${item.title}</h3>
                    <div class="timeline-org">${item.organization}</div>
                    <p class="timeline-desc">${item.description}</p>
                </div>
                <div class="timeline-dot"><i class="${item.icon}"></i></div>
            </div>
        `).join('');
    }

    populateAchievements() {
        const container = document.getElementById('achievements-grid');
        if (!container) return;

        container.innerHTML = CONFIG.achievements.map(achievement => `
            <div class="achievement-card">
                <div class="achievement-icon"><i class="${achievement.icon}"></i></div>
                <h4 class="achievement-title">${achievement.title}</h4>
                <div class="achievement-org">${achievement.organization}</div>
                <p class="achievement-desc">${achievement.description}</p>
            </div>
        `).join('');
    }

    populateTestimonials() {
        const slider = document.getElementById('testimonial-slider');
        const nav = document.getElementById('testimonial-nav');

        if (slider) {
            slider.innerHTML = CONFIG.testimonials.map(t => `
                <div class="testimonial-item">
                    <div class="testimonial-content">
                        <div class="testimonial-rating">
                            ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
                        </div>
                        <p class="testimonial-text">${t.text}</p>
                        <div class="testimonial-author">
                            <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy">
                            <div class="testimonial-info">
                                <h4>${t.name}</h4>
                                <span>${t.position}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        if (nav) {
            nav.innerHTML = CONFIG.testimonials.map((_, i) => `
                <button class="${i === 0 ? 'active' : ''}" data-index="${i}"></button>
            `).join('');
        }
    }

    populateContact() {
        const info = document.getElementById('contact-info');
        if (!info) return;

        info.innerHTML = `
            <h3>${CONFIG.contact.title}</h3>
            <p>${CONFIG.contact.description}</p>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <div class="contact-details">
                    <span>Email</span>
                    <a href="mailto:${CONFIG.contact.email}">${CONFIG.contact.email}</a>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-phone"></i></div>
                <div class="contact-details">
                    <span>Phone</span>
                    <a href="tel:${CONFIG.contact.phone.replace(/\s/g, '')}">${CONFIG.contact.phone}</a>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
                <div class="contact-details">
                    <span>WhatsApp</span>
                    <a href="https://wa.me/${CONFIG.contact.whatsapp}" target="_blank">Chat on WhatsApp</a>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="contact-details">
                    <span>Location</span>
                    <span>${CONFIG.contact.location}</span>
                </div>
            </div>
            <div class="availability-badge">
                <span class="availability-dot"></span>
                ${CONFIG.contact.availability}
            </div>
        `;
    }

    populateFooter() {
        const footerName = document.getElementById('footer-name');
        const footerSocials = document.getElementById('footer-socials');
        const footerLinks = document.getElementById('footer-quick-links');

        if (footerName) footerName.textContent = CONFIG.meta.siteName;

        if (footerSocials) {
            footerSocials.innerHTML = CONFIG.socials.slice(0, 6).map(social => `
                <a href="${social.url}" class="social-link" target="_blank" rel="noopener" title="${social.name}">
                    <i class="${social.icon}"></i>
                </a>
            `).join('');
        }

        if (footerLinks) {
            footerLinks.innerHTML = CONFIG.footer.quickLinks.map(link => `
                <li><a href="${link.url}"><i class="fas fa-chevron-right"></i> ${link.name}</a></li>
            `).join('');
        }
    }

    // ==================== LOADER ====================
    initLoader() {
        const loader = document.querySelector('.loader');
        const progressBar = document.querySelector('.loader-progress-bar');

        if (progressBar) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }
                progressBar.style.width = progress + '%';
            }, 200);
        }

        window.addEventListener('load', () => {
            setTimeout(() => {
                if (loader) loader.classList.add('hidden');
                this.animateHero();
            }, 1800);
        });
    }

    // ==================== 3D BACKGROUND ====================
    init3DBackground() {
        if (!CONFIG.animations.enableParticles) return;

        const canvas = document.getElementById('hero-canvas');
        if (!canvas || typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = CONFIG.animations.particleCount || 2000;
        const posArray = new Float32Array(particlesCount * 3);
        const colorArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            posArray[i] = (Math.random() - 0.5) * 12;
            posArray[i + 1] = (Math.random() - 0.5) * 12;
            posArray[i + 2] = (Math.random() - 0.5) * 12;

            const t = Math.random();
            colorArray[i] = t * 0 + (1 - t) * 1;
            colorArray[i + 1] = t * 0.96 + (1 - t) * 0;
            colorArray[i + 2] = t * 1 + (1 - t) * 1;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Wave
        const waveGeometry = new THREE.PlaneGeometry(20, 20, 60, 60);
        const waveMaterial = new THREE.MeshBasicMaterial({
            color: 0x00f5ff,
            wireframe: true,
            transparent: true,
            opacity: 0.12
        });
        const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
        waveMesh.rotation.x = -Math.PI / 2;
        waveMesh.position.y = -3;
        scene.add(waveMesh);

        // Floating shapes
        const shapes = [];
        const shapeGeometries = [
            new THREE.IcosahedronGeometry(0.3, 0),
            new THREE.OctahedronGeometry(0.3, 0),
            new THREE.TetrahedronGeometry(0.3, 0)
        ];

        for (let i = 0; i < 8; i++) {
            const geo = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
            const mat = new THREE.MeshBasicMaterial({
                color: Math.random() > 0.5 ? 0x00f5ff : 0xff00ff,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            );
            mesh.userData = {
                rotationSpeed: Math.random() * 0.02,
                floatSpeed: Math.random() * 0.005,
                floatOffset: Math.random() * Math.PI * 2
            };
            shapes.push(mesh);
            scene.add(mesh);
        }

        camera.position.z = 4;

        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        });

        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();

            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x = mouseY * 0.1;

            // Animate wave
            const positions = waveGeometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const z = positions[i + 2];
                positions[i + 1] = Math.sin(x * 0.5 + elapsedTime) * 0.4 + Math.sin(z * 0.5 + elapsedTime * 0.7) * 0.3;
            }
            waveGeometry.attributes.position.needsUpdate = true;

            // Animate shapes
            shapes.forEach(shape => {
                shape.rotation.x += shape.userData.rotationSpeed;
                shape.rotation.y += shape.userData.rotationSpeed * 0.7;
                shape.position.y += Math.sin(elapsedTime * shape.userData.floatSpeed * 100 + shape.userData.floatOffset) * 0.002;
            });

            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.03;
            camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.03;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // ==================== CUSTOM CURSOR ====================
    initCursor() {
        if (!CONFIG.animations.enableCursor || window.innerWidth < 768) return;

        const cursor = document.querySelector('.cursor');
        const cursorDot = document.querySelector('.cursor-dot');

        if (!cursor || !cursorDot) return;

        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;

        document.addEventListener('mousemove', (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
        });

        const animateCursor = () => {
            dotX += (cursorX - dotX) * 0.2;
            dotY += (cursorY - dotY) * 0.2;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .service-card, .vlog-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        document.addEventListener('mousedown', () => cursor.classList.add('click'));
        document.addEventListener('mouseup', () => cursor.classList.remove('click'));
    }

    // ==================== NAVIGATION ====================
    initNavigation() {
        const nav = document.querySelector('.nav');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');
        const navLinksItems = navLinks?.querySelectorAll('a');

        // Mobile menu
        mobileMenuBtn?.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks?.classList.toggle('active');
            document.body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on link click
        navLinksItems?.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn?.classList.remove('active');
                navLinks?.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Scroll effects
        window.addEventListener('scroll', () => {
            // Nav background
            if (window.scrollY > 100) {
                nav?.classList.add('scrolled');
            } else {
                nav?.classList.remove('scrolled');
            }

            // Active section highlighting
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinksItems?.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ==================== THEME TOGGLE ====================
    initThemeToggle() {
        const toggle = document.getElementById('theme-toggle');
        toggle?.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        } else if (savedTheme === 'dark') {
            document.body.classList.remove('light-mode');
        }
    }

    // ==================== TYPING ANIMATION ====================
    initTypingAnimation() {
        const element = document.getElementById('typing-text');
        if (!element) return;

        const texts = CONFIG.hero.typingTexts;
        const typingSpeed = CONFIG.hero.typingSpeed;
        const deletingSpeed = CONFIG.hero.deletingSpeed;
        const pauseTime = CONFIG.hero.pauseTime;

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = texts[textIndex];

            if (isDeleting) {
                element.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                element.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let timeout = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentText.length) {
                timeout = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                timeout = 500;
            }

            setTimeout(type, timeout);
        };

        // Start typing after hero animation
        setTimeout(type, 2500);
    }

    // ==================== HERO ANIMATION ====================
    animateHero() {
        if (typeof gsap === 'undefined') return;

        const tl = gsap.timeline();

        tl.to('.hero-greeting', { opacity: 1, y: 0, duration: 0.6 })
            .to('.hero-name', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
            .to('.hero-title', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
            .to('.hero-tagline', { opacity: 0.8, y: 0, duration: 0.6 }, '-=0.3')
            .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
            .to('.social-links', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');
    }

    // ==================== SCROLL ANIMATIONS ====================
    initScrollAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        if (!CONFIG.animations.enableScrollAnimations) return;

        gsap.registerPlugin(ScrollTrigger);

        // Section titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%'
                }
            });
        });

        // Skill circles
        gsap.utils.toArray('.skill-item').forEach(item => {
            const circle = item.querySelector('.progress');
            const percentage = parseInt(item.dataset.percentage);
            const offset = 283 - (283 * percentage / 100);

            gsap.to(circle, {
                strokeDashoffset: offset,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%'
                }
            });
        });

        // Cards stagger
        const cardGroups = ['.project-card', '.service-card', '.vlog-card', '.blog-card', '.achievement-card'];
        cardGroups.forEach(selector => {
            gsap.utils.toArray(selector).forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 80,
                    duration: 0.6,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%'
                    }
                });
            });
        });

        // Timeline items
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80,
                duration: 0.8,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%'
                }
            });
        });

        // About section
        gsap.from('.avatar-container', {
            opacity: 0,
            scale: 0.5,
            rotation: -180,
            duration: 1.2,
            scrollTrigger: {
                trigger: '#about',
                start: 'top 65%'
            }
        });

        gsap.from('.about-content', {
            opacity: 0,
            x: 80,
            duration: 1,
            scrollTrigger: {
                trigger: '#about',
                start: 'top 65%'
            }
        });

        // Counter animation
        gsap.utils.toArray('.highlight-number').forEach(num => {
            const target = parseInt(num.dataset.target) || parseInt(num.textContent);
            const suffix = num.textContent.replace(/[0-9]/g, '');

            gsap.from(num, {
                textContent: 0,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: num,
                    start: 'top 85%'
                },
                onUpdate: function () {
                    num.textContent = Math.ceil(num.textContent) + suffix;
                }
            });
        });
    }

    // ==================== TESTIMONIAL SLIDER ====================
    initTestimonialSlider() {
        const slider = document.getElementById('testimonial-slider');
        const navButtons = document.querySelectorAll('#testimonial-nav button');
        if (!slider || !navButtons.length) return;

        let currentIndex = 0;
        const totalSlides = CONFIG.testimonials.length;

        const goToSlide = (index) => {
            currentIndex = index;
            slider.style.transform = `translateX(-${index * 100}%)`;
            navButtons.forEach((btn, i) => {
                btn.classList.toggle('active', i === index);
            });
        };

        navButtons.forEach(btn => {
            btn.addEventListener('click', () => goToSlide(parseInt(btn.dataset.index)));
        });

        // Auto-slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        }, 5000);
    }

    // ==================== PROJECT FILTER ====================
    initProjectFilter() {
        const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
        const projects = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                projects.forEach(project => {
                    if (filter === 'all' || project.dataset.category === filter) {
                        project.style.display = '';
                        gsap.from(project, { opacity: 0, y: 30, duration: 0.4 });
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    }

    // ==================== VLOG FILTER ====================
    initVlogFilter() {
        const filterBtns = document.querySelectorAll('.vlogs-filter .filter-btn');
        const vlogs = document.querySelectorAll('.vlog-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                vlogs.forEach(vlog => {
                    if (filter === 'all' || vlog.dataset.category === filter) {
                        vlog.style.display = '';
                        gsap.from(vlog, { opacity: 0, y: 30, duration: 0.4 });
                    } else {
                        vlog.style.display = 'none';
                    }
                });
            });
        });
    }

    // ==================== VIDEO MODAL ====================
    initVideoModal() {
        const modal = document.getElementById('video-modal');
        const modalContent = modal?.querySelector('.video-modal-content');
        const closeBtn = modal?.querySelector('.video-modal-close');

        document.querySelectorAll('.vlog-play-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const videoId = btn.dataset.video;
                if (modal && modalContent) {
                    modalContent.innerHTML = `
                        <button class="video-modal-close"><i class="fas fa-times"></i></button>
                        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    `;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';

                    modal.querySelector('.video-modal-close')?.addEventListener('click', closeModal);
                }
            });
        });

        const closeModal = () => {
            if (modal) {
                modal.classList.remove('active');
                if (modalContent) modalContent.innerHTML = '';
                document.body.style.overflow = '';
            }
        };

        modal?.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // ==================== CONTACT FORM ====================
    initContactForm() {
        const form = document.getElementById('contact-form');
        form?.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = form.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            // Simulate sending
            await new Promise(resolve => setTimeout(resolve, 2000));

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #00ff88, #00f5ff)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);

            console.log('Form submitted:', data);
        });
    }

    // ==================== BACK TO TOP ====================
    initBackToTop() {
        const btn = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                btn?.classList.add('visible');
            } else {
                btn?.classList.remove('visible');
            }
        });

        btn?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==================== PARALLAX ====================
    initParallax() {
        if (!CONFIG.animations.enableParallax) return;

        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

            gsap.to('.hero-content', {
                x: moveX * 3,
                y: moveY * 3,
                duration: 0.5
            });
        });
    }

    // ==================== 3D TILT EFFECT ====================
    init3DTiltEffect() {
        const cards = document.querySelectorAll('.project-card, .service-card, .vlog-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }
}

// Initialize the app
new PortfolioApp();
