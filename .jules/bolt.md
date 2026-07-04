## 2025-07-04 - Vite Asset Inlining Threshold
**Learning:** Vite inlines static assets smaller than 4KB (4096 bytes) as base64 strings by default. Assets in the `public/` directory are never processed by Vite and are always served as standalone files.
**Action:** To reduce network requests, minify SVG assets below 4KB and ensure they are located in the `src/` directory so Vite can inline them into the JavaScript bundle.
