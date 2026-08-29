import React from 'react';
import { Link } from 'react-router-dom';

/* Footer.

   Ink ground, hairline rules, four short columns and a wordmark set large
   enough to work as a closing mark. Everything is tracked sans at one size —
   a footer is reference material, and varying its type only adds noise. */

const COLUMNS = [
  {
    title: 'Shop',
    links: ['Embroidery Edit', 'Pure Whites', 'Artisan Checks', 'Everyday Essentials']
  },
  {
    title: 'Client Care',
    links: ['Track Order', 'Shipping', 'Returns & Exchanges', 'Size Guide']
  },
  {
    title: 'The House',
    links: ['Our Cloth', 'Lookbook', 'Stockists', 'Contact']
  }
];

export default function Footer() {
  return (
    <footer className="theme-dark" style={{ backgroundColor: 'var(--ink-surface)' }}>

      {/* Service line */}
      <div style={{ borderBottom: '1px solid var(--rule-on-dark)' }}>
        <div className="container" style={{ padding: '1.5rem var(--gutter)' }}>
          <p className="eyebrow" style={{ color: 'var(--ink-body-on-dark)', textAlign: 'center', fontSize: '0.5625rem' }}>
            Complimentary Shipping &nbsp;&middot;&nbsp; 14-Day Returns &nbsp;&middot;&nbsp; Cash on Delivery
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter) 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            paddingBottom: 'clamp(3rem, 6vw, 5rem)'
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 400,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--ink-on-dark)',
                marginBottom: '1.5rem'
              }}
            >
              The Polar Trend
            </p>
            <p style={{ color: 'var(--ink-body-on-dark)', fontSize: '0.875rem', lineHeight: 1.9, maxWidth: '30ch' }}>
              Formal shirting in the finest long-staple cottons. Made in limited runs.
            </p>
          </div>

          {COLUMNS.map(col => (
            <div key={col.title}>
              <p className="eyebrow" style={{ color: 'var(--ink-on-dark)', marginBottom: '1.5rem', fontSize: '0.5625rem' }}>
                {col.title}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom: '0.85rem' }}>
                    <Link
                      to="/#collection"
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.8125rem',
                        fontWeight: 300,
                        letterSpacing: '0.04em',
                        color: 'var(--ink-body-on-dark)',
                        transition: 'color var(--medium) var(--ease)'
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink-on-dark)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-body-on-dark)')}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            padding: '2.25rem 0',
            borderTop: '1px solid var(--rule-on-dark)'
          }}
        >
          <p className="eyebrow" style={{ color: 'var(--ink-muted-on-dark)', fontSize: '0.5625rem' }}>
            Mon &ndash; Sat &nbsp;10:00 &ndash; 18:00 IST
          </p>
          <a href="mailto:care@thepolartrend.in" className="eyebrow" style={{ color: 'var(--ink-body-on-dark)', fontSize: '0.5625rem' }}>
            care@thepolartrend.in
          </a>
        </div>

        {/* Baseline */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1.75rem 0 2.5rem',
            borderTop: '1px solid var(--rule-on-dark)'
          }}
        >
          <p className="eyebrow" style={{ color: 'var(--ink-muted-on-dark)', fontSize: '0.5625rem' }}>
            &copy; {new Date().getFullYear()} The Polar Trend
          </p>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            {['Privacy', 'Terms'].map(l => (
              <Link key={l} to="/" className="eyebrow" style={{ color: 'var(--ink-muted-on-dark)', fontSize: '0.5625rem' }}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
