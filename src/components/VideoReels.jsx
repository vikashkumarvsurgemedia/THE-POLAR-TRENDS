import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

/* The brand film.

   One landscape video, full width, replacing the six-card vertical reel
   carousel. A rail of thumbnails asks the viewer to choose before they have
   any reason to care; a single film just plays.

   Drop the file at the path below. Until it exists the poster still renders
   and the section reads as an editorial still, so the page never shows a
   broken player. */

const FILM = {
  src: '/assets/videos/brand-film.mp4',
  poster: '/assets/products/terracotta-artisan-check.jpg',
  caption: 'From loom to laundry bag — one shirt, start to finish'
};

export default function VideoReels() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v || !available) return;
    if (v.paused) { v.play().then(() => setPlaying(true)).catch(() => setAvailable(false)); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <section id="reels" className="section" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            overflow: 'hidden',
            backgroundColor: 'var(--paper-deep)'
          }}
        >
          {available ? (
            <video
              ref={videoRef}
              poster={FILM.poster}
              playsInline
              preload="metadata"
              controls={playing}
              onEnded={() => setPlaying(false)}
              onPause={() => setPlaying(false)}
              onError={() => setAvailable(false)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src={FILM.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={FILM.poster}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}

          {/* Scrim and control hide once playback starts, so nothing sits over
              the film while it runs. */}
          {!playing && (
            <>
              <div className="scrim" />

              <button
                onClick={toggle}
                aria-label="Play the brand film"
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 76, height: 76,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'rgba(251,250,248,0.10)',
                  backdropFilter: 'blur(2px)',
                  border: '1px solid rgba(251,250,248,0.7)',
                  color: '#FBFAF8',
                  cursor: 'pointer',
                  transition: 'background-color var(--medium) var(--ease), color var(--medium) var(--ease)'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FBFAF8'; e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(251,250,248,0.10)'; e.currentTarget.style.color = '#FBFAF8'; }}
              >
                {playing
                  ? <Pause size={22} strokeWidth={1.25} />
                  : <Play size={22} strokeWidth={1.25} style={{ marginLeft: 3 }} />}
              </button>

              <p
                className="eyebrow"
                style={{
                  position: 'absolute',
                  left: 'clamp(1.25rem, 3vw, 2.5rem)',
                  bottom: 'clamp(1.25rem, 3vw, 2.25rem)',
                  color: 'rgba(251,250,248,0.86)',
                  maxWidth: '38ch'
                }}
              >
                {FILM.caption}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
