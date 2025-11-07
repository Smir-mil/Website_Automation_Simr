import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Workflow, 
  BarChart3, 
  Cpu,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar" data-testid="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" data-testid="nav-logo">
          <Cpu className="logo-icon" />
          <span>Simr</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" data-testid="nav-home-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/contact" className="nav-link" data-testid="nav-contact-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>

        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="nav-toggle-button"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  const services = [
    {
      icon: <Brain className="service-icon" />,
      title: "Intelligent Automation",
      description: "Leverage cutting-edge AI to automate complex business processes and workflows with unprecedented accuracy."
    },
    {
      icon: <Workflow className="service-icon" />,
      title: "Workflow Optimization",
      description: "Transform your operations with smart automation that learns and adapts to your business needs in real-time."
    },
    {
      icon: <BarChart3 className="service-icon" />,
      title: "Data Intelligence",
      description: "Harness the power of AI-driven analytics to extract actionable insights from your data and drive informed decisions."
    },
    {
      icon: <Zap className="service-icon" />,
      title: "Lightning-Fast Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems with our plug-and-play automation solutions."
    },
    {
      icon: <Cpu className="service-icon" />,
      title: "Custom AI Models",
      description: "Deploy tailored AI models specifically designed for your industry and business requirements."
    },
    {
      icon: <Sparkles className="service-icon" />,
      title: "Process Innovation",
      description: "Reimagine your business processes with AI-powered solutions that unlock new levels of efficiency and innovation."
    }
  ];

  return (
    <div className="home-container" data-testid="home-page">
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-background">
          <div className="neural-grid"></div>
          <div className="floating-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge" data-testid="hero-badge">
            <Sparkles size={16} />
            <span>Next-Gen AI Automation</span>
          </div>
          
          <h1 className="hero-title" data-testid="hero-title">
            Automate the Future
            <span className="gradient-text"> with AI</span>
          </h1>
          
          <p className="hero-subtitle" data-testid="hero-subtitle">
            Transform your business with intelligent automation solutions that scale effortlessly. 
            We design, build, and deploy AI systems that revolutionize how you work.
          </p>
          
          <div className="hero-cta">
            <Link to="/contact" className="cta-primary" data-testid="cta-book-consultation">
              Book a Consultation
              <ArrowRight size={20} />
            </Link>
            <button className="cta-secondary" data-testid="cta-learn-more">
              Learn More
            </button>
          </div>

          <div className="hero-stats" data-testid="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10x</div>
              <div className="stat-label">Faster Processing</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Cost Reduction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" data-testid="services-section">
        <div className="section-header">
          <h2 className="section-title" data-testid="services-title">What We Do</h2>
          <p className="section-subtitle" data-testid="services-subtitle">
            Comprehensive AI automation solutions designed to elevate your business to new heights
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-testid={`service-card-${index}`}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-testid="cta-section">
        <div className="cta-content">
          <h2 className="cta-title" data-testid="cta-title">
            Ready to Transform Your Business?
          </h2>
          <p className="cta-text" data-testid="cta-text">
            Let's discuss how AI automation can revolutionize your operations
          </p>
          <Link to="/contact" className="cta-button" data-testid="cta-contact-button">
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="contact-container" data-testid="contact-page">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title" data-testid="contact-title">
            Let's Connect
          </h1>
          <p className="contact-subtitle" data-testid="contact-subtitle">
            Schedule a consultation to explore how Simr can transform your business with AI automation
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Book Your Appointment</h3>
            <p className="info-text">
              Select a date from the calendar to schedule your consultation. Our team will reach out to confirm your preferred time slot.
            </p>
            
            <div className="contact-details">
              <div className="detail-item" data-testid="contact-email">
                <div className="detail-label">Email</div>
                <div className="detail-value">hello@simr.ai</div>
              </div>
              <div className="detail-item" data-testid="contact-phone">
                <div className="detail-label">Phone</div>
                <div className="detail-value">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>

          <div className="calendar-wrapper">
            <div className="calendar-placeholder" data-testid="calendar-placeholder">
              <Sparkles className="calendar-icon" />
              <p>Calendar functionality coming soon</p>
              <p className="calendar-note">Select your preferred date for consultation</p>
            </div>
          </div>
        </div>
      </div>
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
