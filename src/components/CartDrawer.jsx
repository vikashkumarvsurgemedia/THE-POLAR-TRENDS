import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

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
      setCouponMessage('POLAR10 Applied! 10% Privileged Discount');
    } else if (couponCode.trim().toUpperCase() === 'FIRST20') {
      setDiscountPercent(20);
      setCouponMessage('FIRST20 Applied! 20% Privileged Discount');
    } else {
      setCouponMessage('Invalid code. Try "POLAR10"');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        color: '#111111',
        width: '100%',
        maxWidth: '480px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '-20px 0 50px rgba(0,0,0,0.8)'
      }} className="cart-drawer">
        
        {/* Header */}
        <div style={{ padding: '1.8rem', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FAF9F6' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <ShoppingBag size={18} color="#D97706" />
            <span style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.1em' }}>YOUR ATELIER BAG</span>
            <span style={{ backgroundColor: '#111111', color: '#FFFFFF', borderRadius: '50%', width: '22px', height: '22px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#111111', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div style={{ backgroundColor: '#FAF9F6', padding: '0.9rem 1.8rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          {subtotal >= freeShippingThreshold ? (
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10B981', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', letterSpacing: '0.1em' }}>
              <ShieldCheck size={16} /> UNLOCKED COMPLIMENTARY EXPRESS SHIPPING
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#777777', marginBottom: '0.4rem', textAlign: 'center', letterSpacing: '0.08em' }}>
                ADD ₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')} MORE FOR COMPLIMENTARY SHIPPING
              </div>
              <div style={{ height: '4px', backgroundColor: 'rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                <div style={{ height: '100%', backgroundColor: '#D97706', width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`, transition: 'width 0.3s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Item List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', color: '#111111' }}>
              <ShoppingBag size={48} color="#DDD" style={{ marginBottom: '1.2rem' }} />
              <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1.2rem', color: '#111111' }}>Your Bag is Empty</div>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#777777' }}>Explore our signature 100% cotton & embroidery shirts to begin.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                style={{
                  display: 'flex',
                  gap: '1.2rem',
                  padding: '1.2rem',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  backgroundColor: '#FAF9F6'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '80px', height: '95px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 600, fontSize: '0.92rem', color: '#111111', lineHeight: 1.3 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#777777', marginTop: '0.3rem', letterSpacing: '0.05em' }}>
                      SIZE: <strong style={{ color: '#111111' }}>{item.selectedSize || 'M'}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FFFFFF' }}>
                      <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)} style={{ width: '28px', height: '28px', border: 'none', background: 'transparent', color: '#111111', cursor: 'pointer', fontWeight: 800 }}>-</button>
                      <span style={{ width: '30px', textAlign: 'center', fontSize: '0.8rem', fontWeight: 800 }}>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)} style={{ width: '28px', height: '28px', border: 'none', background: 'transparent', color: '#111111', cursor: 'pointer', fontWeight: 800 }}>+</button>
                    </div>

                    <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1rem', color: '#111111' }}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id, item.selectedSize)}
                      style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '4px' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{ padding: '1.8rem', borderTop: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#FFFFFF' }}>
            
            {/* Promo Code Box */}
            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '0' }}>
                <input
                  type="text"
                  placeholder="PRIVILEGE CODE (TRY POLAR10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{ flex: 1, padding: '0.7rem 0.9rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.78rem', letterSpacing: '0.1em' }}
                />
                <button
                  onClick={handleApplyCoupon}
                  style={{ backgroundColor: '#111111', color: '#FFFFFF', border: 'none', padding: '0.7rem 1.2rem', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em', cursor: 'pointer' }}
                >
                  APPLY
                </button>
              </div>
              {couponMessage && (
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: discountPercent > 0 ? '#10B981' : '#EF4444', marginTop: '0.4rem', letterSpacing: '0.05em' }}>
                  {couponMessage}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1.5rem', color: '#777777' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>SUBTOTAL</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 700 }}>
                  <span>PRIVILEGE DISCOUNT ({discountPercent}%)</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>EXPRESS SHIPPING</span>
                <span>{shippingFee === 0 ? 'COMPLIMENTARY' : `₹${shippingFee}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, color: '#111111', paddingTop: '0.8rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontFamily: 'Cinzel, serif' }}>
                <span>TOTAL</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => { onClose(); onProceedCheckout({ subtotal, discountAmount, shippingFee, grandTotal }); }}
              className="btn-luxury"
              style={{ width: '100%', padding: '1.2rem' }}
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={16} />
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
