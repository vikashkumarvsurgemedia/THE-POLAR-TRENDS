import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';

export default function FabricStory() {
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setZoomPos({ x, y });
  };

  return (
    <section id="fabric-story" style={{ padding: '4.5rem 0', backgroundColor: '#F0EDE8', color: '#111111', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <span className="editorial-tag" style={{ marginBottom: '0.8rem' }}>
            ATELIER CRAFTSMANSHIP STUDIO
          </span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, color: '#111111', marginTop: '0.6rem', marginBottom: '0.8rem' }}>
            The Pure Cotton & Embroidery Loupe
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: '#555555', lineHeight: 1.65 }}>
            Hover or drag your finger over the studio frame below to inspect the 50,000+ hand-finished silk thread stitches and long-staple cotton weave under 4x high-resolution magnification.
          </p>
        </div>

        {/* Studio Magnifier Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3.5rem',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          padding: '2.5rem',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }} className="loupe-container">
          
          {/* Left Magnifier Image Box */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ZoomIn size={15} color="#D97706" /> 4X HIGH-RESOLUTION INSPECTION LOUPE
            </div>

            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onTouchStart={() => setIsZooming(true)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsZooming(false)}
              style={{
                position: 'relative',
                height: 'clamp(300px, 45vh, 440px)',
                width: '100%',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: 'crosshair',
                touchAction: 'none'
              }}
            >
              <img
                src="/assets/products/white-kashmiri-floral.jpg"
                alt="Kashmiri Floral Embroidery Close-Up"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: isZooming ? 'scale(2.5)' : 'scale(1)',
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transition: isZooming ? 'none' : 'transform 0.5s ease'
                }}
              />

              {!isZooming && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(250, 249, 246, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111111',
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  pointerEvents: 'none',
                  textAlign: 'center',
                  padding: '1rem'
                }}>
                  HOVER OR DRAG FINGER TO MAGNIFY STITCHES
                </div>
              )}
            </div>
            <div style={{ fontSize: '0.7rem', color: '#777777', marginTop: '0.6rem', textAlign: 'center', letterSpacing: '0.08em' }}>
              IMAGE: THE KASHMIRI FLORAL WHITE COTTON SHIRT (80S GIZA COTTON)
            </div>
          </div>

          {/* Right Craftsmanship Specifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SPECIFICATION 01</span>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#111111', marginTop: '0.3rem', marginBottom: '0.6rem' }}>
                100% Long-Staple Giza & Pima Fibers
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.65 }}>
                Unlike short-staple commercial cotton that frays and traps heat, our 35mm+ long-staple yarns are woven into ultra-soft 60s and 80s count fabrics with high air permeability.
              </p>
            </div>

            <div style={{ padding: '1.2rem', backgroundColor: '#FAF9F6', borderLeft: '2px solid #D97706', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', color: '#111111', marginBottom: '0.4rem' }}>
                Jaipur & Kashmiri Needlework Protocol
              </div>
              <p style={{ fontSize: '0.82rem', color: '#555555', lineHeight: 1.55 }}>
                Every embroidery motif is locked using high-density silk-cotton threads, requiring 18 to 28 hours of artisan hand-finishing per shirt.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.2rem' }}>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', fontWeight: 700, color: '#111111' }}>0% POLYESTER</div>
                <div style={{ fontSize: '0.68rem', color: '#777777', letterSpacing: '0.08em' }}>PURE ORGANIC WEAVE</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', fontWeight: 700, color: '#111111' }}>PRE-SHRUNK</div>
                <div style={{ fontSize: '0.68rem', color: '#777777', letterSpacing: '0.08em' }}>WASHED FOR LONGEVITY</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
