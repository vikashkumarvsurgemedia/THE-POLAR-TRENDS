# Brand film

The section (`src/components/VideoReels.jsx`) plays one landscape film:

| File | Notes |
|---|---|
| `brand-film.mp4` | The single hero film on the homepage |

**Specs**

- Aspect ratio **16:9** (landscape)
- 1920×1080; keep it under ~20 MB so the page stays fast
- **H.264 / MP4** for browser support
- Add a poster frame by pointing `FILM.poster` at a still

Until the file exists the poster image renders in its place and the section
still looks correct, so nothing breaks before the film is delivered.

To change the file path or caption, edit the `FILM` object at the top of
`src/components/VideoReels.jsx`.
