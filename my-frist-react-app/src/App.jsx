import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Instructor from "./components/Instructor";
import Curriculum from "./components/Curriculum";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/CTAFooter";
// import Footer from "./components/Footer";

// Scroll to top component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-2xl hover:bg-indigo-700 transition-all duration-300 hover:scale-110"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

// Progress bar component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Loading screen component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-4"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          EduMaster
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mt-2"
        >
          Loading your learning journey...
        </motion.p>
      </div>
    </motion.div>
  );
};

// Newsletter modal component
const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Get Free Web Development Tips
          </h3>
          <p className="text-gray-600 mb-6">
            Join 10,000+ developers receiving weekly coding insights, project ideas, and career advice.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Subscribe Now
            </button>
          </form>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 mt-4 text-sm"
          >
            No thanks, I'll pass
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Show newsletter modal after 5 seconds
    const newsletterTimer = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(newsletterTimer);
    };
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App relative">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Instructor />
          <Curriculum />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        
        {/* Footer */}
        <Footer />
      </motion.div>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletter} 
        onClose={() => setShowNewsletter(false)} 
      />

      {/* Custom Cursor (optional) */}
      {/* <CustomCursor /> */}

      {/* Background Music Toggle (optional) */}
      {/* <BackgroundMusic /> */}
    </div>
  );
}

export default App;