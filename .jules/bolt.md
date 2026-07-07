## 2025-07-07 - Asset Inlining Thresholds
**Learning:** Vite's default asset inlining threshold is 4096 bytes (4KB). Assets in the `public/` directory are never processed or inlined.
**Action:** Minify SVGs that are slightly over 4KB to trigger automatic inlining. Move small static assets from `public/` to `src/assets/` and use relative imports to allow Vite to bundle them, reducing network requests.
