## 2025-07-08 - SVG Optimization and Asset Inlining
**Learning:** Vite's default asset inlining threshold is 4096 bytes. Assets referenced in the `public/` directory are never inlined and are served as static files. Assets in `src/assets/` can be inlined if they are below the threshold and imported via relative paths.
**Action:** Always check asset sizes and move them to `src/` to benefit from Vite's bundling optimizations if they are small enough.
