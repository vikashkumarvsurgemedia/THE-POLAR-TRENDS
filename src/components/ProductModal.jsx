import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : 'M');
  const [btnHovered, setBtnHovered] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({ ...product, selectedSize }, 1);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const isDiscounted = product.originalPrice && product.originalPrice > product.price;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <style>{`
        .modal-container {
          background-color: #FFFFFF;
          border-radius: 12px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
        }
        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px 0 0 12px;
        }
        @media (max-width: 768px) {
          .modal-container {
            grid-template-columns: 1fr;
          }
          .modal-image {
            height: 350px;
            border-radius: 12px 12px 0 0;
          }
        }
      `}</style>
      
      <div className="modal-container">
        
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <X size={18} color="#212326" />
        </button>

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="modal-image"
          />
        </div>

        <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '11px',
            textTransform: 'uppercase',
            color: '#000080',
            letterSpacing: '1px',
            fontWeight: 600,
            marginBottom: '8px'
          }}>
            {product.category}
          </div>

          <h2 style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '24px',
            fontWeight: 600,
            color: '#212326',
            margin: '0 0 12px 0'
          }}>
            {product.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', color: '#FBBC04', fontSize: '14px' }}>
              {'★'.repeat(Math.round(product.rating || 5))}
              <span style={{ color: '#eee' }}>{'★'.repeat(5 - Math.round(product.rating || 5))}</span>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#777' }}>
              ({product.reviews || 0} reviews)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '28px', fontWeight: 600, color: '#212326' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {isDiscounted && (
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: '#999', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '14px',
            color: '#555555',
            lineHeight: 1.7,
            margin: '0 0 24px 0'
          }}>
            {product.description}
          </p>

          <div style={{ margin: '0 0 24px 0' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.fabric && (
                <li style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555' }}>
                  <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600, color: '#212326' }}>Fabric: </span>
                  {product.fabric}
                </li>
              )}
              {product.embroidery && (
                <li style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555' }}>
                  <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600, color: '#212326' }}>Embroidery: </span>
                  {product.embroidery}
                </li>
              )}
            </ul>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              color: '#212326',
              marginBottom: '10px'
            }}>
              Select Size
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {(product.sizes || ['S', 'M', 'L', 'XL']).map(size => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: '44px',
                      height: '44px',
                      border: isSelected ? '1px solid #000080' : '1px solid #ddd',
                      borderRadius: '6px',
                      backgroundColor: isSelected ? '#000080' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : '#212326',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '13px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleAdd}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              width: '100%',
              backgroundColor: btnHovered ? '#000066' : '#000080',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              marginTop: 'auto'
            }}
          >
            {addedToast ? '✓ Added to bag!' : 'ADD TO CART'}
          </button>

        </div>
      </div>
    </div>
  );
}
