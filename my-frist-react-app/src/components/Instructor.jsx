import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Award, 
  Users, 
  Clock, 
  BookOpen, 
  Star, 
  TrendingUp, 
  MessageCircle,
  Play,
  Github,
  Twitter,
  Linkedin,
  CheckCircle
} from "lucide-react";

export default function Instructor() {
  const [activeTab, setActiveTab] = useState('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { icon: Users, value: "20,000+", label: "Students Trained", suffix: "" },
    { icon: Clock, value: "10+", label: "Years Experience", suffix: "years" },
    { icon: BookOpen, value: "5+", label: "Published Courses", suffix: "courses" },
    { icon: Award, value: "4.9", label: "Instructor Rating", suffix: "/5" },
  ];

  const achievements = [
    "Senior Full-Stack Developer at TechCorp",
    "Google Developer Expert (Web Technologies)",
    "React & Node.js Conference Speaker",
    "Open Source Contributor (10K+ GitHub stars)",
    "Mentored 500+ career transitions",
    "Featured in Web Development Weekly"
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="instructor" className="relative py-20 lg:py-28 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-100/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
        >
          
          {/* Left: Enhanced Instructor Profile */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-start relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Alex Johnson - Senior Web Developer & Instructor"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl shadow-2xl object-cover border-8 border-white"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">GDE</div>
                      <div className="text-sm text-gray-600">Google Expert</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">10+</div>
                      <div className="text-sm text-gray-600">Years Exp</div>
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center group-hover:from-indigo-700 group-hover:to-purple-700 transition-colors">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover:animate-none"></div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-6"></div>
            </div>
          </motion.div>

          {/* Right: Enhanced Bio & Information */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            {/* Header Section */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                Your Guide to Success
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Learn from{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Alex Johnson
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Senior Full-Stack Developer & Google Developer Expert with a passion for 
                transforming beginners into job-ready developers through practical, 
                project-based learning.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="mb-8">
              <div className="flex space-x-1 bg-gray-100/50 rounded-2xl p-1 w-fit mx-auto lg:mx-0">
                {['experience', 'achievements', 'teaching'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-white text-gray-900 shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab === 'experience' && (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      With over a decade in the industry, I've built scalable applications for 
                      Fortune 500 companies and fast-growing startups. My expertise spans 
                      React, Node.js, TypeScript, and cloud technologies.
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">"Focus on writing code that solves real problems"</span>
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className="grid gap-3">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-left">{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'teaching' && (
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      I believe in learning by doing. My courses emphasize practical projects, 
                      real-world scenarios, and building a portfolio that impresses employers. 
                      Join 20,000+ students who've transformed their careers.
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">4.9/5 average instructor rating across all courses</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-indigo-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}<span className="text-indigo-600">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    className="p-3 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}