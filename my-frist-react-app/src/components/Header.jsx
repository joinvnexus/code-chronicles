import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, User, BookOpen } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Courses", href: "#courses", hasDropdown: true },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Instructors", href: "#instructors", hasDropdown: true },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources", hasDropdown: true },
  ];

  const dropdownItems = {
    courses: [
      "Web Development",
      "Data Science",
      "UI/UX Design",
      "Mobile Development",
    ],
    instructors: ["Meet Our Team", "Become Instructor", "Instructor Resources"],
    resources: ["Blog", "Tutorials", "Community", "Documentation"],
  };

  return (
    <header
      className={`w-full bg-white/95 backdrop-blur-md fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-xl py-2" : "shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo with enhanced styling */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            EduMaster
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.hasDropdown && setActiveDropdown(item.label.toLowerCase())
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all duration-200 rounded-lg hover:bg-gray-50 group"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </a>

              {/* Dropdown Menus */}
              {item.hasDropdown &&
                activeDropdown === item.label.toLowerCase() && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in fade-in-0 zoom-in-95">
                    {dropdownItems[item.label.toLowerCase()].map(
                      (dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 mx-2 rounded-lg"
                        >
                          {dropdownItem}
                        </a>
                      )
                    )}
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all w-48"
            />
          </div>

          {/* User Actions */}
          <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all">
            <User className="w-5 h-5" />
          </button>

          {/* CTA Button */}
          <a
            href="#enroll"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-6 space-y-2">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Mobile Nav Items */}
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                onClick={() =>
                  item.hasDropdown &&
                  setActiveDropdown(
                    activeDropdown === item.label.toLowerCase()
                      ? null
                      : item.label.toLowerCase()
                  )
                }
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.label.toLowerCase()
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
              </a>

              {/* Mobile Dropdown */}
              {item.hasDropdown &&
                activeDropdown === item.label.toLowerCase() && (
                  <div className="ml-6 mt-1 space-y-1 animate-in fade-in-0">
                    {dropdownItems[item.label.toLowerCase()].map(
                      (dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all"
                        >
                          {dropdownItem}
                        </a>
                      )
                    )}
                  </div>
                )}
            </div>
          ))}

          {/* Mobile CTA */}
          <a
            href="#enroll"
            className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold mt-4"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </header>
  );
}
