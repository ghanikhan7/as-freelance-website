// Smooth scroll animations on page load
document.addEventListener('DOMContentLoaded', function () {

    // Header scroll behavior
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add scroll animation observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('scroll-fade');
        observer.observe(section);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add hover animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add hover animation to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for hero orbs
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const scrolled = window.pageYOffset;
                const orbs = document.querySelectorAll('.gradient-orb');

                orbs.forEach((orb, index) => {
                    const speed = 0.3 + (index * 0.1);
                    orb.style.transform = `translateY(${scrolled * speed}px)`;
                });

                ticking = false;
            });

            ticking = true;
        }
    });

    // Add stagger animation to problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 * (index + 1)}s`;
    });

    // Add subtle animation to process steps
    const processSteps = document.querySelectorAll('.process-step');
    const processObserver = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });

    processSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'all 0.5s ease-out';
        processObserver.observe(step);
    });

    // Why items animation
    const whyItems = document.querySelectorAll('.why-item');
    const whyObserver = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, index * 100);
            }
        });
    }, { threshold: 0.3 });

    whyItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'all 0.5s ease-out';
        whyObserver.observe(item);
    });
});
