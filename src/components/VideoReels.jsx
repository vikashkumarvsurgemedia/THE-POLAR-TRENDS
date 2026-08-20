import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * Brand reels — short vertical videos that show the product in real life.
 *
 * Drop the actual clips into `public/assets/videos/` using the `src` filenames
 * below. Until a file exists the card still renders its `poster` image, so the
 * section always looks complete.
 */
const REELS = [
  {
    id: 'reel-1',
    src: '/assets/videos/reel-embroidery-closeup.mp4',
    poster: '/assets/products/black-lotus-embroidered.jpg',
    title: 'Inside the Embroidery',
    caption: '11 hours of handwork on a single placket',
  },
  {
    id: 'reel-2',
    src: '/assets/videos/reel-kashmiri-floral.mp4',
    poster: '/assets/products/white-kashmiri-floral.jpg',
    title: 'Pure Whites, Styled',
    caption: 'How our Kashmiri floral moves in daylight',
  },
  {
    id: 'reel-3',
    src: '/assets/videos/reel-artisan-check.mp4',
    poster: '/assets/products/terracotta-artisan-check.jpg',
    title: 'The Artisan Check',
    caption: 'Handloom texture you can hear',
  },
  {
    id: 'reel-4',
    src: '/assets/videos/reel-fabric-test.mp4',
    poster: '/assets/products/sage-star-stitch.jpg',
    title: 'The Crush Test',
    caption: '100% cotton, crushed and recovered in 60 seconds',
  },
  {
    id: 'reel-5',
    src: '/assets/videos/reel-studio-day.mp4',
    poster: '/assets/products/WhatsApp Image 2026-08-05 at 13.23.29.jpeg',
    title: 'A Day at the Studio',
    caption: 'From loom to laundry bag',
  },
  {
    id: 'reel-6',
    src: '/assets/videos/reel-styling.mp4',
    poster: '/assets/products/WhatsApp Image 2026-08-05 at 13.23.30.jpeg',
    title: 'Three Ways to Wear It',
    caption: 'Office, dinner, weekend',
  },
];

function ReelCard({ reel, onOpen }) {
  const videoRef = useRef(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (v) {
      const played = v.play();
      if (played && typeof played.catch === 'function') played.catch(() => {});
    }
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <button
      type="button"
      className="reel-card"
      aria-label={`Play reel: ${reel.title} — ${reel.caption}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onClick={() => onOpen(reel)}
      style={{
        position: 'relative',
        flex: '0 0 auto',
        width: '240px',
        aspectRatio: '9 / 16',
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        padding: 0,
        textAlign: 'left',
        font: 'inherit',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        scrollSnapAlign: 'start',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <video
        ref={videoRef}
        src={reel.src}
        poster={reel.poster}
        muted
        loop
        playsInline
        preload="none"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Bottom gradient so the caption stays readable over any frame */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(3,10,35,0.92) 0%, rgba(3,10,35,0.35) 38%, rgba(3,10,35,0) 62%)',
        pointerEvents: 'none',
      }} />

      {/* Play badge */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.18)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        pointerEvents: 'none',
      }}>
        <Play size={13} fill="#FFFFFF" />
      </div>

      {/* Caption */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '16px',
        pointerEvents: 'none',
      }}>
        <div style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '15px',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: '4px',
          lineHeight: 1.25,
        }}>
          {reel.title}
        </div>
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '11.5px',
          color: 'rgba(255,255,255,0.72)',
          lineHeight: 1.4,
        }}>
          {reel.caption}
        </div>
      </div>
    </button>
  );
}

export default function VideoReels() {
  const scrollerRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [activeReel, setActiveReel] = useState(null);
  const [muted, setMuted] = useState(false);

  const scrollBy = (direction) => {
    const el = scrollerRef.current;
    if (el) el.scrollBy({ left: direction * 280, behavior: 'smooth' });
  };

  // Close the lightbox on Escape
  useEffect(() => {
    if (!activeReel) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveReel(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeReel]);

  useEffect(() => {
    const v = modalVideoRef.current;
    if (v) v.muted = muted;
  }, [muted, activeReel]);

  return (
    <section
      id="reels"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '80px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section head */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--accent-ink)',
              marginBottom: '10px',
            }}>
              Watch · Real Fabric, Real People
            </div>
            <h2 style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.15,
            }}>
              The Polar Reels
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              color: 'var(--text-body)',
              margin: '10px 0 0 0',
              maxWidth: '520px',
            }}>
              Short films from our studio, our looms and our customers — so you know
              exactly how the shirt looks, moves and feels before it reaches you.
            </p>
          </div>

          {/* Scroll controls */}
          <div className="desktop-only" style={{ gap: '10px' }}>
            <button
              aria-label="Previous reels"
              onClick={() => scrollBy(-1)}
              style={reelNavBtn}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next reels"
              onClick={() => scrollBy(1)}
              style={reelNavBtn}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Reel rail */}
        <div
          ref={scrollerRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '6px',
          }}
        >
          {REELS.map(reel => (
            <ReelCard key={reel.id} reel={reel} onOpen={(r) => { setMuted(false); setActiveReel(r); }} />
          ))}
        </div>
      </div>

      {/* Lightbox player */}
      {activeReel && (
        <div
          onClick={() => setActiveReel(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            backgroundColor: 'rgba(3,8,28,0.88)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(420px, 92vw)',
              aspectRatio: '9 / 16',
              maxHeight: '86vh',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#000',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            }}
          >
            <video
              ref={modalVideoRef}
              src={activeReel.src}
              poster={activeReel.poster}
              autoPlay
              loop
              playsInline
              controls={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />

            <button
              aria-label={muted ? 'Unmute' : 'Mute'}
              onClick={() => setMuted(m => !m)}
              style={{ ...reelOverlayBtn, bottom: '16px', right: '16px', top: 'auto' }}
            >
              {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            <button
              aria-label="Close"
              onClick={() => setActiveReel(null)}
              style={{ ...reelOverlayBtn, top: '16px', right: '16px' }}
            >
              <X size={17} />
            </button>

            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: '20px 68px 20px 20px',
              background: 'linear-gradient(to top, rgba(3,10,35,0.9), rgba(3,10,35,0))',
              pointerEvents: 'none',
            }}>
              <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                {activeReel.title}
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', marginTop: '3px' }}>
                {activeReel.caption}
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .reel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0,0,0,0.35);
        }
        @media (max-width: 768px) {
          .reel-card { width: 180px !important; }
        }
      `}} />
    </section>
  );
}

const reelNavBtn = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid var(--border)',
  backgroundColor: 'transparent',
  color: 'var(--text-primary)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
};

const reelOverlayBtn = {
  position: 'absolute',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'rgba(255,255,255,0.18)',
  backdropFilter: 'blur(8px)',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
};
