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
      {/* Split hero: the product shot is portrait (4:5), so it sits in its own
          column at its natural proportion instead of being cropped to fill a
          full-width landscape band. */}
      <div style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 'clamp(32px, 4.4vw, 54px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              margin: '0 0 28px 0',
            }}>
              Finest Cotton.<br />Handcrafted Embroidery.
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
                boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.35)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Shop Now
            </a>
          </div>

          <div className="hero-media">
            <img
              src="/assets/products/black-lotus-embroidered.jpg"
              alt="The Royal Lotus black shirt with gold-thread lotus embroidery"
              /* `contain` so the full garment is always visible, whatever
                 aspect ratio the image is swapped for later. */
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
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
                <Icon size={16} color="var(--accent)" /> {label}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-grid {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(40px, 5vw, 72px) 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
        }
        .hero-media {
          width: 100%;
          max-width: 460px;
          aspect-ratio: 4 / 5;
          margin-left: auto;
          border-radius: 16px;
          overflow: hidden;
          background-color: var(--bg-card);
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 32px;
            padding: 32px 1.5rem 40px;
          }
          /* Product leads on small screens; the CTA sits directly beneath it. */
          .hero-media { order: -1; max-width: 340px; margin: 0 auto; }
        }
        @media (max-width: 480px) {
          .hero-media { max-width: 280px; }
          .feature-divider { display: none; }
        }
      `}} />
    </section>
  );
}
