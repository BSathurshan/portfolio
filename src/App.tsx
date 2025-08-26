import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Gamepad2,
  ChevronDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Palette
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 500);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'technologies', 'projects', 'contact'];
      const sectionElements = sections.map(section => document.getElementById(section));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const technologies = [
    { name: 'Frontend', icon: Monitor, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', icon: Server, color: 'from-green-500 to-emerald-500' },
    { name: 'Database', icon: Database, color: 'from-purple-500 to-violet-500' },
    { name: 'Mobile', icon: Smartphone, color: 'from-pink-500 to-rose-500' },
    { name: 'Game Dev', icon: Gamepad2, color: 'from-orange-500 to-amber-500' },
    { name: 'DevOps', icon: Terminal, color: 'from-red-500 to-orange-500' },
    { name: 'AI/ML', icon: Cpu, color: 'from-indigo-500 to-purple-500' },
    { name: 'Design', icon: Palette, color: 'from-teal-500 to-cyan-500' },
  ];

  const projects = [
    {
      title: 'LMS Moonlit Devs',
      description: 'A comprehensive Library Management System built with Java, JavaFX, and MySQL using MVC architecture. Features include user authentication, student management, book management, and issuing/returning system with seamless database integration.',
      technologies: ['Java', 'JavaFX', 'MySQL', 'MVC'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/BSathurshan/Moonlit-Devs',
      demo: '#'
    },
    {
      title: 'DriveBot',
      description: 'Cross-platform mobile application for car and service management built with React, Supabase, and Expo. Features car details management, service history tracking, notifications, and role-based access for both car owners and admins.',
      technologies: ['React', 'Supabase', 'Expo', 'JavaScript'],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/BSathurshan/DriveBot',
      demo: '#'
    },
    {
      title: 'GymOrbit',
      description: 'Web-based gym management system developed with vanilla PHP, HTML, CSS, and JavaScript. Features role-based access control, timetable scheduling, secure authentication, and comprehensive user management without frameworks.',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/BSathurshan/Gym_Orbit',
      demo: '#'
    },
    {
      title: 'BookHive (Ongoing)',
      description: 'Large-scale book ecosystem application supporting multiple roles including Admin, Hub Manager, Delivery Personnel, Store, Organizations, and more. Built with React.js frontend, Spring Boot backend, and PostgreSQL database with JWT authentication.',
      technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'JWT'],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Benshekniel/BookHiveFrontend',
      demo: '#'
    },
    {
      title: 'Whispers of the Forgotten (Ongoing)',
      description: 'Story-driven adventure game developed in Unity 3D with C#. Features four immersive levels where the hero must rescue the king and his sister from a dark spirit. Includes plot twists, engaging gameplay mechanics, and rich storytelling.',
      technologies: ['Unity 3D', 'C#', 'Game Design', 'Storytelling'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/LoneCoyote737/Gamedev-Project',
      demo: '#'
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sathurshan
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'technologies', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'technologies', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === section
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Sathurshan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineer & Game Developer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Information Systems undergraduate passionate about creating innovative software solutions and immersive gaming experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={24} className="text-gray-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Passionate Developer with Vision
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As an Information Systems undergraduate at the University of Colombo School of Computing (CGPA: 3.687/4.0), 
                I am deeply passionate about exploring how technology can solve real-world problems. My academic journey 
                has given me exposure to software development, databases, and system design.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I thrive on challenges that push me out of my comfort zone, driving me to discover new skills and 
                improve existing ones. With experience in both web development and game development, I enjoy creating 
                solutions that are both functional and engaging.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-2">CGPA 3.687</h4>
                  <p className="text-gray-400 text-sm">Academic Excellence</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-2">5+ Projects</h4>
                  <p className="text-gray-400 text-sm">Completed</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies & Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Technologies and frameworks I work with to build scalable, efficient solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="group relative">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} p-3 mb-4 mx-auto`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white text-center">{tech.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Details */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'C#', 'C', 'Python', 'JavaScript', 'TypeScript'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Three.js', 'Unity 3D', 'Spring Boot', 'JavaFX'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Databases & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'Supabase', 'Git', 'REST APIs', 'WebSockets'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Showcasing my software engineering and game development projects
            </p>
          </div>
          
          {/* Project Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{currentProject.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={currentProject.demo}
                      className="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Indicators */}
                <div className="flex justify-center gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentProjectIndex ? 'bg-blue-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Let's connect and discuss opportunities in software engineering and game development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborating on exciting projects, 
                or sharing knowledge about software development and game design.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-blue-500/20 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">lokiaj141@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-green-500/20 rounded-lg mr-4 group-hover:bg-green-500/30 transition-colors">
                    <Phone size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">074 004 0749</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-purple-500/20 rounded-lg mr-4 group-hover:bg-purple-500/30 transition-colors">
                    <MapPin size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/BSathurshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors text-gray-300 hover:text-white"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bsathurshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors text-gray-300 hover:text-white"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:lokiaj141@gmail.com"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors text-gray-300 hover:text-white"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Education & Background</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">University of Colombo</h4>
                  <p className="text-blue-400">School of Computing</p>
                  <p className="text-gray-400">B.Sc (Hons) Information Systems</p>
                  <p className="text-gray-400">CGPA: 3.687/4.0 | 2023-2026</p>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">Specializations</h4>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    <li>• Software Engineering & Architecture</li>
                    <li>• Game Development & Design</li>
                    <li>• Database Systems & Management</li>
                    <li>• Web & Mobile Development</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">Interests</h4>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    <li>• Scalable System Architecture</li>
                    <li>• Cross-platform Development</li>
                    <li>• UI/UX Design</li>
                    <li>• Agile Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Sathurshan. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;