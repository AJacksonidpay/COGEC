# Bolt's Performance Journal

## 2026-07-01 - [Vite Asset Inlining]
**Learning:** Vite's default inlining threshold is 4096 bytes. Assets in the `public/` directory are never inlined, whereas assets in `src/` (or imported via JS) are candidates for inlining if they fall under the threshold.
**Action:** Move small static assets from `public/` to `src/assets/` and minify SVGs to ensure they fall under the 4KB threshold to reduce HTTP requests.
