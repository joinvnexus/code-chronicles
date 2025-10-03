import { motion } from "framer-motion";
import { 
  Rocket, 
  Award, 
  Users, 
  Clock, 
  Star, 
  Mail,
  MessageCircle,
  Calendar,
  Shield,
  BookOpen,
  ChevronRight,
  CheckCircle
} from "lucide-react";

export default function CTAFooter() {
  const features = [
    { icon: Clock, text: "Lifetime access" },
    { icon: Award, text: "Verified certificate" },
    { icon: Users, text: "10,000+ students" },
    { icon: Star, text: "4.9/5 rating" }
  ];

  const guarantees = [
    "30-day money-back guarantee",
    "No prior experience required",
    "Learn at your own pace",
    "Career support included"
  ];

  const stats = [
    { value: "95%", label: "Career Success Rate" },
    { value: "10K+", label: "Students Enrolled" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "90 Days", label: "To Mastery" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
      >
        <div className="text-center mb-16">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Limited Time Offer - Enroll Today
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Start Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Career
            </span>{" "}
            Today 🚀
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Join 10,000+ students who transformed their lives through our comprehensive 
            web development program. No experience required - just commitment and passion.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <IconComponent className="w-4 h-4 text-green-400" />
                  {feature.text}
                </div>
              );
            })}
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto mb-12"
          >
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{guarantee}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
            >
              <Rocket className="w-5 h-5" />
              Enroll Now & Start Learning
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Free Call
            </motion.button>
          </motion.div>

          {/* Urgency Elements */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span>Limited spots available</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Next cohort starts in 3 days</span>
            </div>
          </motion.div>
        </div>

        {/* Countdown Timer */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 max-w-2xl mx-auto border border-white/10 backdrop-blur-sm"
        >
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold mb-2">Enrollment Closes In</h3>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold bg-white/10 rounded-lg px-3 py-2">03</div>
                <div className="text-xs text-gray-400 mt-1">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-white/10 rounded-lg px-3 py-2">12</div>
                <div className="text-xs text-gray-400 mt-1">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-white/10 rounded-lg px-3 py-2">45</div>
                <div className="text-xs text-gray-400 mt-1">Minutes</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Links Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-400 to-cyan-400 p-2 rounded-lg">
                  <BookOpen className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">EduMaster</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming beginners into job-ready web developers through comprehensive, 
                project-based learning and career support.
              </p>
              <div className="flex gap-4">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Courses", "Pricing", "About", "Testimonials"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>Secure enrollment • 30-day guarantee • Trusted by 10K+ students</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>&copy; 2025 EduMaster. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Support Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}