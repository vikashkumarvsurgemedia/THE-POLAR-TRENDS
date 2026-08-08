import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#1C1C1C',
      color: '#FFFFFF',
      padding: '4rem 0 5rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden'
    }}>
      
      {/* Studio Background Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: High Fashion Luxury Editorial */}
          <div style={{ gridColumn: 'span 7' }} className="hero-left-col">
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid #D97706', paddingBottom: '0.4rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#A1A1AA', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                THE COTTON & EMBROIDERY ATELIER • EST. 2026
              </span>
            </div>

            {/* Haute Couture Title */}
            <h1 style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              marginBottom: '1.5rem'
            }}>
              FINEST COTTON.<br />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 400, color: '#A1A1AA' }}>
                Handcrafted Precision.
              </span>
            </h1>

            <p style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              lineHeight: 1.65,
              color: '#A1A1AA',
              maxWidth: '580px',
              marginBottom: '2.5rem',
              fontWeight: 400
            }}>
              Crafted from 100% long-staple Giza & Pima cotton yarn, embellished with up to 50,000 precision hand-stitches by master Indian needlework artisans. Designed for modern urban elegance.
            </p>

            {/* Editorial Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#catalog" className="btn-luxury" style={{ flex: '1 1 auto', textAlign: 'center' }}>
                <span>EXPLORE COLLECTION</span>
                <ArrowRight size={16} />
              </a>

              <a href="#custom-embroidery" className="btn-luxury-outline" style={{ flex: '1 1 auto', textAlign: 'center' }}>
                <span>BESPOKE INITIALS</span>
              </a>
            </div>

            {/* Editorial Spec Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="hero-spec-bar">
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.6rem', fontWeight: 700, color: '#FFFFFF' }} className="hero-spec-number">100%</div>
                <div style={{ fontSize: '0.68rem', color: '#A1A1AA', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem' }} className="hero-spec-label">Long-Staple Pima</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.6rem', fontWeight: 700, color: '#FFFFFF' }} className="hero-spec-number">50K+</div>
                <div style={{ fontSize: '0.68rem', color: '#A1A1AA', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem' }} className="hero-spec-label">Stitches Per Shirt</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.6rem', fontWeight: 700, color: '#FFFFFF' }} className="hero-spec-number">HANDMADE</div>
                <div style={{ fontSize: '0.68rem', color: '#A1A1AA', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem' }} className="hero-spec-label">In India</div>
              </div>
            </div>

          </div>

          {/* Right Product Showcase */}
          <div style={{ gridColumn: 'span 5', position: 'relative' }} className="hero-right-col">
            <div style={{
              backgroundColor: '#18181B',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.8rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}>
              <div style={{ position: 'relative', height: ' clamp(320px, 45vh, 460px)', overflow: 'hidden' }}>
                <img
                  src="/assets/products/black-lotus-embroidered.jpg"
                  alt="The Royal Lotus Black Shirt"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  PIECE NO. 01 • ATELIER EDIT
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  inset: 'auto 0 0 0',
                  background: 'linear-gradient(to top, rgba(28,28,28,0.95), transparent)',
                  padding: '1.5rem 1.2rem',
                  color: '#FFFFFF'
                }}>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.15rem', fontWeight: 700 }}>
                    The Royal Lotus Embroidered Shirt
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#A1A1AA', marginTop: '0.2rem', letterSpacing: '0.05em' }}>
                    ₹2,999 • 100% Washed Slub Cotton
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
