# Brand reel videos

Drop the short vertical clips here. The reels section (`src/components/VideoReels.jsx`)
looks for these filenames:

| File | Card |
|---|---|
| `reel-embroidery-closeup.mp4` | Inside the Embroidery |
| `reel-kashmiri-floral.mp4` | Pure Whites, Styled |
| `reel-artisan-check.mp4` | The Artisan Check |
| `reel-fabric-test.mp4` | The Crush Test |
| `reel-studio-day.mp4` | A Day at the Studio |
| `reel-styling.mp4` | Three Ways to Wear It |

**Specs**

- Aspect ratio **9:16** (vertical, same as an Instagram reel)
- 1080×1920 is plenty; keep each file **under ~6 MB** so the page stays fast
- **H.264 / MP4** for browser support
- 10–20 seconds, and make them work **without sound** (they autoplay muted on hover)

Until a file exists the card falls back to its poster image, so the section
still renders correctly with no videos present.

To change the titles, captions, posters or filenames, edit the `REELS` array at
the top of `src/components/VideoReels.jsx`.
