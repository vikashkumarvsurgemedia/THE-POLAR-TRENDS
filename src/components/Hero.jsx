import React, { useState } from 'react';
import { Truck, RotateCcw, PenTool, Droplet } from 'lucide-react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      {/* Hero Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(50vh, 70vh, 70vh)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/assets/products/black-lotus-embroidered.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem'
      }}>
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: '#FFFFFF',
          borderBottom: '1px solid #FFFFFF',
          paddingBottom: '4px',
          marginBottom: '20px'
        }}>
          NEW COLLECTION 2026
        </div>

        <h1 style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 600,
          color: '#FFFFFF',
          maxWidth: '600px',
          textAlign: 'center',
          lineHeight: 1.2,
          margin: '0 0 16px 0'
        }}>
          Finest Cotton. Handcrafted Embroidery.
        </h1>

        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '16px',
          color: '#FFFFFF',
          opacity: 0.85,
          maxWidth: '500px',
          textAlign: 'center',
          lineHeight: 1.5,
          margin: '0 0 32px 0'
        }}>
          Premium 100% cotton shirts with intricate handcrafted embroidery work
        </p>

        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? '#000066' : '#000080',
            color: '#FFFFFF',
            padding: '14px 36px',
            border: 'none',
            borderRadius: '6px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer',
            transform: isHovered ? 'translateY(-2px)' : 'none',
            boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
            transition: 'all 0.3s ease'
          }}
        >
          SHOP COLLECTION
        </button>
      </div>

      {/* Features Bar */}
      <div style={{
        backgroundColor: '#FDFFF0',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 0',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          maxWidth: '1000px',
          width: '100%'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555555', fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
            <Droplet size={16} color="#000080" /> 100% Cotton
          </div>
          <div style={{ width: '1px', height: '16px', backgroundColor: '#CCCCCC' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555555', fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
            <PenTool size={16} color="#000080" /> Handcrafted
          </div>
          <div style={{ width: '1px', height: '16px', backgroundColor: '#CCCCCC' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555555', fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
            <Truck size={16} color="#000080" /> Free Shipping
          </div>
          <div style={{ width: '1px', height: '16px', backgroundColor: '#CCCCCC' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555555', fontFamily: "'Poppins', sans-serif", fontSize: '12px' }}>
            <RotateCcw size={16} color="#000080" /> Easy Returns
          </div>
        </div>
      </div>
    </section>
  );
}
