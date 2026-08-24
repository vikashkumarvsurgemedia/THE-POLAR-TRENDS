import React from 'react';

/* Brand statement.

   The reference site's equivalent of this section carries one sentence and
   one link over a single image. That restraint is the message: a brand
   confident about its cloth doesn't need four feature columns to say so.

   Three specifications sit beneath the statement as a hairline-separated
   row. They are the only hard facts on the page, which is exactly why a
   formalwear buyer will read them. */

const SPECS = [
  { value: '70s', label: 'Two-Ply Yarn' },
  { value: '100%', label: 'Long-Staple Cotton' },
  { value: '18', label: 'Stitches Per Inch' }
];

export default function FabricStory() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 6rem)',
            alignItems: 'center'
          }}
        >
          {/* Image */}
          <div className="img-frame" style={{ aspectRatio: '4 / 5' }}>
            <img
              src="/assets/products/white-kashmiri-floral.jpg"
              alt="Close detail of a white cotton formal shirt showing the weave and stitch density"
              loading="lazy"
            />
          </div>

          {/* Statement */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1.75rem' }}>Our Cloth</p>

            <h2 style={{ marginBottom: '2rem' }}>
              Timeless &amp; considered.
              <br />
              That&rsquo;s what we make.
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.85,
                maxWidth: '46ch',
                marginBottom: '2.75rem'
              }}
            >
              Every shirt begins as long-staple cotton, spun to a two-ply 70s count
              and woven in small runs. Cut, stitched and pressed by hand.
            </p>

            <a href="#collection" className="link-rule">Explore the Craft</a>

            {/* Specifications */}
            <div
              style={{
                display: 'flex',
                gap: 'clamp(1.5rem, 4vw, 3.5rem)',
                marginTop: 'clamp(3rem, 6vw, 4.5rem)',
                paddingTop: '2.25rem',
                borderTop: '1px solid var(--rule)'
              }}
            >
              {SPECS.map(spec => (
                <div key={spec.label}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                      color: 'var(--ink)',
                      marginBottom: '0.6rem'
                    }}
                  >
                    {spec.value}
                  </p>
                  <p className="eyebrow" style={{ fontSize: '0.5625rem', lineHeight: 1.5 }}>
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
