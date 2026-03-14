import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="nav-pill">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="nav-logo-icon">R</span>
          <div className="nav-logo-text">
            <span className="nav-name-line">Rohit</span>
            <span className="nav-name-line">Kumar</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="nav-links">
          <a href="/" className="nav-link nav-link--active">Home</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}
