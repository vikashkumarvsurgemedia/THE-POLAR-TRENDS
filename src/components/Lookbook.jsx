import React from 'react';
import { CITY_LOOKBOOKS } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

export default function Lookbook() {
  return (
    <section id="lookbook" style={{ padding: '4.5rem 0', backgroundColor: '#F0EDE8', color: '#111111', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <span className="editorial-tag" style={{ marginBottom: '0.8rem' }}>
            URBAN EDITORIAL LOOKBOOK
          </span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, color: '#111111', marginTop: '0.6rem', marginBottom: '0.8rem' }}>
            Cities of Cotton & Culture
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: '#555555', lineHeight: 1.65 }}>
            An editorial visual journey across Kala Ghoda in Mumbai, Hauz Khas in Delhi, and Indiranagar in Bengaluru.
          </p>
        </div>

        {/* Lookbook Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="lookbook-grid">
          {CITY_LOOKBOOKS.map((lb, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', height: 'clamp(280px, 40vh, 380px)', overflow: 'hidden' }}>
                <img
                  src={lb.image}
                  alt={lb.city}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#111111', color: '#FFFFFF', padding: '0.35rem 0.8rem', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', border: '1px solid rgba(0,0,0,0.1)' }}>
                  {lb.city}
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#999999', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    {lb.location}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    {lb.description}
                  </p>
                </div>

                <div style={{ paddingTop: '0.8rem', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111111', letterSpacing: '0.08em' }}>
                    {lb.item}
                  </span>
                  <a
                    href="#catalog"
                    style={{
                      width: '36px',
                      height: '36px',
                      border: '1px solid rgba(0,0,0,0.15)',
                      color: '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
