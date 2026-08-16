import React, { useState } from 'react';

export default function CustomMonogrammer({ products, onAddToCart }) {
  const [selectedShirtId, setSelectedShirtId] = useState(products[0]?.id || 'polar-001');
  const [initials, setInitials] = useState('TPT');
  const [threadColor, setThreadColor] = useState('#000080');
  const [fontStyle, setFontStyle] = useState('Work Sans, sans-serif');
  const [placement, setPlacement] = useState('Cuff');
  const [orderedToast, setOrderedToast] = useState(false);

  const currentShirt = products.find(p => p.id === selectedShirtId) || products[0];

  const threadColors = [
    { name: 'Navy', hex: '#000080' },
    { name: 'Gold', hex: '#D4A017' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#000000' }
  ];

  const fonts = [
    { name: 'Classic Sans', font: 'Work Sans, sans-serif' },
    { name: 'Modern Clean', font: 'Poppins, sans-serif' },
    { name: 'Elegant Serif', font: 'Georgia, serif' }
  ];

  const handleCustomAdd = () => {
    const customProduct = {
      ...currentShirt,
      id: `${currentShirt.id}-bespoke-${Date.now()}`,
      name: `${currentShirt.name} (Monogram: "${initials}")`,
      price: currentShirt.price + 499,
      embroidery: `Hand Monogram "${initials}" on ${placement}`
    };
    onAddToCart(customProduct, 1);
    setOrderedToast(true);
    setTimeout(() => setOrderedToast(false), 2500);
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '13px',
    fontWeight: 600,
    color: '#212326',
    marginBottom: '8px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #ddd',
    borderRadius: '6px',
    color: '#212326',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    outline: 'none',
    minHeight: '44px',
    transition: 'border-color 0.2s ease'
  };

  return (
    <section id="monogram" style={{ padding: '80px 0', backgroundColor: '#F5F3EE' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          <h2 style={{ fontFamily: 'Work Sans, sans-serif', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 600, color: '#212326', marginBottom: '10px' }}>
            Personalize Your Shirt
          </h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: '#777777', lineHeight: 1.6 }}>
            Add custom hand-embroidered initials to any shirt. Preview your monogram live below.
          </p>
        </div>

        {/* Studio Box */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          maxWidth: '1000px',
          margin: '0 auto'
        }} className="bespoke-grid">

          {/* Left Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* 1. Shirt Selection */}
            <div>
              <label style={labelStyle}>Select Shirt</label>
              <select
                value={selectedShirtId}
                onChange={(e) => setSelectedShirtId(e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer', appearance: 'auto' }}
              >
                {products.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} — ₹{p.price.toLocaleString('en-IN')}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Initials Input */}
            <div>
              <label style={labelStyle}>Monogram Initials (max 3)</label>
              <input
                type="text"
                maxLength={3}
                value={initials}
                onChange={(e) => setInitials(e.target.value.toUpperCase())}
                placeholder="e.g. TPT"
                style={{
                  ...inputStyle,
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}
              />
            </div>

            {/* 3. Thread Color */}
            <div>
              <label style={labelStyle}>Thread Color</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {threadColors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setThreadColor(c.hex)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      border: threadColor === c.hex ? '2px solid #000080' : '1px solid #ddd',
                      borderRadius: '6px',
                      backgroundColor: threadColor === c.hex ? 'rgba(0,0,128,0.05)' : '#FFFFFF',
                      color: '#212326',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      minHeight: '38px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: c.hex, border: '1px solid #ccc', flexShrink: 0 }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Font Typography */}
            <div>
              <label style={labelStyle}>Typography Style</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {fonts.map(f => (
                  <button
                    key={f.name}
                    onClick={() => setFontStyle(f.font)}
                    style={{
                      textAlign: 'left',
                      padding: '10px 14px',
                      border: fontStyle === f.font ? '2px solid #000080' : '1px solid #ddd',
                      borderRadius: '6px',
                      backgroundColor: fontStyle === f.font ? '#000080' : '#FFFFFF',
                      color: fontStyle === f.font ? '#FFFFFF' : '#212326',
                      fontFamily: f.font,
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      minHeight: '42px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {f.name} — "{initials || 'TPT'}"
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Placement */}
            <div>
              <label style={labelStyle}>Placement</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Cuff', 'Chest Pocket', 'Lower Hem'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPlacement(p)}
                    style={{
                      flex: 1,
                      padding: '10px 6px',
                      border: placement === p ? '2px solid #000080' : '1px solid #ddd',
                      borderRadius: '6px',
                      backgroundColor: placement === p ? '#000080' : '#FFFFFF',
                      color: placement === p ? '#FFFFFF' : '#212326',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                      fontSize: '12px',
                      cursor: 'pointer',
                      minHeight: '40px',
                      transition: 'all 0.2s ease'
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
              height: 'clamp(300px, 40vh, 420px)',
              borderRadius: '10px',
              backgroundColor: '#F5F3EE',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <img
                src={currentShirt.image}
                alt="Shirt Preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              <div style={{
                position: 'absolute',
                top: placement === 'Chest Pocket' ? '38%' : placement === 'Cuff' ? '68%' : '82%',
                left: placement === 'Chest Pocket' ? '32%' : placement === 'Cuff' ? '70%' : '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '8px 16px',
                borderRadius: '6px',
                border: `2px solid ${threadColor}`,
                color: threadColor,
                fontFamily: fontStyle,
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '3px'
              }}>
                {initials || 'TPT'}
              </div>

              <div style={{ 
                position: 'absolute', 
                top: '12px', 
                right: '12px', 
                backgroundColor: '#000080', 
                color: '#FFFFFF', 
                padding: '4px 10px', 
                fontSize: '10px', 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600, 
                letterSpacing: '0.5px', 
                borderRadius: '4px' 
              }}>
                LIVE PREVIEW
              </div>
            </div>

            <div style={{ width: '100%', marginTop: '20px' }}>
              <button
                onClick={handleCustomAdd}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: orderedToast ? '#008060' : '#000080',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
              >
                {orderedToast ? '✓ MONOGRAM ADDED TO BAG!' : `ORDER WITH MONOGRAM • ₹${(currentShirt.price + 499).toLocaleString('en-IN')}`}
              </button>
              <p style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#777777', marginTop: '8px' }}>
                +₹499 for hand-embroidered monogram
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
