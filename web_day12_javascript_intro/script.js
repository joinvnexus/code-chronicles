// Toggle mobile menu
        document.getElementById('mobileMenuButton').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('open');
        });
        
        // Toggle user dropdown
        const userMenu = document.querySelector('.user-menu');
        const dropdownMenu = document.querySelector('.user-menu + .absolute');
        
        userMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (!userMenu.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('#mobileMenu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobileMenu').classList.remove('open');
            });
        });



        //servies section js 

               // Simple animation for cards when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const animateCards = document.querySelectorAll('.animate-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            }, { threshold: 0.1 });
            
            animateCards.forEach(card => {
                observer.observe(card);
            });
        });


        // about section js 

          // Simple animation for counter elements
        document.addEventListener('DOMContentLoaded', function() {
            const counterItems = document.querySelectorAll('.counter-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            }, { threshold: 0.1 });
            
            counterItems.forEach(item => {
                item.style.opacity = "0";
                item.style.transform = "translateY(20px)";
                item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                observer.observe(item);
            });
            
            // Initialize progress bars
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                bar.style.setProperty('--progress', bar.getAttribute('data-progress'));
            });
        });


        // protfolio section js

          // Portfolio item click event
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const title = this.querySelector('h3')?.textContent || '';
                const subtitle = this.querySelector('p')?.textContent || '';
                
                document.getElementById('modal-image').src = imgSrc;
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-subtitle').textContent = subtitle;
                
                // Add sample description
                const descriptions = {
                    "E-commerce": "A comprehensive e-commerce platform developed for a leading retail brand. Features include product management, cart functionality, secure payment processing, and order tracking.",
                    "Web Design": "A complete redesign of a corporate website focusing on user experience and modern aesthetics. The design emphasizes brand identity and conversion optimization.",
                    "Web Development": "Custom web application built with React and Node.js for a financial services company. The application handles complex data processing and visualization.",
                    "Logo Design": "Brand identity creation for a tech startup, including logo design, color palette, and brand guidelines for consistent visual communication.",
                    "Winter Collection": "Marketing campaign for a fashion brand's winter collection. Included website design, social media assets, and promotional materials."
                };
                
                document.getElementById('modal-description').textContent = descriptions[title] || "Project details coming soon.";
                
                document.querySelector('.portfolio-modal').classList.add('active');
            });
        });
        
        // Close modal
        document.querySelector('.portfolio-modal button').addEventListener('click', function() {
            document.querySelector('.portfolio-modal').classList.remove('active');
        });
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
            });
        });
        
        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            portfolioItems.forEach((item, index) => {
                item.style.opacity = "0";
                item.style.transform = "translateY(20px)";
                item.style.animationDelay = `${index * 0.1}s`;
                
                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                }, 100);
            });
        });