import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function CustomMonogrammer({ products, onAddToCart }) {
  const [selectedShirtId, setSelectedShirtId] = useState(products[0]?.id || 'polar-001');
  const [initials, setInitials] = useState('TPT');
  const [threadColor, setThreadColor] = useState('#D97706'); // Saffron Gold
  const [fontStyle, setFontStyle] = useState('Cinzel, serif');
  const [placement, setPlacement] = useState('Cuff');
  const [orderedToast, setOrderedToast] = useState(false);

  const currentShirt = products.find(p => p.id === selectedShirtId) || products[0];

  const threadColors = [
    { name: 'Saffron Gold', hex: '#D97706' },
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Midnight Black', hex: '#000000' },
    { name: 'Royal Silver', hex: '#E4E4E7' }
  ];

  const fonts = [
    { name: 'Haute Couture Serif', font: 'Cinzel, serif' },
    { name: 'Royal Garamond', font: 'Cormorant Garamond, serif' },
    { name: 'Urban Studio Gothic', font: 'Plus Jakarta Sans, sans-serif' }
  ];

  const handleCustomAdd = () => {
    const customProduct = {
      ...currentShirt,
      id: `${currentShirt.id}-bespoke-${Date.now()}`,
      name: `${currentShirt.name} (Bespoke Monogram: "${initials}")`,
      price: currentShirt.price + 499,
      embroidery: `Hand Monogram "${initials}" on ${placement}`
    };
    onAddToCart(customProduct, 1);
    setOrderedToast(true);
    setTimeout(() => setOrderedToast(false), 2500);
  };

  return (
    <section id="custom-embroidery" style={{ padding: '7rem 0', backgroundColor: '#FAF9F6', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span className="editorial-tag" style={{ marginBottom: '1rem' }}>
            BESPOKE EMBROIDERED INITIALS STUDIO
          </span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.8rem', fontWeight: 600, color: '#111111', marginTop: '0.8rem', marginBottom: '1rem' }}>
            Personalized Monogram Atelier
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.7 }}>
            Personalize any 100% cotton shirt with your bespoke initials hand-stitched by Jaipur master embroiderers. Live studio preview below.
          </p>
        </div>

        {/* Studio Box */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          backgroundColor: '#FFFFFF',
          padding: '3.5rem',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }} className="bespoke-grid">

          {/* Left Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* 1. Shirt Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                1. SELECT COTTON SHIRT CANVAS
              </label>
              <select
                value={selectedShirtId}
                onChange={(e) => setSelectedShirtId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  backgroundColor: '#FAF9F6',
                  border: '1px solid rgba(0,0,0,0.15)',
                  color: '#111111',
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {products.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} — ₹{p.price}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Initials Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                2. ENTER MONOGRAM INITIALS (MAX 3)
              </label>
              <input
                type="text"
                maxLength={3}
                value={initials}
                onChange={(e) => setInitials(e.target.value.toUpperCase())}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  backgroundColor: '#FAF9F6',
                  border: '1px solid rgba(0,0,0,0.2)',
                  color: '#111111',
                  fontFamily: 'Cinzel, serif',
                  fontSize: '1.4rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  outline: 'none'
                }}
              />
            </div>

            {/* 3. Thread Color */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                3. SELECT SILK THREAD COLOR
              </label>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {threadColors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setThreadColor(c.hex)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1rem',
                      border: threadColor === c.hex ? '1px solid #111111' : '1px solid rgba(0,0,0,0.12)',
                      backgroundColor: threadColor === c.hex ? 'rgba(0,0,0,0.05)' : 'transparent',
                      color: '#111111',
                      cursor: 'pointer',
                      fontSize: '0.78rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: c.hex, border: '1px solid #CCC' }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Font Typography */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                4. SELECT TYPOGRAPHY STYLE
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {fonts.map(f => (
                  <button
                    key={f.name}
                    onClick={() => setFontStyle(f.font)}
                    style={{
                      textAlign: 'left',
                      padding: '0.8rem 1rem',
                      border: fontStyle === f.font ? '1px solid #111111' : '1px solid rgba(0,0,0,0.12)',
                      backgroundColor: fontStyle === f.font ? '#111111' : 'transparent',
                      color: fontStyle === f.font ? '#FFFFFF' : '#111111',
                      fontFamily: f.font,
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {f.name} — "{initials || 'TPT'}"
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Placement */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                5. EMBROIDERED PLACEMENT
              </label>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {['Cuff', 'Chest Pocket', 'Lower Hem'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPlacement(p)}
                    style={{
                      flex: 1,
                      padding: '0.6rem 0',
                      border: placement === p ? '1px solid #111111' : '1px solid rgba(0,0,0,0.12)',
                      backgroundColor: placement === p ? '#111111' : 'transparent',
                      color: placement === p ? '#FFFFFF' : '#111111',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      cursor: 'pointer'
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Live Preview Canvas */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <div style={{
              position: 'relative',
              width: '100%',
              height: '440px',
              border: '1px solid rgba(0,0,0,0.15)',
              backgroundColor: '#F5F3EF',
              overflow: 'hidden'
            }}>
              <img
                src={currentShirt.image}
                alt="Custom Shirt Studio Preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              <div style={{
                position: 'absolute',
                top: placement === 'Chest Pocket' ? '38%' : placement === 'Cuff' ? '68%' : '82%',
                left: placement === 'Chest Pocket' ? '32%' : placement === 'Cuff' ? '70%' : '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(250, 249, 246, 0.9)',
                backdropFilter: 'blur(8px)',
                padding: '0.6rem 1.4rem',
                border: `1px solid ${threadColor}`,
                color: threadColor,
                fontFamily: fontStyle,
                fontSize: '1.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em'
              }}>
                {initials || 'TPT'}
              </div>

              <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#111111', color: '#FFFFFF', padding: '0.35rem 0.8rem', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.2em', border: '1px solid rgba(0,0,0,0.1)' }}>
                ATELIER LIVE PREVIEW
              </div>
            </div>

            <div style={{ width: '100%', marginTop: '2rem' }}>
              <button
                onClick={handleCustomAdd}
                className="btn-luxury"
                style={{ width: '100%', padding: '1.2rem' }}
              >
                {orderedToast ? 'BESPOKE MONOGRAM ADDED!' : `ORDER BESPOKE PIECE • ₹${(currentShirt.price + 499).toLocaleString('en-IN')}`}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
