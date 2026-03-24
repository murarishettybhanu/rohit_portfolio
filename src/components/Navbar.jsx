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
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      if (location.pathname !== '/') {
        setActiveSection('')
        return
      }

      // Near the very top = Home
      if (scrollY < 100) {
        setActiveSection('')
        return
      }

      // Use viewport midpoint to determine current section
      const midpoint = window.innerHeight / 2
      const sections = ['contact', 'about', 'work']
      let current = ''

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= midpoint && rect.bottom > midpoint) {
            current = section
            break
          }
        }
      }

      // Fallback: which section top is closest above midpoint
      if (!current) {
        let best = null
        let bestDist = Infinity
        for (const section of ['work', 'about', 'contact']) {
          const el = document.getElementById(section)
          if (el) {
            const rect = el.getBoundingClientRect()
            const dist = midpoint - rect.top
            if (dist > 0 && dist < bestDist) {
              bestDist = dist
              best = section
            }
          }
        }
        current = best || ''
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

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
