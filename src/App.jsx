import React, { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

// ---- NAV ----
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Products', 'Story', 'Team', 'Contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-logo">
        <span className="logo-aether">Aatheria</span>
        <span className="logo-dot">.</span>
      </a>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Get in Touch</a>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
    </nav>
  )
}

// ---- HERO ----
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow animate-fade-up delay-1">Melbourne, Australia · Est. March 2026</p>
        <h1 className="hero-headline animate-fade-up delay-2">
          Where Hospitality<br />
          <em>Meets Intelligence</em>
        </h1>
        <p className="hero-sub animate-fade-up delay-3">
          We craft purposeful technology that brings hotels and guests together — 
          elevating every moment of the stay experience.
        </p>
        <div className="hero-actions animate-fade-up delay-4">
          <a href="#products" className="btn-primary">Explore Our Products</a>
          <a href="#about" className="btn-ghost">Our Story</a>
        </div>
      </div>
      <div className="hero-badge animate-fade-up delay-5">
        <span>★</span>
        <span>Proudly Australian</span>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

// ---- ABOUT / STORY ----
function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-label">Our Story</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-heading">Born to Push<br /><em>the Envelope</em></h2>
            <p>
              Aatheria was born from a desire to push the envelope in everything we are passionate about. 
              It is the desire to go one step further — not because it might be easy, but because it is hard. 
              This is a choice we live and breathe at Aatheria.
            </p>
            <p>
              This is a choice that galvanises our team and drives our vision, mission and our culture. 
              <strong> We aim for the Stars.</strong>
            </p>
            <p>
              Based in the vibrant city of Melbourne, we combine local innovation with global ambitions 
              to deliver on our desires and vision. Our flagship product, HappyStay, represents the 
              culmination of extensive industry research, technological expertise and our desire to push 
              the boundaries and make a marked difference within the industry.
            </p>
          </div>
          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon">👁️</div>
              <h3>Vision</h3>
              <p>To be the leader in bringing the power of convenience to hospitality and beyond.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🎯</div>
              <h3>Mission</h3>
              <p>Bringing hotels and guests together through the deliberate application of custom technology.</p>
            </div>
            <div className="pillar-card culture-card">
              <div className="pillar-icon">🌟</div>
              <h3>Culture</h3>
              <p>Built on three key pillars:</p>
              <ul>
                <li>The Responsible Use of Technology</li>
                <li>Nurturing and Empowering Our People</li>
                <li>Doing Good for the World</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- PRODUCTS ----
