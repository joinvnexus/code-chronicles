import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Play, 
  Clock, 
  CheckCircle, 
  BookOpen, 
  Video,
  FileText,
  Star,
  Award,
  Target
} from "lucide-react";

export default function Curriculum() {
  const [openModules, setOpenModules] = useState([0]); // Start with first module open
  const [completedLessons, setCompletedLessons] = useState([0, 1, 2]); // Sample completed lessons
  const [hoveredLesson, setHoveredLesson] = useState(null);

  const modules = [
    {
      title: "Foundation Week",
      subtitle: "HTML & CSS Mastery",
      duration: "7 days",
      lessons: 8,
      progress: 75,
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      lessons: [
        { title: "Introduction to Web Development", duration: "45 min", type: "video", resources: 3 },
        { title: "HTML5 Semantic Structure", duration: "60 min", type: "video", resources: 4 },
        { title: "CSS3 Fundamentals & Flexbox", duration: "75 min", type: "video", resources: 5 },
        { title: "Responsive Design Principles", duration: "90 min", type: "video", resources: 6 },
        { title: "Build Your First Portfolio", duration: "120 min", type: "project", resources: 2 },
        { title: "CSS Grid Layout", duration: "65 min", type: "video", resources: 4 },
        { title: "Forms & User Input", duration: "50 min", type: "video", resources: 3 },
        { title: "Week 1 Challenge Project", duration: "180 min", type: "challenge", resources: 1 }
      ]
    },
    {
      title: "JavaScript Fundamentals",
      subtitle: "Interactive Web Development",
      duration: "14 days",
      lessons: 12,
      progress: 40,
      icon: Target,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      lessons: [
        { title: "JavaScript Basics & Syntax", duration: "55 min", type: "video", resources: 4 },
        { title: "DOM Manipulation", duration: "70 min", type: "video", resources: 5 },
        { title: "Event Handling", duration: "60 min", type: "video", resources: 3 },
        { title: "Arrays & Objects", duration: "80 min", type: "video", resources: 6 },
        { title: "ES6+ Features", duration: "90 min", type: "video", resources: 7 },
        { title: "Async JavaScript & APIs", duration: "120 min", type: "video", resources: 8 }
      ]
    },
    {
      title: "React Ecosystem",
      subtitle: "Modern Frontend Development",
      duration: "21 days",
      lessons: 15,
      progress: 20,
      icon: Star,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      lessons: [
        { title: "React Components & JSX", duration: "65 min", type: "video", resources: 5 },
        { title: "Props & State Management", duration: "80 min", type: "video", resources: 6 },
        { title: "Hooks & Effects", duration: "95 min", type: "video", resources: 7 },
        { title: "React Router", duration: "70 min", type: "video", resources: 4 },
        { title: "Context API", duration: "85 min", type: "video", resources: 5 }
      ]
    },
    {
      title: "Full-Stack Capstone",
      subtitle: "Real World Application",
      duration: "28 days",
      lessons: 10,
      progress: 0,
      icon: Award,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      lessons: [
        { title: "Project Architecture", duration: "90 min", type: "video", resources: 8 },
        { title: "Backend Integration", duration: "120 min", type: "video", resources: 9 },
        { title: "Database Design", duration: "110 min", type: "video", resources: 7 },
        { title: "Authentication & Security", duration: "100 min", type: "video", resources: 6 },
        { title: "Deployment & DevOps", duration: "85 min", type: "video", resources: 5 }
      ]
    }
  ];

  const toggleModule = (index) => {
    setOpenModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'project': return FileText;
      case 'challenge': return Award;
      default: return Play;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'text-blue-600 bg-blue-100';
      case 'project': return 'text-green-600 bg-green-100';
      case 'challenge': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const isLessonCompleted = (moduleIndex, lessonIndex) => {
    return completedLessons.includes(moduleIndex * 10 + lessonIndex);
  };

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const totalDuration = modules.reduce((acc, module) => 
    acc + module.lessons.reduce((sum, lesson) => sum + parseInt(lesson.duration), 0), 0
  );

  return (
    <section id="curriculum" className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            Step-by-Step Learning Path
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Course <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Curriculum</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive 90-day journey from absolute beginner to job-ready developer. 
            Build <span className="font-semibold text-gray-800">15+ real projects</span> and master in-demand technologies.
          </motion.p>

          {/* Course Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{modules.length}</div>
              <div className="text-gray-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{totalLessons}+</div>
              <div className="text-gray-600">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{totalDuration}+</div>
              <div className="text-gray-600">Hours of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </motion.div>
        </div>

        {/* Curriculum Modules */}
        <div className="space-y-6">
          {modules.map((module, moduleIndex) => {
            const IconComponent = module.icon;
            const isOpen = openModules.includes(moduleIndex);
            
            return (
              <motion.div
                key={moduleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: moduleIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(moduleIndex)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 hover:bg-gray-50/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 lg:gap-6 flex-1">
                    {/* Module Icon */}
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${module.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Module Info */}
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                          {module.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${module.bgColor} text-gray-700`}>
                          {module.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{module.subtitle}</p>
                      
                      {/* Progress Bar */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${module.color} transition-all duration-1000`}
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                          {module.lessons.length} lessons • {module.progress}% complete
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Lessons List */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 lg:p-8 space-y-4">
                        {module.lessons.map((lesson, lessonIndex) => {
                          const LessonIcon = getLessonIcon(lesson.type);
                          const isCompleted = isLessonCompleted(moduleIndex, lessonIndex);
                          
                          return (
                            <motion.div
                              key={lessonIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: lessonIndex * 0.05 }}
                              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                                isCompleted 
                                  ? 'bg-green-50 border-green-200' 
                                  : hoveredLesson === `${moduleIndex}-${lessonIndex}`
                                    ? 'bg-gray-50 border-gray-200 shadow-md'
                                    : 'bg-white border-gray-100'
                              }`}
                              onMouseEnter={() => setHoveredLesson(`${moduleIndex}-${lessonIndex}`)}
                              onMouseLeave={() => setHoveredLesson(null)}
                            >
                              {/* Lesson Status */}
                              <div className={`p-2 rounded-lg ${
                                isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                              }`}>
                                {isCompleted ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : (
                                  <LessonIcon className="w-5 h-5" />
                                )}
                              </div>

                              {/* Lesson Info */}
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <h4 className={`font-semibold ${
                                    isCompleted ? 'text-green-800' : 'text-gray-900'
                                  }`}>
                                    {lesson.title}
                                  </h4>
                                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(lesson.type)}`}>
                                    {lesson.type}
                                  </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {lesson.duration}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <FileText className="w-4 h-4" />
                                    {lesson.resources} resources
                                  </div>
                                </div>
                              </div>

                              {/* Action Button */}
                              <button className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                                isCompleted
                                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                              }`}>
                                {isCompleted ? 'Review' : 'Start'}
                              </button>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to start your journey? Enroll today and get immediate access to all course materials.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
            Enroll Now & Start Learning
          </button>
        </motion.div>
      </div>
    </section>
  );
}