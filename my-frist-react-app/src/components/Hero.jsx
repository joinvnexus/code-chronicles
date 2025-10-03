import { useState, useEffect } from "react";
import { Play, Star, Users, Award, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "10,000+", label: "Students Enrolled" },
    { icon: Star, value: "4.9/5", label: "Rating" },
    { icon: Award, value: "95%", label: "Completion Rate" },
    { icon: Clock, value: "90 Days", label: "To Mastery" }
  ];

  const features = [
    "Live Mentorship Sessions",
    "Real-world Projects",
    "Job Ready Portfolio",
    "Certificate of Completion",
    "Lifetime Access",
    "Community Support"
  ];

  const CurrentStat = stats[currentStat];

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 py-12 lg:py-20">
          
          {/* Left Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                🎉 Join 10,000+ successful students
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Master{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Web Development
                </span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-indigo-200/40 -rotate-1 -z-0"></div>
              </span>{" "}
              in 90 Days 🚀
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform from beginner to job-ready developer through our project-based learning approach. 
              Build <span className="font-semibold text-indigo-600">real applications</span> and launch your tech career.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#enroll"
                className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center justify-center gap-3"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <button className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 font-semibold text-gray-700">
                <div className="relative">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Play className="w-5 h-5 text-indigo-600 ml-1" />
                  </div>
                </div>
                Watch Free Preview
              </button>
            </div>

            {/* Animated Stats */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100 max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <CurrentStat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{CurrentStat.value}</div>
                  <div className="text-gray-600">{CurrentStat.label}</div>
                </div>
              </div>
              <div className="flex gap-1">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentStat ? 'bg-indigo-600 flex-1' : 'bg-gray-300 flex-1'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Preview */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Preview Image */}
              <div className="relative z-10 w-full max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Coding Environment Preview"
                  className="w-full rounded-2xl shadow-2xl border-8 border-white"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Certificate</div>
                      <div className="text-sm text-gray-600">Guaranteed</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Live Support</div>
                      <div className="text-sm text-gray-600">24/7 Community</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform rotate-3"></div>
              <div className="absolute -z-20 top-12 -right-12 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}