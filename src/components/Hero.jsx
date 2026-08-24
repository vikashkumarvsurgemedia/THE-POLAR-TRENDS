import React from 'react';

/* Split-screen hero.

   Two full-bleed frames sitting edge to edge with a single hairline between
   them, and one line of display serif centred across the seam. The headline
   spans both panels rather than living inside one — that overlap is what
   makes the pair read as a single photograph instead of two tiles.

   On mobile the split collapses to the left frame only. Stacking both would
   push the fold down by a full screen, and the second image is atmosphere,
   not information. */

const PANELS = [
  { src: '/assets/products/black-lotus-embroidered.jpg', alt: 'Black embroidered formal shirt, detail of the placket' },
  { src: '/assets/products/white-kashmiri-floral.jpg', alt: 'White cotton formal shirt photographed against a warm ground' }
];

export default function Hero() {
  return (
    <section
      aria-label="The Formal Edit"
      style={{
        position: 'relative',
        height: 'clamp(560px, 88vh, 900px)',
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: 'var(--paper-alt)'
      }}
    >
      {PANELS.map((panel, i) => (
        <div
          key={panel.src}
          className={i === 1 ? 'desktop-only' : undefined}
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            borderLeft: i === 1 ? '1px solid rgba(251,250,248,0.22)' : 'none'
          }}
        >
          <img
            src={panel.src}
            alt={panel.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 28%' }}
          />
        </div>
      ))}

      <div className="scrim-hero" />

      {/* Anchored to the lower third, not the centre. Centred type would land
          squarely on the embroidery; down here it sits in the dark end of the
          scrim and stays legible while the garment reads clean above it.
          pointer-events stay off the wrapper so only the CTA takes clicks. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          textAlign: 'center',
          padding: '0 var(--gutter) clamp(3.5rem, 9vh, 7rem)',
          pointerEvents: 'none'
        }}
      >
        <p
          className="eyebrow rise rise-1"
          style={{ color: 'rgba(251,250,248,0.82)', marginBottom: '1.75rem' }}
        >
          Autumn Formals — Volume I
        </p>

        <h1
          className="rise rise-2"
          style={{
            color: '#FBFAF8',
            maxWidth: '16ch',
            fontWeight: 300,
            /* Two shadows, not one: a tight dark halo to hold the letterforms
               against a pale garment crossing the seam, plus a wide soft one
               for general separation. Cormorant at weight 300 has hairline
               strokes that vanish entirely over white without the first. */
            textShadow: '0 1px 3px rgba(15,13,10,0.55), 0 2px 44px rgba(15,13,10,0.5)'
          }}
        >
          Dress Shirts, Perfected.
        </h1>

        <div className="rise rise-3" style={{ marginTop: '2.25rem', pointerEvents: 'auto' }}>
          <a href="#collection" className="btn-ghost-light">Shop the Edit</a>
        </div>
      </div>

      {/* Fabric credit, top-left. A small factual note anchors the image in
          craft rather than campaign — the detail a formalwear buyer looks for.
          It lives up in the clear part of the scrim, opposite the headline. */}
      <p
        className="eyebrow desktop-only"
        style={{
          position: 'absolute',
          left: 'var(--gutter)',
          bottom: '2.25rem',
          color: 'rgba(251,250,248,0.72)',
          letterSpacing: '0.2em'
        }}
      >
        70s Two-Ply Long-Staple Cotton
      </p>
    </section>
  );
}
