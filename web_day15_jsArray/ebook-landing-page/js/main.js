// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero text animation
gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out"
});

// Feature cards animation
gsap.utils.toArray(".feature-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: i * 0.1
  });
});

// Testimonial animation
gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 70%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2
});

// Hover effects for buttons
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3
    });
  });
  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.3
    });
  });
});

// Star rating hover effects
document.querySelectorAll(".stars").forEach(stars => {
  stars.addEventListener("mouseenter", () => {
    gsap.fromTo(stars.querySelectorAll("svg"), 
      { scale: 1 },
      { 
        scale: 1.2,
        duration: 0.3,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      }
    );
  });
});