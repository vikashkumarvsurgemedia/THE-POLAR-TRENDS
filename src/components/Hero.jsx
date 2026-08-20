import React, { useState } from 'react';
import { Truck, RotateCcw, PenTool, Droplet } from 'lucide-react';

const FEATURES = [
  { Icon: Droplet, label: '100% Cotton' },
  { Icon: PenTool, label: 'Handcrafted' },
  { Icon: Truck, label: 'Free Shipping' },
  { Icon: RotateCcw, label: 'Easy Returns' },
];

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      {/* Full-bleed banner. The source photo is portrait, so `cover` always
          crops it — `background-position: center 32%` puts the crop on the
          collar and embroidered placket rather than slicing through the middle. */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(460px, 72vh, 720px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          `linear-gradient(rgba(4,10,32,0.34), rgba(4,10,32,0.62)), url('/assets/products/black-lotus-embroidered.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 32%',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
      }}>
        <h1 style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: 'clamp(30px, 5vw, 52px)',
          fontWeight: 600,
          color: '#FFFFFF',
          maxWidth: '640px',
          textAlign: 'center',
          lineHeight: 1.14,
          letterSpacing: '-0.01em',
          textShadow: '0 2px 18px rgba(0,0,0,0.35)',
          margin: '0 0 30px 0',
        }}>
          Finest Cotton. Handcrafted Embroidery.
        </h1>

        <a
          href="#collection"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: isHovered ? 'var(--accent-hover)' : 'var(--accent)',
            color: '#FFFFFF',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '6px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textDecoration: 'none',
            cursor: 'pointer',
            transform: isHovered ? 'translateY(-2px)' : 'none',
            boxShadow: isHovered ? '0 8px 22px rgba(0,0,0,0.4)' : '0 2px 10px rgba(0,0,0,0.25)',
            transition: 'all 0.3s ease',
          }}
        >
          Shop Now
        </a>
      </div>

      {/* Features Bar */}
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
        padding: '16px 0',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          maxWidth: '1000px',
          width: '100%',
        }}>
          {FEATURES.map(({ Icon, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && (
                <div className="feature-divider" style={{ width: '1px', height: '16px', backgroundColor: 'var(--border-strong)' }} />
              )}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-body)',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12px',
              }}>
                <Icon size={16} color="var(--accent-ink)" /> {label}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 480px) {
          .feature-divider { display: none; }
        }
      `}} />
    </section>
  );
}
