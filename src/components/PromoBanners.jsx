import React from 'react';

/* Featured categories.

   Four tall image tiles, hairline-separated, with the label set over the
   base of each photograph. Portrait crops and a slow zoom on hover; no
   captions, no descriptions, no card chrome. The label and the garment are
   the entire content — which is the whole point of an image-led index. */

const TILES = [
  { category: 'Embroidery Edit',      label: 'Embroidery',  image: '/assets/products/black-lotus-embroidered.jpg' },
  { category: 'Pure Whites',          label: 'Pure Whites', image: '/assets/products/white-kashmiri-floral.jpg' },
  { category: 'Artisan Checks',       label: 'Checks',      image: '/assets/products/terracotta-artisan-check.jpg' },
  { category: 'Everyday Essentials',  label: 'Essentials',  image: '/assets/products/sage-star-stitch.jpg' }
];

export default function PromoBanners({ setActiveCategory }) {
  return (
    <section id="categories" className="section" style={{ backgroundColor: 'var(--paper-alt)' }}>
      <div className="container">
        <div className="section-head">
          <div className="rule-center" />
          <p className="eyebrow">Shop By</p>
          <h2>The Edits</h2>
        </div>
      </div>

      {/* Full-bleed rail. Edge-to-edge with hairline gaps reads as a single
          continuous band of imagery rather than four floating cards. */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 1,
          backgroundColor: 'var(--rule)'
        }}
      >
        {TILES.map(tile => (
          <a
            key={tile.category}
            href="#collection"
            onClick={() => setActiveCategory(tile.category)}
            className="img-frame"
            style={{
              position: 'relative',
              display: 'block',
              aspectRatio: '3 / 4.35',
              backgroundColor: 'var(--paper-deep)'
            }}
          >
            <img src={tile.image} alt="" loading="lazy" />
            <div className="scrim" />

            <div
              style={{
                position: 'absolute',
                left: 0, right: 0, bottom: 0,
                padding: '2rem 1.5rem',
                textAlign: 'center'
              }}
            >
              <h3
                style={{
                  color: '#FBFAF8',
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 300,
                  marginBottom: '1rem',
                  textShadow: '0 1px 24px rgba(15,13,10,0.4)'
                }}
              >
                {tile.label}
              </h3>
              <span className="eyebrow" style={{ color: 'rgba(251,250,248,0.9)', fontSize: '0.5625rem' }}>
                Shop Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
