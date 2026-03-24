import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '800px',
      zIndex: 1000,
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontWeight: '900', fontSize: '20px' }}>rk<span style={{ color: 'var(--accent-yellow)' }}>.</span></div>
      
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <div className="nav-links" style={{ display: 'none', gap: '32px' }}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
        </div>
        <button style={{ color: 'white' }}>
          <Menu size={24} />
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .nav-links { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
