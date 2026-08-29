import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS } from '../data/products';

/* Testimonials.

   A grid of star-rated cards is the most common way an otherwise elegant
   store undoes itself — it imports the visual language of a marketplace
   listing wholesale. The same content set as one large serif pull-quote,
   rotating slowly, reads as press.

   The stars are gone. Attribution carries "Verified Purchase" instead,
   which is the part that actually signals trust; five glyphs repeated on
   every card signal nothing, because every card has five.

   Rotation pauses on hover and on focus within, and stops entirely under
   prefers-reduced-motion — an auto-advancing quote that a keyboard user
   cannot hold still is a genuine accessibility failure, not a flourish. */

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const t = setInterval(() => setIndex(i => (i + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const review = REVIEWS[index];

  return (
    <section
      className="section"
      style={{ backgroundColor: 'var(--paper-alt)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container" style={{ maxWidth: 940, textAlign: 'center' }}>
        <div className="rule-center" />
        <p className="eyebrow" style={{ marginBottom: '2.5rem' }}>In Their Words</p>

        <blockquote
          key={review.id}
          aria-live="polite"
          style={{ animation: 'fadeIn 700ms var(--ease) both' }}
        >
          {/* Reviewer photograph. Square, not a circle — a round crop is the
              default avatar shape everywhere on the web and instantly reads as
              a profile widget rather than editorial. Falls back to initials on
              paper so the layout holds before the photos arrive. */}
          <ReviewerPortrait review={review} />

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.4,
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
              marginBottom: '2.5rem'
            }}
          >
            &ldquo;{review.comment}&rdquo;
          </p>

          <footer>
            <p className="eyebrow eyebrow-ink" style={{ marginBottom: '0.6rem' }}>
              {review.name} &mdash; {review.city}
            </p>
            {review.verified && (
              <p className="eyebrow" style={{ fontSize: '0.5625rem', color: 'var(--bronze)' }}>
                Verified Purchase
              </p>
            )}
          </footer>
        </blockquote>

        {/* Indicators — hairlines, not dots. The active one fills bronze. */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: '3rem' }}>
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1} of ${REVIEWS.length}`}
              aria-current={i === index}
              style={{
                width: 34, height: 1, padding: 0, border: 'none', cursor: 'pointer',
                backgroundColor: i === index ? 'var(--bronze)' : 'var(--rule-strong)',
                transition: 'background-color var(--medium) var(--ease)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Reviewer portrait.

   Drop square crops (roughly 400×400, JPG or WebP) into
   /public/assets/reviewers/ and set the matching `image` field on each entry
   in the REVIEWS array in src/data/products.js.

   Until then this renders the reviewer's initials on paper, which keeps the
   vertical rhythm identical whether or not a photo exists — so adding the
   real pictures later shifts nothing else on the page. */
function ReviewerPortrait({ review }) {
  const [failed, setFailed] = React.useState(false);
  const initials = review.name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('');

  const box = {
    width: 62,
    height: 62,
    margin: '0 auto 2rem',
    overflow: 'hidden',
    backgroundColor: 'var(--paper-deep)',
    border: '1px solid var(--rule)'
  };

  if (review.image && !failed) {
    return (
      <img
        src={review.image}
        alt={review.name}
        onError={() => setFailed(true)}
        style={{ ...box, objectFit: 'cover', display: 'block' }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{ ...box, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.35rem',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: 'var(--ink-muted)'
        }}
      >
        {initials}
      </span>
    </div>
  );
}
