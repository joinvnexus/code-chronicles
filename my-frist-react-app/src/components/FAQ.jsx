import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  MessageCircle,
  Mail,
  Clock,
  Users,
  BookOpen
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const myRef = useRef(null);




  const faqCategories = [
    { id: "all", name: "All Questions", icon: HelpCircle, count: 12 },
    { id: "enrollment", name: "Enrollment", icon: Users, count: 4 },
    { id: "curriculum", name: "Curriculum", icon: BookOpen, count: 5 },
    { id: "career", name: "Career Support", icon: MessageCircle, count: 3 },
  ];

  const faqs = [
    {
      question: "Do I need any prior coding experience to start this course?",
      answer: "Absolutely not! This course is specifically designed for complete beginners with zero coding experience. We start from the very basics and gradually build up to advanced concepts. Our step-by-step approach ensures that anyone can follow along and succeed.",
      category: "enrollment",
      popularity: 95
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes! You'll receive a verified certificate of completion that you can showcase on LinkedIn and share with potential employers. Our certificates are recognized by industry partners and can help boost your credibility when applying for jobs.",
      category: "curriculum",
      popularity: 88
    },
    {
      question: "How long will I have access to the course materials?",
      answer: "You get lifetime access to all course materials, including future updates. This means you can revisit the content anytime, learn at your own pace, and stay updated with the latest web development trends and technologies.",
      category: "enrollment",
      popularity: 92
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course within the first 30 days, we'll provide a full refund, no questions asked. We're confident in the quality of our content and want you to feel secure in your investment.",
      category: "enrollment",
      popularity: 78
    },
    {
      question: "How much time should I dedicate to the course each week?",
      answer: "We recommend dedicating 8-10 hours per week to complete the course in 90 days. However, the course is self-paced, so you can adjust based on your schedule. Many students complete it faster by dedicating more time, while others take longer to fit their busy lives.",
      category: "curriculum",
      popularity: 85
    },
    {
      question: "What kind of support is available during the course?",
      answer: "You'll have access to multiple support channels: weekly group mentorship sessions, a dedicated community forum, priority email support, and for Pro/Premium students, 1-on-1 coaching. Our team and community are here to help you succeed.",
      category: "curriculum",
      popularity: 90
    },
    {
      question: "Will this course help me get a job as a developer?",
      answer: "Yes! We've helped thousands of students land their first developer jobs. The course includes career preparation modules, portfolio building, resume reviews, and interview preparation. Our graduates have been hired at companies like Google, Amazon, and various startups.",
      category: "career",
      popularity: 96
    },
    {
      question: "What technologies and tools will I learn?",
      answer: "You'll master the modern web development stack: HTML5, CSS3, JavaScript (ES6+), React, Node.js, Git, and deployment tools. We also cover responsive design, APIs, databases, and best practices used in the industry today.",
      category: "curriculum",
      popularity: 87
    },
    {
      question: "Can I learn while working a full-time job?",
      answer: "Absolutely! The course is designed for busy professionals. With flexible scheduling, lifetime access, and bite-sized lessons, you can learn at your own pace. Many of our most successful students completed the course while working full-time.",
      category: "enrollment",
      popularity: 82
    },
    {
      question: "What makes this course different from free resources?",
      answer: "While free resources are great, our course offers structured learning, professional mentorship, real-world projects, career support, and a proven curriculum. You get a clear path to becoming job-ready with personalized guidance and a supportive community.",
      category: "curriculum",
      popularity: 80
    },
    {
      question: "Do you offer any payment plans or scholarships?",
      answer: "Yes! We offer flexible payment plans to split the cost over several months. We also have a scholarship program for underrepresented groups in tech. Contact our support team to learn more about available options.",
      category: "enrollment",
      popularity: 75
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 15+ real-world projects including: responsive websites, web applications, REST APIs, e-commerce sites, and a full-stack capstone project. These projects form a professional portfolio that demonstrates your skills to employers.",
      category: "career",
      popularity: 89
    }
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getPopularityColor = (popularity) => {
    if (popularity >= 90) return "text-green-600 bg-green-100";
    if (popularity >= 80) return "text-blue-600 bg-blue-100";
    return "text-gray-600 bg-gray-100";
  };

  return (
    <section myRef={myRef} id="faq" className="relative py-20 lg:py-28 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            Get Your Questions Answered
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to common questions about the course, enrollment process, and career outcomes. 
            Can't find what you're looking for? Reach out to our support team.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-lg"
            />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {faqCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Support CTA */}
              <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our support team is here to help you.
                </p>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                    <MessageCircle className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium">Live Chat</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                    <Mail className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium">Email Support</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleIndex(index)}
                      className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-gray-50/50 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPopularityColor(faq.popularity)}`}>
                            {faq.popularity}% helpful
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="capitalize">{faq.category}</span>
                          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                          <span>2 min read</span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-100"
                        >
                          <div className="p-6 lg:p-8 bg-gray-50/30">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                              <span className="text-sm text-gray-500">Was this helpful?</span>
                              <button className="text-sm text-green-600 font-medium hover:text-green-700">
                                Yes
                              </button>
                              <button className="text-sm text-red-600 font-medium hover:text-red-700">
                                No
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No questions found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any questions matching your search.
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </div>

            {/* Still Have Questions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Still have questions?
                </h3>
                <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                  Our dedicated support team is here to help you with any questions about the course, 
                  enrollment process, or career outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
                    Contact Support
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                    Schedule a Call
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}