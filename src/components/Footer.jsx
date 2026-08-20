import React, { useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: '#ffffff', paddingTop: '60px', paddingBottom: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Newsletter Section */}
        <div style={{ maxWidth: '500px', margin: '0 auto 60px auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '24px', fontWeight: 600, color: '#fff', margin: '0 0 8px 0' }}>
            Stay Updated
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0 0 24px 0' }}>
            Subscribe for new arrivals, offers & more
          </p>
          
          {subscribed ? (
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'var(--success)', padding: '12px', backgroundColor: 'rgba(0,128,96,0.1)', borderRadius: '6px' }}>
              ✓ Subscribed! Use code POLAR10 for 10% off
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRight: 'none',
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  borderRadius: '6px 0 0 6px',
                  padding: '12px',
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '0 24px',
                  borderRadius: '0 6px 6px 0',
                  cursor: 'pointer'
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>

        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '60px' }} />

        {/* Footer Links Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              THE POLAR TREND
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '24px' }}>
              Elevating everyday essentials with premium quality cotton and timeless designs for the modern wardrobe.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" aria-label="Instagram" style={{ color: '#fff', width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook" style={{ color: '#fff', width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" style={{ color: '#fff', width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Twitter size={20} /></a>
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              Collections
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['All Shirts', 'Embroidery Edit', 'Pure Whites', 'Artisan Checks'].map(link => (
                <a key={link} href="#" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.62)', textDecoration: 'none', transition: 'color 0.2s', padding: '6px 0', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Help Column */}
          <div>
            <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              Help
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Shipping Policy', 'Returns & Exchange', 'Track Order', 'Contact Us', 'FAQs'].map(link => (
                <a key={link} href="#" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.62)', textDecoration: 'none', transition: 'color 0.2s', padding: '6px 0', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>care@thepolartend.com</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>+91 98765 43210</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Mumbai, India</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.58)' }}>
            © 2026 THE POLAR TREND. All Rights Reserved.
          </div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.58)', letterSpacing: '0.05em' }}>
            WEBSITE DESIGNED & DEVELOPED BY <span style={{ color: '#fff', fontWeight: 500 }}>VSURGEMEDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
