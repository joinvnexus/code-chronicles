    // Initialize AOS (Animate on Scroll)
        AOS.init({
            duration: 800, // animation duration
            once: true,    // animation happens only once
        });

        // Initialize Feather Icons
        feather.replace();

        // Initialize Swiper
        var swiper = new Swiper(".testimonialsSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });

        // Initialize GSAP with ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animate elements on scroll with GSAP
        gsap.utils.toArray('.step-card, .feature-item, .feature-image').forEach(item => {
            gsap.fromTo(item, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // --- Interactive JS Features ---

        // 1. Sticky Header on Scroll
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Show/hide back to top button
            const backToTop = document.getElementById('back-to-top');
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // 2. Mobile Navigation Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile nav when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if(navLinks.classList.contains('active')) {
                   navLinks.classList.remove('active');
                   menuToggle.classList.remove('open');
                }
            });
        });

        // 3. Modal Control
        const modalOverlay = document.getElementById('signup-modal');
        const signupTriggers = document.querySelectorAll('.signup-trigger');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const formTabs = document.querySelectorAll('.form-tab');
        const formContainers = document.querySelectorAll('.form-container');

        // Form tabs functionality
        formTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                // Update active tab
                formTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding form
                formContainers.forEach(container => {
                    container.classList.remove('active');
                    if (container.id === `${tabId}-form`) {
                        container.classList.add('active');
                    }
                });
            });
        });

        // Open modal
        signupTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        // Close modal
        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
            
            // Reset forms
            loginForm.reset();
            signupForm.reset();
            
            // Remove error states
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
        }
        
        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        

        // Form submission with loading state
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (validateForm(loginForm)) {
                const loader = document.getElementById('login-loader');
                const submitBtn = loginForm.querySelector('button[type="submit"]');
                
                // Show loading state
                loader.style.display = 'inline-block';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    loader.style.display = 'none';
                    submitBtn.disabled = false;
                    alert('Firebase integration needed! Login successful.');
                    closeModal();
                }, 1500);
            }
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (validateForm(signupForm)) {
                const loader = document.getElementById('signup-loader');
                const submitBtn = signupForm.querySelector('button[type="submit"]');
                
                // Show loading state
                loader.style.display = 'inline-block';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    loader.style.display = 'none';
                    submitBtn.disabled = false;
                    alert('Firebase integration needed! Account created successfully.');
                    closeModal();
                }, 1500);
            }
        });

        // Back to top functionality
        document.getElementById('back-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) { // Check if themeToggle exists
            const themeIcon = themeToggle.querySelector('i');
            
            // Check for saved theme preference or respect OS preference
            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            if (savedTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                if (themeIcon) themeIcon.setAttribute('data-feather', 'sun');
            } else {
                document.documentElement.removeAttribute('data-theme');
                if (themeIcon) themeIcon.setAttribute('data-feather', 'moon');
            }
            feather.replace();
            
            themeToggle.addEventListener('click', () => {
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    document.documentElement.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'light');
                    if (themeIcon) themeIcon.setAttribute('data-feather', 'moon');
                } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    if (themeIcon) themeIcon.setAttribute('data-feather', 'sun');
                }
                feather.replace();
            });
        }

        // Input focus effects
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });

        // Add ripple effect to buttons
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const x = e.pageX - this.offsetLeft;
                const y = e.pageY - this.offsetTop;
                
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });