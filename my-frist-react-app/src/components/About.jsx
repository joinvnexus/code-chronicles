import { useState, useRef, useEffect } from "react";
import { GraduationCap, Target, Code, Award, Users, Clock, TrendingUp, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const features = [
    {
      icon: GraduationCap,
      title: "Beginner-Friendly",
      desc: "Start from scratch – no coding experience required. Our step-by-step curriculum is designed for absolute beginners.",
      stats: "Zero to Hero in 90 Days",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Target,
      title: "Career-Oriented",
      desc: "Learn job-ready skills and build real-world projects that employers actually want to see in your portfolio.",
      stats: "95% Job Placement Rate",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Code,
      title: "Hands-On Learning",
      desc: "Build 10+ real projects including responsive websites, web apps, and REST APIs with modern technologies.",
      stats: "15+ Practical Projects",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      desc: "Earn a verified certificate and build a professional portfolio that showcases your expertise to employers.",
      stats: "Verified Certificate",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Students Enrolled" },
    { icon: Clock, value: "90 Days", label: "Average Completion" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "4.9/5", label: "Student Rating" },
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
    <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
              Why Choose Our Course
            </span>
          </motion.div>

          {/* Section Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Transform Your Career in{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              90 Days
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            This immersive program takes you from absolute beginner to job-ready web developer 
            through our proven project-based learning approach. Gain real-world skills that 
            employers are <span className="font-semibold text-gray-800">actually looking for</span>.
          </motion.p>
        </motion.div>

        {/* Interactive Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Features List */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${
                    activeFeature === index 
                      ? `${feature.bgColor} ${feature.borderColor} shadow-xl scale-105` 
                      : 'bg-white border-gray-100 shadow-lg hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl font-bold ${
                          activeFeature === index ? 'text-gray-900' : 'text-gray-800'
                        }`}>
                          {feature.title}
                        </h3>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          activeFeature === index ? 'bg-white/80 text-gray-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activeFeature === index && (
                    <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full animate-ping`}></div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24">
              {/* Main Demo Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${features[activeFeature].color} text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    {/* <features[activeFeature].icon className="w-6 h-6" /> */}
                    <h3 className="text-xl font-bold">{features[activeFeature].title}</h3>
                  </div>
                  <p className="text-white/90">{features[activeFeature].stats}</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Step-by-step curriculum</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Real-world project experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Personal mentorship</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Career support</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Course Progress</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${features[activeFeature].color} transition-all duration-1000`}
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Certificate</div>
                    <div className="text-sm text-gray-600">Upon Completion</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}