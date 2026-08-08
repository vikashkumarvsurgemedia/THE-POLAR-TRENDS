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
      zIndex: 200,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        maxWidth: '980px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 30px 70px rgba(0,0,0,0.8)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }} className="modal-content">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            backgroundColor: 'rgba(0,0,0,0.05)',
            border: 'none',
            color: '#111111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Left Column: Image Box */}
        <div style={{ backgroundColor: '#F5F3EF', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', maxHeight: '520px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Column: Details */}
        <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#999999', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              {product.category}
            </div>

            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', fontWeight: 600, color: '#111111', lineHeight: 1.2, marginBottom: '1rem' }}>
              {product.name}
            </h2>

            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', fontWeight: 700, color: '#111111', marginBottom: '1.5rem' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: 1.7, marginBottom: '1.8rem' }}>
              {product.description}
            </p>

            {/* Spec Box */}
            <div style={{ backgroundColor: '#FAF9F6', padding: '1rem 1.2rem', border: '1px solid rgba(0,0,0,0.06)', marginBottom: '1.8rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                ATELIER SPECIFICATIONS
              </div>
              <div style={{ fontSize: '0.85rem', color: '#555555', lineHeight: 1.6 }}>
                • {product.fabric} <br />
                • {product.embroidery}
              </div>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                SELECT SIZE
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: '46px',
                      height: '46px',
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
              style={{ width: '100%', padding: '1.2rem' }}
            >
              {addedToast ? '✓ ADDED TO BAG' : `ADD TO BAG • ₹${(product.price * quantity).toLocaleString('en-IN')}`}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
