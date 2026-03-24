import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
  return (
    <section id="work" className="container section-padding">
      <h2 style={{ fontSize: '14px', letterSpacing: '0.2em', color: 'var(--text-secondary)', marginBottom: '40px' }}>WORK</h2>
      
      <div className="glass" style={{
        padding: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Left Side: Text */}
        <div>
          <h3 style={{ fontSize: '48px', marginBottom: '16px' }}>honc</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '24px' }}>The Car App</p>
          
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ color: '#FF5252', fontSize: '14px', marginBottom: '8px' }}>The Problem</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Car owners face frustration and lack of reliable mechanics, leading to delayed maintenance and uncertainty about vehicle health.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ color: '#4CAF50', fontSize: '14px', marginBottom: '8px' }}>The Solution</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              A seamless platform that connects car owners with verified mechanics for doorstep services, providing real-time tracking and transparent pricing.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#4CAF50' }}>10%</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>User Growth</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#4CAF50' }}>60%</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Efficiency Boost</div>
            </div>
          </div>

          <button className="glass" style={{
            padding: '12px 24px',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'white',
          }}>
            Full Case Study <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Right Side: Mockup Placeholder */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: '400px',
        }}>
           <div style={{
             width: '200px',
             height: '400px',
             backgroundColor: '#1A1A1A',
             borderRadius: '32px',
             border: '6px solid #333',
             position: 'relative',
             overflow: 'hidden',
             boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
           }}>
             <div style={{ padding: '20px' }}>
                <div style={{ width: '100%', height: '150px', backgroundColor: '#333', borderRadius: '12px', marginBottom: '16px' }}></div>
                <div style={{ width: '70%', height: '12px', backgroundColor: '#444', borderRadius: '6px', marginBottom: '8px' }}></div>
                <div style={{ width: '50%', height: '12px', backgroundColor: '#444', borderRadius: '6px' }}></div>
             </div>
           </div>
           {/* Floating UI Elements */}
           <div className="glass" style={{
             position: 'absolute',
             top: '10%',
             right: '5%',
             padding: '12px',
             borderRadius: '12px',
             width: '120px',
             fontSize: '10px',
           }}>
             Driver arriving in 5 mins
           </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