function Products() {
  const [active, setActive] = useState('happystay')

  const products = {
    happystay: {
      name: 'HappyStay',
      tagline: 'The Guest Experience App',
      description: 'A seamless mobile application that empowers hotel guests to manage every aspect of their stay — all from their fingertips.',
      color: '#C9A84C',
      features: [
        { icon: '🏨', label: 'Check-In & Check-Out' },
        { icon: '🛎️', label: 'Room Service' },
        { icon: '👔', label: 'Laundry Service' },
        { icon: '⏰', label: 'Wake-Up Call' },
        { icon: '📄', label: 'Itemised Bill & Projection' },
        { icon: '🍽️', label: 'Restaurant Service' },
        { icon: '🚖', label: 'Cab Service' },
        { icon: '💆', label: 'Spa Booking' },
        { icon: '👨‍⚕️', label: 'Doctor on Call' },
        { icon: '🔄', label: 'Extend Stay' },
        { icon: '🎟️', label: 'Loyalty Vouchers' },
        { icon: '📋', label: 'Previous Stay History' },
      ],
      extras: 'Repeat guests receive exclusive vouchers redeemable during their current stay. HappyStay connects seamlessly to HappyManager and integrates with existing hotel CRMs via smart connectors.'
    },
    happymanager: {
      name: 'HappyManager',
      tagline: 'The AI-Powered Hotel CRM',
      description: 'A fully customisable CRM that puts the power of AI into hotel operations — managing reservations, service requests, and guest experience intelligently.',
      color: '#132240',
      features: [
        { icon: '📊', label: 'Reservation Management' },
        { icon: '🤖', label: 'AI Sentiment Analysis' },
        { icon: '🔔', label: 'Automated Notifications' },
        { icon: '📋', label: 'Service Request Tracking' },
        { icon: '⚙️', label: 'Custom Workflows' },
        { icon: '🔗', label: 'CRM Connectors' },
        { icon: '📈', label: 'Operational Analytics' },
        { icon: '🌐', label: 'HappyStay Integration' },
      ],
      extras: 'Fully customisable for any hotel property. Connect with existing CRM platforms via robust API connectors, or use the native HappyStay integration for an end-to-end solution.'
    }
  }

  const p = products[active]

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-label">Our Products</div>
        <h2 className="section-heading centered">Technology That <em>Elevates</em></h2>

        <div className="product-tabs">
          <button
            className={`product-tab ${active === 'happystay' ? 'active' : ''}`}
            onClick={() => setActive('happystay')}
          >
            <span className="tab-icon">📱</span>
            HappyStay
            <small>Guest App</small>
          </button>
          <button
            className={`product-tab ${active === 'happymanager' ? 'active' : ''}`}
            onClick={() => setActive('happymanager')}
          >
            <span className="tab-icon">🖥️</span>
            HappyManager
            <small>Hotel CRM</small>
          </button>
        </div>

        <div className="product-detail" key={active}>
          <div className="product-info">
            <div className="product-badge" style={{ color: p.color }}>
              {p.tagline}
            </div>
            <h3 className="product-name">{p.name}</h3>
            <p className="product-desc">{p.description}</p>
            <p className="product-extras">{p.extras}</p>
            {active === 'happystay' && (
              <div className="integration-note">
                <span className="int-icon">🔗</span>
                <span>Works seamlessly with <strong>HappyManager</strong> or your existing CRM via connectors</span>
              </div>
            )}
          </div>
          <div className="product-features">
            <div className="features-grid">
              {p.features.map((f, i) => (
                <div className="feature-chip" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className="feature-chip-icon">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ecosystem visual */}
        <div className="ecosystem">
          <div className="eco-card eco-guest">
            <div className="eco-icon">📱</div>
            <strong>HappyStay</strong>
            <span>Guest App</span>
          </div>
          <div className="eco-arrows">
            <div className="eco-arrow">⟷</div>
            <span className="eco-label">Seamless Sync</span>
          </div>
          <div className="eco-card eco-hotel">
            <div className="eco-icon">🖥️</div>
            <strong>HappyManager</strong>
            <span>Hotel CRM</span>
          </div>
          <div className="eco-arrows">
            <div className="eco-arrow">⟷</div>
            <span className="eco-label">API Connectors</span>
          </div>
          <div className="eco-card eco-existing">
            <div className="eco-icon">🔗</div>
            <strong>Existing CRM</strong>
            <span>Your Platform</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- TEAM ----
function Team() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-label">Our Team</div>
        <h2 className="section-heading">Meet the <em>Founder</em></h2>
        <div className="team-grid">
          <div className="founder-card">
            <div className="founder-image-wrap">
              <img src="/nav.jpg" alt="Nav — Founder & CEO of Aatheria" className="founder-image" />
              <div className="founder-image-glow"></div>
            </div>
            <div className="founder-info">
              <h3>Nav</h3>
              <p className="founder-title">Founder & CEO</p>
              <p className="founder-bio">
                Nav founded Aatheria in March 2026 with a singular drive: to make hospitality more human through technology. 
                With a passion for innovation and a deep understanding of the hotel industry, Nav built Aatheria on the belief 
                that the best technology disappears into the background — leaving only exceptional experiences in its wake.
              </p>
              <div className="founder-quote">
                <span className="quote-mark">"</span>
                We don't build technology for technology's sake. We build it because we care about the difference it makes.
                <span className="quote-mark">"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- STATS ----
function Stats() {
  const items = [
    { value: '2026', label: 'Founded' },
    { value: '2', label: 'Flagship Products' },
    { value: 'AI', label: 'Powered CRM' },
    { value: '∞', label: 'Ambition' },
  ]
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {items.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- CONTACT ----
// EmailJS config — replace these with your own values from emailjs.com
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EMPTY_FORM = { name: '', email: '', company: '', message: '' }

function Contact() {
  const [form, setForm]       = useState(EMPTY_FORM)
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const formRef               = useRef(null)

  // ---- Validation ----
  function validate(fields) {
    const errs = {}
    if (!fields.name.trim())
      errs.name = 'Your name is required.'
    if (!fields.email.trim())
      errs.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Please enter a valid email address.'
    if (!fields.message.trim())
      errs.message = 'Please tell us a little about your needs.'
    else if (fields.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setStatus('sending')

    try {
      // Dynamically import EmailJS so bundle stays lean
      const emailjs = await import('@emailjs/browser')

      // Initialize once
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Template params — these must match your EmailJS template variables
      const templateParams = {
        from_name:    form.name,
        from_email:   form.email,
        company:      form.company || 'Not provided',
        message:      form.message,
        reply_to:     form.email,
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

      setStatus('success')
      setForm(EMPTY_FORM)
      setErrors({})
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  function handleReset() {
    setStatus('idle')
    setErrors({})
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">

          {/* Left — text */}
          <div className="contact-text">
            <div className="section-label light">Contact</div>
            <h2 className="section-heading light">Ready to Transform<br /><em>Your Property?</em></h2>
            <p>
              Whether you're a hotel looking for a seamless guest experience platform,
              or a partner wanting to connect — we'd love to hear from you.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span>📍</span>
                <span>Melbourne, Victoria, Australia</span>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <span>hello@aatheria.com.au</span>
              </div>
            </div>
          </div>

          {/* Right — form / feedback */}
          <div className="contact-form-wrap">

            {/* SUCCESS */}
            {status === 'success' && (
              <div className="form-feedback success">
                <div className="feedback-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll be in touch with you very soon.</p>
                <button className="btn-primary" onClick={handleReset}>Send Another</button>
              </div>
            )}

            {/* ERROR */}
            {status === 'error' && (
              <div className="form-feedback error">
                <div className="feedback-icon">⚠️</div>
                <h3>Something went wrong</h3>
                <p>We couldn't send your message. Please try again or email us directly at <strong>hello@aatheria.com.au</strong></p>
                <button className="btn-primary" onClick={handleReset}>Try Again</button>
              </div>
            )}

            {/* FORM */}
            {(status === 'idle' || status === 'sending') && (
              <form className="contact-form" onSubmit={handleSubmit} noValidate ref={formRef}>

                <div className="form-group">
                  <label className="form-label">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={errors.name ? 'input-error' : ''}
                    disabled={status === 'sending'}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@yourhotel.com.au"
                    className={errors.email ? 'input-error' : ''}
                    disabled={status === 'sending'}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Hotel / Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Grand Melbourne Hotel"
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">How can we help? <span className="required">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property and what you're looking for..."
                    rows="4"
                    className={errors.message ? 'input-error' : ''}
                    disabled={status === 'sending'}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn-primary full ${status === 'sending' ? 'btn-sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="sending-text">
                      <span className="spinner"></span>Sending…
                    </span>
                  ) : 'Send Message'}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

// ---- FOOTER ----
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">Aatheria<span>.</span></div>
            <p>Bringing hotels and guests together through the deliberate application of custom technology.</p>
            <p className="footer-location">📍 Melbourne, Australia</p>
          </div>
          <div className="footer-links-col">
            <strong>Products</strong>
            <a href="#products">HappyStay</a>
            <a href="#products">HappyManager</a>
          </div>
          <div className="footer-links-col">
            <strong>Company</strong>
            <a href="#about">Our Story</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aatheria Pty Ltd. All rights reserved. ABN: — · Melbourne, Australia</span>
          <span>Built with ❤️ in Melbourne</span>
        </div>
      </div>
    </footer>
  )
}

// ---- APP ----
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
