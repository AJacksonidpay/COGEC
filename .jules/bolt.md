## 2025-06-22 - Asset Inlining Threshold Optimization
**Learning:** Vite's default `assetsInlineLimit` is 4096 bytes (4KB). Assets in `public/` are never inlined, while those in `src/assets/` are only inlined if they fall below this limit.
**Action:** Always minify SVGs and other small assets to bring them under 4KB and ensure they are imported from `src/` to leverage Vite's inlining, reducing network requests.
