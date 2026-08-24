import React from 'react';

/* Lookbook.

   The one dark section on the page, and the reason it earns its place is
   contrast: after a long run of warm paper, a full-bleed ink band resets the
   eye and makes the photography that follows feel like a different chapter.

   Two frames, offset vertically. The offset is doing real work — a pair of
   perfectly aligned images reads as a grid, while a stagger reads as a
   spread in a magazine. */

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="theme-dark section"
      style={{ backgroundColor: 'var(--ink-surface)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: statement */}
          <div style={{ paddingBottom: 'clamp(0rem, 4vw, 4rem)' }}>
            <p className="eyebrow" style={{ color: 'var(--ink-muted-on-dark)', marginBottom: '1.75rem' }}>
              Autumn / Winter
            </p>

            <h2 style={{ color: 'var(--ink-on-dark)', marginBottom: '2.25rem' }}>
              We do it better.
            </h2>

            <p
              style={{
                color: 'var(--ink-body-on-dark)',
                fontSize: '1rem',
                lineHeight: 1.85,
                maxWidth: '38ch',
                marginBottom: '2.75rem'
              }}
            >
              Shot in Jaipur. Twelve pieces, one cloth, and the light of a
              November afternoon.
            </p>

            <a href="#collection" className="link-rule link-rule-light">
              View the Lookbook
            </a>
          </div>

          {/* Right: staggered pair */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>
            <div className="img-frame" style={{ aspectRatio: '3 / 4.4', marginTop: 'clamp(1.5rem, 5vw, 4rem)' }}>
              <img src="/assets/products/sage-star-stitch.jpg" alt="Sage formal shirt photographed on location" loading="lazy" />
            </div>
            <div className="img-frame" style={{ aspectRatio: '3 / 4.4' }}>
              <img src="/assets/products/terracotta-artisan-check.jpg" alt="Terracotta checked formal shirt photographed on location" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
