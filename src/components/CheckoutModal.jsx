import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, checkoutTotals, onClearCart }) {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setStep('success');
    onClearCart();
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 500,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        maxWidth: '1000px',
        width: '95%',
        maxHeight: '95vh',
        overflowY: 'auto',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button onClick={handleClose} style={{
          position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-body)', zIndex: 10
        }}>
          <X size={24} />
        </button>

        {step === 'form' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', padding: '40px' }}>
            
            {/* Left: Shipping Form */}
            <div>
              <h2 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px', marginTop: 0 }}>
                Shipping Details
              </h2>
              <form id="checkout-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-body)', marginBottom: '4px' }}>Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', border: '1px solid var(--border)', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-body)', marginBottom: '4px' }}>Email</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', border: '1px solid var(--border)', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-body)', marginBottom: '4px' }}>Phone</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '12px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', border: '1px solid var(--border)', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-body)', marginBottom: '4px' }}>Address</label>
                  <input required type="text" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} style={{ width: '100%', padding: '12px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', border: '1px solid var(--border)', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-body)', marginBottom: '4px' }}>City</label>
                    <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={{ width: '100%', padding: '12px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', border: '1px solid var(--border)', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-body)', marginBottom: '4px' }}>Pincode</label>
                    <input required type="text" value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} style={{ width: '100%', padding: '12px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', border: '1px solid var(--border)', borderRadius: '6px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>Payment Method</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--text-primary)', cursor: 'pointer' }}>
                      <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                      Credit / Debit Card
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--text-primary)', cursor: 'pointer' }}>
                      <input type="radio" name="payment" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                      UPI
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--text-primary)', cursor: 'pointer' }}>
                      <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Order Summary */}
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px', marginTop: 0 }}>
                Order Summary
              </h3>
              
              <div style={{ flex: 1, overflowY: 'auto', maxHeight: '300px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {cartItems.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '6px', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-muted)' }}>Qty: {item.quantity} | Size: {item.selectedSize}</div>
                    </div>
                    <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--text-body)' }}>
                  <span>Subtotal</span>
                  <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600, color: 'var(--text-primary)' }}>₹{checkoutTotals?.subtotal || 0}</span>
                </div>
                {(checkoutTotals?.discountAmount || 0) > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--success)' }}>
                    <span>Discount</span>
                    <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}>-₹{checkoutTotals?.discountAmount || 0}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--text-body)' }}>
                  <span>Shipping</span>
                  <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600, color: 'var(--text-primary)' }}>{checkoutTotals?.shippingFee === 0 ? 'Free' : `₹${checkoutTotals?.shippingFee || 0}`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: 'var(--text-primary)', fontWeight: 600 }}>Total</span>
                  <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>₹{checkoutTotals?.grandTotal || 0}</span>
                </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--accent)',
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
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        ) : (
          <div style={{ padding: '60px 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CheckCircle size={80} color="var(--success)" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '28px', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 12px 0' }}>
              Order Confirmed!
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'var(--text-body)', marginBottom: '8px' }}>
              Order #POLAR-{Math.floor(Math.random() * 90000) + 10000}
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: 'var(--text-body)', marginBottom: '32px', maxWidth: '400px' }}>
              Thank you for shopping with The Polar Trend. We've sent a confirmation email to {formData.email || 'your email'}.
            </p>
            <button 
              onClick={handleClose}
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '15px',
                fontWeight: 600,
                padding: '14px 32px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
