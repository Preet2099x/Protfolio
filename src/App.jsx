import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">My Portfolio</div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="cta-btn">Let's Talk</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Creative <span className="gradient-text">Portfolio</span></h1>
          <p className="hero-subtitle">Building stunning digital experiences with passion and innovation</p>
          <button className="hero-cta">View My Work</button>
        </div>
        <div className="hero-illustration">
          <div className="floating-box box-1"></div>
          <div className="floating-box box-2"></div>
          <div className="floating-box box-3"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>I'm a passionate designer and developer creating beautiful, functional digital products that make an impact.</p>
          <p>With expertise in UI/UX design, web development, and creative strategy, I help brands bring their vision to life.</p>
        </div>
        <div className="about-illustration">
          <div className="illustration-circle"></div>
          <div className="illustration-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How We Work</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Discover</h3>
            <p>Understanding your vision, goals, and target audience through in-depth consultation and research.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Creating beautiful, intuitive designs that capture your brand essence and delight your users.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Deliver</h3>
            <p>Building and launching your project with precision, ensuring quality and timely delivery.</p>
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="work-showcase">
        <h2>Recent Work</h2>
        <div className="work-grid">
          <div className="work-card">
            <div className="work-image gradient-1"></div>
            <h3>Mobile App Design</h3>
            <p>A beautifully crafted iOS app for streamlining productivity</p>
          </div>
          <div className="work-card">
            <div className="work-image gradient-2"></div>
            <h3>Brand Identity</h3>
            <p>Complete branding package for a startup tech company</p>
          </div>
          <div className="work-card">
            <div className="work-image gradient-3"></div>
            <h3>Web Experience</h3>
            <p>Interactive website featuring smooth animations and UX</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-card gradient-bg-1">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Crafting intuitive interfaces and delightful user experiences</p>
          </div>
          <div className="service-card gradient-bg-2">
            <div className="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Building responsive, performant websites and applications</p>
          </div>
          <div className="service-card gradient-bg-3">
            <div className="service-icon">✨</div>
            <h3>Brand Strategy</h3>
            <p>Developing compelling brand identities and strategies</p>
          </div>
          <div className="service-card gradient-bg-4">
            <div className="service-icon">📱</div>
            <h3>App Development</h3>
            <p>Creating feature-rich mobile apps that users love</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>Let's create something amazing. Get in touch and let's discuss your next project.</p>
        <button className="cta-button">Start Your Project</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  )
}

export default App
