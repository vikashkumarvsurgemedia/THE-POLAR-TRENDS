import React, { useState } from 'react';
import { CITY_LOOKBOOKS } from '../data/products';

function LookbookCard({ lb }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          height: '340px',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <img 
          src={lb.image} 
          alt={lb.city} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.4s ease'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          padding: '20px'
        }}>
          <h3 style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '20px',
            fontWeight: 600,
            color: '#FFFFFF',
            margin: 0
          }}>
            {lb.city}
          </h3>
        </div>
      </div>
      
      <div style={{ padding: '0 4px' }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '13px',
          color: 'var(--text-body)',
          margin: '0 0 8px 0',
          lineHeight: 1.5
        }}>
          {lb.description}
        </p>
        <a 
          href="#catalog"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--accent-ink)',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Explore &rarr;
        </a>
      </div>
    </div>
  );
}

export default function Lookbook() {
  return (
    <section style={{ backgroundColor: 'var(--bg-primary)', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '32px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          textAlign: 'center',
          margin: '0 0 40px 0'
        }}>
          Shop By Collection
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {CITY_LOOKBOOKS.map((lb, idx) => (
            <LookbookCard key={idx} lb={lb} />
          ))}
        </div>

      </div>
    </section>
  );
}
