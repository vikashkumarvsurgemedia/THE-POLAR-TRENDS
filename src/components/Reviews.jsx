import React from 'react';
import { REVIEWS } from '../data/products';

export default function Reviews() {
  return (
    <section style={{ backgroundColor: '#F5F3EE', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '32px',
          fontWeight: 600,
          color: '#212326',
          textAlign: 'center',
          margin: '0 0 40px 0'
        }}>
          What Our Customers Say
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {REVIEWS.map(r => (
            <div
              key={r.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                padding: '28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ fontSize: '16px', color: '#FBBC04', marginBottom: '16px', letterSpacing: '2px' }}>
                {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
              </div>

              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                color: '#555555',
                lineHeight: 1.7,
                margin: '0 0 20px 0',
                flex: 1
              }}>
                "{r.comment}"
              </p>

              <div>
                <div style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#212326',
                  marginBottom: '2px'
                }}>
                  {r.name}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '12px',
                    color: '#777777'
                  }}>
                    {r.city}
                  </span>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '11px',
                    color: '#000080',
                    fontWeight: 500
                  }}>
                    Verified Purchase ✓
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
