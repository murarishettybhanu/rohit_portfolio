import React from 'react';
import { Eye, Shield, Cpu, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Eye size={32} />, title: 'Visual Strength', desc: 'Crafting visually stunning designs that captivate and engage users.' },
    { icon: <Shield size={32} />, title: 'Problem Solving', desc: 'Analyzing complex challenges and delivering intuitive solutions.' },
    { icon: <Cpu size={32} />, title: 'System & Process Thinking', desc: 'Building scalable design systems and efficient workflows.' },
    { icon: <Zap size={32} />, title: 'Competitive Edge', desc: 'Staying ahead of trends to provide cutting-edge digital experiences.' },
  ];

  return (
    <section id="about" className="container section-padding">
       <h2 style={{ fontSize: '14px', letterSpacing: '0.2em', color: 'var(--text-secondary)', marginBottom: '60px' }}>ABOUT</h2>
       
       <div style={{
         display: 'grid',
         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
         gap: '60px',
         alignItems: 'start',
       }}>
         {/* Profile Section */}
         <div>
            <div style={{ position: 'relative', width: '280px', height: '280px', marginBottom: '32px' }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px',
                    backgroundColor: '#1E1E1E',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Placeholder for Profile Image */}
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '200px',
                        height: '240px',
                        backgroundColor: '#333',
                        borderRadius: '50% 50% 0 0',
                    }}></div>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'var(--accent-yellow)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: -1,
                }}></div>
            </div>
            
            <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>Rohit Sri Kumar</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Product & UI/UX Designer</p>
            
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '400px' }}>
               A designer who believes in clarity, simplicity, and purpose. I build products that don't just look good but perform exceptionally.
            </p>
         </div>

         {/* Skills Grid */}
         <div style={{
           display: 'grid',
           gridTemplateColumns: 'repeat(2, 1fr)',
           gap: '24px',
         }}>
           {skills.map((skill, index) => (
             <div key={index} className="glass" style={{
               padding: '32px',
               display: 'flex',
               flexDirection: 'column',
               gap: '16px',
             }}>
               <div style={{ color: 'var(--accent-yellow)' }}>{skill.icon}</div>
               <h4 style={{ fontSize: '18px' }}>{skill.title}</h4>
               <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{skill.desc}</p>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
};

export default About;
