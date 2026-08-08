import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[1] || product.sizes[0] : 'M');
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize }, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 350,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }} className="animate-fade-in">
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        maxWidth: '940px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }} className="modal-content animate-slide-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '38px',
            height: '38px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(0,0,0,0.1)',
            color: '#111111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left Column: Image Box */}
        <div style={{ backgroundColor: '#F5F3EF', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Column: Details */}
        <div style={{ padding: '2rem 1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#999999', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              {product.category}
            </div>

            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 600, color: '#111111', lineHeight: 1.2, marginBottom: '0.8rem' }}>
              {product.name}
            </h2>

            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 700, color: '#111111', marginBottom: '1.2rem' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            <p style={{ fontSize: '0.88rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {product.description}
            </p>

            {/* Spec Box */}
            <div style={{ backgroundColor: '#FAF9F6', padding: '0.9rem 1rem', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                ATELIER SPECIFICATIONS
              </div>
              <div style={{ fontSize: '0.8rem', color: '#555555', lineHeight: 1.5 }}>
                • {product.fabric} <br />
                • {product.embroidery}
              </div>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '1.8rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                SELECT SIZE
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      flex: 1,
                      height: '44px',
                      border: selectedSize === size ? '1px solid #111111' : '1px solid rgba(0,0,0,0.15)',
                      backgroundColor: selectedSize === size ? '#111111' : 'transparent',
                      color: selectedSize === size ? '#FFFFFF' : '#111111',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div>
            <button
              onClick={handleAdd}
              className="btn-luxury"
              style={{ width: '100%', padding: '1.1rem' }}
            >
              {addedToast ? '✓ ADDED TO BAG' : `ADD TO BAG • ₹${(product.price * quantity).toLocaleString('en-IN')}`}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
