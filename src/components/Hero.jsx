import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#1C1C1C',
      color: '#FFFFFF',
      padding: '6rem 0 7rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden'
    }}>
      
      {/* Subtle Studio Background Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Text Column: High Fashion Luxury Editorial */}
          <div style={{ gridColumn: 'span 7' }}>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid #D97706', paddingBottom: '0.4rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#A1A1AA', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                THE COTTON & EMBROIDERY ATELIER • EST. 2026
              </span>
            </div>

            {/* Haute Couture Title */}
            <h1 style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '4.2rem',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              marginBottom: '2rem'
            }}>
              FINEST COTTON.<br />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 400, color: '#A1A1AA' }}>
                Handcrafted Precision.
              </span>
            </h1>

            <p style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#A1A1AA',
              maxWidth: '580px',
              marginBottom: '3rem',
              fontWeight: 400
            }}>
              Crafted from 100% long-staple Giza & Pima cotton yarn, embellished with up to 50,000 precision hand-stitches by master Indian needlework artisans. Designed for modern urban elegance.
            </p>

            {/* Editorial Action Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#catalog" className="btn-luxury">
                <span>EXPLORE COLLECTION</span>
                <ArrowRight size={16} />
              </a>

              <a href="#custom-embroidery" className="btn-luxury-outline">
                <span>BESPOKE INITIALS</span>
              </a>
            </div>

            {/* Editorial Spec Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', fontWeight: 700, color: '#FFFFFF' }}>100%</div>
                <div style={{ fontSize: '0.72rem', color: '#A1A1AA', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Long-Staple Pima Cotton</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', fontWeight: 700, color: '#FFFFFF' }}>50K+</div>
                <div style={{ fontSize: '0.72rem', color: '#A1A1AA', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Stitches Per Shirt</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', fontWeight: 700, color: '#FFFFFF' }}>HANDMADE</div>
                <div style={{ fontSize: '0.72rem', color: '#A1A1AA', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.2rem' }}>In India</div>
              </div>
            </div>

          </div>

          {/* Right Product Showcase: Studio Framing */}
          <div style={{ gridColumn: 'span 5', position: 'relative' }}>
            
            <div style={{
              backgroundColor: '#18181B',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '1rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
            }}>
              
              <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
                <img
                  src="/assets/products/black-lotus-embroidered.jpg"
                  alt="The Royal Lotus Black Shirt"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Minimal Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  padding: '0.4rem 1rem',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
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
                  padding: '2rem 1.5rem',
                  color: '#FFFFFF'
                }}>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', fontWeight: 700 }}>
                    The Royal Lotus Embroidered Shirt
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#A1A1AA', marginTop: '0.2rem', letterSpacing: '0.05em' }}>
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
