import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  Star, 
  Zap, 
  Crown,
  Users,
  Clock,
  Video,
  FileText,
  MessageCircle,
  Briefcase,
  Award,
  Shield,
  Calendar
} from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [currentFeature, setCurrentFeature] = useState(0);

  const plans = [
    {
      title: "Starter",
      subtitle: "Perfect for self-learners",
      price: "$99",
      originalPrice: "$149",
      annualPrice: "$79",
      period: "one-time payment",
      popular: false,
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        { icon: Video, text: "Lifetime access to all video content" },
        { icon: FileText, text: "15+ hands-on projects & exercises" },
        { icon: Award, text: "Certificate of completion" },
        { icon: Clock, text: "Self-paced learning" },
        { icon: Users, text: "Community access" }
      ],
      excluded: ["Mentorship sessions", "Career coaching", "Job support"]
    },
    {
      title: "Pro",
      subtitle: "Most popular choice",
      price: "$149",
      originalPrice: "$199",
      annualPrice: "$119",
      period: "one-time payment",
      popular: true,
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        { icon: Video, text: "Everything in Starter" },
        { icon: MessageCircle, text: "Weekly group mentorship sessions" },
        { icon: Users, text: "Priority community support" },
        { icon: FileText, text: "Extended project library (25+ projects)" },
        { icon: Shield, text: "Code review & feedback" },
        { icon: Calendar, text: "Live Q&A sessions" }
      ],
      excluded: ["1-on-1 career coaching", "Job guarantee"]
    },
    {
      title: "Premium",
      subtitle: "Career transformation",
      price: "$199",
      originalPrice: "$299",
      annualPrice: "$159",
      period: "one-time payment",
      popular: false,
      icon: Crown,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        { icon: Video, text: "Everything in Pro" },
        { icon: Briefcase, text: "1-on-1 career coaching sessions" },
        { icon: Award, text: "Job search assistance & preparation" },
        { icon: FileText, text: "Portfolio review & optimization" },
        { icon: Users, text: "Interview preparation & mock interviews" },
        { icon: Shield, text: "Resume review & optimization" },
        { icon: Calendar, text: "6 months of career support" }
      ],
      excluded: []
    }
  ];

  const features = [
    { icon: Video, text: "50+ hours of HD video content" },
    { icon: FileText, text: "40+ real-world projects" },
    { icon: Users, text: "10,000+ student community" },
    { icon: Clock, text: "Lifetime access & updates" },
    { icon: Award, text: "Industry-recognized certificate" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentPrice = (plan) => isAnnual ? plan.annualPrice : plan.price;

  const savings = (plan) => {
    const original = parseInt(plan.originalPrice.replace('$', ''));
    const current = parseInt(currentPrice(plan).replace('$', ''));
    return ((original - current) / original * 100).toFixed(0);
  };

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
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
            Choose Your Learning Path
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start your web development journey today with a plan that fits your goals and budget. 
            All plans include lifetime access and continuous updates.
          </p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-white rounded-2xl p-2 shadow-lg border border-gray-100"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isAnnual 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isHovered = hoveredPlan === index;
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl border-2 transition-all duration-500 ${
                  isPopular 
                    ? `${plan.borderColor} shadow-2xl scale-105` 
                    : 'border-gray-200 shadow-lg'
                } ${isHovered ? 'shadow-2xl scale-105' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Save {savings(plan)}%
                </div>

                <div className={`p-8 rounded-3xl ${isPopular ? plan.bgColor : 'bg-white'}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600">{plan.subtitle}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                        {currentPrice(plan)}
                      </span>
                      {isAnnual && (
                        <span className="text-lg text-gray-500 line-through">
                          {plan.price}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.period}</p>
                    {isAnnual && (
                      <p className="text-green-600 font-semibold text-sm mt-2">
                        Equivalent to ${(parseInt(plan.annualPrice.replace('$', '')) / 12).toFixed(0)}/month
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="flex items-center gap-2">
                            <FeatureIcon className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700">{feature.text}</span>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Excluded Features */}
                    {plan.excluded.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        {plan.excluded.map((excluded, excludedIndex) => (
                          <div key={excludedIndex} className="flex items-center gap-3 text-gray-400">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            </div>
                            <span className="text-sm">{excluded}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isPopular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What's Included in All Plans</h3>
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    {/* <features[currentFeature].icon className="w-6 h-6 text-indigo-600" /> */}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {features[currentFeature].text}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Feature Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFeature ? 'bg-indigo-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-lg opacity-90">
              Try the course risk-free. If you're not satisfied within the first 30 days, 
              we'll refund your payment. No questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}