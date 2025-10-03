import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Award,
  TrendingUp,
  CheckCircle
} from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer at TechCorp",
      text: "This course completely transformed my career! I went from zero coding experience to landing my dream job as a frontend developer in just 4 months. The hands-on projects and mentorship were game-changers.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      achievement: "Landed job in 4 months",
      beforeAfter: {
        before: "Marketing Specialist",
        after: "Frontend Developer",
        salaryIncrease: "85%"
      }
    },
    {
      name: "Michael Chen",
      role: "Full-Stack Developer at StartupXYZ",
      text: "The project-based approach made all the difference. I built a portfolio that actually impressed employers. The React and Node.js sections were particularly outstanding - I use these skills daily in my new role.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      achievement: "3 job offers after course",
      beforeAfter: {
        before: "Customer Support",
        after: "Full-Stack Developer",
        salaryIncrease: "120%"
      }
    },
    {
      name: "Sarah Williams",
      role: "UI Developer at DesignHub",
      text: "As a complete beginner, I was nervous about learning to code. But the step-by-step curriculum and supportive community made the journey enjoyable. Now I'm building beautiful, responsive websites for clients!",
      rating: 5,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      achievement: "Freelance developer in 3 months",
      beforeAfter: {
        before: "Graphic Designer",
        after: "UI Developer",
        salaryIncrease: "65%"
      }
    },
    {
      name: "David Rodriguez",
      role: "Software Engineer at FinTech Inc",
      text: "The capstone project was the highlight - it gave me real-world experience that stood out in interviews. The instructors genuinely care about student success and provide incredible support throughout the journey.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      achievement: "Promoted to senior in 1 year",
      beforeAfter: {
        before: "Junior Developer",
        after: "Software Engineer",
        salaryIncrease: "60%"
      }
    },
    {
      name: "Emily Parker",
      role: "React Developer at E-Commerce Giant",
      text: "I tried other courses before, but this one stuck. The curriculum is perfectly paced, and the projects are actually relevant to today's job market. The career support helped me negotiate a great offer!",
      rating: 5,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      achievement: "Remote job with 6-figure salary",
      beforeAfter: {
        before: "Teacher",
        after: "React Developer",
        salaryIncrease: "150%"
      }
    }
  ];

  const stats = [
    { value: "95%", label: "Career Success Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "10,000+", label: "Students Transformed" },
    { value: "$85k", label: "Average Starting Salary" }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-100/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            Success Stories
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transformations That <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Inspire</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who transformed their careers and lives through our program. 
            Here's what they have to say about their journey.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute left-4 lg:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl border border-gray-100 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute right-4 lg:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl border border-gray-100 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <div className="relative h-[600px] lg:h-[500px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Testimonial Card */}
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-indigo-100" />
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                      "{currentTestimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={currentTestimonial.img}
                        alt={currentTestimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-indigo-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {currentTestimonial.name}
                          </h3>
                          <div className="flex gap-1">
                            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{currentTestimonial.role}</p>
                        <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                          <Award className="w-4 h-4" />
                          {currentTestimonial.achievement}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Career Transformation Card */}
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-10 text-white">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                      <TrendingUp className="w-6 h-6" />
                      Career Transformation
                    </h3>

                    <div className="space-y-6">
                      {/* Before/After */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-white/10 rounded-xl">
                          <div className="text-sm opacity-80 mb-2">Before</div>
                          <div className="font-semibold">{currentTestimonial.beforeAfter.before}</div>
                        </div>
                        <div className="text-center p-4 bg-white/10 rounded-xl">
                          <div className="text-sm opacity-80 mb-2">After</div>
                          <div className="font-semibold">{currentTestimonial.beforeAfter.after}</div>
                        </div>
                      </div>

                      {/* Salary Increase */}
                      <div className="text-center p-6 bg-white/10 rounded-xl">
                        <div className="text-sm opacity-80 mb-2">Salary Increase</div>
                        <div className="text-3xl font-bold text-green-300">
                          +{currentTestimonial.beforeAfter.salaryIncrease}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-center">
                          <div className="font-semibold">Started Course</div>
                          <div className="opacity-80">Month 1</div>
                        </div>
                        <div className="flex-1 h-1 bg-white/20 mx-4 relative">
                          <div className="absolute inset-0 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">Landed Job</div>
                          <div className="opacity-80">Month 4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-indigo-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Watch More Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-90">{testimonial.role}</div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}