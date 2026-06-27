## 2025-06-27 - [Asset Inlining Optimization]
**Learning:** Vite's default asset inlining threshold is 4096 bytes (4KB). Assets in the `public/` directory are never processed or inlined; they are copied as-is. For assets to be inlined or hashed, they must be in `src/` and imported via ESM or referenced with relative paths in HTML.
**Action:** Always place small static assets (< 4KB) in `src/assets/` and use relative paths to enable bundling and save network requests. Minify SVGs to bring them under the threshold if possible.
