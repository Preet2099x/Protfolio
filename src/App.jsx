import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setScrollProgress(currentProgress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Preet Singh</div>
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
          <div className="hero-greeting">👋 Hello, I'm Preet Singh</div>
          <h1>Creative <span className="gradient-text">Designer</span> & Developer</h1>
          <p className="hero-subtitle">Crafting exceptional digital experiences through innovative design and clean code. Transforming ideas into stunning realities.</p>
          <div className="hero-buttons">
            <button className="hero-cta primary">View My Work</button>
            <button className="hero-cta secondary">Let's Talk</button>
          </div>
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
          <div className="section-label">WHO I AM</div>
          <h2>About Me</h2>
          <p>I'm a passionate designer and developer creating beautiful, functional digital products that make an impact.</p>
          <p>With expertise in UI/UX design, web development, and creative strategy, I help brands bring their vision to life.</p>
          
          {/* Skills */}
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skill-bars">
              <div className="skill-item">
                <div className="skill-header">
                  <span>UI/UX Design</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Web Development</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>React & JavaScript</span>
                  <span>88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Brand Strategy</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-illustration">
          <div className="illustration-circle"></div>
          <div className="illustration-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          
          {/* Tech Stack */}
          <div className="tech-stack">
            <div className="tech-item">React</div>
            <div className="tech-item">TypeScript</div>
            <div className="tech-item">Node.js</div>
            <div className="tech-item">Figma</div>
            <div className="tech-item">CSS3</div>
            <div className="tech-item">MongoDB</div>
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Awards Won</div>
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="work-showcase">
        <div className="section-label">PORTFOLIO</div>
        <h2>Featured Projects</h2>
        <p className="section-description">A selection of my recent work showcasing creative solutions and technical excellence</p>
        <div className="work-grid">
          <div className="work-card">
            <div className="work-image gradient-1">
              <div className="work-overlay">
                <button className="view-project">View Project →</button>
              </div>
            </div>
            <div className="work-tag">Mobile App</div>
            <h3>FinTech Mobile App</h3>
            <p>A beautifully crafted iOS app for streamlining productivity and financial tracking</p>
          </div>
          <div className="work-card">
            <div className="work-image gradient-2">
              <div className="work-overlay">
                <button className="view-project">View Project →</button>
              </div>
            </div>
            <div className="work-tag">Branding</div>
            <h3>Brand Identity System</h3>
            <p>Complete branding package for a startup tech company including logo and guidelines</p>
          </div>
          <div className="work-card">
            <div className="work-image gradient-3">
              <div className="work-overlay">
                <button className="view-project">View Project →</button>
              </div>
            </div>
            <div className="work-tag">Web Design</div>
            <h3>Interactive Website</h3>
            <p>Modern website featuring smooth animations, micro-interactions and intuitive UX</p>
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

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-label">CLIENT FEEDBACK</div>
        <h2>What Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">"Working with Preet was an absolute pleasure. The attention to detail and creative vision exceeded our expectations. Highly recommended!"</p>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div>
                <div className="author-name">John Smith</div>
                <div className="author-role">CEO, Tech Startup</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">"Incredible work! The project was delivered on time with exceptional quality. A true professional who understands both design and business needs."</p>
            <div className="testimonial-author">
              <div className="author-avatar">SJ</div>
              <div>
                <div className="author-name">Sarah Johnson</div>
                <div className="author-role">Marketing Director</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">"Outstanding creativity and technical skills. Preet transformed our vision into a stunning reality. Can't wait to work together again!"</p>
            <div className="testimonial-author">
              <div className="author-avatar">MR</div>
              <div>
                <div className="author-name">Michael Rodriguez</div>
                <div className="author-role">Founder, Creative Agency</div>
              </div>
            </div>
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
        <p>&copy; 2024 Preet Singh. All rights reserved.</p>
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
