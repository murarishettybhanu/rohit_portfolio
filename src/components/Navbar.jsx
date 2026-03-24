import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import rkLogo from '../assets/rk-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      if (window.location.pathname === '/') {
        const sections = ['work', 'about', 'contact']
        let current = ''
        
        for (const section of sections) {
          const el = document.getElementById(section)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 250 && rect.bottom >= 150) {
              current = section
            }
          }
        }
        
        setActiveSection(current)
      } else {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash.replace('#', '')
      if (hash) {
        setActiveSection(hash)
      } else if (window.scrollY < 100) {
        setActiveSection('')
      }
    } else {
      setActiveSection('')
    }
  }, [location])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="nav-pill">
        {/* Logo & Name */}
        <Link to="/" className="nav-logo">
          <img src={rkLogo} alt="RK Logo" className="nav-brand-img" />
          <div className="nav-name-gradient">
            <span>Rohit Sri</span>
            <span>Kumar</span>
          </div>
        </Link>
        
        {/* Availability Badge */}
        <div className="nav-badge-available">
            <span className="nav-pulse-dot"></span>
            for hire
        </div>

        {/* Nav Links */}
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname==='/' && !activeSection ? 'nav-link--active' : ''}`}>Home</Link>
          <a href="/#work" className={`nav-link ${activeSection === 'work' ? 'nav-link--active' : ''}`}>Work</a>
          <a href="/#about" className={`nav-link ${activeSection === 'about' ? 'nav-link--active' : ''}`}>About</a>
          <a href="/#contact" className={`nav-link ${activeSection === 'contact' ? 'nav-link--active' : ''}`}>Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}
