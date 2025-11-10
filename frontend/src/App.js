import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Workflow, 
  Zap, 
  Clock, 
  TrendingUp,
  ArrowRight,
  Menu,
  X,
  Check,
  GitBranch,
  Database,
  Mail,
  Calendar,
  FileText,
  BarChart2,
  Users,
  Settings,
  ChevronRight,
  PlayCircle,
  Sparkles,
  MessageCircle,
  Cpu,
  LayoutDashboard
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TypingAnimation = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, isInView]);

  return (
    <div ref={ref} className={className}>
      {displayedText}
      <span className="typing-cursor">|</span>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-testid="navbar"
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" data-testid="nav-logo">
          <div className="logo-mark">
            <Workflow strokeWidth={2.5} size={24} />
          </div>
          <span className="logo-text">Simr</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            data-testid="nav-home-link" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link to="/contact" className="nav-cta" data-testid="nav-cta" onClick={() => setIsMenuOpen(false)}>
            Contact Us
            <MessageCircle size={16} />
          </Link>
        </div>

        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="nav-toggle-button"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

const Home = () => {
  const automationServices = [
    {
      icon: <Mail size={24} />,
      title: "Email Automation",
      description: "Automate email workflows, responses, and campaign management.",
      delay: 0.1
    },
    {
      icon: <Database size={24} />,
      title: "Data Processing",
      description: "Transform, clean, and sync data across platforms automatically.",
      delay: 0.15
    },
    {
      icon: <Calendar size={24} />,
      title: "Scheduling",
      description: "Automate appointment booking and smart reminder systems.",
      delay: 0.2
    },
    {
      icon: <FileText size={24} />,
      title: "Document Processing",
      description: "Extract, process, and organize documents automatically.",
      delay: 0.25
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Report Generation",
      description: "Generate and distribute reports automatically on schedule.",
      delay: 0.3
    },
    {
      icon: <Users size={24} />,
      title: "Customer Service",
      description: "Handle inquiries and support requests with 24/7 automation.",
      delay: 0.35
    },
    {
      icon: <Workflow size={24} />,
      title: "Workflow Integration",
      description: "Connect apps and services into seamless automated workflows.",
      delay: 0.4
    },
    {
      icon: <Zap size={24} />,
      title: "Task Automation",
      description: "Eliminate repetitive tasks with intelligent automation triggers.",
      delay: 0.45
    },
    {
      icon: <Settings size={24} />,
      title: "System Integration",
      description: "Integrate and automate across all your business systems.",
      delay: 0.5
    }
  ];

  const benefits = [
    { number: "95%", label: "Time Saved", icon: <Clock size={20} /> },
    { number: "10x", label: "Faster Processing", icon: <Zap size={20} /> },
    { number: "24/7", label: "Always Active", icon: <Settings size={20} /> },
    { number: "99%", label: "Accuracy Rate", icon: <Check size={20} /> }
  ];

  const useCases = [
    {
      role: "Sales Teams",
      task: "Lead qualification and follow-up",
      result: "Close deals 3x faster"
    },
    {
      role: "Operations",
      task: "Invoice processing and approvals",
      result: "Reduce processing time by 85%"
    },
    {
      role: "HR Departments",
      task: "Onboarding and documentation",
      result: "Cut onboarding time in half"
    },
    {
      role: "Marketing Teams",
      task: "Campaign tracking and reporting",
      result: "Save 20+ hours per week"
    }
  ];

  return (
    <div className="home-container" data-testid="home-page">
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-background-effects">
          <iframe 
            src='https://my.spline.design/animatedbackgroundgradientforweb-WtXVIT9ALxJKLCroPAzddmOf/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="spline-background"
            title="Animated Background"
          ></iframe>
          <div className="liquid-glass-effect" data-us-project="ZXd9D6ZoiaFRXfE7c75E"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-content-wrapper">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              data-testid="hero-badge"
            >
              <Sparkles size={16} className="badge-sparkle" />
              <span>Intelligent Business Automation</span>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              data-testid="hero-title"
            >
              Automate the Work
              <br />
              <span className="gradient-text">That Drains Your Time</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              data-testid="hero-subtitle"
            >
              We build intelligent automation systems that eliminate repetitive tasks,
              so your team can focus on what drives growth. From workflows to data processing,
              we make automation seamless and powerful.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/contact" className="cta-primary" data-testid="cta-contact-us">
                <MessageCircle size={20} strokeWidth={2.5} />
                Contact Us
              </Link>
              <button className="cta-secondary" data-testid="cta-see-how">
                <PlayCircle size={20} />
                See How It Works
              </button>
            </motion.div>

            <motion.div 
              className="hero-stats-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              data-testid="hero-stats"
            >
              <div className="glass-card hero-stats">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="stat-icon">{benefit.icon}</div>
                    <div className="stat-number">{benefit.number}</div>
                    <div className="stat-label">{benefit.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card automation-showcase">
              <div className="showcase-header">
                <div className="showcase-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="showcase-title">Workflow Engine</div>
              </div>
              <div className="automation-flow">
                <motion.div 
                  className="flow-node node-1"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <GitBranch size={20} />
                  <span>Trigger</span>
                </motion.div>
                
                <motion.div 
                  className="flow-connector"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="connector-pulse"></div>
                </motion.div>
                
                <motion.div 
                  className="flow-node node-2"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Cpu size={20} />
                  <span>Process</span>
                </motion.div>
                
                <motion.div 
                  className="flow-connector"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="connector-pulse" style={{ animationDelay: '0.5s' }}></div>
                </motion.div>
                
                <motion.div 
                  className="flow-node node-3"
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Check size={20} />
                  <span>Complete</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section" data-testid="what-we-do-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" data-testid="section-title">What We Do</h2>
            <p className="section-subtitle" data-testid="section-subtitle">
              We specialize in building custom automation solutions that eliminate repetitive work
              and accelerate your business operations
            </p>
          </motion.div>

          <motion.div 
            className="typing-showcase-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="glass-card typing-showcase">
              <div className="typing-header">
                <LayoutDashboard size={24} className="typing-icon" />
                <span>Building</span>
              </div>
              <TypingAnimation 
                text="automations that you need"
                className="typing-text"
              />
            </div>
          </motion.div>

          <div className="services-grid">
            {automationServices.map((service, index) => (
              <motion.div 
                key={index}
                className="glass-card service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                data-testid={`service-card-${index}`}
              >
                <div className="service-glow"></div>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-link">
                  Learn more <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Do For You */}
      <section className="for-you-section" data-testid="for-you-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" data-testid="for-you-title">What We Can Do For You</h2>
            <p className="section-subtitle" data-testid="for-you-subtitle">
              Real automation solutions delivering measurable results across departments
            </p>
          </motion.div>

          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                className="glass-card use-case-card"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ x: 4, transition: { duration: 0.3 } }}
                data-testid={`use-case-${index}`}
              >
                <div className="use-case-header">
                  <div className="use-case-role">{useCase.role}</div>
                  <TrendingUp className="use-case-trend" size={20} />
                </div>
                <div className="use-case-task">{useCase.task}</div>
                <div className="use-case-result">
                  <Check size={16} />
                  {useCase.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section" data-testid="cta-section">
        <div className="cta-background-effects">
          <div className="cta-orb cta-orb-1"></div>
          <div className="cta-orb cta-orb-2"></div>
        </div>
        <motion.div 
          className="glass-card cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title" data-testid="cta-title">
            Ready to Eliminate Repetitive Work?
          </h2>
          <p className="cta-text" data-testid="cta-text">
            Let's discuss how automation can transform your operations and free up your team's time
          </p>
          <Link to="/contact" className="cta-button" data-testid="cta-contact-button">
            <MessageCircle size={20} strokeWidth={2.5} />
            Contact Us Now
          </Link>
          <div className="cta-note">No commitment required • Free consultation</div>
        </motion.div>
      </section>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-container" data-testid="contact-page">
      <div className="contact-background-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="contact-header">
          <h1 className="contact-title" data-testid="contact-title">
            Let's Automate Your Workflow
          </h1>
          <p className="contact-subtitle" data-testid="contact-subtitle">
            Get in touch to discover how Simr can eliminate repetitive tasks
            and accelerate your business operations
          </p>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="glass-card contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="info-title">Get In Touch</h3>
            <p className="info-text">
              We'll help you:
            </p>
            
            <div className="consultation-points">
              <div className="point-item">
                <Check size={20} className="point-icon" />
                <span>Analyze your current workflows</span>
              </div>
              <div className="point-item">
                <Check size={20} className="point-icon" />
                <span>Identify automation opportunities</span>
              </div>
              <div className="point-item">
                <Check size={20} className="point-icon" />
                <span>Design custom automation solutions</span>
              </div>
            </div>
            
            <div className="contact-details">
              <div className="detail-item" data-testid="contact-email">
                <Mail size={20} className="detail-icon" />
                <div>
                  <div className="detail-label">Email</div>
                  <div className="detail-value">hello@simr.ai</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card calendar-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="calendar-placeholder" data-testid="calendar-placeholder">
              <Calendar className="calendar-icon" size={48} />
              <h3 className="calendar-title">Interactive Calendar</h3>
              <p className="calendar-text">Booking system coming soon</p>
              <p className="calendar-note">Contact us via email for immediate assistance</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="global-liquid-glass" data-us-project="ZXd9D6ZoiaFRXfE7c75E"></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
