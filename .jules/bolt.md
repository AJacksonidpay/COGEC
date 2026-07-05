## 2025-07-05 - Asset Inlining Optimization
**Learning:** Vite's default asset inlining threshold is 4096 bytes (4KB). Assets in the `public/` directory are never inlined, while assets in `src/` are eligible. Minifying SVGs below this threshold and moving them to `src/` can save network requests.
**Action:** Always check asset sizes and move small critical assets to `src/` to leverage Vite's bundling capabilities.
