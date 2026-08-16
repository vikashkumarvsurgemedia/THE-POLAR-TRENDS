import React, { useState } from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedCheckout }) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 1999;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 150;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'POLAR10') {
      setDiscountPercent(10);
      setCouponMessage('POLAR10 applied! 10% off.');
    } else if (couponCode.trim().toUpperCase() === 'FIRST20') {
      setDiscountPercent(20);
      setCouponMessage('FIRST20 applied! 20% off.');
    } else {
      setDiscountPercent(0);
      setCouponMessage('Invalid code.');
    }
  };

  const handleCheckoutClick = () => {
    onClose();
    onProceedCheckout({ subtotal, discountAmount, shippingFee, grandTotal });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 400,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'flex-end',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div style={{
        backgroundColor: '#FDFFF0',
        width: '100%',
        maxWidth: '420px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideInRight 0.3s ease-out'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 600,
            fontSize: '18px',
            color: '#212326',
            margin: 0
          }}>
            Your Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
          </h2>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: '#212326', display: 'flex', alignItems: 'center'
          }}>
            <X size={24} />
          </button>
        </div>

        {/* Free Shipping Bar */}
        {cartItems.length > 0 && (
          <div style={{ padding: '15px 20px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            {subtotal >= freeShippingThreshold ? (
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12px',
                color: '#008060',
                fontWeight: 600,
                textAlign: 'center'
              }}>
                ✓ You qualify for FREE shipping!
              </div>
            ) : (
              <div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '12px',
                  color: '#555555',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  Add ₹{freeShippingThreshold - subtotal} more for FREE shipping!
                </div>
                <div style={{
                  height: '4px',
                  backgroundColor: 'rgba(0,0,128,0.08)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    backgroundColor: '#000080',
                    width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <ShoppingBag size={48} color="#999" style={{ marginBottom: '16px' }} />
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: '#555', marginBottom: '24px' }}>
                Your bag is empty
              </div>
              <button onClick={onClose} style={{
                background: 'none',
                border: 'none',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: '#000080',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cartItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '6px', objectFit: 'cover' }} />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#212326', fontWeight: 500 }}>{item.name}</div>
                          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#777777', marginTop: '4px' }}>Size: {item.selectedSize}</div>
                        </div>
                        <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#212326' }}>
                          ₹{item.price}
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)} style={{ width: '30px', height: '30px', border: '1px solid #ddd', borderRadius: '4px', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
                          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)} style={{ width: '30px', height: '30px', border: '1px solid #ddd', borderRadius: '4px', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                        </div>
                        <button onClick={() => onRemoveItem(item.id, item.selectedSize)} style={{
                          background: 'none', border: 'none', cursor: 'pointer', color: '#999', padding: '5px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#D72C0D'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  {idx < cartItems.length - 1 && <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.08)', marginTop: '20px' }} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Area */}
        {cartItems.length > 0 && (
          <div style={{ padding: '20px', borderTop: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#FDFFF0' }}>
            
            {/* Coupon Section */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  placeholder="Coupon code" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{ flex: 1, fontFamily: "'Poppins', sans-serif", fontSize: '13px', border: '1px solid #ddd', borderRadius: '6px', padding: '10px', outline: 'none' }}
                />
                <button onClick={handleApplyCoupon} style={{
                  backgroundColor: '#000080', color: '#fff', border: 'none', borderRadius: '6px', padding: '0 16px', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 500, cursor: 'pointer'
                }}>
                  Apply
                </button>
              </div>
              {couponMessage && (
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', marginTop: '8px', color: discountPercent > 0 ? '#008060' : '#D72C0D' }}>
                  {couponMessage}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555' }}>
                <span>Subtotal</span>
                <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#212326' }}>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#008060' }}>
                  <span>Discount</span>
                  <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '14px', fontWeight: 600 }}>-₹{discountAmount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555' }}>
                <span>Shipping</span>
                <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#212326' }}>{shippingFee === 0 ? 'Free' : `₹${shippingFee}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: '#212326', fontWeight: 600 }}>Total</span>
                <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: '#212326' }}>₹{grandTotal}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button 
              onClick={handleCheckoutClick}
              style={{
                width: '100%',
                backgroundColor: '#000080',
                color: '#fff',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '15px',
                fontWeight: 600,
                padding: '14px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000066'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000080'}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
