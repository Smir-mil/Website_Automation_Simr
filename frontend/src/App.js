import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
  PlayCircle
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      transition={{ duration: 0.6, ease: 'easeOut' }}
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
          <Link to="/" className="nav-link" data-testid="nav-home-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/contact" className="nav-link" data-testid="nav-contact-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/contact" className="nav-cta" data-testid="nav-cta" onClick={() => setIsMenuOpen(false)}>
            Book Demo
            <ArrowRight size={16} />
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
      description: "Automate email workflows, responses, and campaign management. Handle thousands of emails without manual intervention.",
      delay: 0.1
    },
    {
      icon: <Database size={24} />,
      title: "Data Processing",
      description: "Transform, clean, and sync data across platforms automatically. Eliminate manual data entry and errors.",
      delay: 0.2
    },
    {
      icon: <Calendar size={24} />,
      title: "Scheduling & Reminders",
      description: "Automate appointment booking, meeting scheduling, and smart reminder systems that save hours weekly.",
      delay: 0.3
    },
    {
      icon: <FileText size={24} />,
      title: "Document Processing",
      description: "Extract, process, and organize documents automatically. Convert manual paperwork into streamlined digital workflows.",
      delay: 0.4
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Report Generation",
      description: "Automatically generate and distribute reports. Get insights delivered on schedule without lifting a finger.",
      delay: 0.5
    },
    {
      icon: <Users size={24} />,
      title: "Customer Service Automation",
      description: "Handle inquiries, tickets, and support requests automatically. Provide 24/7 service without human overhead.",
      delay: 0.6
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
        <div className="hero-content-wrapper">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-testid="hero-badge"
            >
              <span className="badge-dot"></span>
              Intelligent Business Automation
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              data-testid="hero-title"
            >
              Automate the Tasks
              <br />
              <span className="gradient-text">That Slow You Down</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              data-testid="hero-subtitle"
            >
              We build intelligent automation systems that handle your repetitive tasks,
              so your team can focus on what truly matters. From email workflows to data processing,
              we make automation effortless.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to="/contact" className="cta-primary" data-testid="cta-book-consultation">
                Schedule a Demo
                <ArrowRight size={20} strokeWidth={2.5} />
              </Link>
              <button className="cta-secondary" data-testid="cta-see-how">
                <PlayCircle size={20} />
                See How It Works
              </button>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              data-testid="hero-stats"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                >
                  <div className="stat-icon">{benefit.icon}</div>
                  <div className="stat-number">{benefit.number}</div>
                  <div className="stat-label">{benefit.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="automation-flow">
              <motion.div 
                className="flow-node node-1"
                animate={{ 
                  y: [0, -10, 0],
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
                className="flow-line line-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              
              <motion.div 
                className="flow-node node-2"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Settings size={20} />
                <span>Process</span>
              </motion.div>
              
              <motion.div 
                className="flow-line line-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              />
              
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
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section" data-testid="what-we-do-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" data-testid="section-title">What We Do</h2>
            <p className="section-subtitle" data-testid="section-subtitle">
              We specialize in building custom automation solutions that eliminate repetitive work
              and accelerate your business operations
            </p>
          </motion.div>

          <div className="services-grid">
            {automationServices.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                data-testid={`service-card-${index}`}
              >
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                className="use-case-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
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
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title" data-testid="cta-title">
            Ready to Eliminate Repetitive Work?
          </h2>
          <p className="cta-text" data-testid="cta-text">
            Let's discuss how automation can transform your operations and free up your team's time
          </p>
          <Link to="/contact" className="cta-button" data-testid="cta-contact-button">
            Book Your Free Consultation
            <ArrowRight size={20} strokeWidth={2.5} />
          </Link>
          <div className="cta-note">No commitment required • 30-minute consultation</div>
        </motion.div>
      </section>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-container" data-testid="contact-page">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-header">
          <h1 className="contact-title" data-testid="contact-title">
            Let's Automate Your Workflow
          </h1>
          <p className="contact-subtitle" data-testid="contact-subtitle">
            Schedule a consultation to discover how Simr can eliminate repetitive tasks
            and accelerate your business operations
          </p>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="info-title">Book Your Free Consultation</h3>
            <p className="info-text">
              In our 30-minute session, we'll:
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
                <span>Provide a custom automation roadmap</span>
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
            className="calendar-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="calendar-placeholder" data-testid="calendar-placeholder">
              <Calendar className="calendar-icon" size={48} />
              <h3 className="calendar-title">Interactive Calendar</h3>
              <p className="calendar-text">Calendar booking system coming soon</p>
              <p className="calendar-note">Contact us via email to schedule your consultation</p>
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
