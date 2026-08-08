import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle } from 'lucide-react';

export default function Reviews() {
  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#FAF9F6', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <span className="editorial-tag" style={{ marginBottom: '0.8rem' }}>
            PATRON CRITIQUE & TESTIMONIALS
          </span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, color: '#111111', marginTop: '0.6rem', marginBottom: '0.8rem' }}>
            Acclaimed Across India
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: '#555555', lineHeight: 1.65 }}>
            Rated 4.9/5 stars by connoisseurs of fine cotton apparel in Mumbai, Delhi, and Bengaluru.
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="reviews-grid">
          {REVIEWS.map(r => (
            <div
              key={r.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D97706" color="#D97706" />
                  ))}
                </div>

                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#333333', lineHeight: 1.55, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{r.comment}"
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '0.9rem', color: '#111111' }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#999999', letterSpacing: '0.08em', marginTop: '0.2rem' }}>
                    {r.city} • VERIFIED PATRON
                  </div>
                </div>
                <CheckCircle size={16} color="#10B981" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
