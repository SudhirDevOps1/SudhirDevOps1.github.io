// ==================== PORTFOLIO CONFIGURATION ====================
// Edit this file to customize your entire portfolio without touching any code!

const CONFIG = {
    // ==================== META & BRANDING ====================
    meta: {
        siteName: "Sudhir Kumar",
        siteTitle: "Sudhir Kumar | BCA Student & Full Stack Developer",
        logo: "SK",
        favicon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        description: "Professional portfolio of Sudhir Kumar - BCA Student, Full Stack Developer, Content Creator",
        keywords: "Sudhir Kumar, BCA, Web Developer, Portfolio, Full Stack Developer, Vlogger, Content Creator"
    },

    // ==================== THEME CONFIGURATION ====================
    theme: {
        primaryColor: "#00f5ff",
        secondaryColor: "#ff00ff",
        accentColor: "#ffff00",
        tertiaryColor: "#00ff88",
        darkBg: "#0a0a0f",
        lightBg: "#f0f4f8",
        cardDark: "rgba(20, 20, 35, 0.9)",
        cardLight: "rgba(255, 255, 255, 0.95)",
        defaultMode: "dark",
        particleColor1: "#00f5ff",
        particleColor2: "#ff00ff"
    },

    // ==================== HERO SECTION ====================
    hero: {
        greeting: "👋 Hello World, I'm",
        name: "Sudhir Kumar Singh",
        // Typing animation texts
        typingTexts: [
            "BCA Student",
            "Full Stack Developer",
            "UI/UX Designer",
            
            "Tech Enthusiast",
            "Freelancer",
            
        ],
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 2000,
        tagline: "Passionate about building innovative digital experiences with modern technologies. Transforming ideas into reality through code and creativity.",
        resumeLink: "https://drive.google.com/file/d/your-resume-id/view",
        resumeText: "Download Resume",
        backgroundVideo: "Pagal - SUNANDA SHARMA (HD VIdeo) ｜ Sonu Sood ｜ Latest Punjabi Song 2023 ｜ New Punjabi Song 2023.mp4", // Optional: Add video URL for background
        showParticles: true
    },

    // ==================== SOCIAL LINKS ====================
    socials: [
        { name: "GitHub", icon: "fab fa-github", url: "https://github.com/sudhirkumar", color: "#333" },
        { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://linkedin.com/in/sudhirkumar", color: "#0077b5" },
        { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/sudhirkumar", color: "#1da1f2" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/sudhirkumar", color: "#e4405f" },
        { name: "YouTube", icon: "fab fa-youtube", url: "https://youtube.com/@sudhirkumar", color: "#ff0000" },
        { name: "Discord", icon: "fab fa-discord", url: "https://discord.gg/sudhirkumar", color: "#5865f2" },
        { name: "Email", icon: "fas fa-envelope", url: "mailto:sudhir@example.com", color: "#00f5ff" }
    ],

    // ==================== ABOUT SECTION ====================
    about: {
        avatar: "https://sudhirdevops1.github.io/image.png",
        subtitle: "Who Am I?",
        bio: "I'm a passionate BCA student with a deep love for technology and innovation. Currently pursuing my Bachelor's in Computer Applications, I specialize in full-stack web development, creating responsive and dynamic web applications. My journey in tech started with curiosity and has evolved into a full-fledged passion for building digital solutions that make a difference.",
        bioExtended: "Beyond coding, I'm also a content creator and vlogger, sharing my tech journey with the world. I believe in continuous learning, community building, and staying updated with the latest technologies. When I'm not coding, you'll find me creating YouTube videos, exploring new frameworks, or contributing to open-source projects.",
        highlights: [
            { number: "25+", label: "Projects Completed", icon: "fas fa-project-diagram" },
            { number: "3+", label: "Years Experience", icon: "fas fa-clock" },
            { number: "15+", label: "Happy Clients", icon: "fas fa-smile" },
            { number: "50+", label: "GitHub Repos", icon: "fab fa-github" },
            { number: "10K+", label: "YouTube Subscribers", icon: "fab fa-youtube" },
            { number: "100+", label: "Blog Posts", icon: "fas fa-blog" }
        ],
        funFacts: [
            "☕ Powered by Coffee",
            "🎮 Gamer at Heart",
            "📚 Lifelong Learner",
            "🎵 Music Lover",
            "🎵 coder"

        ]
    },

    // ==================== SKILLS SECTION ====================
    skills: {
        title: "My Skills",
        subtitle: "Technologies I work with",
        categories: [
            {
                name: "Frontend Development /Full Stack",
                icon: "fas fa-code",
                skills: [
                    { name: "HTML5", percentage: 95, icon: "fab fa-html5", color: "#e34f26" },
                    { name: "CSS3/SASS", percentage: 90, icon: "fab fa-css3-alt", color: "#1572b6" },
                    { name: "JavaScript", percentage: 88, icon: "fab fa-js", color: "#f7df1e" },
                    { name: "React.js", percentage: 85, icon: "fab fa-react", color: "#61dafb" },
                    { name: "Vue.js", percentage: 75, icon: "fab fa-vuejs", color: "#4fc08d" },
                    { name: "Tailwind CSS", percentage: 90, icon: "fas fa-wind", color: "#38b2ac" }
                ]
            },
            {
                name: "Backend Development",
                icon: "fas fa-server",
                skills: [
                    { name: "Node.js", percentage: 82, icon: "fab fa-node-js", color: "#339933" },
                    { name: "Express.js", percentage: 80, icon: "fas fa-rocket", color: "#000000" },
                    { name: "Python", percentage: 75, icon: "fab fa-python", color: "#3776ab" },
                    { name: "PHP", percentage: 70, icon: "fab fa-php", color: "#777bb4" },
                    { name: "Java", percentage: 72, icon: "fab fa-java", color: "#007396" }
                ]
            },
            {
                name: "Database & Tools",
                icon: "fas fa-database",
                skills: [
                    { name: "MongoDB", percentage: 80, icon: "fas fa-leaf", color: "#47a248" },
                    { name: "MySQL", percentage: 78, icon: "fas fa-database", color: "#4479a1" },
                    { name: "Git/GitHub", percentage: 88, icon: "fab fa-git-alt", color: "#f05032" },
                    { name: "Docker", percentage: 65, icon: "fab fa-docker", color: "#2496ed" },
                    { name: "AWS", percentage: 60, icon: "fab fa-aws", color: "#ff9900" }
                ]
            },
            {
                name: "Design & Others",
                icon: "fas fa-palette",
                skills: [
                    { name: "Figma", percentage: 75, icon: "fab fa-figma", color: "#f24e1e" },
                    { name: "Photoshop", percentage: 70, icon: "fas fa-image", color: "#31a8ff" },
                    { name: "Video Editing", percentage: 80, icon: "fas fa-video", color: "#9999ff" },
                    { name: "UI/UX Design", percentage: 78, icon: "fas fa-pencil-ruler", color: "#ff6b6b" }
                ]
            }
        ]
    },

    // ==================== SERVICES SECTION ====================
    services: [
        {
            title: "Web Development",
            icon: "fas fa-laptop-code",
            description: "Building responsive, modern websites and web applications using cutting-edge technologies.",
            features: ["Custom Websites", "E-commerce Solutions", "Progressive Web Apps", "API Development"]
        },
        {
            title: "UI/UX Design",
            icon: "fas fa-paint-brush",
            description: "Creating intuitive and beautiful user interfaces with focus on user experience.",
            features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
        },
        {
            title: "Mobile Development",
            icon: "fas fa-mobile-alt",
            description: "Developing cross-platform mobile applications with React Native and Flutter.",
            features: ["iOS Apps", "Android Apps", "Cross-Platform", "App Store Deployment"]
        },
        {
            title: "Content Creation",
            icon: "fas fa-video",
            description: "Creating engaging tech content, tutorials, and vlogs for YouTube and social media.",
            features: ["Tech Tutorials", "Coding Vlogs", "Course Creation", "Live Streaming"]
        },
        {
            title: "Freelance Projects",
            icon: "fas fa-briefcase",
            description: "Taking on freelance projects for startups, businesses, and individuals.",
            features: ["Fixed Price Projects", "Hourly Consulting", "Long-term Contracts", "Maintenance"]
        },
        {
            title: "Tech Consultation",
            icon: "fas fa-lightbulb",
            description: "Providing technical guidance and consultation for your digital projects.",
            features: ["Tech Stack Selection", "Architecture Design", "Code Reviews", "Performance Optimization"]
        }
    ],

    // ==================== PROJECTS SECTION ====================
    projects: [
        {
            title: "E-Commerce Platform",
            category: "fullstack",
            description: "A full-featured online shopping platform with cart, checkout, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/ecommerce",
            codeUrl: "https://github.com/sudhirkumar/ecommerce",
            techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
            featured: true
        },
        {
            title: "Task Management App",
            category: "fullstack",
            description: "A collaborative task management tool with real-time updates, drag-and-drop, and team features.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/taskapp",
            codeUrl: "https://github.com/sudhirkumar/taskapp",
            techStack: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
            featured: true
        },
        {
            title: "Weather Dashboard",
            category: "frontend",
            description: "Real-time weather application with location-based forecasts, interactive maps, and alerts.",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/weather",
            codeUrl: "https://github.com/sudhirkumar/weather",
            techStack: ["JavaScript", "OpenWeather API", "Chart.js", "Mapbox"],
            featured: false
        },
        {
            title: "Portfolio Generator",
            category: "frontend",
            description: "A dynamic portfolio website generator that creates stunning portfolios from JSON configuration.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/portfolio",
            codeUrl: "https://github.com/sudhirkumar/portfolio",
            techStack: ["HTML", "CSS", "JavaScript", "Three.js", "GSAP"],
            featured: true
        },
        {
            title: "Chat Application",
            category: "fullstack",
            description: "Real-time messaging application with video calls, file sharing, and end-to-end encryption.",
            image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/chat",
            codeUrl: "https://github.com/sudhirkumar/chatapp",
            techStack: ["React", "Socket.io", "WebRTC", "Node.js", "MongoDB"],
            featured: false
        },
        {
            title: "Blog Platform",
            category: "fullstack",
            description: "A modern blogging platform with markdown support, categories, tags, and user authentication.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/blog",
            codeUrl: "https://github.com/sudhirkumar/blog",
            techStack: ["Next.js", "GraphQL", "PostgreSQL", "Prisma"],
            featured: false
        },
        {
            title: "Fitness Tracker",
            category: "mobile",
            description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/fitness",
            codeUrl: "https://github.com/sudhirkumar/fitness",
            techStack: ["React Native", "Firebase", "Redux", "Expo"],
            featured: false
        },
        {
            title: "AI Image Generator",
            category: "ai",
            description: "Web application that generates images using AI with various styles and customization options.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            liveUrl: "https://example.com/ai-art",
            codeUrl: "https://github.com/sudhirkumar/ai-art",
            techStack: ["Python", "Flask", "OpenAI API", "React"],
            featured: true
        }
    ],

    // ==================== BLOG/VLOG SECTION ====================
    vlogs: [
        {
            title: "My Journey as a BCA Student 🎓",
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            embedId: "dQw4w9WgXcQ",
            duration: "15:32",
            views: "25K",
            date: "2 days ago",
            category: "vlog",
            description: "Sharing my experience as a BCA student, tips for freshers, and how I manage coding with studies."
        },
        {
            title: "Building a Full Stack App in 24 Hours ⚡",
            thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=340&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            embedId: "dQw4w9WgXcQ",
            duration: "45:18",
            views: "50K",
            date: "1 week ago",
            category: "tutorial",
            description: "24-hour coding challenge where I build a complete full-stack application from scratch."
        },
        {
            title: "React vs Vue vs Angular - Which One? 🤔",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            embedId: "dQw4w9WgXcQ",
            duration: "22:45",
            views: "100K",
            date: "2 weeks ago",
            category: "tutorial",
            description: "Complete comparison of popular frontend frameworks with pros, cons, and when to use each."
        },
        {
            title: "My Desk Setup Tour 2024 🖥️",
            thumbnail: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&h=340&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            embedId: "dQw4w9WgXcQ",
            duration: "12:20",
            views: "35K",
            date: "3 weeks ago",
            category: "vlog",
            description: "Complete tour of my workspace, coding setup, and all the gear I use for development and content creation."
        },
        {
            title: "How I Learned to Code - Complete Roadmap 🗺️",
            thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=340&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            embedId: "dQw4w9WgXcQ",
            duration: "28:15",
            views: "200K",
            date: "1 month ago",
            category: "tutorial",
            description: "My complete programming journey and a roadmap for beginners to become full-stack developers."
        },
        {
            title: "Freelancing as a Student - My Story 💰",
            thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=340&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            embedId: "dQw4w9WgXcQ",
            duration: "18:40",
            views: "75K",
            date: "1 month ago",
            category: "vlog",
            description: "How I started freelancing during college, tips for getting clients, and managing projects."
        }
    ],

    // ==================== BLOG POSTS ====================
    blogPosts: [
        {
            title: "Getting Started with React Hooks",
            excerpt: "A comprehensive guide to understanding and implementing React Hooks in your applications.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
            date: "Jan 15, 2024",
            readTime: "8 min read",
            category: "React",
            url: "#"
        },
        {
            title: "Building RESTful APIs with Node.js",
            excerpt: "Learn how to create scalable and secure REST APIs using Node.js and Express.",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=300&fit=crop",
            date: "Jan 10, 2024",
            readTime: "12 min read",
            category: "Backend",
            url: "#"
        },
        {
            title: "CSS Grid vs Flexbox: When to Use What",
            excerpt: "Understanding the differences and use cases for CSS Grid and Flexbox layouts.",
            image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=300&fit=crop",
            date: "Jan 5, 2024",
            readTime: "6 min read",
            category: "CSS",
            url: "#"
        },
        {
            title: "My VS Code Setup for 2024",
            excerpt: "Complete guide to my Visual Studio Code configuration, extensions, and productivity tips.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
            date: "Dec 28, 2023",
            readTime: "10 min read",
            category: "Tools",
            url: "#"
        }
    ],

    // ==================== EXPERIENCE & EDUCATION ====================
    timeline: [
        {
            type: "education",
            title: "Bachelor of Computer Applications",
            organization: "Delhi University",
            period: "2022 - Present",
            description: "Currently pursuing BCA with specialization in Web Development and Software Engineering. Maintaining a CGPA of 8.5. Active member of the Coding Club.",
            icon: "fas fa-graduation-cap"
        },
        {
            type: "experience",
            title: "Full Stack Developer Intern",
            organization: "Tech Solutions Pvt Ltd",
            period: "Jun 2023 - Aug 2023",
            description: "Developed responsive web applications using React and Node.js. Collaborated with the design team to implement UI/UX improvements. Contributed to 5+ production projects.",
            icon: "fas fa-briefcase"
        },
        {
            type: "experience",
            title: "Freelance Web Developer",
            organization: "Self-Employed",
            period: "2021 - Present",
            description: "Building custom websites and web applications for clients worldwide. Specializing in e-commerce solutions, portfolio websites, and SaaS applications. 15+ satisfied clients.",
            icon: "fas fa-laptop-code"
        },
        {
            type: "achievement",
            title: "YouTube Channel - 10K Subscribers",
            organization: "Content Creation",
            period: "2023",
            description: "Started a tech YouTube channel sharing coding tutorials, vlogs, and tech reviews. Reached 10K subscribers milestone with 500K+ total views.",
            icon: "fab fa-youtube"
        },
        {
            type: "education",
            title: "Higher Secondary Education",
            organization: "ABC Public School",
            period: "2020 - 2022",
            description: "Completed 12th grade with Science stream (PCM + Computer Science). Scored 92% in board examinations. Won inter-school coding competition.",
            icon: "fas fa-school"
        },
        {
            type: "certification",
            title: "Full Stack Web Development",
            organization: "Udemy",
            period: "2022",
            description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and deployment strategies. Built 10+ projects during the course.",
            icon: "fas fa-certificate"
        },
        {
            type: "certification",
            title: "AWS Cloud Practitioner",
            organization: "Amazon Web Services",
            period: "2023",
            description: "Certified AWS Cloud Practitioner with foundational knowledge of AWS services, cloud concepts, security, and pricing.",
            icon: "fab fa-aws"
        }
    ],

    // ==================== ACHIEVEMENTS & CERTIFICATIONS ====================
    achievements: [
        {
            title: "Hackathon Winner",
            organization: "TechFest 2023",
            icon: "fas fa-trophy",
            description: "First place in 24-hour hackathon for building an innovative EdTech solution."
        },
        {
            title: "Open Source Contributor",
            organization: "GitHub",
            icon: "fab fa-github",
            description: "Contributed to 10+ open source projects with 500+ contributions."
        },
        {
            title: "Google Developer Student Club",
            organization: "GDSC Lead",
            icon: "fab fa-google",
            description: "Leading GDSC chapter at university, organizing workshops and events."
        },
        {
            title: "10K YouTube Subscribers",
            organization: "YouTube",
            icon: "fab fa-youtube",
            description: "Built a tech community of 10K+ subscribers sharing coding knowledge."
        }
    ],

    // ==================== TESTIMONIALS ====================
    testimonials: [
        {
            text: "Sudhir is an exceptional developer who delivered our e-commerce project on time and exceeded our expectations. His attention to detail and problem-solving skills are remarkable. Highly recommended for any web development project!",
            name: "Rahul Sharma",
            position: "CEO, TechStart India",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            text: "Working with Sudhir was a pleasure. He understood our requirements perfectly and created a stunning website that truly represents our brand. His communication and professionalism are top-notch!",
            name: "Priya Patel",
            position: "Marketing Manager, DesignHub",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            text: "Sudhir's technical skills and creativity are outstanding. He built our company dashboard with intuitive UI and powerful features. A true professional who goes above and beyond!",
            name: "Amit Kumar",
            position: "CTO, DataFlow Systems",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            text: "I've worked with many developers, but Sudhir stands out for his dedication and expertise. He transformed our outdated website into a modern, fast, and beautiful platform. Couldn't be happier!",
            name: "Sneha Gupta",
            position: "Founder, StyleCraft",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            rating: 5
        }
    ],

    // ==================== CONTACT SECTION ====================
    contact: {
        title: "Let's Connect",
        subtitle: "Have a project in mind? Let's talk!",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a website, mobile app, or just want to say hi, feel free to reach out!",
        email: "sudhir.kumar@example.com",
        phone: "+91 98765 43210",
        whatsapp: "+919876543210",
        location: "New Delhi, India",
        availability: "Available for Freelance",
        responseTime: "Usually responds within 24 hours",
        calendlyLink: "https://calendly.com/sudhirkumar",
        formspreeId: "your-formspree-id"
    },

    // ==================== FOOTER ====================
    footer: {
        copyright: "© 2024 Sudhir Kumar. All rights reserved.",
        tagline: "Built with ❤️ and lots of ☕",
        quickLinks: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" },
            { name: "Sitemap", url: "#" }
        ]
    },

    // ==================== NAVIGATION ====================
    navigation: [
        { name: "Home", href: "#home", icon: "fas fa-home" },
        { name: "About", href: "#about", icon: "fas fa-user" },
        { name: "Skills", href: "#skills", icon: "fas fa-code" },
        { name: "Services", href: "#services", icon: "fas fa-concierge-bell" },
        { name: "Projects", href: "#projects", icon: "fas fa-project-diagram" },
        { name: "Vlogs", href: "#vlogs", icon: "fas fa-video" },
        { name: "Experience", href: "#experience", icon: "fas fa-briefcase" },
        { name: "Testimonials", href: "#testimonials", icon: "fas fa-quote-left" },
        { name: "Contact", href: "#contact", icon: "fas fa-envelope" }
    ],

    // ==================== ANIMATIONS CONFIG ====================
    animations: {
        enableParticles: true,
        enableCursor: true,
        enableParallax: true,
        enableScrollAnimations: true,
        particleCount: 2000,
        scrollAnimationDuration: 0.8,
        typingCursor: "|"
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}


