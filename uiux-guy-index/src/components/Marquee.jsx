import React from 'react';

const Marquee = () => {
  const items = [
    "USER CENTERED", "DESIGN SYSTEMS", "PRODUCT STRATEGY", 
    "PROTOTYPING", "VISUAL DESIGN", "DATA DRIVEN", 
    "INTERACTION DESIGN", "BRAND IDENTITY"
  ];

  return (
    <div style={{
      width: '110%',
      height: '60px',
      backgroundColor: 'var(--accent-yellow)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      transform: 'rotate(-2deg) translateY(-20px)',
      marginLeft: '-5%',
      zIndex: 10,
      position: 'relative',
    }}>
      <div className="marquee-content" style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        fontWeight: '900',
        fontSize: '24px',
        color: 'black',
        gap: '40px',
        padding: '0 20px',
      }}>
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, index) => (
              <span key={index} style={{ flexShrink: 0 }}>
                • {item.toUpperCase()}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .marquee-content {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
