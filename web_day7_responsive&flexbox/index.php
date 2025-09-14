<?php
/*
Template Name: Universal Contact Page
Description: Fully responsive contact page with interactive UI/UX elements
*/
get_header(); ?>

<?php
// Get theme colors from customizer or use defaults
$primary_color = get_theme_mod('primary_color', '#2563eb');
$primary_dark = get_theme_mod('primary_dark', '#1e40af');
$secondary_color = get_theme_mod('secondary_color', '#f59e0b');
?>

<style>
:root {
  /* Dynamic colors from WordPress customizer */
  --primary: <?php echo esc_attr($primary_color); ?>;
  --primary-dark: <?php echo esc_attr($primary_dark); ?>;
  --secondary: <?php echo esc_attr($secondary_color); ?>;
  
  /* System colors */
  --gray-light: #f3f4f6;
  --gray-medium: #d1d5db;
  --gray-dark: #6b7280;
  --white: #ffffff;
  --black: #111827;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-xxl: 3rem;
  
  /* Typography */
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  /* Transitions */
  --transition-fast: all 0.15s ease;
  --transition: all 0.3s ease;
  --transition-slow: all 0.5s ease;
}

/* Base Styles */
.contact-container {
  width: 100%;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--black);
  -webkit-font-smoothing: antialiased;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: var(--white);
  padding: var(--space-xxl) var(--space-md);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==');
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-md);
  font-weight: 800;
}

.hero-subtitle {
  font-size: var(--text-xl);
  margin-bottom: 0;
  opacity: 0.9;
}

/* Section Styles */
.section {
  padding: var(--space-xxl) var(--space-md);
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-lg);
  position: relative;
  display: inline-block;
  font-weight: 700;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--secondary);
  border-radius: 2px;
}

.section-description {
  font-size: var(--text-lg);
  margin-bottom: var(--space-xl);
  color: var(--gray-dark);
  max-width: 800px;
}

/* Contact Form */
.contact-form-container {
  background: var(--white);
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.contact-form-container:hover {
  box-shadow: var(--shadow-lg);
}

/* Interactive Map */
.map-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin: var(--space-xl) 0;
  transition: var(--transition);
}

.map-container:hover {
  box-shadow: var(--shadow-lg);
}

.map-container iframe {
  width: 100%;
  height: 400px;
  border: none;
}

/* Team Grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.team-card {
  background: var(--white);
  border-radius: 12px;
  padding: var(--space-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.team-card h4 {
  color: var(--primary);
  margin-bottom: var(--space-md);
  font-size: var(--text-xl);
  font-weight: 600;
}

.team-card p {
  color: var(--gray-dark);
  margin-bottom: var(--space-sm);
  flex-grow: 1;
}

.team-card .contact-method {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

/* FAQ Accordion */
.faq-container {
  margin-top: var(--space-lg);
}

.faq-item {
  cursor: pointer;
  border-bottom: 1px solid var(--gray-medium);
  padding: var(--space-md) 0;
  transition: var(--transition);
}

.faq-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.faq-question {
  font-weight: 600;
  font-size: var(--text-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
}

.faq-question::after {
  content: '+';
  font-size: var(--text-2xl);
  transition: var(--transition);
  flex-shrink: 0;
}

.faq-item.active .faq-question::after {
  content: '-';
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
  color: var(--gray-dark);
  line-height: 1.7;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding-top: var(--space-md);
}

/* Social Links */
.social-container {
  margin-top: var(--space-lg);
}

.social-links {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--gray-light);
  color: var(--primary);
  transition: var(--transition);
  text-decoration: none;
}

.social-link:hover {
  background: var(--primary);
  color: var(--white);
  transform: translateY(-3px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

/* Newsletter Form */
.newsletter-container {
  margin-top: var(--space-lg);
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin-top: var(--space-md);
  width: 100%;
}

.newsletter-input {
  flex: 1;
  padding: var(--space-md);
  border: 1px solid var(--gray-medium);
  border-radius: 8px 0 0 8px;
  font-size: var(--text-base);
  outline: none;
  transition: var(--transition);
}

.newsletter-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.newsletter-button {
  padding: 0 var(--space-lg);
  background: var(--secondary);
  color: var(--white);
  border: none;
  border-radius: 0 8px 8px 0;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: var(--text-base);
}

.newsletter-button:hover {
  background: #e67e22;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-section.animated {
  opacity: 1;
  transform: translateY(0);
}

/* Success Message */
.form-success {
  display: none;
  background: #d1fae5;
  color: #065f46;
  padding: var(--space-md);
  border-radius: 8px;
  margin-top: var(--space-md);
  animation: fadeIn 0.5s ease;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .hero-title {
    font-size: var(--text-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--text-lg);
  }
  
  .section-title {
    font-size: var(--text-2xl);
  }
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-xl) var(--space-md);
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-input,
  .newsletter-button {
    border-radius: 8px;
    width: 100%;
  }
  
  .newsletter-button {
    margin-top: var(--space-sm);
    padding: var(--space-md);
  }
  
  .map-container iframe {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--text-2xl);
  }
  
  .hero-subtitle {
    font-size: var(--text-base);
  }
  
  .section-title {
    font-size: var(--text-xl);
  }
  
  .section-description {
    font-size: var(--text-base);
  }
  
  .contact-form-container {
    padding: var(--space-lg);
  }
}
</style>

