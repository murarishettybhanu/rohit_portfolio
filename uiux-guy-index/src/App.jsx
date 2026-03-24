import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import { Quote } from 'lucide-react';

function App() {
  return (
    <div className="purple-gradient-bg">
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      
      {/* Other Works Section */}
      <section className="container section-padding">
        <h2 style={{ fontSize: '14px', letterSpacing: '0.2em', color: 'var(--text-secondary)', marginBottom: '40px' }}>OTHER WORKS</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {['TRANSFORMING SPACES', 'INSPIRING MOVEMENT'].map((title, i) => (
            <div key={i} className="glass" style={{
              height: '350px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                zIndex: 1,
              }}></div>
              <h4 style={{ fontSize: '24px', position: 'relative', zIndex: 2 }}>{title}</h4>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '2px', backgroundColor: 'var(--accent-yellow)', width: '100%', margin: '100px 0' }}></div>

      <About />

      {/* Quote Section */}
      <section className="container section-padding" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Quote size={64} color="var(--accent-yellow)" style={{ marginBottom: '32px', opacity: 0.5 }} />
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: 'var(--text-secondary)', fontStyle: 'italic', fontWeight: '400', lineHeight: '1.4' }}>
            "Design is like finding 'x' in math, UX defines the step-by-step path to 'x', Product design ensures that path is clear, simple, and effortless for the user."
          </h2>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container section-padding" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '40px' }}>Let's build something<br />meaningful.</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Open for opportunities where product thinking<br />meets visual design and complexity.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
           <button style={{ backgroundColor: 'white', color: 'black', padding: '16px 32px', borderRadius: '100px', fontWeight: '700' }}>Get in touch</button>
           <button className="glass" style={{ padding: '16px 32px', borderRadius: '100px', color: 'white' }}>View Resume</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
