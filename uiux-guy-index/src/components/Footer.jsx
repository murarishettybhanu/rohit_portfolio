import React from 'react';

const Footer = () => {
  return (
    <footer className="container" style={{
      padding: '40px 0',
      borderTop: '1px solid var(--glass-border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '100px',
    }}>
      <div style={{ fontWeight: '900', fontSize: '20px' }}>rk<span style={{ color: 'var(--accent-yellow)' }}>.</span></div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
        © 2024 Rohit Sri Kumar. All Rights Reserved.
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>LinkedIn</a>
        <a href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Twitter</a>
        <a href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Dribbble</a>
      </div>
    </footer>
  );
};

export default Footer;
