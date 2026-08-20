import React from 'react';

export default function PromoBanners({ setActiveCategory }) {
  const handleComboClick = () => {
    setActiveCategory('All Products');
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '40px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {/* Banner 1: Build Your Combo */}
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--accent)',
            color: '#FFFFFF',
            padding: '36px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,128,0.15)',
            backgroundImage: 'linear-gradient(135deg, var(--accent) 0%, var(--bg-dark) 100%)'
          }}>
            <span style={{
              backgroundColor: 'var(--sale-price)',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '10px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '20px',
              width: 'fit-content',
              letterSpacing: '1px',
              marginBottom: '14px'
            }}>
              SPECIAL SAVINGS
            </span>
            <h3 style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '10px',
              color: '#FFFFFF'
            }}>
              BUILD YOUR COMBO
            </h3>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '20px',
              maxWidth: '380px'
            }}>
              Mix and match any 3 shirts or tees and get an extra 25% OFF automatically at checkout!
            </p>
            <button
              onClick={handleComboClick}
              style={{
                backgroundColor: 'var(--bg-light)',
                color: 'var(--text-on-light)',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                padding: '12px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                width: 'fit-content',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--bg-light)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              BUILD YOUR COMBO →
            </button>
          </div>

          {/* Banner 2: 100% Pima & Giza Cotton Quality */}
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-dark)',
            color: '#FFFFFF',
            padding: '36px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
          }}>
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '10px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '20px',
              width: 'fit-content',
              letterSpacing: '1px',
              marginBottom: '14px'
            }}>
              ATELIER QUALITY
            </span>
            <h3 style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '10px',
              color: '#FFFFFF'
            }}>
              PURE COTTON EDIT
            </h3>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '20px',
              maxWidth: '380px'
            }}>
              Hand-finished embroidery on 100% Egyptian Giza & Pima cotton. Engineered for ultimate climate comfort.
            </p>
            <button
              onClick={() => {
                setActiveCategory('Embroidery Edit');
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: 'var(--accent)',
                color: '#FFFFFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                padding: '12px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                width: 'fit-content',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--accent-hover)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--accent)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              EXPLORE EMBROIDERED EDIT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