<div class="contact-container">

  <!-- 1. Hero Section -->
  <section class="contact-hero animate-section">
    <div class="hero-content">
      <h1 class="hero-title">Contact Us</h1>
      <p class="hero-subtitle">We're here to help and answer any questions you might have</p>
    </div>
  </section>

  <!-- 2. Intro Section -->
  <section class="section animate-section">
    <h2 class="section-title">Let's Connect</h2>
    <p class="section-description">Whether you have questions about our services, need technical support, or want to explore partnership opportunities, our team is ready to assist you.</p>
  </section>

  <!-- 3. Contact Form -->
  <section class="section animate-section">
    <h2 class="section-title">Send Us a Message</h2>
    <div class="contact-form-container">
      <?php echo do_shortcode('[contact-form-7 id="123" title="Contact Form"]'); ?>
      <div class="form-success" id="form-success">
        Thank you for your message! We'll get back to you soon.
      </div>
    </div>
  </section>

  <!-- 4. Interactive Map -->
  <section class="section animate-section">
    <h2 class="section-title">Find Us</h2>
    <p class="section-description">Visit our office or connect with us remotely</p>
    <div class="map-container">
      <iframe src="https://www.google.com/maps/embed?...your-location..." allowfullscreen loading="lazy"></iframe>
    </div>
  </section>

  <!-- 5. Team Info -->
  <section class="section animate-section">
    <h2 class="section-title">Our Team</h2>
    <p class="section-description">Direct contacts for specific inquiries</p>
    
    <div class="team-grid">
      <div class="team-card">
        <h4>Customer Support</h4>
        <div class="contact-method">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>support@example.com</span>
        </div>
        <div class="contact-method">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 12C18.7956 12 19.5587 11.6839 20.1213 11.1213C20.6839 10.5587 21 9.79565 21 9C21 8.20435 20.6839 7.44129 20.1213 6.87868C19.5587 6.31607 18.7956 6 18 6C17.2044 6 16.4413 6.31607 15.8787 6.87868C15.3161 7.44129 15 8.20435 15 9C15 9.79565 15.3161 10.5587 15.8787 11.1213C16.4413 11.6839 17.2044 12 18 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 4.02V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8H4C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V4.02" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 12C6.79565 12 7.55871 11.6839 8.12132 11.1213C8.68393 10.5587 9 9.79565 9 9C9 8.20435 8.68393 7.44129 8.12132 6.87868C7.55871 6.31607 6.79565 6 6 6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9C3 9.79565 3.31607 10.5587 3.87868 11.1213C4.44129 11.6839 5.20435 12 6 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>+1 234 567 8901</span>
        </div>
        <p><strong>Hours:</strong> Mon-Fri, 9am–6pm EST</p>
      </div>
      
      <div class="team-card">
        <h4>Sales Inquiries</h4>
        <div class="contact-method">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>sales@example.com</span>
        </div>
        <div class="contact-method">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 12C18.7956 12 19.5587 11.6839 20.1213 11.1213C20.6839 10.5587 21 9.79565 21 9C21 8.20435 20.6839 7.44129 20.1213 6.87868C19.5587 6.31607 18.7956 6 18 6C17.2044 6 16.4413 6.31607 15.8787 6.87868C15.3161 7.44129 15 8.20435 15 9C15 9.79565 15.3161 10.5587 15.8787 11.1213C16.4413 11.6839 17.2044 12 18 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 4.02V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8H4C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V4.02" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 12C6.79565 12 7.55871 11.6839 8.12132 11.1213C8.68393 10.5587 9 9.79565 9 9C9 8.20435 8.68393 7.44129 8.12132 6.87868C7.55871 6.31607 6.79565 6 6 6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9C3 9.79565 3.31607 10.5587 3.87868 11.1213C4.44129 11.6839 5.20435 12 6 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>+1 234 567 8902</span>
        </div>
        <p><strong>Hours:</strong> Mon-Fri, 8am–5pm EST</p>
      </div>
      
      <div class="team-card">
        <h4>Careers</h4>
        <div class="contact-method">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>careers@example.com</span>
        </div>
        <div class="contact-method">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 12C18.7956 12 19.5587 11.6839 20.1213 11.1213C20.6839 10.5587 21 9.79565 21 9C21 8.20435 20.6839 7.44129 20.1213 6.87868C19.5587 6.31607 18.7956 6 18 6C17.2044 6 16.4413 6.31607 15.8787 6.87868C15.3161 7.44129 15 8.20435 15 9C15 9.79565 15.3161 10.5587 15.8787 11.1213C16.4413 11.6839 17.2044 12 18 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 4.02V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8H4C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V4.02" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 12C6.79565 12 7.55871 11.6839 8.12132 11.1213C8.68393 10.5587 9 9.79565 9 9C9 8.20435 8.68393 7.44129 8.12132 6.87868C7.55871 6.31607 6.79565 6 6 6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9C3 9.79565 3.31607 10.5587 3.87868 11.1213C4.44129 11.6839 5.20435 12 6 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>+1 234 567 8903</span>
        </div>
        <p><strong>Hours:</strong> Mon-Fri, 10am–4pm EST</p>
      </div>
    </div>
  </section>

  <!-- 6. FAQ Accordion -->
  <section class="section animate-section">
    <h2 class="section-title">Common Questions</h2>
    
    <div class="faq-container">
      <div class="faq-item">
        <div class="faq-question">How quickly can I expect a response?</div>
        <div class="faq-answer">
          <p>Our standard response time is within 24 hours for email inquiries. For urgent matters, we recommend calling our support line during business hours where you'll typically reach someone immediately or within 15 minutes during peak times.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">What information should I include in my support request?</div>
        <div class="faq-answer">
          <p>To help us resolve your issue quickly, please include:</p>
          <ul>
            <li>Your account number or username</li>
            <li>A detailed description of the issue</li>
            <li>Any error messages you're receiving</li>
            <li>Screenshots if applicable</li>
          </ul>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">Do you offer 24/7 support?</div>
        <div class="faq-answer">
          <p>Our standard support hours are Monday through Friday, 9am to 6pm EST. However, premium support packages with 24/7 availability are available for enterprise clients.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Social Media -->
  <section class="section animate-section">
    <h2 class="section-title">Connect With Us</h2>
    <p>Follow us for updates, news, and community engagement</p>
    
    <div class="social-links">
      <a href="#" class="social-link" aria-label="Facebook" title="Facebook">
        <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="#" class="social-link" aria-label="Twitter" title="Twitter">
        <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
        </svg>
      </a>
      <a href="#" class="social-link" aria-label="LinkedIn" title="LinkedIn">
        <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="#" class="social-link" aria-label="Instagram" title="Instagram">
        <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
    </div>
  </section>

  <!-- 8. Newsletter -->
  <section class="section animate-section">
    <h2 class="section-title">Stay Updated</h2>
    <p>Subscribe to our newsletter for the latest news and offers</p>
    
    <form class="newsletter-form" id="newsletter-form">
      <input type="email" class="newsletter-input" placeholder="Your email address" required aria-label="Email address">
      <button type="submit" class="newsletter-button">Subscribe</button>
    </form>
    <div class="form-success" id="newsletter-success">
      Thank you for subscribing to our newsletter!
    </div>
  </section>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all interactive elements
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
    
    // Keyboard accessibility
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector('.wpcf7-form');
  if (contactForm) {
    contactForm.addEventListener('wpcf7mailsent', function() {
      document.getElementById('form-success').style.display = 'block';
    }, false);
  }

  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      // Simple validation
      if (!email.includes('@') || !email.includes('.')) {
        emailInput.style.borderColor = '#ef4444';
        return;
      }
      
      // Here you would typically send the data to your server
      console.log('Subscribed with email:', email);
      
      // Show success message
      const successMsg = document.getElementById('newsletter-success');
      successMsg.style.display = 'block';
      
      // Reset form
      this.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    });
  }

  // Intersection Observer for scroll animations
  const animateSections = document.querySelectorAll('.animate-section');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  animateSections.forEach(section => {
    observer.observe(section);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Touch device detection for hover effects
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
  
  if (isTouchDevice()) {
    document.body.classList.add('touch-device');
  }
});
</script>

<?php get_footer(); ?>