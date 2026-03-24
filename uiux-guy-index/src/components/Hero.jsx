import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="container section-padding purple-gradient-bg" style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '80px',
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="gradient-text"
        style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          lineHeight: '1',
          marginBottom: '24px',
          maxWidth: '1000px',
        }}
      >
        Designing clarity<br />from complexity.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{
          color: 'var(--text-secondary)',
          fontSize: '18px',
          maxWidth: '600px',
          marginBottom: '40px',
        }}
      >
        UiUx | Brand Designer Specializing in Building User Centered Designs & Digital Experiences for your Ideas.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ display: 'flex', gap: '16px' }}
      >
        <button style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '16px 32px',
          borderRadius: '100px',
          fontWeight: '700',
        }}>View Case Studies</button>
        <button className="glass" style={{
          padding: '16px 32px',
          borderRadius: '100px',
          fontWeight: '700',
          color: 'white',
        }}>Work Together</button>
      </motion.div>
    </section>
  );
};

export default Hero;
